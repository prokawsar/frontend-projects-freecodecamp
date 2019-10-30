import React, {useState} from 'react';
import {Container, Grid} from '@material-ui/core';
import TimeSetter from './components/TimeSetter';
import Break from './components/Break';
import Session from './components/Session';

const App = () => {
  const _data = {
    'break' : {
      'text': 'Break',
      'size': 6
    },
    'session': {
      'text': 'Session',
      'size': 6
    },
    'main':{
      'text': 'Start Pomodoro',
      'size': 12
    }
  }
  const _break = _data.break;
  const _session = _data.session;
  const _main = _data.main;

  const [minute, setMinute] = useState(
    25
  );
  let second = 0;

  const handleIncrement = () => {
    setMinute(currentMinute => currentMinute < 60 ? currentMinute + 1 : currentMinute)
  }
  const handleDecrement = () => {
    setMinute(currentMinute => currentMinute > 0 ? currentMinute - 1 : currentMinute)
  }


  return (
    <div>
      <Container maxWidth="md">

      {/* <Grid container spacing={3} align="center" direction="column" justify="center"> */}
        <Grid container spacing={3}>
          <Break conf={_break} />
          <Session conf={_session} minute={minute} second={second} onClickIncrement={handleIncrement} onClickDecrement={handleDecrement}/>
        </Grid>

        <Grid container spacing={3}>
          <TimeSetter conf={_main} minute={minute} second={second} />
        </Grid>
      {/* </Grid> */}
      </Container>
    </div>
  );
}

export default App;
