import React from 'react'
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';

import NewOptionsFields from '../../options/components/NewOptionsFields'
import NewSurveyFields from './NewSurveyFields'

import {createSurvey, handleErrors} from '../api'
import messages from '../messages'
import * as optionsApi from '../../options/api'
import optionMessages from '../../options/messages'

const styles = theme => ({
  button: {
    paddingLeft: '16px',
    marginRight: 15,
    // float: 'left',
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
      survey: {
        title:'',
        question: '',
        options: []
      },
      formOptions: [],
      surveys: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  setFormOptions = options => {
    this.setState({formOptions:options})
  }

  setSurvey = survey => {
    this.setState({survey})
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  optionsIsUnique = () =>  {
    const options = this.state.formOptions
    for(let option of options) {
      const firstIndex = options.indexOf(option)
      const lastIndex = options.lastIndexOf(option)
      if (firstIndex !== -1 && lastIndex === firstIndex) {
        return true
      }
    }
    return false
  }

  async onCreateSurvey() {
      const {title, question} = this.state.survey
      await createSurvey(title, question)
      .then(handleErrors)
      .then(res => res.json())
      .then(dataJson =>  {
        const newSurvey = {...this.state.survey, id: dataJson.id}
        this.setState({survey: newSurvey})
      })
      .then(() => {
        this.onCreateOptions()
      })
      .then(() => {
        this.handleClose()
        this.props.flash(messages.createSurveySuccess,'flash-success')
      })
      .catch(() => {
        this.handleClose()
        this.props.flash(messages.createSurveyfailure,'flash-error')
      })
  }

  async onCreateOptions() {
    const {survey} = this.state
    const surveyId = survey.id
    const options = Object.values(this.state.formOptions).filter(val => val !== '')
    this.setState({options:[]})
    for(let option of options) {
      await optionsApi.createOption(surveyId, option)
        .then(optionsApi.handleErrors)
        .then(res => res.json())
        .then(jsonRes => {
          const option = jsonRes
          const updateOptions = [...this.state.options, option]
          this.setState({options: updateOptions})
        })
        .catch(() => {
          this.props.flash(optionMessages.createOptionfailure,'flash-error')
        })
    }
    const updatedSurvey = {...this.state.survey, options: this.state.options}
    const updatedSurveys = [...this.state.surveys, updatedSurvey]
    this.props.setSurveys({surveys: updatedSurveys})
  }

  async handleSubmit(event){
    event.preventDefault()
    const isUnique = this.optionsIsUnique()
    if (isUnique) {
      await this.onCreateSurvey()
    } else {
      this.handleClose()
      this.props.flash('Options must be unique','flash-error')
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.surveys !== prevProps.surveys) {
      this.setState({surveys: this.props.surveys})
    }
  }


  render () {
    const {classes} = this.props
    return (
      <React.Fragment>
       <Button color='inherit' className={classes.button} onClick={this.handleClickOpen}>
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

           <NewSurveyFields setSurvey={this.setSurvey}/>
           <NewOptionsFields setFormOptions={this.setFormOptions}/>

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
     </React.Fragment>
    )
  }
}

NewSurvey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewSurvey);
