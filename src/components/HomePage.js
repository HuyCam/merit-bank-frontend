import React, { Component } from 'react';
import {Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import '../styles/homepage.css';

import elderlyPeople from '../images/elderly-couple.jpg';
import mortgage from '../images/rounded-mortgage.png';
const style = {
    form: {
        border: '1px solid black',
        backgroundColor: 'rgb(252, 252, 252,0.8)',
        padding: '1em 2em 1em 2em',
        borderRadius: '5px'
    }
}
class Home extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log("Current submit " + JSON.stringify(values));
        this.props.history.push('/account');    // route to /account path
    }

    render() {
        return (
            <div className="homepage">
                <Header mapType="homemap" currentTab="Home"/>
                <div className="jumbotron" style={style.jumpotron}>
                    <div className="parent-form">
                        <LocalForm className="sign-in-form" onSubmit={(values) => this.handleSubmit(values)} >
                            <div className="form-group">
                                <Control.text model=".username" id="username" name="username" 
                                    placeholder="User Name"
                                    className="form-control"
                                />
                            </div>
                            <div className="form-group">
                                <Control.password model=".password" id="password" name="password" 
                                    placeholder="Password"
                                    className="form-control"
                                />
                            </div>
                            <div className="btn-ctn"><button type="submit" className="btn btn-primary">Submit</button></div>
                            <p><Link to="/signup">Register</Link></p>
                        </LocalForm>
                    </div>
                </div>

                <div className="container-fluid ctn-body">
                    <div className="row">
                        <div className="col-md-5">
                            <img className="img-minimized" alt="elderly people" src={elderlyPeople} />
                        </div>
                        <div className="col-md-7">
                            <div className="content content-full">
                                <h1>IRA</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="container-fluid ctn-body">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="content content-small">
                                <h1>Mortgage</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <img className="img-full" alt="elderly people" src={mortgage} />
                            
                        </div>
                    </div>
                </div>
                <Footer />
            </div>);
    }
}

export default Home;