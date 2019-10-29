import React from 'react';
import {Container, Grid} from '@material-ui/core';
import TimeSetter from './components/TimeSetter';

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

  return (
    <div>
      <Container maxWidth="md">

      {/* <Grid container spacing={3} align="center" direction="column" justify="center"> */}
        <Grid container spacing={3}>
          <TimeSetter conf={_break} />
          <TimeSetter conf={_session} />
        </Grid>

        <Grid container spacing={3}>
          <TimeSetter conf={_main} />
        </Grid>
      {/* </Grid> */}
      </Container>
    </div>
  );
}

export default App;
