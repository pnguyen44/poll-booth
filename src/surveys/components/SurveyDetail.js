import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {getSurvey, handleErrors} from '../api'
import Radio from '@material-ui/core/Radio';
import messages from '../messages'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';


const styles = theme => ({
  root: {
    margin: '50px 20rem',
    padding: 50,
    [theme.breakpoints.down('sm')]: {
      margin: '50px 1rem',
    },
    height: 300,
  },
  button: {
    margin: theme.spacing.unit,
  },
  bottomContainer: {
    marginTop: 20
    // height:100
  },
});

class SurveyDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      survey: {
        options: []
      },
      value: '',
    }
    this.id = this.props.match.params.id
  }
  handleCancel = () => {
    this.props.history.push('/surveys');
    console.log('click cancel')
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  async onGetSurvey (){
    await getSurvey(this.id)
      .then(handleErrors)
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({survey: jsonRes})
        // this.props.setSurvey({survey: this.state.survey})
        console.log('survey', this.state.survey)
        // this.props.setSurvey({survey:jsonRes})
      })
      .catch(() => this.props.flash(messages.getSurveyFailure, 'flash-error'))
  }

  async componentDidMount () {
    await this.onGetSurvey()
    this.props.setSurvey({survey: this.state.survey})
  }

  render() {
    const {classes} = this.props
    const {survey} = this.state
    console.log('survey in render', survey.options)
    const optionsComponent = survey.options.map(option => {
      console.log(option.name)
      return (
        <RadioGroup
          aria-label="gender"
          name="gender2"
          className={classes.group}
          value={this.state.value}
          onChange={this.handleChange}
          >
        <FormControlLabel
          value={option.name}
          control={<Radio color="primary" />}
          label={option.name}
        />
        </RadioGroup>
      )
    })
    return (
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" align="center">
          Survey: {survey.title}
        </Typography>
        <Typography component="h2">
          Survey Question: {survey.question}
        </Typography>
        {optionsComponent}

        <Grid item xs={23} className={classes.bottomContainer}>
        <Button variant="contained"  color="primary" className={classes.button}>
          Submit
        </Button>
        <Button variant="contained" onClick={this.handleCancel}  color="primary" className={classes.button}>
          Cancel
        </Button>
        </Grid>
      </Paper>
    )
  }
}

SurveyDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SurveyDetail);
