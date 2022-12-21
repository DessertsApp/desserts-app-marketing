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
  const [location, setLocation] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [state_emailError, state_setEmailError] = useState(false);
  const [state_numberError, state_setNumberError] = useState(false);
  const [state_nameError, state_setNameError] = useState(false);
  const [state_locationError, state_setLocationError] = useState(false);
  // function setInputValue(email){ 
  //   return inputValue.length.test(name);
  // }
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  } 
  function isValidNumber(number) {
    return /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/g.test(number);
  }

  const numberChange = event => {
    if (!isValidNumber(event.target.value)) {
      state_setNumberError(true);
    } else {
      state_setNumberError(false);
      setNumber(event.target.value);  
    }
  }

  const locationChange = event => {
    if (!event.target.value) {
      state_setLocationError(true);
    } else {
      state_setLocationError(false);
      setLocation(event.target.value);
   }
  };

  const nameChange = event => {
    if (!event.target.value) {
      state_setNameError(true);
    } else {
      state_setNameError(false);
      setName(event.target.value);
   }
  };
  
  const handleChange = event => {
    if (!isValidEmail(event.target.value)) {
      state_setEmailError(true);
    } else {
      state_setEmailError(false);
      setEmail(event.target.value);
    }
   };

  //registerJS function
  function register(e) {
    var notEmpty = required();
    e.preventDefault();
    if (notEmpty && (state_emailError == "" || state_emailError == null)) {
      
    
      // Found in Emailjs dashboard for thedessertsapp@gmail.com
     emailjs.sendForm(process.env.GATSBY_SERVICE_ID, process.env.GATSBY_TEMPLATE_ID, e.target, process.env.GATSBY_USER_ID)
        .then((result) => {
            console.log(result.text);
        }, (state_emailError) => {
            console.log(state_emailError.text);
        });
      alert('You have been successfully registered!');
    }
    else if (state_emailError != "" && state_emailError) {
      alert(state_emailError);
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
                  // required
                  label="Bakery name"
                  name="user_name"
                  variant="outlined"
                  fullWidth
                  onChange={nameChange}
                  error={state_nameError}
                  helperText={state_nameError?"Please Fill In Your Name" : ""}
                />
                </Grid>
            <Grid item xs={12} md={10}>
                <TextField
                  // required
                  label="Bakery Location"
                  name="user_location"
                  variant="outlined"
                  fullWidth
                  onChange={locationChange}
                  error={state_locationError}
                  helperText={state_locationError?"Please fill in your location" : ""}
                />
                </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  // required
                  label="Bakery Email"
                  name="user_email"
                  variant="outlined"
                  fullWidth
                  onChange={handleChange}
                  // value={email}
                  error={state_emailError} //{email!= ""}
                  helperText={state_emailError?"Incorrect Email":""}
                />
                 {/* {error && <h2 style={{color: 'red'}}>{error}</h2>} */}
              </Grid>
              <Grid item xs={12} md={5}>
                <TextField
                  // required
                  label="Bakery Phone Number"
                  name="user_number"
                  variant="outlined"
                  fullWidth
                  onChange={numberChange}
                  error={state_numberError}
                  helperText={state_numberError?"Invalid number":""}
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