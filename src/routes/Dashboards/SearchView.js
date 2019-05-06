import React, {Component} from 'react';
import RequiresAuth from '../Auth/RequiresAuth';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import SearchComponent from './SearchComponent';
import UsersSearch from './UsersSearch';
import './Dashboard.css'
const baseURL =  process.env.BACKEND_API || 'http://localhost:5000/';
class SearchView extends Component {
    // STATE
    state = {
        search: '',
        users:  []
    }
    componentDidMount () {
    }
    // HANDLE CHANGES FOR SEARCH BAR
    handleChanges = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    // HANDLE SUBMIT - for fuzzy searchw
    handleSubmit = (e) => {
        const url = `${baseURL}api/github/search/users`
        e.preventDefault();
        const search = this.state.search
        this.setState({ 
            isLoading: true
        })
        if(search !== ''){
            axios.post(`${url}/${search}`)
            .then(res => {
                this.setState({
                    ...this.state,
                    isLoading: false,
                    users: res.data.users,
                })
            })
            .catch(err => console.log(err))
        }
    }
    render() {
        return (
            <>
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