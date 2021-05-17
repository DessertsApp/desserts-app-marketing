import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { makeStyles } from '@material-ui/core/styles'
import classnames from "classnames"
//images
import logo from '../images/da-logo.png'
import { colors, styleVars } from "../theme"
import { Button } from "@material-ui/core"
// styles
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: 'white',
    height: '5em',
    boxShadow: theme.shadows[1],
  },
  mainContainer: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: 'space-between',
    margin: '0 auto',
    width: '77.77vw',
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

const NavBar = ({ siteTitle, menuLinks }) => {
  const classes = useStyles();
  const currPath = typeof window !== 'undefined' ? window.location.pathname : '';
  console.log(currPath)
  return (
    <header className={classes.root}>
      <div className={classes.mainContainer} >
        <Link className={classes.logoContainer} to="/" >
          <img className={classes.logo} src={logo} alt="Desserts App Logo" />
        </Link>
        <nav className={classes.linkContainer}>
          {menuLinks.map(link => (
            <Link to={link.link} key={link.name}>
              <Button
                className={classnames(
                  classes.link, {[classes.currPage]: currPath === link.link}
                )}
              >
                {link.name}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
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