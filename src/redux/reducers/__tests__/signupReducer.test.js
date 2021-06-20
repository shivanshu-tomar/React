// export const initialState = {
//   email: "",
//   password: "",
//   emailError: "",
//   passwordError: "",
//   name: "",
//   nameError: "",
//   checkBox: false,
//   checkBoxError: "",
//   userName: "",
//   userNameError: "",
//   userSignupRequested: false,
//   userSignupFailed: "",
//   userSignupSucceeded: false,
//   isUserSignedup: false,
// };
// const signupReducer = (state = initialState, action) => {
//   let { type, payload } = action;
//   switch (type) {
//     case SETEMIAL:
//       return { ...state, email: payload };
//     case SETPASSWORD:
//       return { ...state, password: payload };
//     case SETEMIALERROR:
//       return { ...state, emailError: payload };
//     case SETPASSWORDERROR:
//       return { ...state, passwordError: payload };
//     case SETNAME:
//       return { ...state, name: payload };
//     case SETNAMEERROR:
//       return { ...state, nameError: payload };
//     case SETCHECKBOX:
//       return { ...state, checkBox: payload };
//     case SETCHECKBOXERRROR:
//       return { ...state, checkBoxError: payload };
//     case SETUSERNAMEERROR:
//       return { ...state, userNameError: payload };
//     case SETUSERNAME:
//       return { ...state, userName: payload };
//     case USER_SIGNUP_REQUESTED:
//       return { ...state, userSignupRequested: true };
//     case USER_SIGNUP_SUCCEEDED:
//       return {
//         ...state,
//         userSignupSucceeded: true,
//         isUserSignedup: true,
//         userSignupRequested: false,
//       };
//     case USER_SIGNUP_FAILED:
//       return {
//         ...state,
//         userSignupFailed: payload,
//         userSignupRequested: false,
//       };
//     default:
//       return { ...state };
//   }
// };
// export default signupReducer;
import {
  changePasswordError,
  changeEmailError,
  changePassword,
  changeEmail,
  changeCheckBox,
  changeCheckBoxError,
  changeName,
  changeNameError,
  changeUserName,
  changeUserNameError,
  userSignupFailed,
  userSignupRequested,
  userSignupSucceeded,
} from "redux/action/signupActions";
import signupReducer, { initialState } from "redux/reducers/signupReducer";
describe("Signup Reducer test Cases", () => {
  let state = initialState;
  beforeEach(() => {
    state = initialState;
  });
  it("must return initial state and name as payload for changeName", () => {
    const updatedState = { ...state, name: "test" };
    expect(signupReducer(state, changeName("test"))).toEqual(updatedState);
  });
  it("must return initial state and email as payload for changeEmail", () => {
    const updatedState = { ...state, email: "test" };
    expect(signupReducer(state, changeEmail("test"))).toEqual(updatedState);
  });
  it("must return initial state and userName as payload for changeUserName", () => {
    const updatedState = { ...state, userName: "test" };
    expect(signupReducer(state, changeUserName("test"))).toEqual(updatedState);
  });
  it("must return initial state and nameError as payload for changeNameError", () => {
    const updatedState = { ...state, nameError: "test" };
    expect(signupReducer(state, changeNameError("test"))).toEqual(updatedState);
  });
  it("must return initial state and emailError as payload for changeEmailError", () => {
    const updatedState = { ...state, emailError: "test" };
    expect(signupReducer(state, changeEmailError("test"))).toEqual(
      updatedState
    );
  });
  it("must return initial state and userNameError as payload for changeUserNameError", () => {
    const updatedState = { ...state, userNameError: "test" };
    expect(signupReducer(state, changeUserNameError("test"))).toEqual(
      updatedState
    );
  });
  it("must return initial state and password as payload for changePassword", () => {
    const updatedState = { ...state, password: "test" };
    expect(signupReducer(state, changePassword("test"))).toEqual(updatedState);
  });
  it("must return initial state and checkbox as payload for changeCheckBox", () => {
    const updatedState = { ...state, checkBox: true };
    expect(signupReducer(state, changeCheckBox(true))).toEqual(updatedState);
  });
  it("must return initial state and checkboxError as payload for changeCheckBoxError", () => {
    const updatedState = { ...state, checkBoxError: "Error" };
    expect(signupReducer(state, changeCheckBoxError("Error"))).toEqual(
      updatedState
    );
  });
  it("must return initial state and passwordError as payload for changePasswordError", () => {
    const updatedState = { ...state, passwordError: "Error" };
    expect(signupReducer(state, changePasswordError("Error"))).toEqual(
      updatedState
    );
  });
  it("must return initial state and userSignupRequested as true for userSignupRequested", () => {
    const updatedState = { ...state, userSignupRequested: true };
    expect(signupReducer(state, userSignupRequested(true))).toEqual(
      updatedState
    );
  });
  it("must return initial state and userSignupRequested as false and isUserSignedup as true userSignupSucceeded as true for userSignupRequested", () => {
    const updatedState = {
      ...state,
      userSignupRequested: false,
      userSignupSucceeded: true,
      isUserSignedup: true,
    };
    expect(signupReducer(state, userSignupSucceeded(true))).toEqual(
      updatedState
    );
  });
  it("must return initial state and userSignupRequested as false userSignupFailed as true for userSignupRequested", () => {
    const updatedState = {
      ...state,
      userSignupRequested: false,
      userSignupFailed: true,
    };
    expect(signupReducer(state, userSignupFailed(true))).toEqual(updatedState);
  });
});
