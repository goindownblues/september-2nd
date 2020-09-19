import React, { useState } from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import deepOrange from '@material-ui/core/colors/deepOrange';
import orange from '@material-ui/core/colors/orange';
import ProductList from '../src/pages/ProductList';
import Header from '../src/components/Header';
import Layout from './Layout';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background
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
      <div className={classes.root}>
        <Header dark={dark} handleChange={handleChange}></Header>
        <Layout>
          <Container maxWidth="md">
            <ProductList />
          </Container>
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;