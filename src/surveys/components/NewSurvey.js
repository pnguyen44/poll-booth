import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NewOptions from '../options/components/NewOptions'


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
      survey: {
        title: '',
        question: ''
      },
        options: {}
        // option1: '',
        // option2: '',
        // options: []
    };
  }

  setOptions = options => {
    this.setState({options})
    console.log('..setOptions', this.state.options)
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    const {id, value} = event.target
    const newSurvey = {...this.state.survey, [id]: value}
    this.setState({ survey: newSurvey})
    // console.log( '..newSurvey', newSurvey)
  }

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
           <TextField
            autoFocus
            required
            id="title"
            label="Title"
            value={this.state.title}
            onChange={this.handleChange}
            margin="normal"
            fullWidth
           />

           <TextField
            autoFocus
            required
            id="question"
            label="Question"
            value={this.state.question}
            onChange={this.handleChange}
            margin="normal"
            fullWidth
           />

           <NewOptions setOptions={this.setOptions}/>

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
