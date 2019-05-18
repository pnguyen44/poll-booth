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
import * as optionsApi from '../../options/api'
import optionMessages from '../../options/messages'


const styles = theme => ({
  root: {
    margin: '50px 20rem',
    padding: 50,
    [theme.breakpoints.down('sm')]: {
      margin: '50px 1rem',
      padding: 20,
    },
    height: 300,
  },
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      // margin: '2px',
    },
  },
  bottomContainer: {
    marginTop: 20,
    height:100
  },
});

class SurveyDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      survey: {
        options: []
      },
      optionChoosen: '',
      option: {}
    }
    this.id = this.props.match.params.id
  }
  handleCancel = () => {
    this.props.history.push('/surveys');
    // console.log('click cancel')
  }
  handleChange = event => {
    this.setState({ optionChoosen: event.target.value });

  };
  handleSubmitClick = () => {
    const {optionChoosen, survey, option} = this.state
    console.log('buttom clicked options choosen', optionChoosen)
    // console.log('current survey', survey.options)
    let updateOption
    for(let item of survey.options) {
      if (item.name === optionChoosen) {
        updateOption = item
      }
    }
    // console.log('before optin', updateOption)
    let voteCount = updateOption.vote_count + 1
    updateOption = {...updateOption, vote_count:voteCount}
    this.setState({option: updateOption})
    // console.log('..option', updateOption)
    // const surveyId = updateOption.survey_id
    // const {survey} = this.state
    // console.log('surveys', survey)
    const options = survey.options
    const updateOptions = options.map(option => {
      if (option.id === updateOption.id) {
        return updateOption
      }
      return option
    })

    this.setState({survey: {...survey}, options: updateOptions})
    // for(let survey of surveys) {
    //   if (survey.survey_id === surveyId) {
    //     console.log('survey to update', survey)
    //   }
    // }

    optionsApi.updateOption(updateOption.id, updateOption.name, updateOption.vote_count)
      .then(optionsApi.handleErrors)
      .then(() => {
        console.log('new survey.optin', survey.options)
        this.props.history.push('/surveys')
      })
      .catch(() => this.props.flash(optionMessages.updateOptionFailure, 'flash-error'))

  }
  async onGetSurvey (){
    await getSurvey(this.id)
      .then(handleErrors)
      .then(res => res.json())
      .then(jsonRes => {
        this.setState({survey: jsonRes})
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
    // console.log('..optionin reder', this.state.option)
    console.log('survey in render options', survey.options)
    const optionsComponent = survey.options.map(option => {
      // console.log(option.name)
      return (
        <FormControlLabel
          key={option.id}
          value={option.name}
          control={<Radio color="primary" />}
          label={option.name}
        />
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
        <RadioGroup
          className={classes.group}
          value={this.state.value}
          onChange={this.handleChange}
          >
        {optionsComponent}
        </RadioGroup>
        <Grid item xs={12} className={classes.bottomContainer}>
        <Button onClick={this.handleSubmitClick} variant="contained"  color="primary" className={classes.button}>
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
