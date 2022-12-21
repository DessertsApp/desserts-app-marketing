import * as React from "react"
import Layout from "../layout/layout"
import { Box,  Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import RegisterForm from '../components/registerForm'
// import back from '../components/back'
import { StaticImage } from "gatsby-plugin-image"
import { color } from "@mui/system";


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
    
    position: 'center',
    marginBottom: "1em",
    [theme.breakpoints.up('sm')]: {
      height: '28em',
      marginBottom: "initial",
    },
    [theme.breakpoints.up('md')]: {
      height: '42em',
    }
  },
  img: {
    position: 'right',
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
    position: 'center',
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
const Register = () => {
  const classes = useStyles()

  //test for mobile
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Layout>
      <title>Register Now</title>
      <Grid className={classes.root} container justify="left" spacing={4} >
        <Grid className={classes.jumbotron} container item alignItems="flex-start" xs={12} sm={11} md={8}>
        <Box className={classes.img}>
            <StaticImage
              src="../images/desserts-app@2x.png"
              alt="In-app screenshot on an iPhone surrounded by desserts"
              height="100%"
              placeholder="tracedSVG"
            />
          </Box>
          
            <Typography variant="h1">
              Vendors Register your bakery with us!
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1">
              Provide us with basic information about your bakery/business and we will email you with information about the bakery sign up process. We are looking forward to working with you! <span role="img" aria-label="smile">😊</span>
            </Typography>
          </Grid>
          <Grid item /*xs={12} md={11}*/>
          <Paper className={classes.body} elevation={6}>
            <Grid container direction="column" spacing={10}>
              <RegisterForm infoProps={{
                title: "Get Started with a Desserts App partnership!",
                description: "Feel free to go to the contact page if you have any questions about the process. We will try to connect with you as soon as possible once registered!"
              }} />
            </Grid>
          </Paper>
        </Grid>
        </Grid>
        
    </Layout>
  )
}

export default Register
