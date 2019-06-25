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
  // root: {
  //   [theme.breakpoints.down('lg')]: {
  //     margin: '0px 20rem',
  //   },
  //   [theme.breakpoints.down('sm')]: {
  //     margin: '0px 10rem',
  //     fontSize: 15
  //   },
  //   [theme.breakpoints.down('xs')]: {
  //     margin: '0px 1rem',
  //   },
  // }
})


class ResultDialog extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false,
    }
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  transition = React.forwardRef((props, ref) => {
    if(window.innerWidth < 300) {
      return <Slide direction="up" ref={ref} {...props} />;
    } else {
      return null
    }
  });

  render() {
    const {classes} = this.props
    const isSmallWindow = window.innerWidth < 400 ? true : false
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
       {isSmallWindow ?
         <Dialog
           fullScreen
           transitioncomponent={isSmallWindow && this.transition}
           open={this.state.open}
           onClose={this.handleClose}
           aria-labelledby="form-dialog-Result"
         >
          <DialogTitle id="form-dialog-Result">Survey Result</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <Grid
            item xs={12}
            align='center'
            >
              <Result
              survey ={this.props.survey}
              />
              </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
         :
         <Dialog
         // fullScreen
         // transitioncomponent={isSmallWindow && this.transition}
           open={this.state.open}
           onClose={this.handleClose}
           aria-labelledby="form-dialog-Result"
         >
          <DialogTitle id="form-dialog-Result">Survey Result</DialogTitle>
          <DialogContent>
            <DialogContentText>
            </DialogContentText>
            <Grid
            item xs={12}
            align='center'
            >
              <Result
              survey ={this.props.survey}
              />
              </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      }
      </React.Fragment>
    )
  }

}

export default withStyles(styles)(ResultDialog);
