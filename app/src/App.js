import React, { Component } from 'react';
import NavBar from './components/navbar.js';
import Homepage from './pages/homepage.js';

export default class App extends Component {
  state = {
    page: 0,
    signInOrUp: null,
    loggedInAs: null,
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

  goToPage = (pageNumber) => {
      this.setState({
          page: pageNumber,
      })
  }

  goBackAPage = () => {
      this.setState({
          page: this.state.page - 1,
      })
  }

  render() {
    return (
      <div>
        <NavBar
          page={this.state.page}
          goToPage={this.goToPage}
        />
        <Homepage
          page={this.state.page}
          signInOrUp={this.state.signInOrUp}
          loggedInAs={this.state.loggedInAs}
          goBackAPage={this.goBackAPage}
          handleSignIn={this.handleSignIn}
          goToSignInOrUpPage={this.goToSignInOrUpPage}
          goToPage={this.goToPage}
        />
      </div>
    );
  }
}
