import React, { Component } from 'react';
import {Control, LocalForm, Errors } from 'react-redux-form';

import Header from '../components/Header';
import Footer from '../components/Footer';

import '../styles/signup.css';

const required = val => val && val.length;
const maxLength = len =>{
    return val => !(val) || (val.length <= len);
} ;
const minLength = len => {
    return (val) => val && (val.length >= len); 
}
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
class Signup extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(values) {
        console.log("Current submit " + JSON.stringify(values));
    }

    render() {
        return (
            <div className="signup-page">
            <Header mapType="homemap" currentTab=""/>
            <h1>Sign Up</h1>
            <LocalForm className="signup-form" onSubmit={(values) => this.handleSubmit(values)} >
                <div className="form-group">
                    <Control.text model=".username" id="username" name="username" 
                        placeholder="User Name"
                        className="form-control"
                        validators= {{
                            required, maxLength: maxLength(30), minLength: minLength(3)
                        }}
                    />
                    <Errors
                        className="text-danger"
                        model=".username"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 30 characters or less'
                        }}
                        />
                </div>
                <div className="form-group">
                    <Control.password model=".password" id="password" name="password" 
                        placeholder="Password"
                        className="form-control"
                        validators= {{
                            required, maxLength: maxLength(30), minLength: minLength(3)
                        }}
                    />
                    <Errors
                        className="text-danger"
                        model=".password"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: 'Must be greater than 2 characters',
                            maxLength: 'Must be 30 characters or less'
                        }}
                    />
                </div>
                <div className="form-group">
                    <Control.text model=".email" id="email" name="email" 
                        placeholder="exammple@example.com"
                        className="form-control"
                        validators={{
                            required, validEmail
                        }}
                    />
                    <Errors
                        className="text-danger"
                        model=".email"
                        show="touched"
                        messages={{
                            required: 'Required',
                            validEmail: 'Email must be in the format name@domain'
                        }}
                    />
                </div>
                <div className="form-group">
                    <Control.text model=".ssn" id="ssn" name="ssn" 
                        placeholder="xxx-xx-xxxx"
                        className="form-control"
                        validators={{
                            required, isNumber
                        }}
                    />
                    <Errors
                        className="text-danger"
                        model=".ssn"
                        show="touched"
                        messages={{
                            required: 'Required',
                            isNumber: 'SSN must be numbers'
                        }}
                    />
                </div>
                <div className="btn-ctn"><button type="submit" className="btn btn-primary">Submit</button></div>
            </LocalForm>
            <Footer />
            </div>)
    }
}

export default Signup;