import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import { Grid, Typography} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    [theme.breakpoints.down('md')]: {
      fontSize: "2em"
    }
  },
}))

const InfoSections = ({ infoProps, round }) => {
  const classes = useStyles();
  const { title, description, items } = infoProps;
  const roundStyle = round ? "99%" : "0";
  
  return (
    <Grid container item justify="center" spacing={4}>
      <Grid item xs={12}>
        <Typography className={classes.title} variant="h2" align="center">
          { title }
        </Typography>
      </Grid>
      <Grid item xs={12} md={9} align="center">
        <Typography variant="body1">
            { description }
        </Typography>
      </Grid>
      { items.map((item) => {
          return(
            <Grid
              container
              item
              xs={12}
              md={4}
              direction="column"
              alignItems="center"
              spacing={2}
            >
              <Grid item>
                <img
                  src={item.img}
                  alt="section title"
                  width="200px"
                  height="200px"
                  style={{borderRadius: roundStyle, objectFit: "cover"}}
                />
              </Grid>
              <Grid item>
                <Typography variant="h3" align="center">
                  {item.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1">
                    {item.text}
                </Typography>
              </Grid>
            </Grid>
          )
        })}
    </Grid>
  )
}
export default InfoSections