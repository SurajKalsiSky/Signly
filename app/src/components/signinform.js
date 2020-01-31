import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './components.css';

export default class SignInForm extends Component {

    constructor(props) {
      super(props);
      this.state = {username: '', userType: 'EMPLOYEE', usernameError: null, passwordError: null, password: ''};
    }

    handleUsernameChange = (event) => {
      this.setState({username: event.target.value.toLowerCase()});
    }

    handlePasswordChange = (event) => {
      this.setState({password: event.target.value});
    }

    handleOnSubmit = () => {
      this.setState({usernameError: null, passwordError: null});
      if(this.state.username.length == 0) {
        this.setState({usernameError: {content: "Please enter a valid Email Address", pointing: 'below'}});
      }
      if(this.state.password.length < 8) {
        this.setState({passwordError: {content: "Password must be at least 8 characters long", pointing: 'below'}});
      }
      if (this.state.username.length > 0 && this.state.password.length >= 8) {
        this.props.handleSignIn(this.state.userType, this.state.username);
      }
    }

    handleUserTypeChange = (event) => {
      this.setState({userType: event.target.value});
  }
  
    render() {
      return (
        <div className="">
            <Form>
                  <h5>Who are you?</h5>
                  <select value={this.state.userType} onChange={(e) => this.handleUserTypeChange(e)}>
                      <option value="EMPLOYEE">Employee</option>
                      <option value="INTERPRETER">Interpreter</option>
                  </select> 
              <Form.Input style={{width: "400px"}} error={this.state.usernameError} type='email' onChange={(e) => this.handleUsernameChange(e)} value={this.state.username} fluid label='Email Address' placeholder='Email' />
              <Form.Input style={{width: "400px"}} error={this.state.passwordError} onChange={(e) => this.handlePasswordChange(e)} fluid type='password' label='Password' placeholder='Password' />
            </Form>

            <div style={{marginTop: '10px'}}>
              <div className="Homepage-buttons">
                  <Button type='submit' color='teal' size='large' value='submit' compact onClick={() => this.handleOnSubmit()}>Sign in</Button>
              </div>
            </div>
        </div>
      );
    }
  }