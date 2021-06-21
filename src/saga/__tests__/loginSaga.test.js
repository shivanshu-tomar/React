import login from "api/loginApiWrapper";
import { call, put } from "redux-saga/effects";
import {
  authUser,
  userAuthFailed,
  userAuthSucceeded,
} from "redux/action/loginActions";
import authUserSaga from "saga/loginSaga";

function CustomError(response, message = "") {
  this.response = response;
  this.message = message;
}
CustomError.prototype = Error.prototype;
describe("Test cases for login Saga", () => {
  let itr, action;

  beforeEach(() => {
    action = authUser({ username: "TestUserName", password: "Password" });
    itr = authUserSaga(action);
  });
  it("it must call the login finction ", () => {
    expect(itr.next().value).toEqual(call(login, action.payload));
  });
  it("it must dispatch UserAuthSucceeded action ", () => {
    itr.next();
    let response = {
      data: {
        userId: 123,
        fullName: "Test",
      },
    };
    expect(itr.next(response).value).toEqual(
      put(userAuthSucceeded(response.data))
    );
  });
  it("it must dispatch userAuthFailure Action", () => {
    itr.next();
    var e = new CustomError({
      data: {
        _error_message: "Error",
      },
    });
    expect(itr.throw(e).value).toEqual(
      put(userAuthFailed(e.response.data._error_message))
    );
  });
});
// function* authUser(action) {
//   try {
//     console.log(action);
//     const response = yield call(login, action.payload);
//     console.log(response);
//     localStorage.setItem("user", JSON.stringify(response.data));
//     yield put({ type: USER_AUTH_SUCCEEDED, payload: response.data });
//   } catch (e) {
//     yield put({
//       type: USER_AUTH_FAILED,
//       payload: e.response.data._error_message,
//     });
//   }
// }
