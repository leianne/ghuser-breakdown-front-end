import React, { Component } from 'react';
import UserInfoComponent from  './UserInfoComponent';
import queryString from 'query-string';
import axios  from 'axios';
import Loader from 'react-loader-spinner'
import UserDataChartComponent from './UserDataChartComponent';
const  baseURL = 'http://localhost:5000/api/github/search';
// const parsed = queryString.parse(this.props.location.pathname);
// const user = {username: parsed['/ghdashboard/search']}
class GHBreakdownView extends Component {
    state  =  {
        userInfo:  {}
    }
    componentDidMount() {
        axios.post(`${baseURL}/user`, )
            .then(res => this.setState({
                ...this.state,
                userInfo: res.data.userInfo
            }))
            .catch(err => console.log(err))
    }
    render() {
        if(this.state.userInfo.login === ''){
            return (
                <div className='loader'><Loader type="ThreeDots" color="#4051B5" height={80} width={80} /></div>
            )
        } else {
            console.log(this.props)
            return (
                <>
                    <UserInfoComponent  user={this.state.userInfo}/>
                    {/* <UserDataChartComponent user={}/> */}
                </>
            )
        }
    }
}

export default GHBreakdownView;