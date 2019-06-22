import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Chart from 'chart.js'

const styles = theme => ({
  root: {
    margin: '41px 19rem',
    backgroundColor: '#2196f30f',
    [theme.breakpoints.down('sm')]: {
      margin: '50px 1rem',
    },
  },
  surveyHeader: {
    backgroundColor:'black',
    color: 'white',
    textAlign: 'center',
    padding: 1

  }
})


class Result extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      survey: {
        option: props.survey.options
      }
    }
  }
  chartRef = React.createRef();

  handleCancel = () => {
    this.props.history.push('/surveys');
  }

  componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        const {options} = this.props.survey
        const labels = options.map(option => option.name)
        const data = options.map(option=> option.vote_count)
        new Chart(myChartRef, {
            type: "pie",
            data: {
                //Bring in data
                labels: labels,
                datasets: [{
                  data: data,
                  backgroundColor: ['red', 'green','blue', 'yellow'],
                  // borderColor: 'rgb(255, 99, 132)',
                }]
            },
            options: {
              //Customize chart options
           }
       });
   }

  render() {
    const {classes, survey} = this.props
    return (
      <Paper className={classes.root}>
      <Grid item xs={12}>
      <Grid item className={classes.surveyHeader}>
        <h3>{survey.title}</h3>
      </Grid>
        <Grid
          container
          spacing={16}
          direction='column'
          alignItems='center'
        >
          <Grid item>
            <Typography className={classes.question} variant='h6' component="h3"align="center">
              {survey.question}
            </Typography>
          </Grid>
            <Grid item>
              <canvas id="myChart" ref={this.chartRef}></canvas>
            </Grid>
            <Grid item>
              <Button variant="contained" onClick={this.handleCancel}  color="primary" className={classes.button}>
                Back To Dashboard
                </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

Result.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Result);
