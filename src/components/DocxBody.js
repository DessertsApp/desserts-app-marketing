import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Paper, Typography, Button } from '@material-ui/core'
import { rootStyles, styleVars } from '../theme'

const useStyles = makeStyles(theme => ({
  root: {
    ...rootStyles,
    padding: 16
  },
  body: {
    borderRadius: styleVars.paperRadius,
    overflow: "hidden",
    margin: "4em auto",
    padding: "3em 1em",
    width: "100%",
    [theme.breakpoints.up('sm')]: {
      padding: "4em 2em",
      width: "fit-content"
    },
  },
  doc: {
    border: "none",
    height: "60vh",
    width: "calc(100% + 11em)",
    margin: "0 -5em",
    [theme.breakpoints.up('sm')]: {
      width: "816px",
      margin: 0,
    },
  }
}))

const DocxBody = ({ title, subtitle, iframeSrc, docSrc }) => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} container justify="center" spacing={4} >
        <Grid item xs={12}>
          <Typography variant="h1" align="center">
            {title}
          </Typography>
        </Grid> 
        <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            {subtitle}
          </Typography>
        </Grid>
        <Paper className={classes.body} elevation={6}>
          <Grid container spacing={4} direction="column">
            <Grid item>
              <iframe
                title="Terms of Service Document"
                className={classes.doc}
                src={iframeSrc}
              ></iframe>
            </Grid>
            <Grid item container justify="center">
              <Button
                href={docSrc}
                variant="contained"
                id="mc-embedded-subscribe"
                color="primary"
                disableElevation
                download  
              >
                  Download File
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
  )
}

export default DocxBody