import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography, Icon } from '@material-ui/core';

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
      <Paper className={classes.paper}>Session
        <Typography variant="h1" > {props.minute} </Typography>

        <Icon style={{ fontSize: 50, cursor: 'pointer' }} onClick={props.onClickIncrement}>expand_less</Icon>
        <Icon style={{ fontSize: 50, cursor: 'pointer'}} onClick={props.onClickDecrement}>expand_more</Icon>

      </Paper>
    </Grid>
  );

}

export default TimeSetter;
