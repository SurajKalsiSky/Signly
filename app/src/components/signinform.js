import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './components.css';

export default class SignInForm extends Component {
    constructor(props) {
      super(props);
      this.state = {username: '', userType: 'EMPLOYEE'};

      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
    }

    handleUsernameChange(event) {
      this.setState({username: event.target.value.toLowerCase()});
    }

    handleUserTypeChange(event) {
      this.setState({userType: event.target.value});
  }
  
    render() {
      return (
        <div className="">
            <Form>
                <h5>Who are you?</h5>
                  <select value={this.state.userType} onChange={this.handleUserTypeChange}>
                      <option value="EMPLOYEE">Employee</option>
                      <option value="INTERPRETER">Interpreter</option>
                  </select>
                <Form.Input style={{width: "400px"}} onChange={this.handleUsernameChange} value={this.state.username} fluid label='Email Address' placeholder='Email' />
            </Form>

            <div style={{marginTop: '10px'}}>
              <div className="Homepage-buttons">
                  <Button color='teal' size='large' compact onClick={() => this.props.handleSignIn(this.state.userType, this.state.username)}>Sign in</Button>
              </div>
            </div>
        </div>
      );
    }
  }