import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Table from '../components/Table';
import AccountCard from '../components/AccountCard';
import TransactionForm from './TransactionForm-ctn';
import AccHolderForm from './AccHolderForm-ctn';
import Logout from '../components/LogoutBtn';

import { registerAccountHolder, logout } from '../actions/actions';

import '../styles/accounts.css';

const mockData = null;

class Account extends Component {
    constructor(props) {
        super(props);

        this.handleRegisterAccountHolder = this.handleRegisterAccountHolder.bind(this);
    }

    renderAccountCard() {
        const { checkings, savings, cds } = this.props;

        const checkingArray = checkings.map(acc => {
            return <AccountCard id={acc.id} accountType="checking" balance={acc.balance} />
        });

        const savingsArray = savings.map(acc => {
            return <AccountCard id={acc.id} accountType="saving" balance={acc.balance} />
        });

        const cdArray = cds.map(acc => {
            return <AccountCard id={acc.id} accountType="cd" balance={acc.balance} />
        });

        return [...checkingArray, ...savingsArray, ...cdArray];
    }

    handleRegisterAccountHolder(values) {
        console.log(values);
        this.props.registerAccountHolder(values, this.props.jwt);
    }

    render() {
        /*
        Can't access this route without having a jwt props
        uncomment if statement below when you start to hookup REST call
        */
        if (!this.props.jwt) {
            this.props.history.push('/');
        }

        /**
         * First time customer will need to create an Account Holder infomation
         */
        if (!this.props.cds) {
            return (
                <>
                <Header mapType="accountmap" currentTab="Account"/>
                <AccHolderForm handleRegister={this.handleRegisterAccountHolder}/>
                <Footer />
                </>
            )
        }

        const bankCards = this.renderAccountCard();
        return (
            <div>
            <Header mapType="accountmap" currentTab="Account"/>
                <div className="container main-view">
                    <div className="function-ctn">
                        <TransactionForm />
                        <Logout logout={this.props.logout}/>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            {bankCards}
                        </div>
                        <div className="col-md-9">
                            <h2 className="account-type">Checkings</h2>
                            <p className="balance">3000</p>
                            <div className="trans-func">
                                <button className="btn btn-secondary">Deposit</button>
                                <button className="btn btn-secondary">Withdraw</button>
                            </div>
                            <Table />
                        </div>
                    </div>
                
                </div>
            <Footer />
            </div>);
    }
}

const mapStateToProps = (state) => {
    return ({
        jwt: state.JWT,
        checkings: state.checkings,
        savings: state.savings,
        cds: state.cds
    })
}

const maptDispatchToProps = (dispatch) => () => {
    return ({
        registerAccountHolder: bindActionCreators(registerAccountHolder, dispatch),
        logout: bindActionCreators(logout, dispatch)      
    })
}

export default connect(mapStateToProps, maptDispatchToProps)(Account);