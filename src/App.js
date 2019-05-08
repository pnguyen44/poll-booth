import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './header/Header'
// import { Route, Link, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import Surveys from './surveys/components/Surveys'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      surveys: []
    }
  }

  setSurveys = surveys => {
    this.setState(surveys)
  }

  render() {
    const theme = createMuiTheme({
      palette: {
        primary: blue,
        secondary: blue,
      },
      typography: {
        useNextVariants: true,
      },
    })

    const {surveys} = this.state

    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Header />
            <Route exact path= '/surveys' render={props => (
              <Surveys
                surveys ={surveys}
                setSurveys={this.setSurveys}
              />
            )} />
          </Router>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

export default App;
