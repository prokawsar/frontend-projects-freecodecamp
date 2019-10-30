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
    color: '#fff',
    height: 200,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

  },
}));


const TimeSetter = (props) => {

  const classes = useStyles();
  const  {text, size} = props.conf;
  let {minute, second} = props

  const handlePause = () => {
    // setMinute(currentMinute => currentMinute < 60 ? currentMinute + 1 : currentMinute)
  }
  const handlePlay = ({minute, second}) => {

  }

  return (
    <Grid item xs={size} >
      <Paper className={classes.paper}>{text}
        <Typography variant="h1" > {minute}:{('0' + second).slice(-2)}</Typography>

        <Icon style={{ fontSize: 50, cursor: 'pointer' }} onClick={handlePause}>pause</Icon>
        <Icon style={{ fontSize: 50, cursor: 'pointer'}} onClick={handlePlay}>play_arrow</Icon>
        <Icon style={{ fontSize: 50, cursor: 'pointer'}} onClick={props.onClickRefresh}>refresh</Icon>

      </Paper>
    </Grid>
  );

}

export default TimeSetter;
