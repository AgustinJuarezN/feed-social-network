import httpClient from "../httpClient";
import { config } from "../config/env";

export default class PostService {
  static instance = new PostService();
  _endpoints = {
    getAll: config.JSONPLACEHOLDER_API_URL + "/posts",
    getOwner: config.JSONPLACEHOLDER_API_URL + "/users",
  };

  getAll = async () => {
    return await httpClient.get(this._endpoints.getAll);
  };

  getCommentOwner = async (userId) => {
    return await httpClient.get(`${this._endpoints.getOwner}/${userId}`);
  };
}
