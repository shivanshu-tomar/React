import dashboardActionTypes from "redux/actionType/dashboardActionTypes";
const {
  GET_POSTS_REQUESTED,
  GET_POSTS_SUCCEEDED,
  GET_POSTS_FAILED,
  GET_POST_DETAILS,
  GET_POST_SUCCEEDED,
  GET_POST_FAILED,
} = dashboardActionTypes;
export const initialState = {
  posts: [],
  postsError: "",
  postsRequested: true,
  postDetail: {},
  postDetailError: "",
  postDetailRequested: false,
};
const dashboardReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case GET_POSTS_SUCCEEDED:
      return { ...state, posts: payload, postsRequested: false };
    case GET_POSTS_FAILED:
      return { ...state, postsError: payload, postsRequested: false };
    case GET_POSTS_REQUESTED:
      return { ...state, postsRequested: true };
    case GET_POST_DETAILS:
      return { ...state, postDetailRequested: true };
    case GET_POST_SUCCEEDED:
      return { ...state, postDetail: payload, postDetailRequested: false };
    case GET_POST_FAILED:
      return { ...state, postDetailError: payload, postDetailRequested: false };
    default:
      return { ...state };
  }
};
export default dashboardReducer;
