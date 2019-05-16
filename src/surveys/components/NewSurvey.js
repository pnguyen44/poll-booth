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
// import {createOption} from './options/api'

const styles = theme => ({
  button: {
    margin: '10px 10px 0px',
  },
  input: {
    display: 'none',
  },
});


class NewSurvey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      survey: {},
      options: {},
      surveyId: '',
      surveys: []
    };
  }

  setOptions = options => {
    this.setState({options})
    // console.log('..setOptions', this.state.options)
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
  onCreateSurvey =  (event) => {
    event.preventDefault()
    console.log('submit form clicked')
    // console.log( '..newSurvey', this.state.survey)
    // console.log('newoptions', this.state.options)
    const {title, question} = this.state.survey


    // this.props.setSurveys()
    // console.log('title..', title)
    createSurvey(title, question)
      .then(handleErrors)
      .then(res => res.json())
      .then(data =>  {
          this.setState({surveyId: data.id})
          console.log('data',data)
        })
      .then(() => {
      const newSurvey = {...this.state.survey, id: this.state.surveyId}
      const updatedSurveys = [...this.state.surveys, newSurvey]
        console.log('create survey')
        console.log('..updatedSurveys', updatedSurveys)
        this.props.setSurveys({surveys: updatedSurveys})
        this.props.flash(messages.createSurveySuccess,'flash-success')
      })
      .catch(() => {
        console.log('Error..')
      })

      // console.log('id',id)

      console.log('surveyid', this.state.surveyId)

      const options = Object.values(this.state.options).filter(val => val !== '')
      console.log('...options', options)
      // for(let item of options) {
      //   createOption()
      // }

    // this.props.flash('test','flash-error')
    this.handleClose()
  }

  static getDerivedStateFromProps(props, state){
   if(props.surveys!==state.surveys){
     return { surveys: props.surveys};
   }
   else return null;
  }

  render () {
    // console.log('updatedSurveys', this.state.surveys)
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
       >
       <form onSubmit={this.onCreateSurvey}>
         <DialogTitle id="form-dialog-title">Create New Survey</DialogTitle>
         <DialogContent>
           <DialogContentText>
            Add a survey
           </DialogContentText>

           <SurveyForm setSurvey={this.setSurvey}/>
           <OptionsForm setOptions={this.setOptions}/>

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
