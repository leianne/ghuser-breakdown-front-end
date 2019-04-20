import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {NavLink, Route} from 'react-router';
import Header from './routes/Header/Header'
import axios from 'axios';
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
    console.log(true)
    const selected = e.target.innerText.toLowerCase();
    const url = 'http://localhost:5000/api/auth'
    const user = userInput.user
    console.log(selected)
    if(selected === 'sign up'){
        axios.post(`${url}/register`, user)
        .then(res => {
            if(res.status === 201) {
                this.setState({isLoggedIn: true})
                localStorage.setItem('jwt', res.data.token)
                localStorage.setItem('userId', res.data.newUser.id)
                this.props.history.push('/dashboard')
                console.log(res)
            }
        })
        .catch(err => {
          console.log(err)
          NotificationManager.error('Username taken', 'Please try  again', 5000);
        })
    } else {
      delete user.email
      axios.post(`${url}/login`, user)
        .then(res => {
          if(res.status === 202){
            this.setState({isLoggedIn: true})
            localStorage.setItem('jwt', res.data.token)
            this.props.history.push('/dashboard')
            console.log(res)

          }
        })
        .catch(err => console.log(err))
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
    this.setState({
        ...this.state,
        user: user
    })
    window.location.href = `/ghdashboard/search=${user.login}`
  }
  render() {
    console.log(this.state)

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

export default withRouter(App);
