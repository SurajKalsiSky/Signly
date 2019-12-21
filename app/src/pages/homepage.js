import React, { Component } from 'react';
import './homepage.css';

export default class Navbar extends Component {
    state = {
        loggedInAs: null,
        message: "hi"
    }

    componentDidMount() {
        fetch("http://localhost:8080/", {mode: 'no-cors'})
          .then(
            (result) => {
              this.setState({
                message: 'Received message',
              });
            },
            (error) => {
              throw(error);
            }
          )
      }

    handleEmployeeSignIn = () => {
        this.setState({
            loggedInAs: 'EMPLOYEE'
        })
    }

    handleInterpreterSignIn = () => {
        this.setState({
            loggedInAs: 'INTERPRETER'
        })
    }

    render() {
        if (!this.state.loggedInAs) {
            return (
                <div className="Homepage">
                    <header className="Homepage-welcome-message">
                        <p> Welcome to the Signly booking app </p>
                        <p className="Homepage-second-message"> Who are you? </p>
                    </header>
                    <div className="Homepage-buttons">
                        <button type="button" className="Homepage-btn" onClick={this.handleEmployeeSignIn}>
                            Employee
                        </button>
                        <button type="button" className="Homepage-btn" onClick={this.handleInterpreterSignIn}>
                            Interpreter
                        </button>
                    </div>
                </div>
            );
        } else if (this.state.loggedInAs === 'EMPLOYEE') {
            return (
                <div className="Homepage">
                    <header className="Homepage-welcome-message">
                        <p> Employee booking page </p>
                        <p className="Homepage-second-message"> Please make your booking </p>
                        <p className="Homepage-second-message"> {this.state.message} </p>
                    </header>
                </div>
            )
        } else {
            return (
                <div className="Homepage">
                    <header className="Homepage-welcome-message">
                        <p> Interpreter page </p>
                        <p className="Homepage-second-message"> Please select an available slot </p>
                    </header>
                </div>
            )
        }
    }
}