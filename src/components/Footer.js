import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1em auto 2em",
  },
  button: {
    minHeight: "1em",
    minWidth: "1em",
  },
  copyright: {
    alignContent: "center",
    padding: 12,
    [theme.breakpoints.up('sm')]: {
      justifyContent: "flex-end",
      flexGrow: 1,
      width: 0,
    }
  }
}))

const Footer = () => {

  const classes = useStyles()
  const brands = [
    {
      icon: 'instagram',
      url: 'http://instagram.com/desserts.app'
    },
    {
      icon: 'facebook-f',
      url: 'http://facebook.com/Desserts-App-100359002242523/'
    },
    {
      icon: 'linkedin-in',
      url: 'http://linkedin.com/company/dessertsapp/'
    },
    {
      icon: 'twitter',
      url: 'http://twitter.com/dessertsapp'
    },
    {
      icon: 'tiktok',
      url: ''
    },
    {
      icon: 'pinterest-p',
      url: 'http://pinterest.com/dessertsapp'
    },
  ]

  return (
    <Grid container className={classes.root} md={10} xs={12}>
      { brands.map((brand) => (
        <Grid item>
          <IconButton
            color="primary"
            aria-label={brand.icon}
            href={brand.url}
          >
            <FontAwesomeIcon className={classes.button} icon={['fab', brand.icon]} />
          </IconButton>
        </Grid>
      ))
      }
      <Grid container item className={classes.copyright} alignSelf="end">
        <Typography variant="subtitle1">
          &copy; Desserts App 2021
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer