import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
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
                { this.props.page > 1 ?
                    <div>
                        <Menu inverted secondary>
                            <Menu.Item
                                name='Your Bookings'
                                active={this.props.page === 2}
                                onClick={() => this.props.goToPage(2)}
                            />
                            <Menu.Item
                                name='Create Booking Request'
                                active={this.props.page === 3}
                                onClick={() => this.props.goToPage(3)}
                            />
                            <Menu.Item
                                name='Settings'
                                active={this.props.page === 4}
                                onClick={() => this.props.goToPage(4)}
                            />
                            <Menu.Item
                                name='logout'
                                active={this.props.page === 0}
                                onClick={() => this.props.goToPage(0)}
                            />
                        </Menu>
                    </div>
                : null}
                </ul>
            </div>
        </nav>
    )
  }
}
