import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {getSurvey, handleErrors} from '../api'
import Radio from '@material-ui/core/Radio';
import messages from '../messages'
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    margin: '50px 15rem',
    padding: 20,
    [theme.breakpoints.down('sm')]: {
      margin: '50px 1rem',
    },
  },
  button: {
    margin: theme.spacing.unit,
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
  handleCancel = () => {
    this.props.history.push('/surveys');
    console.log('click cancel')
  }

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

  // static getDerivedStateFromProps(props, state){
  //   console.log('getDerivedStateFromProps')
  //  if(props.survey!==state.survey){
  //    return { survey: state.survey};
  //  }
  //  else return null;
  // }

  async componentDidMount () {
    await this.onGetSurvey()
    this.props.setSurvey({survey: this.state.survey})
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.survey !== prevProps.survey) {
  //     this.setState({survey: this.props.survey})
  //   }
  // }

  render() {
    const {classes} = this.props
    const {surveys, survey} = this.props
    console.log('survey in render', survey)
    // const optionsComponent = survey.options.map(option => {
    //   return (
    //     <Radio
    //       checked={this.state.selectedValue === 'd'}
    //       onChange={this.handleChange}
    //       value= {option.name}
    //       color="default"
    //       name="radio-button-demo"
    //       aria-label="D"
    //     />
    //   )
    // })
    return (
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3" align="center">
          Survey: {survey.title}
        </Typography>
        <Typography component="h2">
          Survey Question: {survey.question}
        </Typography>
        <Button variant="contained"  color="primary" className={classes.button}>
          Submit
        </Button>
        <Button variant="contained" onClick={this.handleCancel} color="primary" className={classes.button}>
          Cancel
        </Button>
      </Paper>
    )
  }
}

SurveyDetail.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SurveyDetail);
