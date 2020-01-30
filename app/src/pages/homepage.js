import React, { Component } from 'react';
import WelcomePage from './welcomepage';
import SignInPage from './signinpage';
import SignUpPage from './signuppage';
import EmployeeViewBookings from './employeehomepage';
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
                    return <EmployeeViewBookings goToMakeBookingPage={this.props.goToMakeBookingPage} goBackAPage={this.props.goBackAPage} />
                } else {
                    // return <InterpreterViewBookings goBackAPage={this.props.goBackAPage} />
                }
                break;
            case 3:
                return <MakeBookingPage goBackAPage={this.props.goBackAPage} />
            default:
                // error message
        }
    }
}