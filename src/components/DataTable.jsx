import React from "react";
import { Table } from "react-bootstrap";

const DataTable = ({ data }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Role</th>
          <th>%</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.role}</td>
            <td>{row.percent}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
