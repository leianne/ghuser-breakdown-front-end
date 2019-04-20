import React, {Component} from 'react';
import RequiresAuth from '../Auth/RequiresAuth';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import SearchComponent from './SearchComponent';
import {NotificationContainer, NotificationManager } from 'react-notifications';
import UsersSearch from './UsersSearch';
import './Dashboard.css'

class SearchView extends Component {
    // STATE
    state = {
        search: '',
        users:  []
    }
    componentDidMount () {
        NotificationManager.success('Thanks for coming back', 'Welcome', 5000);
    }
    // HANDLE CHANGES FOR SEARCH BAR
    handleChanges = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    // HANDLE SUBMIT - for fuzzy searchw
    handleSubmit = (e) => {
        const url = 'http://localhost:5000/api/github/search/users'
        e.preventDefault();
        const search = this.state.search
        this.setState({ 
            isLoading: true
        })
        console.log(search)
        if(search !== ''){
            axios.post(`${url}/${search}`)
            .then(res => {
                console.log(res)
                this.setState({
                    ...this.state,
                    isLoading: false,
                    users: res.data.users,
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
                <NotificationContainer/>
                <SearchComponent isLoading={this.state.isLoading} search={this.state.search} handleChanges={this.handleChanges} handleSubmit={this.handleSubmit}/>
                {this.state.isLoading && <div className='loader'><Loader type="ThreeDots" color="#4051B5" height={80} width={80} /></div>}  
                <div className='usersContainer'>
                    <UsersSearch userSelected={this.props.userSelected} users={this.state.users}/>
                </div>
            </>
        )
    }
}
export default RequiresAuth(SearchView);