import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
} from "../types/post.types";

const initialState = {
  posts: null,
  error: null,
  loading: false
};

export const posts = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.posts,
      };
    case FETCH_ALL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
