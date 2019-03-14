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
          <i className="fab fa-github-alt"></i> 

          </IconButton>
            Github User Breakdown
          </Typography>
          {props.isLoggedIn ? <Button onClick={(e) => props.logoutBtnClicked(e)} color="inherit">Log Out</Button> : <Button onClick={(e) => props.formBtnClicked(e)} color="inherit">{props.isRegistering ? 'Login' : 'Register'}</Button>}
        </Toolbar>
      </AppBar>
        </>
    )
}

export default Header;