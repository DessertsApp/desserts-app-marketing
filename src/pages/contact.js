import * as React from "react"
import Layout from "../layout/layout"
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import EmailForm from '../components/EmailForm'

// styles
const useStyles = makeStyles(theme => ({
  root: {
    color: "#232129",
    paddingTop: "2em",
    maxWidth: "100vw",
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      paddingTop: "3em",
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: "4em",
      margin: "0 auto",
      maxWidth: "1440px",
    }
  },
  jumbotron: {
    marginBottom: "2em",
  },
  body: {
    borderRadius: '12px',
    padding: "3em 16px 4em",
    overflow: "hidden",
    [theme.breakpoints.up('sm')]: {
      padding: '6em calc(1/12 * 100%)',
    },
    [theme.breakpoints.up('md')]: {
      padding: '6em calc(1/12 * 100%) 12em',
    }
  },
}))

// markup
const Contact = () => {
  const classes = useStyles()

  //test for mobile
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Layout>
      <title>Contact Us</title>
      <Grid className={classes.root} container justify="center" spacing={4} >
        <Grid
          className={classes.jumbotron}
          container
          item
          direction="column"
          alignItems="center"
          alignContent="center"
          spacing={isMobile?2:4}
          xs={12}
          sm={11}
          md={7}
        >
          <Grid item>
            <Typography variant="h1">
              Contact Us
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              Connect with us directly via email or follow us for updates on our social media pages! We promise to make it worth your time <span role="img" aria-label="smile">😊</span>
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={11}>
          <Paper className={classes.body} elevation={6}>
            <Grid container direction="column" spacing={10}>
              <EmailForm infoProps={{
                title: "Send us an Email",
                description: "Reach out to our team if you have any questions or want to make a business inquiry."
              }} />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Contact