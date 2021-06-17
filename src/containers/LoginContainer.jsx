import React from "react";
import LoginComponent from "components/LoginComponent";
import * as yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import {
  changeEmail,
  changeEmailError,
  changePassword,
  changePasswordError,
  authUser,
} from "../redux/action/loginActions";

let schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(6).required(),
});

function LoginContainer() {
  const history = useHistory();
  const state = useSelector((state) => state.login);
  const dispatch = useDispatch();
  console.log(state);
  const emailChangeHandler = (e) => {
    dispatch(changeEmail(e.target.value));
  };
  const passwordChangeHandler = (e) => {
    dispatch(changePassword(e.target.value));
  };
  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(changePasswordError(""));
    dispatch(changeEmailError(""));

    schema
      .validate(
        {
          email: state.email,
          password: state.password,
        },
        { abortEarly: false }
      )
      .then(() => {
        dispatch(authUser({ username: state.email, password: state.password }));
      })
      .catch((err) => {
        err.inner.forEach((ele) => {
          console.log(ele.message);
          if (ele.path === "email") dispatch(changeEmailError(ele.message));
          else if (ele.path === "password")
            dispatch(changePasswordError(ele.message));
        });
      });
  };
  if (state.userAuthSucceeded) history.push("/dashboard");
  return (
    <>
      {state.userAuthrequested ? (
        <div className="d-flex align-items-center justify-content-center ">
          <ClipLoader />
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center ">
          <LoginComponent
            email={state.email}
            password={state.password}
            emailChangeHandler={emailChangeHandler}
            passwordChangeHandler={passwordChangeHandler}
            onClickHandler={onClickHandler}
            emailError={state.emailError}
            passError={state.passwordError}
            isLoggedIn={state.isLoggedIn}
          />
        </div>
      )}
    </>
  );
}

export default LoginContainer;
