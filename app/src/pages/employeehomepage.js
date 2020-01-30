import React, { Component } from 'react';
import BackButton from '../components/backbutton';
import EmployeeTable from '../components/table';
import { Button } from 'semantic-ui-react'
import './homepage.css';
const employeeBookingsMock = require('../mocks/employeeBookings.json');

export default class EmployeeViewBookings extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tableData: true
        }
    }

    noBookings = () => (<p className="no-bookings"> You have no bookings </p>)

    render() {
        return (
            <div>
                <BackButton goBackAPage={this.props.goBackAPage} />
                <div className="Homepage">
                    <header className="Homepage-welcome-message Bookings-view">
                        <p> Employee view bookings page </p>
                        <div>
                            <Button disabled content='View all bookings' basic color='teal' size='small' />
                            <Button basic color='teal' size='small' onClick={() => this.props.goToMakeBookingPage()}>Make new booking</Button>
                        </div>
                        
                        {this.state.tableData ? <EmployeeTable tableData={employeeBookingsMock} /> : this.noBookings()}
                    </header>
                </div>
            </div>
        )
    }
}