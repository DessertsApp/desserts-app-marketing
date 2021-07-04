import React from "react"
import { Grid, Typography } from '@material-ui/core'

const ProfileContainer = ({ profiles }) => {
  return (
    <Grid container item justify="center" spacing={4}>
      {
        profiles.map((profile) => (
          <Grid container item direction="column" alignItems="center" spacing={1} sm={4}>
            <Grid item>
              <img
                src={profile.pfp}
                alt={profile.name + "'s profile picture"}
                width="200px"
                height="200px"
                style={{bobjectFit: "cover"}}
              />
            </Grid>
            <Grid item>
              <Typography variant="h3">
                { profile.name }
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                { profile.title }
              </Typography>
            </Grid>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default ProfileContainer