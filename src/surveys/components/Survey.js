import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {Edit, Delete} from '@material-ui/icons';

const styles = theme => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  btnCol: {
    width: '1%'
  },
  button: {
    outline: 'none',
    border: 'none',
    background: 'rgba(0, 0, 0, 0)',
    justifyContent:'flex-end'
  }
});


class Survey extends React.Component {
  render () {
    const { classes } = this.props
    const {title, question} = this.props.survey

    return (
        <TableRow className={classes.row} hover>
          <TableCell align='left'>{title}</TableCell>
          <TableCell align="left">{question}</TableCell>
          <TableCell align="left" padding='none' className={classes.btnCol}>
            <button className={classes.button} >Result</button>
          </TableCell>
          <TableCell align="left" padding='none'className={classes.btnCol}>
            <button className={classes.button} ><Edit/></button>
          </TableCell>
          <TableCell align="left" padding='none' className={classes.btnCol}>
            <button className={classes.button} ><Delete/></button>
          </TableCell>
        </TableRow>
    )
  }
}

Survey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Survey);
