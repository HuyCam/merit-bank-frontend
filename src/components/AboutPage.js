import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

import '../styles/about.css'
import huy from '../images/devs/huy.jpg';
import austin from '../images/devs/austin.jpg';
import alice from '../images/devs/alice.jpg';
const About = () => {
    return (
        <div className="about">
            <Header mapType="homemap" currentTab="About"/>
            <div className="title">
                <h1>Dev Team</h1>
            </div>
            
            <div className="img-container">
                <div className="img-figure">
                    <img src={austin} alt="..." />
                    <h3>Austin</h3>
                </div>

                <div className="img-figure">
                    <img src={huy} alt="..." />
                    <h3>Huy</h3>
                </div>

                <div className="img-figure">
                    <img src={alice} alt="..." />
                    <h3>Alice </h3>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;