import dashboardActionTypes from "../actionType/dashboardActionTypes";
const {
  GET_POSTS_REQUESTED,
  GET_POSTS_SUCCEEDED,
  GET_POSTS_FAILED,
  GET_POST_DETAILS,
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
