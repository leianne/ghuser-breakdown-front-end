import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {NavLink, Route} from 'react-router';
import Header from './routes/Header/Header'
import axios from 'axios';
import { connect } from 'react-redux';
import  { loginUser, registerUser } from './store/actions'
import SearchView from './routes/Dashboards/SearchView';
import { NotificationManager } from 'react-notifications';
import LoginView from './routes/Login/LoginView';
import GHBreakdownView from './routes/Dashboards/GH/GHBreakdownView'
import './App.css';
import 'react-notifications/lib/notifications.css';

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
    console.log(e.target.innerText)
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
myAccountBtnClicked = (e) => {
  const url = 'https://peaceful-fjord-80447.herokuapp.com/api/users'
  e.preventDefault();
  const id =localStorage.getItem('userId')
  const token = localStorage.getItem('token');
    const reqOptions = {
        headers: {
            Authorization: token
        }
    }

  axios.get(`${url}/${id}`, reqOptions)
  .then(res => console.log(res))
  .catch(err => console.log(err))
  }
  userSelected = (e, user) => {
    e.preventDefault();
    console.log(user)
    this.setState({
        ...this.state,
        user: user
    })
    window.location.href=`/ghdashboard/search=${user.login}`
  }
  render() {
    console.log('PROpS' + this.props.loginUser)
    return (
      <>
      <Header myAccountBtnClicked={this.myAccountBtnClicked} headBtnSubmitted={this.headBtnSubmitted} logoutBtnClicked={this.logoutBtnClicked} formBtnClicked={this.formBtnClicked} isLoggedIn={this.state.isLoggedIn} isRegistering={this.state.isRegistering}/>
      <Route path='/login' render={props => (<LoginView formBtnSelected={this.formBtnSelected} {...props} isRegistering={this.state.isRegistering}/>)} />
      <Route path='/search' render={props => (<SearchView userSelected={this.userSelected}/>)} />
      <Route path='/ghdashboard/:user' render={props => (<GHBreakdownView {...props} user={this.state.user}/>)} />
      </>
    );
  }
}

const mapStateToProps = state => {
  console.log('MSTP ' + state.login)
  return {

  }
}
export default connect(mapStateToProps, {loginUser, registerUser})(withRouter(App));
