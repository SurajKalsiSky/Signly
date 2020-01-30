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
<<<<<<< HEAD
        }
    }

    noBookings = () => (<p className="no-bookings"> You have no bookings </p>)

<<<<<<< HEAD
=======
export default class EmployeeViewBookings extends Component {
    constructor(props) {
        super(props)
        this.state = {
           students: [
              { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
              { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
              { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
              { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
           ]
=======
>>>>>>> f672357... wip
        }
    }
<<<<<<< HEAD
>>>>>>> 573f513... wip
=======

    noBookings = () => (<p className="no-bookings"> You have no bookings </p>)

>>>>>>> f672357... wip
    render() {
        return (
            <div>
                <BackButton goBackAPage={this.props.goBackAPage} />
                <div className="Homepage">
                    <header className="Homepage-welcome-message Bookings-view">
                        <p> Employee view bookings page </p>
                        <div>
                            <Button disabled content='View all bookings' basic color='teal' size='small' />
<<<<<<< HEAD
<<<<<<< HEAD
                            <Button basic color='teal' size='small' onClick={() => this.props.goToMakeBookingPage()}>Make new booking</Button>
                        </div>
                        
                        {this.state.tableData ? <EmployeeTable tableData={employeeBookingsMock} /> : this.noBookings()}
=======
                            <Button basic color='teal' size='small' onClick={() => this.props.goBackAPage()}>Make new booking</Button>
                        </div>
                        <table id='BookingTable'>
                            <tbody>
                                <tr>{this.renderTableHeader()}</tr>
                                {this.renderTableData()}
                            </tbody>
                        </table>
>>>>>>> 573f513... wip
=======
                            <Button basic color='teal' size='small' onClick={() => this.props.goToMakeBookingPage()}>Make new booking</Button>
                        </div>
                        
                        {this.state.tableData ? <EmployeeTable tableData={employeeBookingsMock} /> : this.noBookings()}
>>>>>>> f672357... wip
                    </header>
                </div>
            </div>
        )
    }
}