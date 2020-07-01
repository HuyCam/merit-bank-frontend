import React from 'react';
import {Control, LocalForm, Errors } from 'react-redux-form';
import {Button, Modal} from 'react-bootstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { deposit } from '../actions/actions';
import Table from '../components/Table';

const isNumber = (val) => !isNaN(Number(val));
const positive = (val) => parseFloat(val) > 0;

class AccountView extends React.Component { 
    constructor(props) {
        super(props);

        this.state = {
            show: false,
            transactionType: ''
        }

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {

        console.log('Transaction type : ' + this.state.transactionType+ ' Account Number: ' + this.props.currentAccount.acc.accountNumber + ' Amount ' + values.amount + ' Account Type: ' + this.props.currentAccount.accountType );
        if (this.state.transactionType === 'deposit') {
            this.props.deposit({
                amount: values.amount,
                accountNumber: this.props.currentAccount.acc.accountNumber,
                accountType: this.props.currentAccount.accountType,
            }, this.props.jwt)
        }
        this.handleClose();
    }
    
    handleClose() {
        this.setState({
            show: false,
            transactionType: ''
        })
    }
    
    handleShow(transactionType) {
    this.setState({
        show: true,
        transactionType: 'deposit'
    })
    }

    render() {
        if (this.props.currentAccount) {
            const {balance, accountNumber } = this.props.currentAccount.acc;
            return(
                <>
                <h2 className="account-type">Account Number: <strong>{accountNumber}</strong></h2>
                <p className="balance">Balance: <strong>{new Intl.NumberFormat('en-emodeng',{ style: 'currency' ,currency: 'USD'}).format(balance)}</strong></p>
                <div className="trans-func">
                    <button onClick={() => this.handleShow('deposit')} className="btn btn-secondary">Deposit</button>
                    <button onClick={() => this.handleShow('withdraw')} className="btn btn-secondary">Withdraw</button>
                </div>

                <Modal show={this.state.show} onHide={this.handleClose}>
                <LocalForm className="pop-up" onSubmit={(values) => {
                            this.handleSubmit(values)
                        }} >
                <Modal.Header closeButton>
                    <Modal.Title>{this.state.transactionType.toUpperCase()}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Control.text model=".amount" id="amount" name="amount" 
                                className="form-control form-field"
                                parser={val => (parseFloat(val) || 0)}
                                validators= {{
                                    isNumber, positive
                                }}
                    />
                    <Errors
                        className="text-danger"
                        model=".balance"
                        show="touched"
                        messages={{
                            isNumber: 'Must be numbers. ',
                            positive: 'Must be positive. '
                        }}
                    />
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                    Close
                    </Button>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </Modal.Footer>
                </LocalForm>
                </Modal>
                <Table />
                </>
            )
        } else {
            return (<div></div>);
        }
    
    }
}

const mapStateToProps = (state) => {
    return {
        jwt: state.JWT
    }
}

const mapDispatchToProps = (dispatch) => () => {
    return {
        deposit: bindActionCreators(deposit, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountView);