import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, TextField, Button } from '@material-ui/core'
// import {image} from 'desserts-app@2x.png'

//emailJS
import emailjs from 'emailjs-com';

import {useState} from 'react';



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

const RegisterForm = ({ infoProps }) => {
  const classes = useStyles();
  const { title, description} = infoProps;
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  
  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }
    
    setMessage(event.target.value);
  };

  //registerJS function
  function register(e) {
    var notEmpty = required();
    e.preventDefault();
    if (notEmpty && (error == "" || error == null)) {
      
    
      // Found in Emailjs dashboard for thedessertsapp@gmail.com
     emailjs.sendForm(process.env.GATSBY_SERVICE_ID, process.env.GATSBY_TEMPLATE_ID, e.target, process.env.GATSBY_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      alert('You have been successfully registered!');
    }
    else if (error != "" && error) {
      alert(error);
      return false;
    }
     else {
      return false;
     }

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
        <Grid item xs={9}>
          <form name= "form1" style={{width: "100%"}} onSubmit={register}>
            <Grid className={classes.formContainer} item container xs={12} justify="center" spacing={4}>
            <Grid item xs={12} md={10}>
                <TextField
                  label="Bakery name"
                  name="user_name"
                  variant="outlined"
                  fullWidth
                />
                </Grid>
            <Grid item xs={12} md={10}>
                <TextField
                  label="Bakery Location"
                  name="user_location"
                  variant="outlined"
                  fullWidth
                />
                </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  label="Bakery Email"
                  name="user_email"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                />
                 {error && <h2 style={{color: 'red'}}>{error}</h2>}
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  label="Bakery Phone Number"
                  name="user_number"
                  variant="outlined"
                  fullWidth
                />
              </Grid>

              <Grid container item justify="flex-end" xs={12} md={10}>
                <Button
                id="register-button"
                  variant="contained"
                  type="submit"
                  color="primary"
                  

                  disableElevation>
                    Register
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
    </Grid>
  )
}

function required()
{
var username = document.forms["form1"]["user_name"].value;
var location = document.forms["form1"]["user_location"].value;
var email = document.forms["form1"]["user_email"].value;
var number = document.forms["form1"]["user_number"].value;

if (username == "" || location == "" || email == "" || number == "" )
{
alert("Please Fill In The Boxes");
return false;
}
else 
{
return true;
} 
}

export default RegisterForm