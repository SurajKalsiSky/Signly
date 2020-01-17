import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import './homepage.css';

export default class WelcomePage extends Component {
    render() {
        return (
            <div className="Homepage">
                <header className="Homepage-welcome-message">
                    <p> Welcome to the Signly booking app </p>
                    <p className="Homepage-second-message"> Please sign in to continue </p>
                </header>
                <div className="Homepage-buttons">
                    <Button basic color='teal' size='big' compact onClick={() => this.props.goToSignInOrUpPage("SIGN IN")}>Sign in</Button>
                    <Button basic color='teal' size='big' compact onClick={() => this.props.goToSignInOrUpPage("SIGN UP")}>Sign up</Button>
                </div>
            </div>
        );
    }
}