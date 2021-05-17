import * as React from "react"
import Layout from "../layout/layout"
import { Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import mockupImg from "../images/desserts-app@2x.png"

// styles
const useStyles = makeStyles(theme => ({
  root: {
    color: "#232129",
    padding: 96,
  },
  img: {

  }
}))

// markup
const Page2 = () => {
  const classes = useStyles()

  return (
    <Layout>
      <title>Page2</title>
      <Grid container alignContent="center" spacing={4} className={classes.root}>
        <Grid item xs={6}>
          <Typography variant="h1">
            PAGE 2 HEADING
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <img width="100%" height="auto" alt="Gatsby G Logo" src={mockupImg} />

        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2">
            What do we do?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">
            Browse local shops
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis non venenatis mi dui. Et amet sed feugiat consectetur lacus. Elementum eget proin tempor bibendum risus quam netus.
          </Typography>
        </Grid>
        
      </Grid>
    </Layout>
  )
}

export default Page2
