import login from "api/loginApiWrapper";
import { call, put } from "redux-saga/effects";
import loginActions from "redux/actionType/loginActionType";

const { USER_AUTH_FAILED, USER_AUTH_SUCCEEDED } = loginActions;
// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* authUser(action) {
  try {
    console.log(action);
    const response = yield call(login, action.payload);
    console.log(response);
    yield put({ type: USER_AUTH_SUCCEEDED, payload: response.data });
  } catch (e) {
    yield put({ type: USER_AUTH_FAILED, payload: e.message });
  }
}
export default authUser;
