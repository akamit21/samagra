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

// comments action creator
export const fetchCommentRequest = () => {
  return {
    type: COMMENTS_REQUEST,
  };
};
export const fetchCommentSuccess = (res, startTime, endTime) => {
  return {
    type: COMMENTS_SUCCESS,
    payload: {
      result: res,
      startTime: startTime,
      endTime: endTime,
    },
  };
};
export const fetchCommentFailure = (err) => {
  return {
    type: COMMENTS_FAILURE,
    payload: err,
  };
};

// photos action creator
export const fetchPhotoRequest = () => {
  return {
    type: PHOTOS_REQUEST,
  };
};
export const fetchPhotoSuccess = (res, startTime, endTime) => {
  return {
    type: PHOTOS_SUCCESS,
    payload: {
      result: res,
      startTime: startTime,
      endTime: endTime,
    },
  };
};
export const fetchPhotoFailure = (err) => {
  return {
    type: PHOTOS_FAILURE,
    payload: err,
  };
};

// todos action creator
export const fetchTodoRequest = () => {
  return {
    type: TODOS_REQUEST,
  };
};
export const fetchTodoSuccess = (res, startTime, endTime) => {
  return {
    type: TODOS_SUCCESS,
    payload: {
      result: res,
      startTime: startTime,
      endTime: endTime,
    },
  };
};
export const fetchTodoFailure = (err) => {
  return {
    type: TODOS_FAILURE,
    payload: err,
  };
};

// posts action creator
export const fetchPostRequest = () => {
  return {
    type: POSTS_REQUEST,
  };
};
export const fetchPostSuccess = (res, startTime, endTime) => {
  return {
    type: POSTS_SUCCESS,
    payload: {
      result: res,
      startTime: startTime,
      endTime: endTime,
    },
  };
};
export const fetchPostFailure = (err) => {
  return {
    type: POSTS_FAILURE,
    payload: err,
  };
};

// fetch all data simultaneously using axios.all method
export const fetchAllData = () => {
  return async (dispatch) => {
    console.time();
    let startTime = Date.now();
    dispatch(fetchCommentRequest());
    dispatch(fetchPhotoRequest());
    dispatch(fetchTodoRequest());
    dispatch(fetchPostRequest());

    try {
      const comments = Axios.get("/comments", config);
      const photos = Axios.get("/photos", config);
      const todos = Axios.get("/todos", config);
      const posts = Axios.get("/posts", config);

      const res = await Axios.all([comments, photos, todos, posts]);
      console.timeEnd();
      let endTime = Date.now();
      dispatch(fetchCommentSuccess(res[0].data, startTime, endTime));
      dispatch(fetchPhotoSuccess(res[1].data, startTime, endTime));
      dispatch(fetchTodoSuccess(res[2].data, startTime, endTime));
      dispatch(fetchPostSuccess(res[3].data, startTime, endTime));
    } catch (err) {
      dispatch(fetchCommentFailure(err));
      dispatch(fetchPhotoFailure(err));
      dispatch(fetchTodoFailure(err));
      dispatch(fetchPostFailure(err));
    }
  };
};

// fetch all comments
export const fetchAllComments = () => {
  return async (dispatch) => {
    console.time();
    let commentsStartTime = Date.now();
    dispatch(fetchCommentRequest());
    try {
      const res = await Axios.get("/comments", config);
      console.log(res);
      console.timeEnd();
      let commentsEndTime = Date.now();
      dispatch(
        fetchCommentSuccess(res.data, commentsStartTime, commentsEndTime)
      );
    } catch (err) {
      dispatch(fetchCommentFailure(err));
    }
  };
};

// fetch all photos
export const fetchAllPhotos = () => {
  return async (dispatch) => {
    console.time();
    let photosStartTime = Date.now();
    dispatch(fetchPhotoRequest());

    try {
      const res = await Axios.get("/photos", config);
      console.log(res);
      console.timeEnd();
      let photosEndTime = Date.now();
      dispatch(fetchPhotoSuccess(res[1].data, photosStartTime, photosEndTime));
    } catch (err) {
      dispatch(fetchPhotoFailure(err));
    }
  };
};

// fetch all todos
export const fetchAllTodos = () => {
  return async (dispatch) => {
    console.time();
    let todosStartTime = Date.now();
    dispatch(fetchTodoRequest());
    try {
      const res = await Axios.get("/todos", config);
      console.log(res);
      console.timeEnd();
      let todosEndTime = Date.now();
      dispatch(fetchTodoSuccess(res.data, todosStartTime, todosEndTime));
    } catch (err) {
      dispatch(fetchTodoFailure(err));
    }
  };
};

// fetch all posts
export const fetchAllPosts = () => {
  return async (dispatch) => {
    console.time();
    let postsStartTime = Date.now();
    dispatch(fetchPostRequest());
    try {
      const res = await Axios.get("/posts", config);
      console.log(res);
      console.timeEnd();
      let postsEndTime = Date.now();
      dispatch(fetchPostSuccess(res.data, postsStartTime, postsEndTime));
    } catch (err) {
      dispatch(fetchPostFailure(err));
    }
  };
};
