import {
  COMMENTS_REQUEST,
  COMMENTS_SUCCESS,
  // COMMENTS_FAILURE,
  PHOTOS_REQUEST,
  PHOTOS_SUCCESS,
  // PHOTOS_FAILURE,
  TODOS_REQUEST,
  TODOS_SUCCESS,
  // TODOS_FAILURE,
  POSTS_REQUEST,
  POSTS_SUCCESS,
  // POSTS_FAILURE,
} from "../actionType";

let initialState = {
  error: false,
  commentsStartTime: null,
  commentsEndTime: null,
  comments: [],
  photosStartTime: null,
  photosEndTime: null,
  photos: [],
  todosStartTime: null,
  todosEndTime: null,
  todos: [],
  postsStartTime: null,
  postsEndTime: null,
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
        comments: action.payload.result,
        commentsStartTime: action.payload.startTime,
        commentsEndTime: action.payload.endTime,
      };
    }

    // photos
    case PHOTOS_REQUEST: {
      return {
        ...state,
      };
    }
    case PHOTOS_SUCCESS: {
      return {
        ...state,
        photos: action.payload.result,
        photosStartTime: action.payload.startTime,
        photosEndTime: action.payload.endTime,
      };
    }

    // todos
    case TODOS_REQUEST: {
      return {
        ...state,
      };
    }
    case TODOS_SUCCESS: {
      return {
        ...state,
        todos: action.payload.result,
        todosStartTime: action.payload.startTime,
        todosEndTime: action.payload.endTime,
      };
    }

    // posts
    case POSTS_REQUEST: {
      return {
        ...state,
      };
    }
    case POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload.result,
        postsStartTime: action.payload.startTime,
        postsEndTime: action.payload.endTime,
      };
    }
    default:
      return state;
  }
};
