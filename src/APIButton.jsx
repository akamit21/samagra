import React from "react";
import { Col, Button } from "react-bootstrap";

const APIButton = (props) => {
  return (
    <Col md={6}>
      <Button
        type="button"
        className="my-2"
        variant="outline-dark"
        size="lg"
        block
        onClick={props.handler}
      >
        {props.name}
      </Button>
    </Col>
  );
};

export default APIButton;
