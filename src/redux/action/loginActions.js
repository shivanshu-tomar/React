import loginActions from "redux/actionType/loginActionType";

const {
  SETEMIAL,
  SETPASSWORD,
  SETEMIALERROR,
  SETPASSWORDERROR,
  SETISLOGGEDIN,
  USER_AUTH_FAILED,
  USER_AUTH_REQUESTED,
  USER_AUTH_SUCCEEDED,
} = loginActions;
export const authUser = (payload) => {
  return {
    type: USER_AUTH_REQUESTED,
    payload,
  };
};
export const userAuthFailed = (payload) => {
  return {
    type: USER_AUTH_FAILED,
    payload,
  };
};
export const userAuthSucceeded = (payload) => {
  return {
    type: USER_AUTH_SUCCEEDED,
    payload,
  };
};
export const changeEmail = (payload) => {
  return {
    type: SETEMIAL,
    payload,
  };
};
export const changeEmailError = (payload) => {
  return {
    type: SETEMIALERROR,
    payload,
  };
};
export const changePassword = (payload) => {
  return {
    type: SETPASSWORD,
    payload,
  };
};
export const changePasswordError = (payload) => {
  return {
    type: SETPASSWORDERROR,
    payload,
  };
};
export const changeIsLoggedIn = (payload) => {
  return {
    type: SETISLOGGEDIN,
    payload,
  };
};
