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
    padding: 36,
    [theme.breakpoints.down('sm')]: {
      margin: '50px 1rem',
      // padding: '24px 0px'
      padding: 20,
    },
    // [theme.breakpoints.up('md')]: {
    //   margin: '41px 26rem',
    //   padding: 36,
    // },
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
        <Grid
          container
          spacing={16}
          direction='column'
          alignItems='center'
        >
          <Grid item>
            <Typography variant="h5" component="h3" align="center">
              Survey: {survey.title}
            </Typography>
            <Typography className={classes.question} variant='h6' component="h3">
              Survey Question: {survey.question}
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
