import React, { Component } from 'react';

class Account extends Component {
    render() {
        /*
        Can't access this route without having a jwt props
        uncomment if statement below when you start to hookup REST call
        */
        if (!this.props.jwt) {
            this.props.history.push('/');
        }
        return <div>Account</div>;
    }
}

export default Account;