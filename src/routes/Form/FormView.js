import React from 'react';
import FormComponent from './FormComponent';
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
    

    render() {
        return (
            <FormComponent user={this.state} formBtnSelected={this.props.formBtnSelected} isRegistering={this.props.isRegistering} handleChanges={this.handleChanges} error={this.state.error}/>
        )
    }
}

export default FormView;