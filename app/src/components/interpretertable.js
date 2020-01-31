import React, { PureComponent } from 'react';
import { Table } from 'semantic-ui-react'
import './components.css'

const onAccept = (id) => {
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
        }).then(res => console.log(res.status))
        .catch(console.log("failed"))
}

const createRow = (rowData = {}) => {
  const { firstName, lastName, state, companyName, bookingName, timeTo, timeFrom, id } = rowData;

  return (
    <Table.Row>
      <Table.Cell>{bookingName}</Table.Cell>
      <Table.Cell>{firstName} {lastName}</Table.Cell>
      <Table.Cell>{companyName}</Table.Cell>
      <Table.Cell>{timeTo}</Table.Cell>
      <Table.Cell>12:30pm</Table.Cell>
      <Table.Cell>2 hours</Table.Cell>
      <Table.Cell>{state}</Table.Cell>
      {state == 'Open' ? <Table.Cell onClick={() => onAccept(id)} selectable positive><a href='#'>Accept</a></Table.Cell> : null}
    </Table.Row>
  )
}

export default class InterpreterTable extends PureComponent {
  render() {
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
                return (createRow(rowData));
            })
          }
          </Table.Body>
        </Table>
      </div>
    )
  }
}
