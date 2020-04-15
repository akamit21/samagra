import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchAllComments,
  fetchAllPhotos,
  fetchAllTodos,
  fetchAllPosts,
  fetchAllData,
} from "./redux/actions/fetchAction";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import Clock from "./Clock";
import DataTable from "./DataTable";
import APIButton from "./APIButton";

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.getAllData();
    }, 5000);
  }

  render() {
    const { comment, photo, todo, post } = this.props;
    return (
      <Container className="my-5">
        <Jumbotron>
          <Row className="text-center">
            <Col>
              <h1>Test App</h1>
            </Col>
          </Row>
          <hr />
          <Row>
            <DataTable data={comment} />
            <DataTable data={photo} />
            <DataTable data={todo} />
            <DataTable data={post} />
          </Row>
          <hr />
          <Row>
            <APIButton
              name="Get Comments"
              handler={() => this.props.getComments()}
            />
            <APIButton
              name="Get Photos"
              handler={() => this.props.getPhotos()}
            />
            <APIButton name="Get Todos" handler={() => this.props.getTodos()} />
            <APIButton name="Get Post" handler={() => this.props.getPosts()} />
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
  comment: state.comment,
  photo: state.photo,
  todo: state.todo,
  post: state.post,
});
const mapDispatchToProps = (dispatch) => ({
  getAllData: () => dispatch(fetchAllData()),
  getComments: () => dispatch(fetchAllComments()),
  getPhotos: () => dispatch(fetchAllPhotos()),
  getTodos: () => dispatch(fetchAllTodos()),
  getPosts: () => dispatch(fetchAllPosts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
