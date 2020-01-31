import React, { PureComponent } from 'react';
import { Table } from 'semantic-ui-react'
import './components.css'

const createRow = (rowData = {}) => {
  const { firstName, lastName, state, companyName, bookingName, timeTo, timeFrom, id, interpreter } = rowData;

  const date = timeTo.slice(0, 10);

  return (
    <Table.Row>
      <Table.Cell>{bookingName}</Table.Cell>
      <Table.Cell>{firstName} {lastName}</Table.Cell>
      <Table.Cell>{companyName}</Table.Cell>
      <Table.Cell>{date}</Table.Cell>
      <Table.Cell>12:30pm</Table.Cell>
      <Table.Cell>2 hours</Table.Cell>
      <Table.Cell>{interpreter}</Table.Cell>
      {state == 'ACCEPTED' ? <Table.Cell positive>{state}</Table.Cell> : <Table.Cell negative>{state}</Table.Cell>}
      <Table.Cell selectable warning><a href='#'>View Booking</a></Table.Cell>
    </Table.Row>
  )
}

export default class EmployeeTable extends PureComponent {
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
              <Table.HeaderCell>Interpreter</Table.HeaderCell>
              <Table.HeaderCell>Booking status</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
          {
            this.props.tableData && this.props.tableData.map((rowData) => {
              if (this.props.username == rowData.emailAddress) {
                return (createRow(rowData));
              }
              return null
            })
          }
          </Table.Body>
        </Table>
      </div>
    )
  }
}
