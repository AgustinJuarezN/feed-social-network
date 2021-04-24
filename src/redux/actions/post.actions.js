import {
  FETCH_ALL_REQUEST,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_FAILURE,
} from "../types/post.types";
import PostService from "../../services/post.service";
import { toast } from "react-toastify";

function getAllPosts() {
  return async (dispatch) => {
    dispatch(getAllRequest());
    try {
      const response = await PostService.instance.getAll();
      const posts = response.data;
      if (posts) {
        dispatch(getAllSuccess(posts));
      }
    } catch ({ message }) {
      dispatch(getAllFailure(message));
    }
  };
}

function getAllRequest() {
  return { type: FETCH_ALL_REQUEST };
}

function getAllSuccess(posts) {
  return { type: FETCH_ALL_SUCCESS, posts };
}

function getAllFailure(error) {
  return { type: FETCH_ALL_FAILURE, error };
}

export const postActions = {
  getAllPosts,
};
