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
      }
    };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = event => {
    const {id, value} = event.target
    const newSurvey = {...this.state.trip, [id]: value}
    this.setState({ survey: newSurvey})
    console.log( '..newSurvey', newSurvey)
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

         </DialogContent>
         <DialogActions>
           <Button color="primary" onClick={this.handleSumbit}>
             Submit
           </Button>
           <Button onClick={this.handleClose} color="primary">
             Cancel
           </Button>
         </DialogActions>
       </Dialog>
     </div>
    )
  }
}

NewSurvey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewSurvey);
