import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import './navbar.css';

import Logo from '../assets/logo2.png';

export default class Navbar extends Component {
    state = { activeItem: 'Your Bookings' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={Logo} alt="Signly" className="nav-logo" />
                </div>
                <ul className={"nav-links show-nav"}>
                    <div>
                        <Menu inverted secondary>
                            <Menu.Item
                                name='Your Bookings'
                                active={activeItem === 'Your Bookings'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='Create Booking Request'
                                active={activeItem === 'Create Booking Request'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Item
                                name='Settings'
                                active={activeItem === 'Settings'}
                                onClick={this.handleItemClick}
                            />
                            <Menu.Menu position='right'>
                                <Menu.Item
                                name='logout'
                                active={activeItem === 'logout'}
                                onClick={this.handleItemClick}
                                />
                            </Menu.Menu>
                        </Menu>
                    </div>
                </ul>
            </div>
        </nav>
    )
  }
}
