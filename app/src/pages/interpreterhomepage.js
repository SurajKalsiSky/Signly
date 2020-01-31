import React, { Component } from 'react';
import BackButton from '../components/backbutton';
import InterpreterTable from '../components/interpretertable';
import { Button } from 'semantic-ui-react'
import './homepage.css';
const employeeBookingsMock = require('../mocks/employeeBookings.json');

export default class InterpreterViewBookings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tableData: null
        }
    }

    componentDidMount() {
        this.updateTable()
    }

    updateTable = () => {
        fetch('http://localhost:8080/bookings')
            .then(response => response.json())
            .then(json => Array.isArray(json) && this.setState({tableData: json}))
    }

    noBookings = () => (<p className="no-bookings"> You have no bookings </p>)

    render() {
        return (
            <div>
                <BackButton goBackAPage={this.props.goBackAPage} />
                <div className="Homepage">
                    <header className="Homepage-welcome-message Bookings-view">
                        <p> Interpreter page </p>
                        <h4>Logged in as: {this.props.username}</h4>
                        {this.state.tableData ? <InterpreterTable tableData={this.state.tableData} username={this.props.username} updateTable={this.updateTable} /> : this.noBookings()}
                    </header>
                </div>
            </div>
        )
    }
}