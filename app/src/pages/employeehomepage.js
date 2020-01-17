import React, { Component } from 'react';
import BackButton from '../components/backbutton';
import { Button } from 'semantic-ui-react'
import './homepage.css';

export default class SignInPage extends Component {
    render() {
        return (
            <div>
                <BackButton goBackAPage={this.props.goBackAPage} />
                <div className="Homepage">
                    <header className="Homepage-welcome-message">
                        <p> Employee homepage </p>
                        <p className="Homepage-second-message"> What would you like to do? </p>
                        <div className="Employee-buttons">
                            <Button basic color='teal' size='big' onClick={() => this.props.goBackAPage()}>View all bookings</Button>
                            <Button basic color='teal' size='big' onClick={() => this.props.goBackAPage()}>Make new booking</Button>
                        </div>
                    </header>
                </div>
            </div>
        )
    }
}