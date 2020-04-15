import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_FAILURE,
  PHOTOS_REQUEST,
  PHOTOS_SUCCESS,
  PHOTOS_FAILURE,
  TODOS_REQUEST,
  TODOS_SUCCESS,
  TODOS_FAILURE,
  POSTS_REQUEST,
  POSTS_SUCCESS,
  POSTS_FAILURE,
} from "../actionType";
import Axios from "axios";

const config = {
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
  },
};

// fetch all comments
export const fetchAllComments = () => {
  return async (dispatch) => {
    console.time();
    let commentsStartTime = Date.now();
    dispatch({
      type: COMMENTS_REQUEST,
    });
    try {
      const res = await Axios.get("/comments", config);
      console.log(res);
      console.timeEnd();
      let commentsEndTime = Date.now();
      dispatch({
        type: COMMENTS_SUCCESS,
        payload: {
          result: res.data,
          startTime: commentsStartTime,
          endTime: commentsEndTime,
        },
      });
    } catch (err) {
      dispatch({
        type: COMMENTS_FAILURE,
        payload: err,
      });
    }
  };
};

// fetch all photos
export const fetchAllPhotos = () => {
  return async (dispatch) => {
    console.time();
    let photosStartTime = Date.now();
    dispatch({
      type: PHOTOS_REQUEST,
    });
    try {
      const res = await Axios.get("/photos", config);
      console.log(res);
      console.timeEnd();
      let photosEndTime = Date.now();
      dispatch({
        type: PHOTOS_SUCCESS,
        payload: {
          result: res.data,
          startTime: photosStartTime,
          endTime: photosEndTime,
        },
      });
    } catch (err) {
      dispatch({
        type: PHOTOS_FAILURE,
        payload: err,
      });
    }
  };
};

// fetch all todos
export const fetchAllTodos = () => {
  return async (dispatch) => {
    console.time();
    let todosStartTime = Date.now();
    dispatch({
      type: TODOS_REQUEST,
    });
    try {
      const res = await Axios.get("/todos", config);
      console.log(res);
      console.timeEnd();
      let todosEndTime = Date.now();
      dispatch({
        type: TODOS_SUCCESS,
        payload: {
          result: res.data,
          startTime: todosStartTime,
          endTime: todosEndTime,
        },
      });
    } catch (err) {
      dispatch({
        type: TODOS_FAILURE,
        payload: err,
      });
    }
  };
};

// fetch all posts
export const fetchAllPosts = () => {
  return async (dispatch) => {
    console.time();
    let postsStartTime = Date.now();
    dispatch({
      type: POSTS_REQUEST,
    });
    try {
      const res = await Axios.get("/posts", config);
      console.log(res);
      console.timeEnd();
      let postsEndTime = Date.now();
      dispatch({
        type: POSTS_SUCCESS,
        payload: {
          result: res.data,
          startTime: postsStartTime,
          endTime: postsEndTime,
        },
      });
    } catch (err) {
      dispatch({
        type: POSTS_FAILURE,
        payload: err,
      });
    }
  };
};
