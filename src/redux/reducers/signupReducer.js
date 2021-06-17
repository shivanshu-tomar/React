import signupActionTypes from "redux/actionType/signupActionTypes";
const {
  SETEMIAL,
  SETPASSWORD,
  SETEMIALERROR,
  SETPASSWORDERROR,
  SETUSERNAME,
  SETUSERNAMEERROR,
  SETNAME,
  SETNAMEERROR,
  SETCHECKBOX,
  SETCHECKBOXERRROR,
  USER_SIGNUP_SUCCEEDED,
  USER_SIGNUP_REQUESTED,
  USER_SIGNUP_FAILED,
} = signupActionTypes;

export const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  name: "",
  nameError: "",
  checkBox: false,
  checkBoxError: "",
  userName: "",
  userNameError: "",
  userSignupRequested: false,
  userSignupFailed: "",
  userSignupSucceeded: false,
  isUserSignedup: false,
};
const signupReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case SETEMIAL:
      return { ...state, email: payload };
    case SETPASSWORD:
      return { ...state, password: payload };
    case SETEMIALERROR:
      return { ...state, emailError: payload };
    case SETPASSWORDERROR:
      return { ...state, passwordError: payload };
    case SETNAME:
      return { ...state, name: payload };
    case SETNAMEERROR:
      return { ...state, nameError: payload };
    case SETCHECKBOX:
      return { ...state, checkBox: payload };
    case SETCHECKBOXERRROR:
      return { ...state, checkBoxError: payload };
    case SETUSERNAMEERROR:
      return { ...state, userNameError: payload };
    case SETUSERNAME:
      return { ...state, userName: payload };
    case USER_SIGNUP_REQUESTED:
      return { ...state, userSignupRequested: true };
    case USER_SIGNUP_SUCCEEDED:
      return {
        ...state,
        userSignupSucceeded: true,
        isUserSignedup: true,
        userSignupRequested: false,
      };
    case USER_SIGNUP_FAILED:
      return {
        ...state,
        userSignupFailed: payload,
        userSignupRequested: false,
      };
    default:
      return { ...state };
  }
};
export default signupReducer;
