import React, { Component } from 'react';
import UserInfoComponent from  './UserInfoComponent';
import queryString from 'query-string';
import axios  from 'axios';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import UserDataChartComponent from './UserDataChartComponent';
const  baseURL =  process.env.BACKEND_API || 'http://localhost:5000/api/github/search'

class GHBreakdownView extends Component {
    state  =  {
        userInfo:  {},
        commits: {}
    }
    componentDidMount() {
        const parsed = queryString.parse(this.props.location.pathname);
        const user = {username: parsed['/ghdashboard/search']}
        console.log(user)
        axios.post(`${baseURL}/user`, user)
            .then(res => {
                console.log(res)
                this.setState({
                ...this.state,
                userInfo: res.data.userInfo
            })})
            .catch(err => console.log(err))
        axios.post(`${baseURL}/commits`, user)
        .then(res => this.setState({
            ...this.state,
            commits: res.data.data
        }))
        .catch(err => console.log(err))
    }
    render() {
        console.log(this.state)
        if(this.state.userInfo.login === ''){
            return (
                <div className='loader'><Loader type="ThreeDots" color="#4051B5" height={80} width={80} /></div>
            )
        } else {
            return (
                <>
                    <UserInfoComponent  user={this.state.userInfo}/>
                    {Object.keys(this.state.commits).length > 0 &&<UserDataChartComponent data={this.state.commits}/>}
                </>
            )
        }
    }
}


export default GHBreakdownView;