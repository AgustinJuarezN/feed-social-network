import { combineReducers } from "redux";
import { posts } from "./post.reducers";

export const reducers = combineReducers({
  posts,
});
