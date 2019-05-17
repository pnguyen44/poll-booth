import React from 'react'
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OptionsForm from '../../options/components/OptionsForm'
import SurveyForm from './SurveyForm'
import {createSurvey, handleErrors} from '../api'
import messages from '../messages'
import * as optionsApi from '../../options/api'
import optionMessages from '../../options/messages'
// import {createOption} from './options/api'

const styles = theme => ({
  button: {
    margin: '10px 10px 0px',
  },
  input: {
    display: 'none',
  },
  dialog: {
    marginTop: 70
  }
});


class NewSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      survey: {},
      option: {},
      formOptions: [],
      options:[],
      // surveyId: '',
      surveys: []
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setFormOptions = options => {
    this.setState({formOptions:options})
    // console.log('..setFormOptions', this.state.formOptions)
  }

  setSurvey = survey => {
    this.setState({survey})
    // console.log('..setSurvey', this.state.survey)
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  // async onCreateSurvey (event) {
  async onCreateSurvey() {
    // console.log( '..newSurvey', this.state.survey)
    // console.log('newoptions', this.state.options)
    const {title, question} = this.state.survey
    // this.props.setSurveys()
    // console.log('title..', title)
     await createSurvey(title, question)
      .then(handleErrors)
      .then(res => res.json())
      .then(dataJson =>  {
          // this.setState({surveyId: dataJson.id})
          // console.log('data',dataJson)
          const newSurvey = {...this.state.survey, id: dataJson.id}
          this.setState({survey: newSurvey})
          // const updatedSurveys = [...this.state.surveys, newSurvey]
          // console.log('create survey', this.state.survey)
          // console.log('..updatedSurveys', updatedSurveys)
          // this.props.setSurveys({surveys: updatedSurveys})
          // this.props.flash(messages.createSurveySuccess,'flash-success')
      })
      .then(() => {
        this.onCreateOptions()
      })
      .then(() => this.props.flash(messages.createSurveySuccess,'flash-success'))
      .catch(() => {
        this.props.flash(messages.createSurveyfailure,'flash-error')
      })
  }

  async onCreateOptions() {
    const {survey} = this.state
    const surveyId = survey.id
    console.log('surveyid', surveyId)

    const options = Object.values(this.state.formOptions).filter(val => val !== '')
    // console.log('...options', options)
    for(let option of options) {
    console.log('...option', option)
      await optionsApi.createOption(surveyId, option)
        .then(optionsApi.handleErrors)
        .then(res => res.json())
        .then(jsonRes => {
          const option = jsonRes
          // console.log('option json', this.state.options)
          const updateOptions = [...this.state.options, option]
          this.setState({options: updateOptions})
        })
        .catch(() => {
          // console.log('...eror......on create otion')
          this.props.flash(optionMessages.createOptionfailure,'flash-error')
        })
    }
    console.log('options...', this.state.options)
    const updatedSurvey = {...this.state.survey, options: this.state.options}
    const updatedSurveys = [...this.state.surveys, updatedSurvey]
    // console.log('create survey', this.state.survey)
    // console.log('..updatedSurveys', updatedSurveys)
    this.props.setSurveys({surveys: updatedSurveys})

  }

  async handleSubmit(event){
    event.preventDefault()
    // console.log('submit form clicked')
    await this.onCreateSurvey()
    console.log('create sruvey done')
    // this.onCreateOptions()

    // const {survey} = this.state
    // const surveyId = survey.id
    // console.log('surveyid', surveyId)
    //
    // const options = Object.values(this.state.options).filter(val => val !== '')
    // // console.log('...options', options)
    // for(let option of options) {
    //   console.log('...option', option)
    //   await this.onCreateOption(surveyId,option)
    //
    // }

    console.log('options', this.state.options)
    console.log('after createSurvey', this.state.surveys)
  }

  static getDerivedStateFromProps(props, state){
   if(props.surveys!==state.surveys){
     return { surveys: props.surveys};
   }
   else return null;
  }

  render () {
    console.log('Surveys iin newSurvey', this.state.surveys)
    const {classes} = this.props
    return (
      <div>
       <Button className={classes.button} variant="outlined" color="primary" onClick={this.handleClickOpen}>
         Create Survey
       </Button>
       <Dialog
         open={this.state.open}
         onClose={this.handleClose}
         aria-labelledby="form-dialog-title"
         className={classes.dialog}
       >
       <form onSubmit={this.handleSubmit}>
         <DialogTitle id="form-dialog-title">Create New Survey</DialogTitle>
         <DialogContent>
           <DialogContentText>
           </DialogContentText>

           <SurveyForm setSurvey={this.setSurvey}/>
           <OptionsForm setFormOptions={this.setFormOptions}/>

         </DialogContent>
         <DialogActions>
           <Button type='submit' color="primary">
             Submit
           </Button>
           <Button onClick={this.handleClose} color="primary">
             Cancel
           </Button>
         </DialogActions>
         </form>

       </Dialog>
     </div>
    )
  }
}

NewSurvey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewSurvey);
