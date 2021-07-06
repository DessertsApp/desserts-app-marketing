import * as React from "react"
import Layout from "../layout/layout"
import { Grid, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// profile pictures
import {
  ahmet,
  aybars,
  chris,
  cindy,
  ismet,
  max,
  ozan,
  viktor,
  louise,
  loki
} from '../images/profile-pictures'
import SectionTitle from "../components/SectionTitle";
import PageTitle from "../components/PageTitle";
import ProfileContainer from "../components/about/ProfileContainer";

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
const About = () => {
  const classes = useStyles()

  return (
    <Layout>
      <title>About Us</title>
      <Grid className={classes.root} container justify="center" spacing={4} xs={12}>
        <PageTitle title="About Us" subtitle="We are a small but mighty team passionate about supporting local bakeries." />
        <Grid item xs={12} md={11}>
          <Paper className={classes.body} elevation={6}>
            <Grid container direction="column" spacing={10}>
              <SectionTitle
                title="Our Team"
                subtitle="Meet the talented team behind Desserts App - we come from all over the world! 💪"
              />
              <ProfileContainer profiles={teamMembers} />
              <SectionTitle
                title="Our Mascots"
                subtitle="We all need a little cuteness in our lives 🥰"
              />
              <ProfileContainer profiles={pets} />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default About

const teamMembers = [
  {
    name: "Ahmet",
    title: "Co-founder/Business Operations",
    pfp: ahmet
  },
  {
    name: "Ismet",
    title: "Co-founder/Business Communications",
    pfp: ismet
  },
  {
    name: "Viktor",
    title: "Head Software Developer",
    pfp: viktor
  },
  {
    name: "Max",
    title: "Software Developer",
    pfp: max
  },
  {
    name: "Chris",
    title: "Head Product Designer",
    pfp: chris
  },
  {
    name: "Aybars",
    title: "Software Developer",
    pfp: aybars
  },
  {
    name: "Cindy",
    title: "Head of Marketing",
    pfp: cindy
  },
  {
    name: "Ozan",
    title: "Graphic Designer",
    pfp: ozan
  }
]

const pets = [
  {
    name: "Louise",
    title: "Chief Hot Dog",
    pfp: louise
  },
  {
    name: "Loki",
    title: "Chief Mischief Officer",
    pfp: loki
  },
]