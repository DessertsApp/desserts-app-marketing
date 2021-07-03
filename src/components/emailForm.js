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

const emailForm = ({ infoProps }) => {
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
      { items ?
        items.map((item) => {
          return(
            <Grid
              container
              item
              xs={12}
              md={4}
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <img
                  src={item.img}
                  alt="section title"
                  width="150px"
                  height="150px"
                  style={{borderRadius: "99%", objectFit: "cover"}}
                />
              </Grid>
              <Grid item>
                <Typography variant="h3" align="center">
                  {item.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                    {item.text}
                </Typography>
              </Grid>
            </Grid>
          )
        }) : null
      }
      {
        emailForm ?
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
        </Grid> : null
      }
    </Grid>
  )
}
export default emailForm