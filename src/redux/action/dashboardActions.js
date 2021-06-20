import dashboardActionTypes from "redux/actionType/dashboardActionTypes";
const {
  GET_POSTS_REQUESTED,
  GET_POSTS_SUCCEEDED,
  GET_POSTS_FAILED,
  GET_POST_DETAILS,
  GET_POST_SUCCEEDED,
  GET_POST_FAILED,
} = dashboardActionTypes;
export const fetchPosts = (payload) => ({
  type: GET_POSTS_REQUESTED,
  payload,
});
export const changePostsError = (payload) => ({
  type: GET_POSTS_FAILED,
  payload,
});
export const setPosts = (payload) => ({
  type: GET_POSTS_SUCCEEDED,
  payload,
});
export const getPostDetail = (payload) => ({
  type: GET_POST_DETAILS,
  payload,
});
export const postDetailSucceeded = (payload) => ({
  type: GET_POST_SUCCEEDED,
  payload,
});
export const postDetailFailed = (payload) => ({
  type: GET_POST_FAILED,
  payload,
});
