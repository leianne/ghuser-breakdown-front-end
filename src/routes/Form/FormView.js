import React from 'react';
import FormComponent from './FormComponent';
import axios from 'axios';
import './Form.css'

class FormView extends React.Component {
    state ={
        user: {
            username: '',
            password: '',
            email: ''
        },
    }
    handleChanges = (e) => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            },
            error: false
           
        })
    }
    
    formBtnSelected = (e) => {
        e.preventDefault();
        console.log(true)
        const selected = e.target.innerText.toLowerCase();
        const url = 'https://peaceful-fjord-80447.herokuapp.com/api/auth'
        const user = this.state.user
        console.log(user)
        if(selected === 'sign up'){
            delete user.email
            console.log(user)
            axios.post(`${url}/register`, user)
            .then(res => {
                if(res.status === 201) {
                    // this.props.history.push('/dashboard')
                    console.log(res)
                }
            })
            .catch(err => this.setState({error: true}))
        } else {

        }
    }

    render() {
        return (
            <FormComponent user={this.state} formBtnSelected={this.formBtnSelected} isRegistering={this.props.isRegistering} handleChanges={this.handleChanges} error={this.state.error}/>
        )
    }
}

export default FormView;