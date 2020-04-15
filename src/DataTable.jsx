import React from "react";
import { Col, Table } from "react-bootstrap";

const DataTable = (props) => {
  return (
    <Col md={6}>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>Start: </td>
            <td>{props.data.startTime}</td>
          </tr>
          <tr>
            <td>End: </td>
            <td>{props.data.endTime}</td>
          </tr>
          <tr>
            <td>Start Save: </td>
            <td>{props.data.saveStartTime}</td>
          </tr>
          <tr>
            <td>End Save: </td>
            <td>{props.data.saveEndTime}</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
};

export default DataTable;
