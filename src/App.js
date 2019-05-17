import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './header/Header'
// import { Route, Link, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import Surveys from './surveys/components/Surveys'
import NewSurvey from './surveys/components/NewSurvey'
import Grid from '@material-ui/core/Grid';
import SurveyDetail from './surveys/components/SurveyDetail'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      surveys: [],
      flashMessage: '',
      flashType: null,
    }
  }

  setSurveys = surveys => {
    this.setState(surveys)
    // console.log('setSurvey', this.state.surveys)
  }

  flash = (message, type) => {
    this.setState( {flashMessage: message, flashType: type} )
    clearTimeout(this.messageTimeout)
    this.messageTimeout = setTimeout(() => this.setState({flashMessage: null}),2000)
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

    const {surveys,flashMessage,flashType} = this.state
    // console.log('...app.js survey', surveys)
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Header />
            <Route exact path= '/surveys' render={props => (
              <React.Fragment>
              {flashMessage &&
                  <Grid item xs={12} className={flashType}>{flashMessage}</Grid>
              }
                <NewSurvey
                  flash={this.flash}
                  surveys={surveys}
                  setSurveys={this.setSurveys}
                />
                <Surveys
                  flash={this.flash}
                  surveys ={surveys}
                  setSurveys={this.setSurveys}
                />
              </React.Fragment>
            )} />

            <Route exact path= '/surveys/:id' render={props => (
              <SurveyDetail/>
             )} />

          </Router>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

export default App
