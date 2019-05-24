import React from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Edit} from '@material-ui/icons';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import NewOptionsFields from '../../options/components/NewOptionsFields'
import SurveyFields from './SurveyFields'


const styles = theme => ({
  button: {
    outline: 'none',
    border: 'none',
    background: 'rgba(0, 0, 0, 0)',
    justifyContent:'flex-end'
  }
});


class EditSurvey extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
      scroll: 'paper',
    };
  }
  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const {classes,survey} = this.props
    console.log('survey in EditSurvey', survey)
    return (
      <div>
        <button className={classes.button} onClick={this.handleClickOpen('paper')}><Edit/></button>
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="edit-survey-dialog"
          >
            <DialogTitle id="edit-survey-dialog">Edit Survey</DialogTitle>
            <DialogContent>
              <DialogContentText>

              </DialogContentText>

              <SurveyFields survey={survey} setSurvey={this.setSurvey}/>
              <NewOptionsFields survey={survey} setFormOptions={this.setFormOptions}/>

            </DialogContent>
            <DialogActions>
              <Button type='submit' color="primary">
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

EditSurvey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EditSurvey);
