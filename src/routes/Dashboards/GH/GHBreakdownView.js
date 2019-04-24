import React, { Component } from 'react';
import UserInfoComponent from  './UserInfoComponent';
import queryString from 'query-string';
import axios  from 'axios';
import Loader from 'react-loader-spinner'
const  baseURL = 'http://localhost:5000/api/github/search';

class GHBreakdownView extends Component {
    state  =  {
        userInfo:  {}
    }
    componentDidMount() {
        console.log(this.props);
        const parsed = queryString.parse(this.props.location.pathname);
        const user = {username: parsed['/ghdashboard/search']}
        console.log(user)
        axios.post(`${baseURL}/user`, user)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        axios.post(`${baseURL}/commits`,  user)
            .then(res => {
                this.setState({
                    ...this.state,
                    userInfo: res.data
                })
            })
            .catch(err =>  console.log(err))
    }
    render() {
        console.log(this.state)
        if(this.state.userInfo.userInfo){
            return (
                <UserInfoComponent  user={this.state.userInfo.userInfo}/>
            )
        } else {
            return (
                <div className='loader'><Loader type="ThreeDots" color="#4051B5" height={80} width={80} /></div>
            )
        }
       

    }
}

export default GHBreakdownView;