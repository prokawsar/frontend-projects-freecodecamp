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
  const [minute, setMinute] = useState(
    5
  );
  let second = 0;
  const classes = useStyles();
  const  {text, size} = props.conf;

  const handleIncrement = () => {
    setMinute(currentMinute => currentMinute < 60 ? currentMinute + 1 : currentMinute)
  }
  const handleDecrement = () => {
    setMinute(currentMinute => currentMinute > 0 ? currentMinute - 1 : currentMinute)
  }

  return (
    <Grid item xs={size} >
      <Paper className={classes.paper}>{text}
        <Typography variant="h1" > {minute}:{second}</Typography>

        <Icon style={{ fontSize: 50, cursor: 'pointer' }} onClick={handleDecrement}>arrow_drop_down</Icon>
        <Icon style={{ fontSize: 50, cursor: 'pointer'}} onClick={handleIncrement}>arrow_drop_up</Icon>

      </Paper>
    </Grid>
  );

}

export default TimeSetter;
