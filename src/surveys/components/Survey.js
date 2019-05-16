import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {Edit, Delete} from '@material-ui/icons';
import {deleteSurvey, handleErrors} from '../api'
import messages from '../messages'

const styles = theme => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  width: 'auto'
  },
  btnCol: {
    width: '6%',
    marginRight: 5
  },
  titleCol: {
    width: '10%'
  },
  questionCol: {
    // width: '20%'
  },

  button: {
    outline: 'none',
    border: 'none',
    background: 'rgba(0, 0, 0, 0)',
    justifyContent:'flex-end'
  }
});


class Survey extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      survey: {},
      surveys: []
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.surveys !== prevProps.surveys) {
      this.setState({surveys: this.props.surveys})
    }
  }
  onDeleteSurvey = () => {
    // console.log('click deltet survey', this.state.survey)
    const {surveys, survey} = this.props
    const {id} = survey
    
    deleteSurvey(id)
      .then(handleErrors)
      .then(() => {
        console.log('sruveys before delte',this.state.surveys)
        const updatedSurveys = surveys.filter(survey => survey.id !== id)
        this.props.setSurveys({surveys: updatedSurveys})
        console.log('udpated survey after delete', updatedSurveys)
      })
      .catch(() => this.props.flash(messages.deleteSurveyFailure, 'flash-error'))

  }


  render () {
    const { classes } = this.props
    const {title, question} = this.props.survey

    return (
        <TableRow className={classes.row} hover>
          <TableCell align='left' padding='default' className={classes.titleCol}>{title}</TableCell>
          <TableCell align="left" padding='default' className={classes.questionCol}>{question}</TableCell>
          <TableCell align="left" padding='none' className={classes.btnCol}>
            <button className={classes.button} >Result</button>
          </TableCell>
          <TableCell align="left" padding='none'className={classes.btnCol}>
            <button className={classes.button} ><Edit/></button>
          </TableCell>
          <TableCell align="left" padding='none' className={classes.btnCol}>
            <button onClick={this.onDeleteSurvey} className={classes.button} ><Delete/></button>
          </TableCell>
        </TableRow>
    )
  }
}

Survey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Survey);
