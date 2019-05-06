import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {NavLink, Route} from 'react-router';
import Header from './routes/Header/Header'
import axios from 'axios';
import { connect } from 'react-redux';
import  { loginUser, registerUser, userSearch } from './store/actions'
import SearchView from './routes/Dashboards/SearchView';
import LoginView from './routes/Login/LoginView';
import GHBreakdownView from './routes/Dashboards/GH/GHBreakdownView'
import './App.css';

class App extends Component {
  state = {
    isRegistering: false,
    isLoggedIn: localStorage.getItem('jwt') ? true : false
    }
    // HEADER BTN SELECTED
    headBtnSubmitted = (e) => {
      e.preventDefault();
      const val = e.target.textContent()
      if(val === 'Login'){
        this.setState({
          isRegistering: true
        })
      } else {
        this.setState({
          isRegistering: false
        })
      }
  }
  // LOGIN/REG FORM SUBMITTED
  formBtnClicked = (e) => {
    e.preventDefault();
    if(e.target.innerText.toLowerCase() === 'register'){
        this.setState({ isRegistering: true})
    } else {
        this.setState({ isRegistering: false})

    }
  }
  // LOGOUT BTN CLICKED
  logoutBtnClicked = (e) => {
    e.preventDefault();
    localStorage.removeItem('jwt');
    this.setState({isLoggedIn: false})
    this.props.history.push('/login');
  }
  // REGISTER/LOGIN SELECTED WITH USER INFO
  formBtnSelected = (e, userInput) => {
    e.preventDefault();
    const selected = e.target.innerText.toLowerCase();
    const user = userInput.user
    if(selected === 'sign up'){
       this.props.registerUser(user)
    } else {
      delete user.email
        this.props.loginUser(user)
    }
}

  render() {
    return (
      <>
      <Header  headBtnSubmitted={this.headBtnSubmitted} logoutBtnClicked={this.logoutBtnClicked} formBtnClicked={this.formBtnClicked} isLoggedIn={this.state.isLoggedIn} isRegistering={this.state.isRegistering}/>
      <Route path='/login' render={props => (<LoginView formBtnSelected={this.formBtnSelected} {...props} isRegistering={this.state.isRegistering}/>)} />
      <Route exact path='/' render={props => (<SearchView userSelected={this.userSelected}/>)} />
      <Route path='/ghdashboard' render={props => (<GHBreakdownView {...props} user={this.state.user}/>)} />
      </>
    );
  }
}

export default connect(null, {loginUser, registerUser, userSearch})(withRouter(App));
