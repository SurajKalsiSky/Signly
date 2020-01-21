import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'

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
        <div>
            <form>
                <label>
                    Who are you?
                    <select value={this.state.userType} onChange={this.handleUserTypeChange}>
                        <option value="EMPLOYEE">Employee</option>
                        <option value="INTERPRETER">Interpreter</option>
                    </select>
                </label>

                <label>
                    Username:
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                </label>
            </form>

            <div className="Homepage-buttons">
                <Button color='teal' size='large' compact onClick={() => this.props.handleSignIn(this.state.userType)}>Sign in</Button>
            </div>
        </div>
      );
    }
  }