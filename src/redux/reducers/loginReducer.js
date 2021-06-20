import loginActionType from "redux/actionType/loginActionType";
const {
  SETEMIAL,
  SETPASSWORD,
  SETEMIALERROR,
  SETPASSWORDERROR,

  USER_AUTH_FAILED,
  USER_AUTH_REQUESTED,
  USER_AUTH_SUCCEEDED,
} = loginActionType;
export const initialState = {
  email: "",
  password: "",
  emailError: "",
  passwordError: "",
  isLogin: false,
  user: {},
  userAuthFailed: "",
  userAuthSucceeded: false,
  userAuthrequested: false,
};
const loginReducer = (state = initialState, action) => {
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

    case USER_AUTH_FAILED:
      return { ...state, userAuthFailed: payload, userAuthrequested: false };
    case USER_AUTH_REQUESTED:
      return { ...state, userAuthrequested: true };
    case USER_AUTH_SUCCEEDED:
      return {
        ...state,
        isLogin: true,
        user: payload,
        userAuthSucceeded: true,
        userAuthrequested: false,
      };

    default:
      return { ...state };
  }
};
export default loginReducer;
