import React, {Component} from 'react';
import RequiresAuth from '../Auth/RequiresAuth';
import axios from 'axios';
import SearchComponent from './SearchComponent';
import UserInfoComponent from './UserInfoComponent';
import UserDataComponent from './UserDataComponent';
import './Dashboard.css'
class DashboardView extends Component {
    // STATE
    state = {
        search: '',
    }
    // HANDLE CHANGES FOR SEARCH BAR
    handleChanges = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    // HANDLE SUBMIT FOR ENTER PRESS
    handleSubmit = (e) => {
        const url = 'https://peaceful-fjord-80447.herokuapp.com/api/github/search/commits'
        e.preventDefault();
        const search = this.state.search
        this.setState({ 
            isLoading: true
        })
        console.log(search)
        if(search.search !== ''){
            axios.post(`${url}/?username=${search}`)
            .then(res => {
                console.log(res)
                this.setState({
                    ...this.state,
                    isLoading: false,
                    data: res.data.data,
                    userInfo: res.data.userInfo,
                    langs: [res.data.langs]
                })
                console.log(this.state)
            })
            .catch(err => console.log(err))
        }
    }
    // HANDLE GITHUB SUBMITTED
    handleGHSubmitted = (e) => {
        e.preventDefault();
        const url = 'https://github.com/'
        window.open(
            `${url}${this.state.userInfo.login}`,
        '_blank'
        );
    }
    render() {
        return (
            <>
            <SearchComponent isLoading={this.state.isLoading}search={this.state.search} handleChanges={this.handleChanges} handleSubmit={this.handleSubmit}/>
            <div className='userContent'>
                <UserInfoComponent handleGHSubmitted={this.handleGHSubmitted} userInfo={this.state.userInfo}/>
                <UserDataComponent langs={this.state.langs} data={this.state.data} userInfo={this.state.userInfo} />
            </div>
            </>
        )
    }
}
export default RequiresAuth(DashboardView);