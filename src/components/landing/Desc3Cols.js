import React from "react"
// import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography } from '@material-ui/core'

// styles
// const useStyles = makeStyles(theme => ({
//   root: {
//   },
// }))

const Desc3Cols = ({ title, description, items }) => {
  // const classes = useStyles();
  return (
    <Grid container item justify="center" spacing={4}>
      <Grid item xs={12}>
        <Typography variant="h2" align="center">
          { title }
        </Typography>
      </Grid>
      <Grid item xs={9} align="center">
        <Typography variant="body1">
            { description }
        </Typography>
      </Grid>
      {
        items.map((item) => {
          return(<Grid item container xs={4} direction="column" alignItems="center" spacing={1}>
            <Grid item xs={6}>
              <img
                src={item.img}
                alt="section title"
                width="100%"
                style={{borderRadius: "99px"}}
              />
            </Grid>
            <Grid item>
              <Typography variant="h3">
                {item.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">
                  {item.text}
              </Typography>
            </Grid>
          </Grid>)
        })
      }
    </Grid>
  )
}
export default Desc3Cols