import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Chart from 'chart.js'
import Result from './Result'
const styles = theme => ({
  root: {
    margin: '41px 22rem',
    backgroundColor: '#2196f30f',
    [theme.breakpoints.down('sm')]: {
      margin: '50px 1rem',
    },
  },
  // surveyHeader: {
  //   backgroundColor:'black',
  //   color: 'white',
  //   textAlign: 'center',
  //   padding: 1
  //
  // }
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

      <Paper className={classes.root}>
        <Grid item classes={classes.result}>
          <Result
            survey={survey}
          />
          </Grid>
        </Paper>
          <Grid item>
            <Button variant="contained" onClick={this.handleCancel}  color="primary" className={classes.button}>
              Back To Dashboard
              </Button>
          </Grid>

                <h1> TES</h1>
        </div>
    )
  }
}

ResultPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ResultPage);
