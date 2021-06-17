import React from "react";
import SignupComponents from "components/SignupComponent";
import * as yup from "yup";
import ClipLoader from "react-spinners/ClipLoader";

import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  changeEmail,
  changeEmailError,
  changePassword,
  changePasswordError,
  changeCheckBox,
  changeCheckBoxError,
  changeUserName,
  changeUserNameError,
  changeName,
  changeNameError,
  userSignupRequested,
} from "redux/action/signupActions";

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
  name: yup.string().max(15).required(),
  userName: yup.string().required().min(6),
  checkBox: yup
    .boolean()
    .required("The terms and conditions must be accepted")
    .oneOf([true], "The terms and conditions must be accepted."),
});

function SignupContainer() {
  const state = useSelector((state) => state.signup);
  console.log(state);
  const dispatch = useDispatch();
  const history = useHistory();
  const emailChangeHandler = (e) => {
    dispatch(changeEmail(e.target.value));
    console.log(state.email);
  };
  const checkBoxHandler = (e) => {
    dispatch(changeCheckBox(e.target.checked));
  };
  const nameChangeHandler = (e) => {
    dispatch(changeName(e.target.value));
    console.log(state.name);
  };
  const passwordChangeHandler = (e) => {
    dispatch(changePassword(e.target.value));
  };
  const userNameChangeHandler = (e) => {
    dispatch(changeUserName(e.target.value));
    console.log(state.userName);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(changeEmailError(""));
    dispatch(changePasswordError(""));
    dispatch(changeNameError(""));
    dispatch(changeCheckBoxError(""));
    dispatch(changeUserNameError(""));
    schema
      .validate(
        {
          email: state.email,
          password: state.password,
          name: state.name,
          userName: state.userName,
          checkBox: state.checkBox,
        },
        { abortEarly: false }
      )
      .then(() => {
        dispatch(
          userSignupRequested({
            accepted_terms: state.checkBox,
            email: state.email,
            full_name: state.name,
            password: state.password,
            type: "public",
            username: state.userName,
          })
        );
      })
      .catch((err) => {
        err.inner.forEach((ele) => {
          console.log(ele.message);
          if (ele.path === "email") dispatch(changeEmailError(ele.message));
          if (ele.path === "password")
            dispatch(changePasswordError(ele.message));
          if (ele.path === "name") dispatch(changeNameError(ele.message));

          if (ele.path === "checkBox")
            dispatch(changeCheckBoxError(ele.message));
          if (ele.path === "userName")
            dispatch(changeUserNameError(ele.message));
        });
      });
  };
  state.isUserSignedup && history.push("/");
  return (
    <>
      {state.userSignupRequested ? (
        <div className="d-flex align-items-center justify-content-center ">
          <ClipLoader />
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-center ">
          <SignupComponents
            nameChangeHandler={nameChangeHandler}
            passwordChangeHandler={passwordChangeHandler}
            emailChangeHandler={emailChangeHandler}
            emailError={state.emailError}
            nameError={state.nameError}
            passwordError={state.passwordError}
            onSubmitHandler={onSubmitHandler}
            checkBoxHandler={checkBoxHandler}
            checkBoxError={state.checkBoxError}
            userNameChangeHandler={userNameChangeHandler}
            userNameError={state.userNameError}
          />
        </div>
      )}
    </>
  );
}

export default SignupContainer;
