import signupActionsType from "redux/actionType/signupActionTypes";
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

  USER_SIGNUP_REQUESTED,
} = signupActionsType;

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

export const changeUserName = (payload) => {
  return {
    type: SETUSERNAME,
    payload,
  };
};
export const changeNameError = (payload) => {
  return {
    type: SETNAMEERROR,
    payload,
  };
};
export const changeName = (payload) => {
  return {
    type: SETNAME,
    payload,
  };
};
export const changeCheckBox = (payload) => {
  return {
    type: SETCHECKBOX,
    payload,
  };
};
export const changeCheckBoxError = (payload) => {
  return {
    type: SETCHECKBOXERRROR,
    payload,
  };
};
export const changeUserNameError = (payload) => {
  return {
    type: SETUSERNAMEERROR,
    payload,
  };
};
export const userSignupRequested = (payload) => {
  return {
    type: USER_SIGNUP_REQUESTED,
    payload,
  };
};
