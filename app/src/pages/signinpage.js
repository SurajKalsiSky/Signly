import React, { Component } from 'react';
import BackButton from '../components/backbutton';
import SignInForm from '../components/signinform';
import './homepage.css';

export default class SignInPage extends Component {
    render() {
        return (
            <div>
                <BackButton goBackAPage={this.props.goBackAPage} />
                <div className="Homepage">
                    <header className="Homepage-welcome-message">
                        <p> Sign In </p>
                    </header>
                    <SignInForm handleSignIn={this.props.handleSignIn} />
                </div>
            </div>
        );
    }
}