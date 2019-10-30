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
    color: '#000070',
    height: 200,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

  },
}));


const TimeSetter = (props) => {
  const classes = useStyles();
  const  {text, size} = props.conf;


  return (
    <Grid item xs={size} >
      <Paper className={classes.paper}>{text}
        <Typography variant="h1" > {props.breakSession} </Typography>

        <Icon style={{ fontSize: 50, cursor: 'pointer' }} onClick={props.onClickIncrement}>expand_less</Icon>
        <Icon style={{ fontSize: 50, cursor: 'pointer'}} onClick={props.onClickDecrement}>expand_more</Icon>

      </Paper>
    </Grid>
  );

}

export default TimeSetter;
