import * as React from "react"
import Layout from "../layout/layout"
import { Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

// profile pictures



import FAQTitle from "../components/FAQTitle";


// styles
// styles
const useStyles = makeStyles(theme => ({
  root: {
    color: "#232129",
    paddingTop: "1em",
    maxWidth: "100vw",
    margin: 0,
    [theme.breakpoints.up('sm')]: {
      paddingTop: "1em",
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: "1em",
      margin: "0 auto",
      maxWidth: "1220px",
    }
  },
  body: {
    borderRadius: '12px',
    padding: "1em 10px 1em",
    overflow: "hidden",
    [theme.breakpoints.up('sm')]: {
      padding: '3em calc(1/12 * 100%)',
    },
    [theme.breakpoints.up('md')]: {
      padding: '3em calc(1/12 * 100%) 3em',
    }
  },

}))

// markup
const Test = () => {
  const classes = useStyles()

  return (
    <Layout>
      <title>Frequently asked questions</title>
      <Grid className={classes.root} container justify="center" spacing={8} xs={1} >
        <FAQTitle title="Frequently asked questions" subtitle="Questions that are frequently asled about the app." 
        subtitle1="Please contact us if your question isnt answered here." />    
        
        <Grid item xs={12} md={11} >
          <Paper className={classes.body} elevation={8} >
            
            <Grid container direction="column" alignItems="left" spacing={0} >
              
              <Typography variant="h3">Q:Meow?</Typography>
              <Typography variant="h6">A:Meow</Typography>

              <Typography variant="h3">Q:Meow?</Typography>
              <Typography variant="h6">A:Meow</Typography>

              <Typography variant="h3">Q:Meow?</Typography>
              <Typography variant="h6">A:Meow</Typography>

              <Typography variant="h3">Q:Meow?</Typography>
              <Typography variant="h6">A:Meow</Typography>
              
              <Typography variant="h3">Q:Meow?</Typography>
              <Typography variant="h6">A:Meow</Typography>

              <Typography variant="h3">Q:Meow?</Typography>
              <Typography variant="h6">A:Meow</Typography>
             
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default Test

