import React from 'react';
import '../styles/header.css';
import { NavLink } from 'react-router-dom';

import MAlogo from '../images/merit america.png';

/*
 Header need 2 props to work properly.
 mapType: to specify list of nav item
 currentTap: to hight light current Tab
*/
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            homemap: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: '/about',
                    text: 'About'
                },
                {
                    url: '/cd',
                    text: 'CD'
                }
            ],
            accountmap: {

            }
        }

        this.renderNavLink = this.renderNavLink.bind(this);
    }

    renderNavLink() {
        let navList = this.state[this.props.mapType];
        let currentTab = this.props.currentTab;
        let navTabs = navList.map(nav => {
            if (nav.text === currentTab) {
                return <NavLink id={nav.text} className="nav-item current-tab" to={nav.url}>{nav.text}</NavLink>
            } else {
                return <NavLink id={nav.text} className="nav-item" to={nav.url}>{nav.text}</NavLink>
            }
            
        })
        return navTabs;
    }

    render() {
        return(
            <div className="header">
                <div className="header-container">
                <div className="logo-container">
                    <img className="logo" src={MAlogo} alt="Merit America logo" />
                </div>
                <div>
                    <div className="navigation-container">
                        {this.renderNavLink()}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Header;