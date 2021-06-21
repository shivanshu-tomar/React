const { call, put } = require("@redux-saga/core/effects");
const { default: signup } = require("api/signupApiWrapper");
const {
  userSignupRequested,
  userSignupSucceeded,
  userSignupFailed,
} = require("redux/action/signupActions");
const { default: signupUser } = require("saga/signupSaga");

describe("signup saga test cases", () => {
  let action, itr;
  beforeEach(() => {
    action = userSignupRequested({});
    itr = signupUser(action);
  });
  it("must call api", () => {
    expect(itr.next().value).toEqual(call(signup, action.payload));
  });
  it("must dispatch succeess action ", () => {
    itr.next();
    let response = { data: "" };
    expect(itr.next(response).value).toEqual(
      put(userSignupSucceeded(response.data))
    );
  });
  it("must dispatch failure action on failing", () => {
    itr.next();
    let e = new Error("Error");
    expect(itr.throw(e).value).toEqual(put(userSignupFailed(e.message)));
  });
});
// function* signupUser(action) {
//   try {
//     console.log(action);
//     const response = yield call(signup, action.payload);
//     console.log(response);
//     yield put({
//       type: signupActionType.USER_SIGNUP_SUCCEEDED,
//       payload: response.data,
//     });
//   } catch (e) {
//     yield put({
//       type: signupActionType.USER_SIGNUP_FAILED,
//       payload: e.message,
//     });
//   }
// }
