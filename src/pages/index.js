import * as React from "react"
import Layout from "../layout/layout"
import { Box, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Desc3Cols from '../components/landing/Desc3Cols'
import { StaticImage } from "gatsby-plugin-image"

// styles
const useStyles = makeStyles(theme => ({
  root: {
    padding: "4em 0",
    color: "#232129",
  },
  jumbotron: {
    flexBasis: '66vh',
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
    maxHeight: "100%",
    maxWidth: "57%",
    zIndex: -99,
  },
  body: {
    borderRadius: '12px',
    padding: '5em calc(1/12 * 100%) 12em',
  },
}))

// markup
const IndexPage = () => {
  const classes = useStyles()
  const sectionItems1 = [
    {name: "Some title 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis non venenatis mi dui. Et amet sed feugiat consectetur lacus.", img: "http://placekitten.com/300/300"},
    {name: "Some title 2", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis non venenatis mi dui. Et amet sed feugiat consectetur lacus.", img: "http://placekitten.com/301/301"},
    {name: "Some title 3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis non venenatis mi dui. Et amet sed feugiat consectetur lacus.", img: "http://placekitten.com/302/302"},
  ]
  const sectionItems2 = [
    {name: "Some title 1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis non venenatis mi dui. Et amet sed feugiat consectetur lacus.", img: "http://placekitten.com/400/400"},
    {name: "Some title 2", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis non venenatis mi dui. Et amet sed feugiat consectetur lacus.", img: "http://placekitten.com/401/401"},
    {name: "Some title 3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis non venenatis mi dui. Et amet sed feugiat consectetur lacus.", img: "http://placekitten.com/402/402"},
  ]

  return (
    <Layout>
      <title>Home Page</title>
      <Grid className={classes.root} container alignItems="center" direction="column" spacing={4} >
        <Grid className={classes.jumbotron} container item xs={9} >
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
          <Box className={classes.img}>
            <StaticImage
              src="../images/desserts-app@2x.png"
              alt="Gatsby G Logo"
              height="100%"
              placeholder="tracedSVG"
            />
          </Box>
        </Grid>
        <Grid item xs={11}>
          <Paper className={classes.body} elevation={6}>
            <Grid container direction="column" spacing={6}>
            <Desc3Cols
              title="Section Title One"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis non venenatis mi dui. Et amet sed feugiat consectetur lacus. Elementum eget proin tempor bibendum risus quam netus."
              items={sectionItems1}
            />
            <Desc3Cols
              title="Section Title One"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis non venenatis mi dui. Et amet sed feugiat consectetur lacus. Elementum eget proin tempor bibendum risus quam netus."
              items={sectionItems2}
            />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
