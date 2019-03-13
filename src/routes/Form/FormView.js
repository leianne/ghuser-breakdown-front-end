import React from 'react';
import FormComponent from './FormComponent';
import './Form.css'

class FormView extends React.Component {
    state ={
        user: {
            username: '',
            password: ''
        },
    }
    handleChanges = (e) => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        })
    }
    
    render() {
        return (
            <FormComponent user={this.state} isRegistering={this.props.isRegistering} handleChanges={this.handleChanges}/>
        )
    }
}

export default FormView;