import React, {useState} from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import TimeSetter from './components/TimeSetter';
import Break from './components/Break';
import Session from './components/Session';

const App = () => {
  const _data = {
    'break' : {
      'text': 'Break Length',
      'size': 6
    },
    'session': {
      'text': 'Session Length',
      'size': 6
    },
    'main':{
      'text': 'Pomodoro Session',
      'size': 12
    }
  }
  const _break = _data.break;
  const _session = _data.session;
  const _main = _data.main;

  const [minute, setMinute] = useState(25);
  const [second, setSecond] = useState(0);
  const [breakSession, setBreakSession] = useState(5);

  const handleIncrement = () => {
    setMinute(currentMinute => currentMinute < 60 ? currentMinute + 1 : currentMinute)
    setSecond(0)
  }
  const handleDecrement = () => {
    setMinute(currentMinute => currentMinute > 1 ? currentMinute - 1 : currentMinute)
    setSecond(0)
  }

  const handleBreakIncrement = () => {
    setBreakSession(currentBreakSession => currentBreakSession < 60 ? currentBreakSession + 1 : currentBreakSession)
  }
  const handleBreakDecrement = () => {
    setBreakSession(currentBreakSession => currentBreakSession > 1 ? currentBreakSession - 1 : currentBreakSession)
  }

  const handleRefresh = () => {
    setMinute(25)
    setBreakSession(5)

  }

  return (
    <div>
      <Container maxWidth="md">
        <Typography variant="h2" align="center"> Pomodoro Clock </Typography>
      {/* <Grid container spacing={3} align="center" direction="column" justify="center"> */}
        <Grid container spacing={3}>
          <Break conf={_break} breakSession={breakSession} onClickIncrement={handleBreakIncrement} onClickDecrement={handleBreakDecrement}/>
          <Session conf={_session} minute={minute} onClickIncrement={handleIncrement} onClickDecrement={handleDecrement}/>
        </Grid>

        <Grid container spacing={3}>
          <TimeSetter conf={_main} minute={minute} second={second} onClickRefresh={handleRefresh}/>
        </Grid>
      {/* </Grid> */}
      </Container>
    </div>
  );
}

export default App;
