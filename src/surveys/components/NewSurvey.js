import React from 'react'
import Button from '@material-ui/core/Button';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OptionsForm from '../options/components/OptionsForm'
import SurveyForm from './SurveyForm'

const styles = theme => ({
  button: {
    margin: '10px 10px 0px',
  },
  input: {
    display: 'none',
  },
});


class NewSurvey extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
      survey: {},
      options: {}
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

onCreateSurvey = event => {
  event.preventDefault()
  console.log('submit form clicked')
  console.log( '..newSurvey', this.state.survey)
}
  render () {
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
