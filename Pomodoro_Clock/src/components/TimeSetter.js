import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200
  },
}));


const TimeSetter = (props) => {

  const classes = useStyles();
  const  {text, size} = props.conf;

  return (
    <Grid item xs={size} >
      <Paper className={classes.paper}>{text}</Paper>
    </Grid>
  );

}

export default TimeSetter;
