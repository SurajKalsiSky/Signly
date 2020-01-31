import React, { Component } from 'react';
import { Button, Form } from 'semantic-ui-react'
import './components.css';

const options = [
      { key: 'E', text: 'Employee', value: 'Employee' },
      { key: 'I', text: 'Interpreter', value: 'Interpreter' },
    ]

export default class SignInForm extends Component {

    constructor(props) {
      super(props);
      this.state = {username: '', userType: 'EMPLOYEE', error: null};

      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handleUserTypeChange = this.handleUserTypeChange.bind(this);
      this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    handleUsernameChange(event) {
      this.setState({username: event.target.value.toLowerCase()});
    }

    handleOnSubmit() {
      if(this.state.username.length==0) {
        this.setState({error: {content: "Please enter a valid Email Address", pointing: 'below'}});
      }
      else {
        this.props.handleSignIn(this.state.userType, this.state.username);
      }
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
              <Form.Input style={{width: "400px"}} error={this.state.error} type='email' onChange={this.handleUsernameChange} value={this.state.username} fluid label='Email Address' placeholder='Email' />
              <Form.Input style={{width: "400px"}} fluid label='Password' placeholder='Password' />
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