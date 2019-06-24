import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom'


const styles = theme => ({
  root: {
    backgroundColor: '#d9e4f2',
    textAlign: 'center',

    [theme.breakpoints.down('lg')]: {
      margin:'80px 250px',
      padding: 50,
    },

    [theme.breakpoints.down('md')]: {
      margin:'30px 150px',
      padding: 50,
    },

    [theme.breakpoints.down('xs')]: {
      margin:'20px 50px',
      padding: 30
      // paddingTop: theme.spacing.unit * 4,
      // paddingBottom: theme.spacing.unit * 4,
    },
  },
});


class Home extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    const {classes} = this.props

    return (
      <div>
      <Grid item xs={12}>
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h2" component="h3">
            Poll Booth
          </Typography>
          <br/>
          <Typography component="h2" variant="h4" gutterBottom>
            Create, view, or take surveys
          </Typography>
          <br/>
          <Button variant="contained" color="primary" component={Link} to="/surveys">
            Get Started
          </Button>
        </Paper>
      </Grid>
      </div>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home);
