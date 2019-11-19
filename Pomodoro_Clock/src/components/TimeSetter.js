import React, {useState, useEffect, useRef} from 'react';
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

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const TimeSetter = (props) => {

  const classes = useStyles();
  const  {text, size} = props.conf;
  let {minute, second} = props
  const prevTime = usePrevious({minute, second});

  const [PMinute, setPMinute] = useState(minute)
  const [PSecond, setPSecond] = useState(second)
  const [timer, setTimer] = useState({
    intervalID: [],
  })

  const handlePause = () => {
    while(timer.intervalID.length){
      clearInterval(timer.intervalID.pop() )
    }
  }

  const handlePlay = () => {
    handlePause() // clearing the intervals first
    let intervalID = []

    let id = setInterval( () => {
      setPSecond(currentPSecond => currentPSecond === 0 ? currentPSecond = 59 : currentPSecond - 1)
    }, 100)
    intervalID.push(id)

    id = setInterval( () => {
      setPMinute(currentPMinute => currentPMinute === 0 ? currentPMinute = 59 : currentPMinute - 1)
    }, 1000)
    intervalID.push(id)

    setTimer({intervalID})
  }

  useEffect(() => {
    // refresh isn't working
    if(prevTime){
      if(prevTime.minute < minute){
        console.log(prevTime.minute)
        setPSecond(currentPSecond => 0 )
        setPMinute(currentPMinute => prevTime.minute + 1 )
      }
      else if(prevTime.minute > minute){
        setPSecond(currentPSecond => 0 )
        setPMinute(currentPMinute => prevTime.minute - 1 )
      }
    }


  });

  return (
    <Grid item xs={size} >
      <Paper className={classes.paper}>{text}
        { timer.intervalID.length > 0 ? (
            <Typography variant="h1" > {PMinute}:{('0' + PSecond).slice(-2)}</Typography>
          ) : (
            <Typography variant="h1" > {PMinute}:{('0' + second).slice(-2)}</Typography>
          )
        }

        <Icon style={{ fontSize: 50, cursor: 'pointer' }} onClick={handlePause}>pause</Icon>
        <Icon style={{ fontSize: 50, cursor: 'pointer'}} onClick={handlePlay}>play_arrow</Icon>
        <Icon style={{ fontSize: 50, cursor: 'pointer'}} onClick={props.onClickRefresh}>refresh</Icon>

      </Paper>
    </Grid>
  );

}

export default TimeSetter;
