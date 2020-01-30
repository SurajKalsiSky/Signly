import React, { Component } from 'react';
import BackButton from '../components/backbutton';
import { Button, Form  } from 'semantic-ui-react';
import './homepage.css';
const employeeBookingsMock = require('../mocks/employeeBookings.json');

export default class MakeBookingPage extends Component {
    state = {
        submitData: {
            "firstName":this.props.username,
            "lastName":"Sharma",
            "company":"Sky",
            "bookingName": "Signly second booking",
            "emailAddress": this.props.username,
            "startTime":"randomStartTime",
            "endTime":"randomEndTime"
        }
    }

    onSubmit = () => {
        fetch('http://localhost:8080/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.submitData)
        }).then(res => console.log(res.status))
        .catch(this.props.goBackAPage())
    }

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
                    </Form>

                    <div style={{marginTop: '10px'}}>
                        <Button floated='right' color='teal' onClick={() => this.onSubmit()}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}