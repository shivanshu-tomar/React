import { getPost } from "api/postsApiWrapper";
import { call, put } from "redux-saga/effects";
import dashboardActionTypes from "redux/actionType/dashboardActionTypes";

const { GET_POST_SUCCEEDED, GET_POST_FAILED } = dashboardActionTypes;
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getPostDetail(action) {
  try {
    console.log(action);
    const response = yield call(getPost, action.payload);
    console.log(response);
    yield put({ type: GET_POST_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: GET_POST_FAILED, payload: e.message });
  }
}
export default getPostDetail;
