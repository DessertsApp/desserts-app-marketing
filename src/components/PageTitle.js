import React from "react"
import { Grid, Typography } from '@material-ui/core'

const PageTitle = ({ title, subtitle }) => {
  return (
    <Grid container item direction="column" alignItems="center" spacing={4} xs={12} sm={9} >
      <Grid item>
        <Typography variant="h1">
          { title }
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center" variant="subtitle1">
          { subtitle }
        </Typography>
      </Grid>
    </Grid>
  )
}

export default PageTitle