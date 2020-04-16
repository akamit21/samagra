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
  comment: {},
  photo: {},
  todo: {},
  post: {},
};

/**
 * root reducer
 * @param {*} state
 * @param {*} action {type, payload}
 */
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
        comment: {
          startTime: action.payload.startTime,
          endTime: action.payload.endTime,
          saveStartTime: action.payload.saveStartTime,
          saveEndTime: action.payload.saveEndTime,
        },
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
        photo: {
          startTime: action.payload.startTime,
          endTime: action.payload.endTime,
          saveStartTime: action.payload.saveStartTime,
          saveEndTime: action.payload.saveEndTime,
        },
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
        todo: {
          startTime: action.payload.startTime,
          endTime: action.payload.endTime,
          saveStartTime: action.payload.saveStartTime,
          saveEndTime: action.payload.saveEndTime,
        },
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
        post: {
          startTime: action.payload.startTime,
          endTime: action.payload.endTime,
          saveStartTime: action.payload.saveStartTime,
          saveEndTime: action.payload.saveEndTime,
        },
      };
    }
    default:
      return state;
  }
};
