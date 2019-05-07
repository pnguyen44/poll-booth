import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './header/Header'
// import { Route, Link, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'

class App extends React.Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: blue,
        secondary: blue,
      },
    })
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Header />
          </Router>
        </MuiThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
