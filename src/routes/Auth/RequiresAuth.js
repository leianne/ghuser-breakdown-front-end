import React from 'react';
import axios from 'axios';

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
                    {token ? <Component {...this.props}/> : <p>Please login to see the Gihub Breakdown Dashboard</p>}
                </>
            )
        }
    }
}

export default RequiresAuth;