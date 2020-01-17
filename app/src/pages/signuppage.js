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
                        <p> Sign up page </p>
                        <p className="Homepage-second-message"> Please enter your username </p>
                    </header>
                    {/* text box */}
                    <div className="Homepage-buttons">
                        <Button color='teal' size='large' compact onClick={() => this.props.handleSignIn('EMPLOYEE')}>Sign Up</Button>
                    </div>
                </div>
            </div>
        );
    }
}