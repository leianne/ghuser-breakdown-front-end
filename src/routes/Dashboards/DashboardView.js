import React, {Component} from 'react';
import RequiresAuth from '../Auth/RequiresAuth';

class DashboardView extends Component {
    render() {
        return (
            <h1>connected</h1>
        )
    }
}
export default RequiresAuth(DashboardView);