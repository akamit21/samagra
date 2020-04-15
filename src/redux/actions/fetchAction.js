import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  COMMENTS_FAILURE,
  // PHOTOS_REQUEST,
  // PHOTOS_SUCCESS,
  // PHOTOS_FAILURE,
  // TODOS_REQUEST,
  // TODOS_SUCCESS,
  // TODOS_FAILURE,
  // POSTS_REQUEST,
  // POSTS_SUCCESS,
  // POSTS_FAILURE,
} from "../actionType";
import Axios from "axios";

const config = {
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {
    "Content-Type": "application/json",
  },
};

export const fetchAllComments = () => {
  return async (dispatch) => {
    dispatch({
      type: COMMENTS_REQUEST,
    });
    try {
      const res = await Axios.get("/comments", config);
      console.log(res);
      dispatch({
        type: COMMENTS_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: COMMENTS_FAILURE,
        payload: err,
      });
    }
  };
};
