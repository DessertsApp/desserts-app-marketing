import * as React from "react"
import Layout from "../layout/layout"
import { Box, Button, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import InfoSections from '../components/landing/InfoSections'
import { StaticImage } from "gatsby-plugin-image"

// styles
const useStyles = makeStyles(theme => ({
  root: {
    padding: "2em 0",
    color: "#232129",
    maxWidth: "100vw",
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      padding: "3em 0",
    },
    [theme.breakpoints.up('md')]: {
      padding: "4em 0",
      margin: "0 auto",
      maxWidth: "1440px",
    }
  },
  jumbotron: {
    position: 'relative',
    marginBottom: "1em",
    [theme.breakpoints.up('sm')]: {
      flexBasis: '28em',
      maxHeight: '28em',
      marginBottom: "initial",
    },
    [theme.breakpoints.up('md')]: {
      flexBasis: '42em',
      maxHeight: '42em',
    }
  },
  jumboheader: {
    paddingTop: '85vw',
    fontSize: "2.8em",
    lineHeight: 1,
    [theme.breakpoints.up('sm')]: {
      paddingTop: '0.6em',
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: '1.3em',
    }
  },
  img: {
    position: 'absolute',
    top: 0,
    right:0,
    zIndex: -99,
    maxHeight: "100%",
    maxWidth: "90%",
    paddingRight: "5%",
    [theme.breakpoints.up('sm')]: {
      maxHeight: "100%",
      maxWidth: "57%",
      paddingRight: 0,
    },
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
const IndexPage = () => {
  const classes = useStyles()

  //test for mobile
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Layout>
      <title>Home Page</title>
      <Grid className={classes.root} container alignItems="center" direction="column" spacing={4} >
        <Grid
          className={classes.jumbotron}
          container
          item
          direction="column"
          spacing={isMobile?2:4}
          xs={12}
          sm={11}
          md={9}
        >
          <Box className={classes.img}>
            <StaticImage
              src="../images/desserts-app@2x.png"
              alt="In-app screenshot on an iPhone surrounded by desserts"
              height="100%"
              placeholder="tracedSVG"
            />
          </Box>
          <Grid item sm={7}>
            <Typography className={classes.jumboheader} variant="h1">
              Satisfy your sweet tooth
            </Typography>
          </Grid>
          <Grid item sm={7}>
            <Typography variant="subtitle1">
              An all-in-one mobile ordering app that makes it easy to purchase and fully customize your desserts to match your tastes.
          </Typography>
          </Grid>
          {/* <Grid container item direction="column" md={7} spacing={2}>
            <Grid item>
              <Button variant="contained" color="secondary">
                Get it on App Store
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="secondary">
                Get it on Google Play Store
              </Button>
            </Grid>
          </Grid> */}
        </Grid>
        <Grid item xs={12} md={11}>
          <Paper className={classes.body} elevation={6}>
            <Grid container direction="column" spacing={10}>
              <InfoSections infoProps={whatWeDo} />
              <InfoSections infoProps={whatMakesUsDifferent} />
              <InfoSections infoProps={emailMessenger} />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage

//section text
const whatWeDo = {
  title: "What do we do?",
  description: "We envision offering all types of desserts on our platform and making those with specific tastes accessible and customizable. You won't be limited anymore by your particular needs or dietary choices.",
  items: [{
    name: "Browse",
    text: "Browse local businesses and their full menu, including daily specials and other limited items, without feeling like you're missing out by shopping online.",
    img: "https://images.unsplash.com/photo-1601205741712-b261aff33a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=629&q=80"
  },
  {
    name: "Customize",
    text: "Tailor each item to your needs, whether it's allergies, dietary restrictions or just to your tastes.",
    img: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
  },
  {
    name: "Order",
    text: "Securely place orders for either pick-up or delivery with our straightforward and transparent order process.",
    img: "https://images.unsplash.com/photo-1603465409238-d0c3cde34a96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
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
  title: "Connect with us!",
  description: "Reach out to our team if you have any questions or want to make a business inquiry.",
  emailForm: true
}