import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, TextField, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    [theme.breakpoints.down('md')]: {
      fontSize: "2em"
    }
  },
  formContainer: {
    [theme.breakpoints.down('md')]: {
      margin: 0,
    }
  }
}))

const MailchimpForm = () => {
  const classes = useStyles();

  return (
    <Grid container item justify="center" spacing={4}>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h2" align="center">
          Subscribe to our newsletter!
        </Typography>
      </Grid>
      <Grid item xs={12} md={9} align="center">
        <Typography variant="body1">
          Keep up with us via email. Get the first scoop on special offers, chances to beta test new features, and everything else related to Desserts App!
        </Typography>
      </Grid>
        <Grid item xs={12}>
          <div id="mc_embed_signup">
            <form
              action="https://app.us6.list-manage.com/subscribe/post?u=8458ec812c661a9b45912b63c&amp;id=0669c2d375"
              method="post" id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              class="validate"
              target="_blank"
              novalidate
            >
              <Grid className={classes.formContainer} item container xs={12} justify="center" spacing={4}>
                <Grid item xs={12} md={5}>
                  <TextField
                    type="text"
                    label="First Name"
                    name="FNAME"
                    id="mce-FNAME"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={5}>
                  <TextField
                    type="text"
                    label="Last Name"
                    name="LNAME"
                    id="mce-LNAME"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} md={10}>
                  <TextField
                    label="Email Address"
                    name="EMAIL"
                    id="mce-EMAIL"
                    variant="outlined"
                    fullWidth
                    rows={6}
                  />
                </Grid>
                <Grid container item justify="flex-end" xs={12} md={10}>
                  <Button
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    variant="contained"
                    id="mc-embedded-subscribe"
                    color="primary"
                    disableElevation>
                      Sign me up
                  </Button>
                </Grid>
                <div id="mce-responses" class="clear">
                  <div class="response" id="mce-error-response" style={{display:"none"}}></div>
                  <div class="response" id="mce-success-response" style={{display:"none"}}></div>
                </div>
                {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                <div style={{position:"absolute", left: -5000}} aria-hidden="true">
                  <input type="text" name="b_8458ec812c661a9b45912b63c_0669c2d375" tabindex="-1" value=""/>
                </div>
              </Grid>
            </form>
          </div>
        </Grid>
    </Grid>
  )
}
export default MailchimpForm