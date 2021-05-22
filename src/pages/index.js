import * as React from "react"
import Layout from "../layout/layout"
import { Box, Button, Grid, Paper, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Desc3Cols from '../components/landing/Desc3Cols'
import { StaticImage } from "gatsby-plugin-image"

//emailJS
import emailjs from 'emailjs-com';

// styles
const useStyles = makeStyles(theme => ({
  root: {
    padding: "4em 0",
    color: "#232129",
    maxWidth: "1440px",
    margin: "0 auto",
  },
  jumbotron: {
    flexBasis: '42em',
    maxHeight: '42em',
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
    padding: '6em calc(1/12 * 100%) 12em',
  },
}))

// markup
const IndexPage = () => {
  const classes = useStyles()
  //section text
  const whatWeDo = [
    {
      name: "Browse",
      text: "Browse local businesses and their full menu including daily specials, and other limited items without feeling like you're missing out by shopping online.",
      img: "https://images.unsplash.com/photo-1610320022580-5295faad847c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2534&q=80"
    },
    {
      name: "Customize",
      text: "Tailor each item to your needs whether it’s allergies, dietary restrictions or just to your tastes.",
      img: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    },
    {
      name: "Order",
      text: "Securly place orders for either pick up or delivery. Our order process is straightforward and transparent so you know exactly what you are getting every time.",
      img: "https://images.unsplash.com/photo-1603465409238-d0c3cde34a96?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
    },
  ]
  const whatMakesUsDifferent = [
    {
      name: "Made for desserts",
      text: "We work closely with dessert shops and bakeries to make sure you have the full range of options available to your orders. We know that every detail matters no matter how small.",
      img: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80"
    },
    {
      name: "Support local businesses",
      text: "We want to connect our community with the amazing group of small businesses around them. Sometimes the best things are hidden in plain sight.",
      img: "https://images.unsplash.com/photo-1532635224-cf024e66d122?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
    {
      name: "Ease of Use",
      text: "We know that it can be intimidating to make complex orders online. Our app makes sure that you know exactly what you’re getting everytime.",
      img: "https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"
    },
  ]
  //emailJS function
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(process.env.GATSBY_SERVICE_ID, process.env.GATSBY_TEMPLATE_ID, e.target, process.env.GATSBY_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <Layout>
      <title>Home Page</title>
      <Grid className={classes.root} container alignItems="center" direction="column" spacing={4} >
        <Grid className={classes.jumbotron} container item xs={9} >
          <Grid container item xs={7} direction="column" spacing={4}>
            <Grid item>
              <Typography className={classes.jumboheader} variant="h1">
                Satisfy your sweet tooth
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                The an all-in-one mobile ordering app that makes it easy to purchase and fully customize your desserts to match your tastes.
            </Typography>
            </Grid>
            <Grid container item direction="column" spacing={2}>
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
            <Grid container direction="column" spacing={10}>
              <Desc3Cols
                title="What do we do?"
                description="We envision offering all types of desserts on our platform and making those with specific tastes accessible and customizable. You won't be limited anymore by your particular needs or dietary choices."
                items={whatWeDo}
              />
              <Desc3Cols
                title="What makes us different?"
                description="Unlike many online food ordering platforms that prefer standardization, we focus and embrace customization and making every order unique."
                items={whatMakesUsDifferent}
              />
              <Grid container item justify="center" spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="h2" align="center">
                    Connect with us!
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body1" align="center">
                    Reach out to our team if you have any questions or want to make a business inquiry.
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <form style={{width: "100%"}} onSubmit={sendEmail}>
                    <Grid item container xs={12} justify="center" spacing={4}>
                      <Grid item xs={5}>
                        <TextField
                          label="Your Name"
                          name="user_name"
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <TextField
                          label="Your Email"
                          name="user_email"
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs={10}>
                        <TextField
                          label="Your Message"
                          name="message"
                          variant="outlined"
                          fullWidth
                          multiline
                          rows={6}
                        />
                      </Grid>
                      <Grid container item justify="flex-end" xs={10}>
                        <Button
                          variant="contained"
                          type="submit"
                          color="primary"
                          disableElevation>
                            Send Email
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default IndexPage
