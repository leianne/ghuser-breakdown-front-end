import React, { Component } from 'react';
import {NavLink, Route} from 'react-router';
import Header from './routes/Header/Header'
import FormView from './routes/Form/FormView';
import './App.css';

class App extends Component {
  state = {
    isRegistering: false
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
  render() {
    return (
      <>
      <Header formBtnClicked={this.formBtnClicked} isRegistering={this.state.isRegistering}/>
      <FormView isRegistering={this.state.isRegistering}/>
      </>
    );
  }
}

export default App;
