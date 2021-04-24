import httpClient from "../httpClient";
import { config } from "../config/env";

export default class PostService {
  static instance = new PostService();
  _endpoints = {
    getAll: config.JSONPLACEHOLDER_API_URL + "/posts",
    getOwner: config.JSONPLACEHOLDER_API_URL + "/users/:id",
    getComments: config.JSONPLACEHOLDER_API_URL + "/posts/:id/comments",
  };

  getAll = async () => {
    return await httpClient.get(this._endpoints.getAll);
  };

  getCommentOwner = async (userId) => {
    const url = this._endpoints.getOwner.replace(":id", userId);
    return await httpClient.get(url);
  };

  getComments = async (postId) => {
    const url = this._endpoints.getComments.replace(":id", postId);
    return await httpClient.get(url);
  };
}
