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
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
  },
};

// comments action creator
export const fetchCommentRequest = (startTime) => {
  return {
    type: COMMENTS_REQUEST,
    payload: {
      startTime: startTime,
    },
  };
};
export const fetchCommentSuccess = (res, startTime, endTime, saveTime) => {
  return {
    type: COMMENTS_SUCCESS,
    payload: {
      result: res,
      startTime: startTime,
      endTime: endTime,
      saveStartTime: saveTime[0],
      saveEndTime: saveTime[1],
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
export const fetchPhotoRequest = (startTime) => {
  return {
    type: PHOTOS_REQUEST,
    payload: {
      startTime: startTime,
    },
  };
};
export const fetchPhotoSuccess = (res, startTime, endTime, saveTime) => {
  return {
    type: PHOTOS_SUCCESS,
    payload: {
      result: res,
      startTime: startTime,
      endTime: endTime,
      saveStartTime: saveTime[0],
      saveEndTime: saveTime[1],
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
export const fetchTodoRequest = (startTime) => {
  return {
    type: TODOS_REQUEST,
    payload: {
      startTime: startTime,
    },
  };
};
export const fetchTodoSuccess = (res, startTime, endTime, saveTime) => {
  return {
    type: TODOS_SUCCESS,
    payload: {
      result: res,
      startTime: startTime,
      endTime: endTime,
      saveStartTime: saveTime[0],
      saveEndTime: saveTime[1],
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
export const fetchPostRequest = (startTime) => {
  return {
    type: POSTS_REQUEST,
    payload: {
      startTime: startTime,
    },
  };
};
export const fetchPostSuccess = (res, startTime, endTime, saveTime) => {
  return {
    type: POSTS_SUCCESS,
    payload: {
      result: res,
      startTime: startTime,
      endTime: endTime,
      saveStartTime: saveTime[0],
      saveEndTime: saveTime[1],
    },
  };
};
export const fetchPostFailure = (err) => {
  return {
    type: POSTS_FAILURE,
    payload: err,
  };
};

const saveData = (res, type) => {
  switch (type) {
    // comments
    case "comment": {
      let saveStartTime = Date.now();
      let localData = JSON.parse(localStorage.getItem("APIData"));
      console.log(localData);
      let data = {
        comments: res.data,
        photos: localData.photos,
        todos: localData.todos,
        posts: localData.posts,
      };
      localStorage.setItem("APIData", JSON.stringify(data));
      let saveEndTime = Date.now();
      return [saveStartTime, saveEndTime];
    }
    case "photo": {
      let saveStartTime = Date.now();
      let localData = JSON.parse(localStorage.getItem("APIData"));
      console.log(localData);
      let data = {
        comments: localData.comments,
        photos: res.data,
        todos: localData.todos,
        posts: localData.posts,
      };
      localStorage.setItem("APIData", JSON.stringify(data));
      let saveEndTime = Date.now();
      return [saveStartTime, saveEndTime];
    }
    case "todo": {
      let saveStartTime = Date.now();
      let localData = JSON.parse(localStorage.getItem("APIData"));
      console.log(localData);
      let data = {
        comments: localData.comments,
        photos: localData.photos,
        todos: res.data,
        posts: localData.posts,
      };
      localStorage.setItem("APIData", JSON.stringify(data));
      let saveEndTime = Date.now();
      return [saveStartTime, saveEndTime];
    }
    case "post": {
      let saveStartTime = Date.now();
      let localData = JSON.parse(localStorage.getItem("APIData"));
      console.log(localData);
      let data = {
        comments: localData.comments,
        photos: localData.photos,
        todos: localData.todos,
        posts: res.data,
      };
      localStorage.setItem("APIData", JSON.stringify(data));
      let saveEndTime = Date.now();
      return [saveStartTime, saveEndTime];
    }
    default:
      let saveStartTime = Date.now();
      let data = {
        comments: res[0].data,
        photos: res[1].data,
        todos: res[2].data,
        posts: res[3].data,
      };
      localStorage.setItem("APIData", JSON.stringify(data));
      let saveEndTime = Date.now();
      return [saveStartTime, saveEndTime];
  }
};

// fetch all data simultaneously using axios.all method
export const fetchAllData = () => {
  return async (dispatch) => {
    console.time();
    let startTime = Date.now();
    dispatch(fetchCommentRequest(startTime));
    dispatch(fetchPhotoRequest(startTime));
    dispatch(fetchTodoRequest(startTime));
    dispatch(fetchPostRequest(startTime));

    try {
      const comments = Axios.get("/comments", config);
      const photos = Axios.get("/photos", config);
      const todos = Axios.get("/todos", config);
      const posts = Axios.get("/posts", config);

      const res = await Axios.all([comments, photos, todos, posts]);
      console.timeEnd();
      let endTime = Date.now();
      let saveTime = saveData(res, "all");
      dispatch(fetchCommentSuccess(res[0].data, startTime, endTime, saveTime));
      dispatch(fetchPhotoSuccess(res[1].data, startTime, endTime, saveTime));
      dispatch(fetchTodoSuccess(res[2].data, startTime, endTime, saveTime));
      dispatch(fetchPostSuccess(res[3].data, startTime, endTime, saveTime));
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
    dispatch(fetchCommentRequest(commentsStartTime));
    try {
      const res = await Axios.get("/comments", config);
      console.log(res);
      console.timeEnd();
      let commentsEndTime = Date.now();
      let saveTime = saveData(res, "comment");
      dispatch(
        fetchCommentSuccess(
          res.data,
          commentsStartTime,
          commentsEndTime,
          saveTime
        )
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
    dispatch(fetchPhotoRequest(photosStartTime));

    try {
      const res = await Axios.get("/photos", config);
      console.log(res);
      console.timeEnd();
      let photosEndTime = Date.now();
      let saveTime = saveData(res, "photo");
      dispatch(
        fetchPhotoSuccess(res[1].data, photosStartTime, photosEndTime, saveTime)
      );
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
    dispatch(fetchTodoRequest(todosStartTime));
    try {
      const res = await Axios.get("/todos", config);
      console.log(res);
      console.timeEnd();
      let todosEndTime = Date.now();
      let saveTime = saveData(res, "todo");
      dispatch(
        fetchTodoSuccess(res.data, todosStartTime, todosEndTime, saveTime)
      );
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
    dispatch(fetchPostRequest(postsStartTime));
    try {
      const res = await Axios.get("/posts", config);
      console.log(res);
      console.timeEnd();
      let postsEndTime = Date.now();
      let saveTime = saveData(res, "post");
      dispatch(
        fetchPostSuccess(res.data, postsStartTime, postsEndTime, saveTime)
      );
    } catch (err) {
      dispatch(fetchPostFailure(err));
    }
  };
};
