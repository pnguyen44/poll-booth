import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {Delete} from '@material-ui/icons';
import {deleteSurvey, handleErrors} from '../api'
import messages from '../messages'
import EditSurvey from './EditSurvey'


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
      surveys: [],
      // open: false,
    }
  }
  //
  // handleClickOpen = () => {
  //   this.setState({ open: true });
  // };
  //
  // handleClose = () => {
  //   this.setState({ open: false });
  // };

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
    const { classes, flash, survey } = this.props
    const {title, question, id} = this.props.survey

    return (
        <TableRow className={classes.row} hover>
          <TableCell align='left' padding='default' className={classes.titleCol}>
            <Link to={`/surveys/${id}`}>
              {title}
            </Link>

          </TableCell>
          <TableCell align="left" padding='default' className={classes.questionCol}>{question}</TableCell>
          <TableCell align="left" padding='none' className={classes.btnCol}>
            <button className={classes.button} >Result</button>
          </TableCell>
          <TableCell align="left" padding='none'className={classes.btnCol}>
          {/*
            <button  onClick={this.handleClickOpen} className={classes.button} ><Edit/></button>
            */}

          <EditSurvey
            flash={flash}
            survey={survey}
          />
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
