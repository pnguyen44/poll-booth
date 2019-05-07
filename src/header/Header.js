import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MenuItem from '@material-ui/core/MenuItem';
import HomeIcon from '@material-ui/icons/Home'
import {Route} from 'react-router-dom'
import Home from '../home/Home'
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },

  link: {
    marginRight: 15,
    color: 'white',
    textDecoration: 'none'
  },
  mobileMenu: {
    [theme.breakpoints.between('md', 'lg')]: {
      display: 'none',
    },
  },
  desktopMenu: {
    [theme.breakpoints.between('xs', 'sm')]: {
      display: 'none',
    },
  }
})

class Header extends React.Component {
  state = {
    mobileAnchorEl: null
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileAnchorEl: null });
  };

  render() {
    const { mobileAnchorEl} = this.state;
    const { classes } = this.props

    const renderMobileMenu = (
      <Menu
        id="simple-menu"
        anchorEl={mobileAnchorEl}
        open={Boolean(mobileAnchorEl)}
        onClose={this.handleMobileMenuClose}
      >

      <Link to='/todos'>
        <MenuItem onClick={this.handleMobileMenuClose}>Surveys</MenuItem>
      </Link>
      </Menu>
    )

    return(
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
          <img src={require('../survey-icon.png')} alt='app-logo' style={{width:'50px', marginLeft:'1vw', paddingRight:'14px'}} />
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Poll Booth
            </Typography>
            <div className={classes.desktopMenu}>
              <IconButton color="inherit" className={classes.link} component={Link} to="/">
                <HomeIcon />
              </IconButton>
              <Link className={classes.link} to='/surveys'>Surveys</Link>
            </div>
            <div className={classes.mobileMenu}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color='inherit'
              >
                <MoreVertIcon />
              </IconButton>

              {renderMobileMenu}
            </div>
          </Toolbar>
        </AppBar>
        <Route exact path='/' render={(props) => (
          <Home
          {...props}
          />
)       }/>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
