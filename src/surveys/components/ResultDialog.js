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
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Tooltip from '@material-ui/core/Tooltip';
import Slide from '@material-ui/core/Slide';


const styles = theme => ({
  root: {
    // margin: '41px 22rem',
    // paddingBottom: 10,
    backgroundColor: '#2196f30f',
    [theme.breakpoints.down('sm')]: {
      // margin: '50px 1rem',
      // fontSize: 7,
    },
  },
})


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
  Transition = React.forwardRef(function Transition(props, ref) {
    // if(window.innerWidth < 500) {
    console.log('test')
      return <Slide direction="up" ref={ref} {...props} />;
    // }
  });
  render() {
    // const {classes} = this.props
    const isSmallWindow = window.innerWidth < 500 ? true : false
    console.log('isSmallWindow', isSmallWindow, window.innerWidth)
    return(
      <React.Fragment>
      <Grid item style={{textAlign: 'center'}}>
        <Tooltip title="Result">
          <PieChartIcon
           onClick={this.handleClickOpen}
          />
        </Tooltip>
       </Grid>
        <Dialog
          // fullScreen={this.isSmallWindow}
          // transitioncomponent={this.Transition}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-Result"
          // style={{width:'300px'}}
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

export default withStyles(styles)(ResultDialog);
