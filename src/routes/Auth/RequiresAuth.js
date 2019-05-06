import React from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import './RequiresAuth.css'
axios.interceptors.request.use(
    function(options) {
        options.headers.authorization = localStorage.getItem('jwt');
        return options
    }, 
    function(error){
        return Promise.reject(error)
    }
)

const RequiresAuth = (Component) => {
    return class Authenticated extends React.Component {
        render() {
            const token = localStorage.getItem('jwt');
            return (
                <>
                    {token ? <Component {...this.props}/> : 
                    <div className='noCredentials'>
                        <Button size="large" color="primary" href='/login' >
                        Login
                        </Button>
                        <p>Please login to see the Github Breakdown Dashboard</p>
                    </div>}
                </>
            )
        }
    }
}

export default RequiresAuth;