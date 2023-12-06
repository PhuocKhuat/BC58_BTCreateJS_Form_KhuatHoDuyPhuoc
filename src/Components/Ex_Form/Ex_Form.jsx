import React, { Component } from 'react'
import FormSinhVien from '../FormSinhVien/FormSinhVien'
import TableSinhVien from '../TableSinhVien/TableSinhVien'

export default class Ex_Form extends Component {
  render() {
    return (
      <div>
        <FormSinhVien/>
        <TableSinhVien/>
      </div>
    )
  }
}
