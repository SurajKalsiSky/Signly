import React, { Component } from 'react';
import WelcomePage from './welcomepage';
import SignInPage from './signinpage';
import SignUpPage from './signuppage';
import EmployeeViewBookings from './employeehomepage';
<<<<<<< HEAD
<<<<<<< HEAD
import MakeBookingPage from './makebookingpage';
=======
>>>>>>> 573f513... wip
=======
import MakeBookingPage from './makebookingpage';
>>>>>>> f672357... wip
import './homepage.css';

export default class Homepage extends Component {
    state = {
        page: 0,
        signInOrUp: null,
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

    goToSignInOrUpPage = (signInOrUp) => {
        this.setState({
            page: 1,
            signInOrUp,
        })
    }

    handleSignIn = (userType) => {
        this.setState({
            page: 2,
            loggedInAs: userType,
        })
    }

    goToMakeBookingPage = () => {
        this.setState({
            page: 3,
        })
    }

    goBackAPage = () => {
        this.setState({
            page: this.state.page - 1,
        })
    }


    render() {
        switch (this.state.page) {
            case 0:
                return <WelcomePage goToSignInOrUpPage={this.goToSignInOrUpPage} />;
            case 1:
                if (this.state.signInOrUp === "SIGN IN") {
                    return <SignInPage handleSignIn={this.handleSignIn} goBackAPage={this.goBackAPage} />
                } else {
                    return <SignUpPage handleSignIn={this.handleSignIn} goBackAPage={this.goBackAPage} />
                }
            case 2:
                if (this.state.loggedInAs === "EMPLOYEE") {
<<<<<<< HEAD
<<<<<<< HEAD
                    return <EmployeeViewBookings goToMakeBookingPage={this.goToMakeBookingPage} goBackAPage={this.goBackAPage} />
=======
                    return <EmployeeViewBookings goBackAPage={this.goBackAPage} />
>>>>>>> 573f513... wip
=======
                    return <EmployeeViewBookings goToMakeBookingPage={this.goToMakeBookingPage} goBackAPage={this.goBackAPage} />
>>>>>>> f672357... wip
                } else {
                    // return <InterpreterViewBookings goBackAPage={this.goBackAPage} />
                }
                break;
            case 3:
                return <MakeBookingPage goBackAPage={this.goBackAPage} />
            default:
                // error message
        }
    }
}