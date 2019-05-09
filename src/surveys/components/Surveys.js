import React from 'react'
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Survey from './Survey'
import {getSurveys} from '../api'


const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 30,
  },
}))(TableCell);

const styles = theme => ({
  header: {
    width: '100%',
    marginTop: 25,
    textAlign: 'center',
  },

  root: {
    // width: '100%',
    // marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: '0px 10rem',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 1rem',
    },
  },
  table: {
    // minWidth: 700,
    // margin: 20,
    // padding: '0px 10rem',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class Surveys extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      surveys: props.surveys
    }
  }

  async onGetSurveys() {
    await getSurveys()
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({surveys: data})
      })
  }

  async componentDidMount () {
    await this.onGetSurveys()
    this.props.setSurveys({surveys: this.state.surveys})
    // console.log('state', this.state.surveys)
  }

  render() {
    const { classes } = this.props
    const {surveys} = this.state

    const surveysComponent = surveys.map(survey => {
      return <Survey
        key={survey.id}
        survey={survey}
        />
    })
    return (
      <React.Fragment>
      <div className={classes.header}>
      <Typography variant="h4" gutterBottom>
        Survey Dashboard
      </Typography>
      </div>

      <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <CustomTableCell align="left">Survey</CustomTableCell>
            <CustomTableCell align="left">Question</CustomTableCell>
            <CustomTableCell align="left" padding='none'>Result</CustomTableCell>
            <CustomTableCell align="left" padding='none'>Edit</CustomTableCell>
            <CustomTableCell align="left" padding='none'>Delete</CustomTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {surveysComponent}
        </TableBody>
        </Table>
      </Paper>

      </React.Fragment>
    )
  }
}

Surveys.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Surveys);
