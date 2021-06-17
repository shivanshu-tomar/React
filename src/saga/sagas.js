import { takeEvery, takeLatest } from "redux-saga/effects";
import authUser from "./loginSaga";
import loginActionType from "redux/actionType/loginActionType";
import signupActionTypes from "redux/actionType/signupActionTypes";
import dashboardActionTypes from "redux/actionType/dashboardActionTypes";

import signupUser from "./signupSaga";
import fetchPosts from "./postsSaga";
import getPostDetail from "./postDetailSaga";
export default function* mySaga() {
  console.log("Saga");
  yield takeEvery(loginActionType.USER_AUTH_REQUESTED, authUser);
  yield takeLatest(signupActionTypes.USER_SIGNUP_REQUESTED, signupUser);
  yield takeLatest(dashboardActionTypes.GET_POSTS_REQUESTED, fetchPosts);
  yield takeLatest(dashboardActionTypes.GET_POST_DETAILS, getPostDetail);
}
