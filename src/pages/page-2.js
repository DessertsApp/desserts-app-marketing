import * as React from "react"
import Layout from "../layout/layout"
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import mockupImg from "../images/desserts-app@2x.png"
import { rootStyles } from "../theme"

// styles
const useStyles = makeStyles(theme => ({
  root: {
    ...rootStyles,
    color: "#232129",
  },
  jumbotron: {
    height: '65vh',
    paddingTop: '5em',
    position: 'relative',
  },
  jumboheader: {
    paddingTop: '1.3em',
    lineHeight: 1,
  },
  img: {
    position: 'absolute',
    top: 0,
    right:0,
    height: "100%",
    width: 'auto',
    zIndex: -99,
  },
  body: {
    borderRadius: '12px',
    boxSizing: 'border-box',
    margin: '0 auto',
    marginTop: '-6em',
    padding: '5em calc(1/18 * 100%)',
    width: 'calc(8/9 * 100%)',
  },
}))

// markup
const Page2 = () => {
  const classes = useStyles()

  return (
    <Layout>
      <title>Home Page</title>
      <Grid container alignContent="center" spacing={4} className={classes.root}>
        <Grid container item className={classes.jumbotron}>
          <Grid container item xs={7} direction="column" spacing={3}>
            <Grid item>
              <Typography className={classes.jumboheader} variant="h1">
                Satisfy your sweet tooth
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis non venenatis mi dui. Et amet sed feugiat consectetur lacus. Elementum eget proin tempor bibendum risus quam netus.
            </Typography>
            </Grid>
          </Grid>
          <img className={classes.img} alt="Gatsby G Logo" src={mockupImg} />
        </Grid>
      </Grid>
      <Paper className={classes.body} elevation={6}>
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h2">
              What do we do?
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis non venenatis mi dui. Et amet sed feugiat consectetur lacus. Elementum eget proin tempor bibendum risus quam netus.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h3">
              Browse local shops
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Layout>
  )
}

export default Page2
