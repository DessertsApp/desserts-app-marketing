import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography, IconButton } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from "../theme"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "1em auto 2em",
  },
  button: {
    minHeight: "1em",
    minWidth: "1em",
  },
  copyright: {
    padding: 12,
    [theme.breakpoints.up('sm')]: {
      flexGrow: 1,
      width: "fit-content",
      justifyContent: "flex-end",
      textAlign: "right",
    },
    '& a': {
      color: colors.primary,
      textDecoration: "underline",
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
      url: 'http://tiktok.com/@dessertsapp'
    },
    {
      icon: 'pinterest-p',
      url: 'http://pinterest.com/dessertsapp'
    },
  ]

  return (
    <Grid container className={classes.root} alignItems="center" md={10} xs={12}>
      { brands.map((brand) => (
        <Grid item>
          <IconButton
            color="primary"
            aria-label={brand.icon}
            onClick={() => window.open(brand.url, "_blank")}
          >
            <FontAwesomeIcon className={classes.button} icon={['fab', brand.icon]} />
          </IconButton>
        </Grid>
      ))
      }
      <Grid item className={classes.copyright} container>
        <Typography variant="subtitle1">
          &copy; Desserts App 2021 <br/>
          77 King Street West, Suite 3000 <br/>
          Toronto, ON, M5K 1G8 <br/><br/>
          <Link to="/terms">Terms of Service</Link><br/>
          <Link to="/privacy">Privacy Policy</Link>
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer