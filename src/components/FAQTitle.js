import React from "react"
import { Grid, Typography } from '@material-ui/core'



const FAQTitle = ({ title, subtitle, subtitle1 }) => {
  return (
    <Grid container item direction="column" alignItems="center" spacing={4} xs={12} sm={9} >
      <Grid item>
        <Typography variant="h1">
        Frequently asked questions
        </Typography>
      </Grid>

      <Grid>
      <Grid item>
        <Typography align="center" variant="subtitle1">
          { subtitle }
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center" variant="subtitle1">
          { subtitle1 }
        </Typography>
      </Grid>
      </Grid>


    </Grid>
  )
}

export default FAQTitle