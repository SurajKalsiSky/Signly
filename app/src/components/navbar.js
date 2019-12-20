import React, { Component } from 'react';
import './navbar.css';

import Logo from '../assets/logo2.png';
// import { FaAlignRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        // const { isOpen } = this.state;
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={Logo} alt="Signly" className="nav-logo" />
                    </div>
                    <ul className={"nav-links show-nav"}>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            Press me
                        </button>
                        {/* <li><Link to="/">Home</Link></li>
                        <li><Link to="/rooms">Rooms</Link></li> */}
                    </ul>
                </div>
            </nav>
        )
    }
}
