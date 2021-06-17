import signup from "api/signupApiWrapper";
import { call, put } from "redux-saga/effects";

import signupActionType from "redux/actionType/signupActionTypes";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signupUser(action) {
  try {
    console.log(action);
    const response = yield call(signup, action.payload);
    console.log(response);
    yield put({
      type: signupActionType.USER_SIGNUP_SUCCEEDED,
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: signupActionType.USER_SIGNUP_FAILED,
      payload: e.message,
    });
  }
}
export default signupUser;
