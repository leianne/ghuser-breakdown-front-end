import React, {Component} from 'react';
import RequiresAuth from '../Auth/RequiresAuth';
import axios from 'axios';
import DashboardComponent from '../Dashboards/DashboardComponent';
import './Dashboard.css'
class DashboardView extends Component {
    state = {
        search: '',
    }
    handleChanges = (e) => {
        this.setState({
            search: e.target.value
        })
    }
    handleSubmit = (e) => {
        const url = 'https://peaceful-fjord-80447.herokuapp.com/api/github/search/'
        e.preventDefault();
        const search = {...this.state, user_id: 1}
        if(search.search !== ''){
            axios.post(url, search)
            .then(res => {
                this.setState({
                    ...this.state,
                    data: res.data.inner})
                console.log(this.state)
            })
            .catch(err => console.log(err))
        }
    }
    render() {
        console.log(this.state)

        return (
            <DashboardComponent search={this.state.search} handleChanges={this.handleChanges} handleSubmit={this.handleSubmit}/>
        )
    }
}
export default RequiresAuth(DashboardView);