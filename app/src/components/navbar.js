import React, { Component } from 'react';
import './navbar.css';

import Logo from '../assets/logo2.png';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={Logo} alt="Signly" className="nav-logo" />
                    </div>
                    <ul className={"nav-links show-nav"}>
                        {/* <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            Press me
                        </button> */}
                    </ul>
                </div>
            </nav>
        )
    }
}
