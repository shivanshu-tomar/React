import { getPosts } from "api/postsApiWrapper";
import { call, put } from "redux-saga/effects";
import dashboardActionTypes from "redux/actionType/dashboardActionTypes";

const { GET_POSTS_SUCCEEDED, GET_POSTS_FAILED } = dashboardActionTypes;
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPosts(action) {
  try {
    console.log(action);
    const response = yield call(getPosts);
    console.log(response);
    yield put({ type: GET_POSTS_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: GET_POSTS_FAILED, payload: e.message });
  }
}
export default fetchPosts;
