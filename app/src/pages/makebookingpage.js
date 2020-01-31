import React, { Component } from 'react';
import BackButton from '../components/backbutton';
import { Button, Form  } from 'semantic-ui-react';
import './homepage.css';
const employeeBookingsMock = require('../mocks/employeeBookings.json');

export default class MakeBookingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onSubmit = () => {
        const submitData = {
            "firstName":this.state.firstName || "",
            "lastName":this.state.lastName || "",
            "company":this.state.company || "",
            "bookingName": this.state.bookingTitle || "",
            "emailAddress": this.props.username || "",
            "startTime":this.state.startTime || "",
            "endTime":this.state.endTime || ""
        }

        fetch('http://localhost:8080/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(submitData)
        }).then(res => console.log(res.status))
        .catch(this.props.goBackAPage())
    }

    handleChange = (event, fieldName) => {
        this.setState({[fieldName]: event.target.value});
    }

    handleFirstNameChange = (event) => {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange(event){
        this.setState({lastName: event.target.value});
    }

    handleDateChange(event){
        this.setState({date: event.target.value});
    }

    handleStartTimeChange(event){
        this.setState({startTime: event.target.value});
    }

    handleEndTimeChange(event){
        this.setState({endTime: event.target.value});
    }

    handleCompanyChange(event){
        this.setState({company: event.target.value});
    }

    render() {
        const { value } = this.state
        return (
            <div>
                <div className="Make-booking-page">
                    <Form>
                        <h3>Appointment Details</h3>
                        <Form.Input fluid label='Booking Title' placeholder='Title'
                        onChange={(e) => this.handleChange(e, "bookingTitle")} 
                        value={this.state.bookingTitle} />
                        <Form.Input fluid label='First Name' placeholder='First Name' 
                        onChange={(e) => this.handleChange(e, "firstName")}
                        value={this.state.firstName} />
                        <Form.Input fluid label='Last Name' placeholder='Last Name' 
                        onChange={(e) => this.handleChange(e, "lastName")}
                        value={this.state.lastName} />
                        <Form.Input type='date' label='Start Date' placeholder='Date' 
                        onChange={(e) => this.handleChange(e, "date")}
                        value={this.state.date} />
                        <Form.Group inline>
                            <Form.Input label='Start Time' placeholder='Start Time'
                        onChange={(e) => this.handleChange(e, "startTime")}
                        value={this.state.startTime} />
                            <Form.Input label='End Time' placeholder='HH:MM' 
                        onChange={(e) => this.handleChange(e, "endTime")}
                        value={this.state.endTime} />
                        </Form.Group>   
                        <Form.Input fluid label='Company' placeholder='Company' 
                        onChange={(e) => this.handleChange(e, "company")}
                        value={this.state.company} />
                    </Form>

                    <div style={{marginTop: '10px'}}>
                        <Button floated='right' color='teal' 
                        onClick={() => this.onSubmit()}>
                            Submit
                        </Button>
                    </div>
                </div>
            </div>    
        )
    }
}