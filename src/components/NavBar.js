import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import classnames from "classnames"
//images
import logo from '../images/da-logo.png'
import { colors, styleVars } from "../theme"
import { Button, Grid } from "@material-ui/core"
import NavDrawerMobile from "./NavDrawerMobile"

// styles
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    height: '5em',
    boxShadow: theme.shadows[1],
  },
  mainContainer: {
    alignItems: 'center',
    height: '100%',
    maxWidth: styleVars.maxWidth,
  },
  logoContainer: {
    display: 'inline-block',
    height: '100%'
  },
  logo: {
    maxWidth: '100%',
    maxHeight: '100%',
  },
  linkContainer: {
    display: 'flex',
  },
  link: {
    fontSize: "1.1em",
    marginLeft: theme.spacing(2),
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  currPage: {
    color: colors.primary,
    fontWeight: 700,
  },
}))

const NavBarLinks = ({menuLinks}) => {
  const classes = useStyles()
  const currPath = typeof window !== 'undefined' ? window.location.pathname : ''

  return (
    <>
      { menuLinks.map(link => (
        <Link to={link.link} key={link.name}>
          <Button
            className={classnames(
              classes.link, {[classes.currPage]: currPath === link.link}
            )}
          >
            {link.name}
          </Button>
        </Link>
      )) }
    </>
  )
}

const NavBar = ({ menuLinks }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return (
    <header>
      <Grid className={classes.root} container justify="center">
        <Grid
          className={classes.mainContainer}
          container
          item
          justify="space-between"
          alignItems="center"
          xs={11}
          md={9}
        >
          <Grid className={classes.logoContainer} item>
            <Link to="/" >
              <img className={classes.logo} src={logo} alt="Desserts App Logo" />
            </Link>
          </Grid>
          <Grid item>
            <nav className={classes.linkContainer}>
              { isMobile ?
                <NavDrawerMobile menuLinks={menuLinks} /> :
                <NavBarLinks menuLinks={menuLinks}/>
              }
            </nav>
          </Grid>
        </Grid>
      </Grid>
    </header>
  )
}
NavBar.propTypes = {
  siteTitle: PropTypes.string,
}
NavBar.defaultProps = {
  siteTitle: ``,
}
export default NavBar