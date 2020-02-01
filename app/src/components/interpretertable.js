import React, { Component } from 'react';
import { Button, Table, Header, Segment, Portal } from 'semantic-ui-react'
import './components.css'

export default class InterpreterTable extends Component {
    onAccept = (id) => {
    const submitData = {
        "firstName":"rrr",
        "lastName":"Remus",
        "emailAddress": "ggg",
    }

    const url = 'http://localhost:8080/bookings/' + id.toString();
    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(submitData)
        }).then(res => this.handleOpen())
        .catch(console.log("failed"))
}

    createRow = (rowData = {}) => {
  const { firstName, lastName, state, companyName, bookingName, timeTo, timeFrom, id } = rowData;

  const date = timeTo.slice(0, 10);

  return (
    <Table.Row>
      <Table.Cell>{bookingName}</Table.Cell>
      <Table.Cell>{firstName} {lastName}</Table.Cell>
      <Table.Cell>{companyName}</Table.Cell>
      <Table.Cell>{date}</Table.Cell>
      <Table.Cell>12:30pm</Table.Cell>
      <Table.Cell>2 hours</Table.Cell>
      {state == 'ACCEPTED' ? <Table.Cell positive>{state}</Table.Cell> : <Table.Cell negative>{state}</Table.Cell>}
      {state == 'PENDING' ? <Table.Cell onClick={() => this.onAccept(id)} selectable positive><a href='#'>Accept</a></Table.Cell> : null}
    </Table.Row>
  )
}  
  state = { open: false }

  handleClose = () => this.setState({ open: false })
  handleOpen = () => {
    this.props.updateTable();
    this.setState({ open: true })
  }

  render() {
    const { open } = this.state
    return (
      <div className="table">
        <Table compact size='small'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Title</Table.HeaderCell>
              <Table.HeaderCell>Full Name</Table.HeaderCell>
              <Table.HeaderCell>Company</Table.HeaderCell>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Duration</Table.HeaderCell>
              <Table.HeaderCell>Booking status</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {
            this.props.tableData && this.props.tableData.map((rowData) => {
                return (this.createRow(rowData));
            })
          }
          </Table.Body>
        </Table>

        <Portal onClose={this.handleClose} open={open}>
            <Segment
              style={{
                left: '40%',
                position: 'fixed',
                top: '50%',
                zIndex: 1000,
              }}
            >
              <Header>Success!</Header>
              <p>You have successfully accepted the booking, remember to carry and display your badge at all times</p>

              <Button
                content='Close'
                positive
                onClick={this.handleClose}
              />
            </Segment>
          </Portal>
      </div>
    )
  }
}
