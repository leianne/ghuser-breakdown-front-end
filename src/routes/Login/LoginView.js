import React from 'react';
import LoginComponent from './LoginComponent';
import './LoginStyles.css';

class LoginView extends React.Component {
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
    

    render() {
        return (
            <>
                <LoginComponent user={this.state} formBtnSelected={this.props.formBtnSelected} isRegistering={this.props.isRegistering} handleChanges={this.handleChanges} error={this.state.error}/>
            </>
        )
    }
}

export default LoginView;