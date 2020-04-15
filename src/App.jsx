import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAllComments } from "./redux/actions/fetchAction";
import { Container, Jumbotron, Row, Col, Table, Button } from "react-bootstrap";
import Clock from "./Clock";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  // componentDidMount() {
  //   console.time();
  //   fetch("https://jsonplaceholder.typicode.com/comments")
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       this.setState({
  //         isLoaded: true,
  //         items: result,
  //       });
  //       console.timeEnd();
  //       console.timeLog("a");
  //     })
  //     .catch((error) => {
  //       this.setState({
  //         isLoaded: true,
  //         error,
  //       });
  //     });
  // }

  render() {
    return (
      <Container className="my-5">
        <Jumbotron>
          <Row className="text-center">
            <Col>Test App</Col>
          </Row>
          <hr />
          <Row>
            <Col md={6}>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={6}>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={6}>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
            <Col md={6}>
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col md={6}>
              <Button
                type="button"
                className="my-2"
                variant="outline-dark"
                size="lg"
                block
                onClick={() => this.props.getComments()}
              >
                Get Comments
              </Button>
            </Col>
            <Col md={6}>
              <Button
                type="button"
                className="my-2"
                variant="outline-dark"
                size="lg"
                block
              >
                Button 2
              </Button>
            </Col>
            <Col md={6}>
              <Button
                type="button"
                className="my-2"
                variant="outline-dark"
                size="lg"
                block
              >
                Button 3
              </Button>
            </Col>
            <Col md={6}>
              <Button
                type="button"
                className="my-2"
                variant="outline-dark"
                size="lg"
                block
              >
                Button 4
              </Button>
            </Col>
          </Row>
          <hr />
          <Row className="text-center">
            <Col>
              <Clock />
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getComments: () => dispatch(fetchAllComments()),
});

export default connect(null, mapDispatchToProps)(App);
