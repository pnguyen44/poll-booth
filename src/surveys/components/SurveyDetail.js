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
    // height: 400,
  },
  button: {
    margin: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      // margin: '2px',
      // height: 5
    },
  },
  bottomContainer: {
    // marginTop: 27,
    // height:70
  },
  question: {
    marginTop: 20
  }
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
  }
  handleChange = event => {
    this.setState({ optionChoosen: event.target.value });

  };
  handleSubmitClick = () => {
    const {optionChoosen, survey} = this.state
    if (optionChoosen === '') {
      // console.log('got erhere')
      this.props.flash('Please select an option.', 'flash-error')
      return
    };
    let updateOption
    for(let item of survey.options) {
      if (item.name === optionChoosen) {
        updateOption = item
      }
    }
    let voteCount = updateOption.vote_count + 1
    updateOption = {...updateOption, vote_count:voteCount}
    const optionsArr= survey.options
    const updateOptions = optionsArr.map(option => {
      if (option.id === updateOption.id) {
        return updateOption
      }
      return option
    })
    const updatedSurvey = {...survey, options: updateOptions}

    optionsApi.updateOption(updateOption.id, updateOption.name, updateOption.vote_count)
      .then(optionsApi.handleErrors)
      .then(() => {
        this.props.setSurvey({survey: updatedSurvey})
        this.props.history.push(`/surveys/${this.id}/result`)
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
    // console.log('..optionin reder props', this.props.survey.options)
    const optionsComponent = survey.options.map(option => {
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
        <Grid item xs={12}>
        <Grid
          container
          spacing={16}
          direction='column'
        >
          <Grid item>
            <Typography variant="h5" component="h3" align="center">
              {survey.title}
            </Typography>
            <Typography className={classes.question} variant='h6' component="h3">
              {survey.question}
            </Typography>
          </Grid>
          <Grid item>
            <RadioGroup
              value={this.state.value}
              onChange={this.handleChange}
              >
            {optionsComponent}
            </RadioGroup>
          </Grid>
          <Grid
            container
            justify='center'
          >

          <Grid item className={classes.bottomContainer}>
            <Button onClick={this.handleSubmitClick} variant="contained"  color="primary" className={classes.button}>
              Submit
            </Button>
            <Button variant="contained" onClick={this.handleCancel}  color="primary" className={classes.button}>
              Cancel
            </Button>
            </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
  }
}

SurveyDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SurveyDetail);
