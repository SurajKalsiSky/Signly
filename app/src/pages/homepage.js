import React, { Component } from 'react';
import WelcomePage from './welcomepage';
import SignInPage from './signinpage';
import SignUpPage from './signuppage';
import EmployeeViewBookings from './employeehomepage';
import InterpreterViewBookings from './interpreterhomepage';
import MakeBookingPage from './makebookingpage';
import './homepage.css';

export default class Homepage extends Component {
    render() {
        console.log("TCL: Homepage -> render -> this.props.page", this.props.page)
        switch (this.props.page) {
            case 0:
                return <WelcomePage goToSignInOrUpPage={this.props.goToSignInOrUpPage} />;
            case 1:
                if (this.props.signInOrUp === "SIGN IN") {
                    return <SignInPage handleSignIn={this.props.handleSignIn} goBackAPage={this.props.goBackAPage} />
                } else {
                    return <SignUpPage handleSignIn={this.props.handleSignIn} goBackAPage={this.props.goBackAPage} />
                }
            case 2:
                if (this.props.loggedInAs === "EMPLOYEE") {
                    return <EmployeeViewBookings goToPage={this.props.goToPage} goBackAPage={this.props.goBackAPage} username={this.props.username} />
                } else {
                    return <InterpreterViewBookings goBackAPage={this.props.goBackAPage} goToPage={this.props.goToPage} username={this.props.username} />
                }
            case 3:
                return <MakeBookingPage goBackAPage={this.props.goBackAPage} username={this.props.username} />
            default:
                // error message
        }
    }
}