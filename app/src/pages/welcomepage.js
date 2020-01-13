import React, { Component } from 'react';
import './homepage.css';

export default class WelcomePage extends Component {
    render() {
        return (
            <div className="Homepage">
                <header className="Homepage-welcome-message">
                    <p> Welcome to the Signly booking app </p>
                    <p className="Homepage-second-message"> Who are you? </p>
                </header>
                <div className="Homepage-buttons">
                    <button type="button" className="Homepage-btn" onClick={() => this.props.handleSignIn('EMPLOYEE')}>
                        Employee
                    </button>
                    <button type="button" className="Homepage-btn" onClick={() => this.props.handleSignIn('INTERPRETER')}>
                        Interpreter
                    </button>
                </div>
            </div>
        );
    }
}