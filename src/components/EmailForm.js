import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, TextField, Button } from '@material-ui/core'

//emailJS
import emailjs from 'emailjs-com';

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

const EmailForm = ({ infoProps }) => {
  const classes = useStyles();
  const { title, description, items, emailForm } = infoProps;
  //emailJS function
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(process.env.GATSBY_SERVICE_ID, process.env.GATSBY_TEMPLATE_ID, e.target, process.env.GATSBY_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    alert('Your email was successfully sent!');
  }
  return (
    <Grid container item justify="center" spacing={4}>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h2" align="center">
          { title }
        </Typography>
      </Grid>
      <Grid item xs={12} md={9} align="center">
        <Typography variant="body1">
            { description }
        </Typography>
      </Grid>
        <Grid item xs={12}>
          <form style={{width: "100%"}} onSubmit={sendEmail}>
            <Grid className={classes.formContainer} item container xs={12} justify="center" spacing={4}>
              <Grid item xs={12} md={5}>
                <TextField
                  label="Your Name"
                  name="user_name"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  label="Your Email"
                  name="user_email"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={10}>
                <TextField
                  label="Your Message"
                  name="message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={6}
                />
              </Grid>
              <Grid container item justify="flex-end" xs={12} md={10}>
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
  )
}
export default EmailForm