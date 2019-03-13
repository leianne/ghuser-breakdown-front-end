import React from 'react';
import { Route, Navlink } from 'react-router';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css'
function Header(props) {
    return (
        <>
        <AppBar position="static">
        <Toolbar id='toolbar'> 
          <Typography variant="h6" color="inherit" >
          <IconButton color="inherit" aria-label="Menu">
          <i class="fab fa-github-alt"></i> 

          </IconButton>
            Github User Breakdown
          </Typography>
          <Button color="inherit">{props.isLoggingIn ? 'Login' : 'Register'}</Button>
        </Toolbar>
      </AppBar>s
        </>
    )
}

export default Header;