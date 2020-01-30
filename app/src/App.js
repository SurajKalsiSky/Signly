import React, { Component } from 'react';
import NavBar from './components/navbar.js';
import Homepage from './pages/homepage.js';

export default class App extends Component {
  state = {
    page: 0,
    signInOrUp: null,
    loggedInAs: null,
    username: null,
  }

  goToSignInOrUpPage = (signInOrUp) => {
      this.setState({
          page: 1,
          signInOrUp,
      })
  }

  handleSignIn = (userType, username) => {
    console.log(username)
      this.setState({
          page: 2,
          loggedInAs: userType,
          username,
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
          username={this.state.username}
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
