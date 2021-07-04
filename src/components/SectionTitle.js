import React from "react"
import { Grid, Typography } from '@material-ui/core'

const SectionTitle = ({ title, subtitle }) => {
  return (
    <Grid container item alignContent="center" direction="column" spacing={1}>
      <Grid item>
        <Typography variant="h2" align="center">
          { title }
        </Typography>
      </Grid>
      <Grid item xs={12} md={9} align="center">
        <Typography align="center" variant="body1">
          { subtitle }
        </Typography>
      </Grid>
    </Grid>
  )
}

export default SectionTitle