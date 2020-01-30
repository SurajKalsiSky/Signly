import React, { Component } from 'react';
import BackButton from '../components/backbutton';
import EmployeeTable from '../components/table';
import { Button, Form  } from 'semantic-ui-react';
import './homepage.css';
const employeeBookingsMock = require('../mocks/employeeBookings.json');

export default class MakeBookingPage extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
        const { value } = this.state
        return (
            <div>
            <BackButton goBackAPage={this.props.goBackAPage} />
                <div className="Make-booking-page">
                    <Form>
                        <h3>Appointment Details</h3>
                        <Form.Input fluid label='Booking Title' placeholder='Title' />
                        <Form.Input fluid label='First Name' placeholder='First Name' />
                        <Form.Input fluid label='Last Name' placeholder='Last Name' />
                        <Form.Input type='date' label='Start Date' placeholder='Date' />
                        <Form.Group inline>
                            <Form.Input label='Start Time' placeholder='Start Time' />
                            <Form.Input label='Duration' placeholder='HH:MM' />
                        </Form.Group>   
                        <Form.Input fluid label='Company' placeholder='Company' />
                        <Form.Input fluid label='Email Address' placeholder='Email' />
                    </Form>

                    <div style={{marginTop: '10px'}}>
                        <Button floated='right' color='teal' onClick={() => this.props.goBackAPage()}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}