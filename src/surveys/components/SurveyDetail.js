import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {getSurvey, handleErrors} from '../api'

const styles = theme => ({
  root: {
    margin: '50px 15rem',
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      margin: '50px 1rem',
    },
  },
});

class SurveyDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      survey: {}
    }
    this.id = this.props.match.params.id
  }

  onGetSurvey = () => {
    getSurvey(this.id)
      .then(handleErrors)
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({survey: jsonRes})
        console.log('survey', this.state.survey)
      })
  }

  componentDidMount() {
    this.onGetSurvey()
  }

  render() {
    const {classes} = this.props
    const {survey} = this.state
    return (
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" align="center">
          Survey: {survey.title}
        </Typography>
        <Typography component="h2">
          Survey Question: {survey.question}
        </Typography>
      </Paper>
    )
  }
}

SurveyDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SurveyDetail);
