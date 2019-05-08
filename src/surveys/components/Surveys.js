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

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
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
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    margin: 50,

  },
  table: {
    minWidth: 700,
    // margin: 20,
    padding: '0px 10rem',
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
});

class Surveys extends React.Component {
  render() {
    const { classes } = this.props
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
            <CustomTableCell>Survey</CustomTableCell>
            <CustomTableCell align="right">Question</CustomTableCell>
            <CustomTableCell align="right">Result</CustomTableCell>
            <CustomTableCell align="right">Edit</CustomTableCell>
            <CustomTableCell align="right">Delete</CustomTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
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
