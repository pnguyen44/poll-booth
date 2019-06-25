import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import Chart from 'chart.js'
import Result from './Result'
const styles = theme => ({
  root: {
    // padding: 10,
    [theme.breakpoints.down('lg')]: {
      margin: '50px 20rem',
    },
    [theme.breakpoints.down('sm')]: {
      margin: '50px 10rem',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '50px 1rem',
    },
    backgroundColor: '#2196f30f'
    // height: 400,
  },
})


class ResultPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // survey: {
      //   option: props.survey.options
      // }
    }
  }
  // chartRef = React.createRef();

  handleCancel = () => {
    this.props.history.push('/surveys');
  }

  render() {
    const {classes, survey} = this.props
    return (
      <div>

      <Grid className={classes.root}>
        <Grid item classes={classes.result}>
          <Result
            survey={survey}
          />
          </Grid>
        </Grid>
        <Grid container
          direction="column"
          alignItems='center'
        >
          <Grid item xs={12}>
            <Button variant="contained" onClick={this.handleCancel}  color="primary" className={classes.button}>
              Back To Dashboard
              </Button>
          </Grid>
          </Grid>
        </div>
    )
  }
}

ResultPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultPage);
