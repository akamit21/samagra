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
export const fetchCommentSuccess = (startTime, endTime, saveTime) => {
  return {
    type: COMMENTS_SUCCESS,
    payload: {
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
export const fetchPhotoSuccess = (startTime, endTime, saveTime) => {
  return {
    type: PHOTOS_SUCCESS,
    payload: {
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
export const fetchTodoSuccess = (startTime, endTime, saveTime) => {
  return {
    type: TODOS_SUCCESS,
    payload: {
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
export const fetchPostSuccess = (startTime, endTime, saveTime) => {
  return {
    type: POSTS_SUCCESS,
    payload: {
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
      localStorage.setItem("APIComment", JSON.stringify(res));
      let saveEndTime = Date.now();
      return [saveStartTime, saveEndTime];
    }
    case "photo": {
      let saveStartTime = Date.now();
      localStorage.setItem("APIPhoto", JSON.stringify(res));
      let saveEndTime = Date.now();
      return [saveStartTime, saveEndTime];
    }
    case "todo": {
      let saveStartTime = Date.now();
      localStorage.setItem("APITodo", JSON.stringify(res));
      let saveEndTime = Date.now();
      return [saveStartTime, saveEndTime];
    }
    case "post": {
      let saveStartTime = Date.now();
      localStorage.setItem("APIPost", JSON.stringify(res));
      let saveEndTime = Date.now();
      return [saveStartTime, saveEndTime];
    }
    default:
      let saveStartTime = Date.now();
      localStorage.setItem("APIData", JSON.stringify(res));
      let saveEndTime = Date.now();
      return [saveStartTime, saveEndTime];
  }
};

// fetch all data simultaneously using axios.all method
export const fetchAllData = () => {
  return (dispatch) => {
    console.time();
    let startTime = Date.now();
    dispatch(fetchCommentRequest(startTime));
    dispatch(fetchPhotoRequest(startTime));
    dispatch(fetchTodoRequest(startTime));
    dispatch(fetchPostRequest(startTime));

    try {
      let startTime1 = Date.now();
      const comments = Axios.get("/comments", config);
      let startTime2 = Date.now();
      const photos = Axios.get("/photos", config);
      let startTime3 = Date.now();
      const todos = Axios.get("/todos", config);
      let startTime4 = Date.now();
      const posts = Axios.get("/posts", config);

      Axios.all([comments, photos, todos, posts]).then(
        Axios.spread((response1, response2, response3, response4) => {
          let endTime1 = Date.now();
          let saveTime1 = saveData(response1.data, "comment");
          dispatch(fetchCommentSuccess(startTime1, endTime1, saveTime1));
          let endTime2 = Date.now();
          let saveTime2 = saveData(response2.data, "photo");
          dispatch(fetchPhotoSuccess(startTime2, endTime2, saveTime2));
          let endTime3 = Date.now();
          let saveTime3 = saveData(response3.data, "todo");
          dispatch(fetchTodoSuccess(startTime3, endTime3, saveTime3));
          let endTime4 = Date.now();
          let saveTime4 = saveData(response4.data, "post");
          dispatch(fetchPostSuccess(startTime4, endTime4, saveTime4));
        })
      );
      console.timeEnd();
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
        fetchPhotoSuccess(res.data, photosStartTime, photosEndTime, saveTime)
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
