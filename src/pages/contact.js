import * as React from "react"
import Layout from "../layout/layout"
import { Box, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { StaticImage } from "gatsby-plugin-image"
import useMediaQuery from '@material-ui/core/useMediaQuery';
import InfoSections from '../components/landing/InfoSections'
import EmailForm from '../components/EmailForm'
// images 
import imgBrowse from "../images/mockup-browse.png"
import imgCustomize from "../images/mockup-customize.png"
import imgOrder from "../images/mockup-order.png"

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
      <Grid className={classes.root} container alignItems="center" direction="column" spacing={4} >
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
              Connect with us directly via email or follow us for updates on our social media pages! We promise to make it worth your time 😊
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} md={11}>
          <Paper className={classes.body} elevation={6}>
            <Grid container direction="column" spacing={10}>
              <EmailForm infoProps={emailMessenger} />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Contact

//section text
const whatWeDo = {
  title: "How does it work?",
  description: "We envision offering all types of desserts on our platform and making those with specific tastes accessible and customizable. You won't be limited anymore by your particular needs or dietary choices.",
  items: [{
    name: "Browse",
    text: "Browse local businesses and their full menu, including daily specials and other limited items, without feeling like you're missing out by shopping online.",
    img: imgBrowse
  },
  {
    name: "Customize",
    text: "Tailor each item to your needs, whether it's allergies, dietary restrictions or just to your tastes.",
    img: imgCustomize
  },
  {
    name: "Order",
    text: "Securely place orders for either pick-up or delivery with our straightforward and transparent order process.",
    img: imgOrder
  }]
};
const whatMakesUsDifferent = {
  title: "What makes us different?",
  description: "Unlike many online food ordering platforms that prefer standardization, we focus on customization and embrace making every order unique.",
  items: [{
    name: "Made for desserts",
    text: "We work closely with dessert shops and bakeries to ensure you have the full range of options available for your orders. We know that every detail matters, no matter how small.",
    img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
  },{
    name: "Support local businesses",
    text: "We want to connect our community with the amazing group of small businesses around them. Sometimes the best things are hidden in plain sight.",
    img: "https://images.unsplash.com/photo-1532635224-cf024e66d122?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  },{
    name: "Ease of Use",
    text: "We know that it can be intimidating to make complex orders online. Our app makes sure that you exactly know what you're getting every time.",
    img: "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
  }]
}
const emailMessenger = {
  title: "Send us an Email",
  description: "Reach out to our team if you have any questions or want to make a business inquiry.",
  emailForm: true
}