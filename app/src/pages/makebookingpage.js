import React, { Component } from 'react';
import BackButton from '../components/backbutton';
import EmployeeTable from '../components/table';
import { Button } from 'semantic-ui-react'
import './homepage.css';
const employeeBookingsMock = require('../mocks/employeeBookings.json');

export default class MakeBookingPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tableData: null
        }
    }

    noBookings = () => (<p className="no-bookings"> You have no bookings </p>)

    render() {
        return (
            <div>
                <BackButton goBackAPage={this.props.goBackAPage} />
                <div className="Homepage">
                    <header className="Homepage-welcome-message Bookings-view">
                        <p> Create new booking page </p>
                        <div>
                            <Button content='View all bookings' basic color='teal' size='small' onClick={() => this.props.goBackAPage()} />
                            <Button disabled basic color='teal' size='small'>Make new booking</Button>
                        </div>
                        
                        {this.state.tableData ? <EmployeeTable tableData={employeeBookingsMock} /> : this.noBookings()}
                    </header>
                </div>
            </div>
        )
    }
}