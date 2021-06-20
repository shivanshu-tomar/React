import loginReducer from "redux/reducers/loginReducer";
import { initialState } from "redux/reducers/loginReducer";
import {
  authUser,
  userAuthFailed,
  userAuthSucceeded,
  changeEmail,
  changeEmailError,
  changePasswordError,
  changePassword,
} from "redux/action/loginActions";

describe("Login reducer Tests", () => {
  var state = initialState;

  beforeEach(() => {
    state = initialState;
  });
  it("must return initial state and eamil as payload for SETEMAIL", () => {
    const updatedState = { ...state, email: "testMail@gmail.com" };

    expect(loginReducer(state, changeEmail("testMail@gmail.com"))).toEqual(
      updatedState
    );
  });
  it("must return initial state and password as payload for changePassword", () => {
    const updatedState = { ...state, password: 12345678 };

    expect(loginReducer(state, changePassword(12345678))).toEqual(updatedState);
  });
  it("must return initial state and emailError as payload for changeEmailErrpr", () => {
    const updatedState = { ...state, emailError: "Error" };

    expect(loginReducer(state, changeEmailError("Error"))).toEqual(
      updatedState
    );
  });
  it("must return initial state and passwordError as payload for changePasswordError", () => {
    const updatedState = { ...state, passwordError: "Error" };
    console.log(state);
    expect(loginReducer(state, changePasswordError("Error"))).toEqual(
      updatedState
    );
  });
  it("must return initial state and userAuthRequested as true for authUser", () => {
    const updatedState = { ...state, userAuthrequested: true };
    console.log(state);
    expect(loginReducer(state, authUser())).toEqual(updatedState);
  });
  it("must return initial state and isLogin is true userAuthreuested as false and userAuthSucceeded as true and user as payload", () => {
    const updatedState = {
      ...state,
      isLogin: true,
      userAuthSucceeded: true,
      userAuthrequested: false,
      user: { data: "data" },
    };
    console.log(state);
    expect(loginReducer(state, userAuthSucceeded({ data: "data" }))).toEqual(
      updatedState
    );
  });
  it("must return initial state and userAuthFailed as payload for userAuthRequested as false", () => {
    const updatedState = {
      ...state,
      userAuthFailed: "Error",
      userAuthrequested: false,
    };
    console.log(state);
    expect(loginReducer(state, userAuthFailed("Error"))).toEqual(updatedState);
  });
});
