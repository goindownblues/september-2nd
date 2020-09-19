import React, { useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import { Typography, Paper, Switch } from '@material-ui/core';

import deepOrange from '@material-ui/core/colors/deepOrange';
import orange from '@material-ui/core/colors/orange';

import Header from '../src/components/Header';
import HeaderSecond from '../src/components/Header2';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  paper: {
    width: "100%",
    height: "100vh"
  }
}));


function App() {
  const classes = useStyles();
  const [dark, setDark] = useState(false);

  const theme = createMuiTheme({
    palette: {
      type: dark ? 'dark' : 'light',
      primary: {
        main: deepOrange[500]
      },
      secondary: {
        main: orange[500]
      },
    },
  });

  const handleChange = (event) => {
    setDark((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header dark={dark} handleChange={handleChange}></Header>
      <HeaderSecond>
        <Switch
          checked={dark}
          onChange={handleChange}
        />
      </HeaderSecond>

      <Paper className={classes.paper}>
        <Typography>Content</Typography>
      </Paper>
    </ThemeProvider>
  );
}

export default App;