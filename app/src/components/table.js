import React, { PureComponent } from 'react';
import { Table } from 'semantic-ui-react'
import './components.css'

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
