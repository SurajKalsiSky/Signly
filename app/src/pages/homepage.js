import React, { Component } from 'react';
import WelcomePage from './welcomepage';
import './homepage.css';

export default class Homepage extends Component {
    state = {
        loggedInAs: null,
        message: "hi"
    }

    componentDidMount() {
        fetch("http://localhost:8080/", {mode: 'no-cors'})
          .then(
            (result) => {
            console.log("TCL: Navbar -> componentDidMount -> result", result)
              this.setState({
                message: 'Received message',
              });
            },
            (error) => {
              throw(error);
            }
          )
      }

    handleSignIn = (userType) => {
        console.log("TCL: Navbar -> handleEmployeeSignIn -> userType", userType)
        this.setState({
            loggedInAs: userType
        })
    }

    render() {
        if (!this.state.loggedInAs) {
            return (
                <WelcomePage handleSignIn={this.handleSignIn} />
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