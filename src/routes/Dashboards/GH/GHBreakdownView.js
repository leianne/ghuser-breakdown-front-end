import React, { Component } from 'react';
import UserInfoComponent from  './UserInfoComponent';
import queryString from 'query-string';
import axios  from 'axios';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'
import UserDataChartComponent from './UserDataChartComponent';
import UserDataLangComponent from './UserDataLangComponent';
import './GHBreakdownStyles.css'

const  baseURL =  process.env.BACKEND_API || 'http://localhost:5000/'

class GHBreakdownView extends Component {
    state  =  {
        userInfo:  {},
        commits: {},
        languages: {}
    }
    componentDidMount() {
        const parsed = queryString.parse(this.props.location.pathname);
        const user = {username: parsed['/ghdashboard/search']}
        this.setState({
            ...this.state,
            isCommitsLoading: true,
            isLangLoading: true
        })
        axios.post(`${baseURL}api/github/search/commits`, user)
        .then(res => 
            this.setState({
            ...this.state,
            isCommitsLoading: false,
            commits: res.data.data
        }))
        .catch(err => console.log(err))
        axios.post(`${baseURL}api/github/search/languages`, user)
            .then(res => this.setState({
                ...this.state,
                isLangLoading: false,
                languages: res.data.data
            }))
            .catch(err => console.log(err))
        if(Object.keys(this.state.userInfo).length == 0) {
            axios.post(`${baseURL}api/github/search/user`, user)
            .then(res => {
                this.setState({
                ...this.state,
                userInfo: res.data.userInfo
            })})
            .catch(err => console.log(err)) 
        }    
    }

    render() {
        if(this.state.userInfo.login === ''){
            return (
                <div className='loader'><Loader type="ThreeDots" color="#4051B5" height={80} width={80} /></div>
            )
        } else {
            return (
                <div className='cardChartContainer'>
                    <div className='topChartComponent'>
                        <UserInfoComponent  user={this.state.userInfo}/>
                        <div className='pieChartContainer'>
                        {Object.keys(this.state.languages).length > 0 ? <UserDataLangComponent languages={this.state.languages}/> : <div className='loader'><Loader type="ThreeDots" color="#4051B5" height={80} width={80} /></div>}
                        </div>
                    </div>
                    {Object.keys(this.state.commits).length > 0 ?
                    <UserDataChartComponent userInfo={this.state.userInfo} data={this.state.commits}/> : <div className='loader'><Loader type="ThreeDots" color="#4051B5" height={80} width={80} /></div>}
                </div>
            )
        }
    }
}


export default GHBreakdownView;