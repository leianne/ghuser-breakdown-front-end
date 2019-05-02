import React from 'react';
import AccountComponent from './AccountComponent';
import { timingSafeEqual } from 'crypto';

class AccountView extends React.Component {

    render() {
        return (
            <AccountComponent accInfo={this.props.accInfo}/>
        )
    }
}

export default AccountView;