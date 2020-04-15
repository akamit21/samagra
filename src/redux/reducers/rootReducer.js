import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  // COMMENTS_FAILURE,
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

let initialState = {
  error: false,
  comments: [],
  photos: [],
  todos: [],
  posts: [],
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    // comments
    case COMMENTS_REQUEST: {
      return {
        ...state,
      };
    }
    case COMMENTS_SUCCESS: {
      return {
        ...state,
        comments: action.payload,
      };
    }
    default:
      return state;
  }
};
