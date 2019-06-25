import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './header/Header'
// import { Route, Link, Switch } from 'react-router-dom'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import Surveys from './surveys/components/Surveys'
// import NewSurvey from './surveys/components/NewSurvey'
import Grid from '@material-ui/core/Grid';
import SurveyDetail from './surveys/components/SurveyDetail'
import ResultPage from './surveys/components/ResultPage'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      surveys: [],
      survey: {},
      flashMessage: '',
      flashType: null,
    }
  }

  setSurveys = surveys => {
    this.setState(surveys)
  }
  setSurvey = survey => {
    this.setState(survey)
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

    const {survey, surveys,flashMessage,flashType} = this.state
    return (
      <React.Fragment>
        <MuiThemeProvider theme={theme}>
          <Router basename='poll-booth'>
            <Header
            flash={this.flash}
            surveys={surveys}
            setSurveys={this.setSurveys}
            />
            {flashMessage &&
              <Grid
              container
              justify='center'
              >
                <Grid item xs={12} className={flashType}>{flashMessage}</Grid>
              </Grid>
            }
            <Route exact path= '/surveys' render={props => (
              <React.Fragment>
                <Surveys
                  flash={this.flash}
                  surveys ={surveys}
                  setSurveys={this.setSurveys}
                />
              </React.Fragment>
            )} />

            <Route exact path= '/surveys/:id' render={props => (
              <SurveyDetail
              {...props}
              flash={this.flash}
              surveys ={surveys}
              survey ={survey}
              setSurvey={this.setSurvey}
              />
             )} />

             <Route exact path= '/surveys/:id/result' render={props => (
               <ResultPage
               {...props}
               survey ={survey}
               />
              )} />

          </Router>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

export default App
