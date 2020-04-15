import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllComments,
  fetchAllPhotos,
  fetchAllTodos,
  fetchAllPosts,
  fetchAllData,
} from "./redux/actions/fetchAction";
import { Container, Jumbotron, Row, Col, Table, Button } from "react-bootstrap";
import Clock from "./Clock";

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.getAllData();
    }, 5000);
  }

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
                    <td>Start</td>
                    <td>{this.props.commentsStartTime}</td>
                  </tr>
                  <tr>
                    <td>End</td>
                    <td>{this.props.commentsEndTime}</td>
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
                    <td>Start</td>
                    <td>{this.props.photosStartTime}</td>
                  </tr>
                  <tr>
                    <td>End</td>
                    <td>{this.props.photosEndTime}</td>
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
                    <td>Start</td>
                    <td>{this.props.todosStartTime}</td>
                  </tr>
                  <tr>
                    <td>End</td>
                    <td>{this.props.todosEndTime}</td>
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
                    <td>Start</td>
                    <td>{this.props.postsStartTime}</td>
                  </tr>
                  <tr>
                    <td>End</td>
                    <td>{this.props.postsEndTime}</td>
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
                onClick={() => this.props.getPhotos()}
              >
                Get Photos
              </Button>
            </Col>
            <Col md={6}>
              <Button
                type="button"
                className="my-2"
                variant="outline-dark"
                size="lg"
                block
                onClick={() => this.props.getTodos()}
              >
                Get Todos
              </Button>
            </Col>
            <Col md={6}>
              <Button
                type="button"
                className="my-2"
                variant="outline-dark"
                size="lg"
                block
                onClick={() => this.props.getPosts()}
              >
                Get Posts
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

const mapStateToProps = (state) => ({
  commentsStartTime: state.commentsStartTime,
  commentsEndTime: state.commentsEndTime,
  photosStartTime: state.photosStartTime,
  photosEndTime: state.photosEndTime,
  todosStartTime: state.todosStartTime,
  todosEndTime: state.todosEndTime,
  postsStartTime: state.postsStartTime,
  postsEndTime: state.postsEndTime,
});
const mapDispatchToProps = (dispatch) => ({
  getAllData: () => dispatch(fetchAllData()),
  getComments: () => dispatch(fetchAllComments()),
  getPhotos: () => dispatch(fetchAllPhotos()),
  getTodos: () => dispatch(fetchAllTodos()),
  getPosts: () => dispatch(fetchAllPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
