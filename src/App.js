import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import {NavLink, Route} from 'react-router';
import Header from './routes/Header/Header'
import axios from 'axios';

import DashboardView from './routes/Dashboards/DashboardView';

import FormView from './routes/Form/FormView';
import './App.css';

class App extends Component {
  state = {
    isRegistering: false,
    isLoggedIn: false
    }

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

  formBtnClicked = (e) => {
    e.preventDefault();
    console.log(e.target.innerText)
    if(e.target.innerText.toLowerCase() === 'register'){
        this.setState({ isRegistering: true})
    } else {
        this.setState({ isRegistering: false})

    }
  }
  logoutBtnClicked = (e) => {
    e.preventDefault();
    localStorage.removeItem('jwt');
    this.setState({isLoggedIn: false})
    this.props.history.push('/login');
  }

  formBtnSelected = (e, userInput) => {
    e.preventDefault();
    console.log(true)
    const selected = e.target.innerText.toLowerCase();
    const url = 'https://peaceful-fjord-80447.herokuapp.com/api/auth'
    const user = userInput.user
    console.log(user)
    if(selected === 'sign up'){
      delete user.email
        console.log(user)
        axios.post(`${url}/register`, user)
        .then(res => {
            if(res.status === 201) {
                this.setState({isLoggedIn: true})
                localStorage.setItem('jwt', res.data.token)
                this.props.history.push('/dashboard')
                console.log(res)
            }
        })
        .catch(err => this.setState({error: true}))
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
  render() {
    return (
      <>
      <Header headBtnSubmitted={this.headBtnSubmitted} logoutBtnClicked={this.logoutBtnClicked} formBtnClicked={this.formBtnClicked} isLoggedIn={this.state.isLoggedIn} isRegistering={this.state.isRegistering}/>
      <Route path='/login' render={props => (<FormView formBtnSelected={this.formBtnSelected} {...props} isRegistering={this.state.isRegistering}/>)} />
      <Route path='/dashboard' component={DashboardView} />
      </>
    );
  }
}

export default withRouter(App);
