import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {Delete} from '@material-ui/icons';
import {deleteSurvey, handleErrors} from '../api'
import messages from '../messages'
// import EditSurvey from './EditSurvey'
import ResultDialog from './ResultDialog'
import Tooltip from '@material-ui/core/Tooltip';



const styles = theme => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#2196f30f',
    },
  width: 'auto'
  },
  btnCol: {
    width: '6%',
    marginRight: 5
  },
  titleCol: {
    // width: '10%'
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
      surveys: [],
      // open: false,
    }
  }

  hasResult(survey) {
    const {options} = survey
    return options.filter((option) => option['vote_count'] > 0 ).length > 0

  }

  componentDidUpdate(prevProps) {
    if (this.props.surveys !== prevProps.surveys) {
      this.setState({surveys: this.props.surveys})
    }
  }
  onDeleteSurvey = () => {
    const {surveys, survey} = this.props
    const {id} = survey

    deleteSurvey(id)
      .then(handleErrors)
      .then(() => {
        const updatedSurveys = surveys.filter(survey => survey.id !== id)
        this.props.setSurveys({surveys: updatedSurveys})
      })
      .catch(() => this.props.flash(messages.deleteSurveyFailure, 'flash-error'))
  }

  onEditSurvey = () => {

  }

  render () {
    const { classes, survey } = this.props
    const {title, question, id} = this.props.survey
    return (
        <TableRow className={classes.row} hover>
          <TableCell style={{textDecoration: 'underline'}} align='left' padding='default' className={classes.titleCol}>
            <Tooltip title="View">
              <Link to={`/surveys/${id}`}>
                {title}
              </Link>
            </Tooltip>
          </TableCell>
        <TableCell  align="left" padding='none' className={classes.questionCol}>{question}</TableCell>
          <TableCell align="left" padding='none' className={classes.btnCol}>
          {this.hasResult(survey) ?
              <ResultDialog
                survey={this.props.survey}
              />
              :
              null
          }
          </TableCell>
          {/*

          <TableCell align="left" padding='none'className={classes.btnCol}>
          <EditSurvey
            flash={flash}
            survey={survey}
          />
          </TableCell>
            */}
          <TableCell align="left" padding='none' className={classes.btnCol}>
          <Tooltip title="Delete">
            <button onClick={this.onDeleteSurvey} className={classes.button} ><Delete/></button>
            </Tooltip>
          </TableCell>
        </TableRow>
    )
  }
}

Survey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Survey);
