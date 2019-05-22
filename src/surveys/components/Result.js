import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    margin: '50px 20rem',
    padding: 50,
    [theme.breakpoints.down('sm')]: {
      margin: '50px 1rem',
      padding: 20,
    },
  }
})


class Result extends React.Component {
  render() {
    const {classes, survey} = this.props

    console.log('result comp', survey)
    return (
      <Paper className={classes.root}>
      <Grid
        container
        justify='center'
      >
      <Grid item>
        <Typography variant="h5" component="h3" align="center">
          Survey: {survey.title}
        </Typography>
        <Typography className={classes.question} variant='h6' component="h3">
          Survey Question: {survey.question}
        </Typography>
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
