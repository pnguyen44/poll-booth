import React from 'react'
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Chart from 'chart.js'


const styles = (theme) => ({
  root: {
    // margin: '41px 19rem',
    paddingBottom: 15,
    backgroundColor: '#2196f30f',
    [theme.breakpoints.down('sm')]: {
      // margin: '50px 1rem',
    fontSize: 12
    },
    textAlign: 'center'
  },
  surveyHeader: {
    backgroundColor:'black',
    color: 'white',
    textAlign: 'center',
    padding: 1

  }
})

class Result extends React.Component {
  constructor() {
    super()
    this.state = {
      survey: {}
    }
  }
  chartRef = React.createRef();
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
    const {survey,classes} = this.props
    return(
      <React.Fragment>
        <Grid item className={classes.root}>
          <Grid item xs={12}>
            <Grid item className={classes.surveyHeader}>
              <h3>
                {survey.title}
              </h3>
            </Grid>
            <Grid
              container
              direction='column'
              // alignItems='center'
              // justify="space-around"
            >
              <Grid item>
                <h3 style={{padding: 10, textAlign:'center'}}>
                  {survey.question}
                </h3>
              </Grid>
              </Grid>
              <Grid item>
                <canvas id="myChart" ref={this.chartRef}></canvas>
              </Grid>
            </Grid>
          </Grid>
        </React.Fragment>
    )
  }
}

export default withStyles(styles)(Result);
