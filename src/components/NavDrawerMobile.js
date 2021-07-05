import React, { useState } from 'react'
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core/styles'
import { Grid, IconButton, Typography } from '@material-ui/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
//components
import { SwipeableDrawer, List, ListItem, Divider } from '@material-ui/core'
import { colors } from '../theme'
import iconTransparent from '../images/icon-transparent.png'

const useStyles = makeStyles(theme => ({
  root: {
    fontSize: '0.65rem',
    width: '70vw',
    [theme.breakpoints.up('sm')]: {
      width: '40vw',
    }
  },
  listContainer: {
    width: '80%',
    paddingTop: theme.spacing(4),
  },
  divider: {
    margin: theme.spacing(4, 0, 2),
  },
}))

const NavDrawerMobile = ({ menuLinks }) => {
  const [isOpen, setIsOpen] = useState()
  const classes = useStyles()

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event).key === 'Tab' || (event).key === 'Shift')
    ) {
      return
    }

    setIsOpen(open)
  }
  
  return (
    <>
      <IconButton onClick={() => setIsOpen(true)} aria-label="open drawer">
        <FontAwesomeIcon icon={faBars} style={{color: colors.primary, fontSize: 28}} />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Grid
          className={classes.root}
          justify="center"
          container
        >
          <List className={classes.listContainer}>
            <img
              style={{alignSelf: 'flex-start', paddingTop: 0, height: '18vw', width: '50%', objectFit: 'contain'}}
              src={iconTransparent}
              alt="Desserts App Logo"
            />
            <Divider className={classes.divider} />
            {
              menuLinks.map((navLink, index) => (
                <Link to={navLink.link} onClick={toggleDrawer(false)}>
                  <ListItem button key={navLink.name + '-' + index}>
                      <Typography variant="button" color="primary">
                        { navLink.name }
                      </Typography>
                  </ListItem>
                </Link>
              ))
            }
          </List>
        </Grid>
      </SwipeableDrawer>
    </>
  )
}

export default NavDrawerMobile