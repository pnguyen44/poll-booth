import React from 'react'
import Result from './Result'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import PieChartIcon from '@material-ui/icons/PieChart'



class ResultDialog extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
      // dialog: {
      //   marginTop: 70
      // }
    }
    // this.dialog = React.createRef();
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {classes} = this.props
    return(
      <React.Fragment>
      <Grid item style={{textAlign: 'center'}}>
        <PieChartIcon
         onClick={this.handleClickOpen}
        />
       </Grid>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-Result"
          // className={classes.dialogBox}
        >
          <DialogTitle id="form-dialog-Result">Survey Result</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>

            <Result
            survey ={this.props.survey}
            />

          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }

}


export default ResultDialog
