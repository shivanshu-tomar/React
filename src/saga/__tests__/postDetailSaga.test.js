import getPostDetailSaga from "saga/postDetailSaga";

import {
  getPostDetail,
  postDetailFailed,
  postDetailSucceeded,
} from "redux/action/dashboardActions";
import { getPost } from "api/postsApiWrapper";
import { call, put } from "@redux-saga/core/effects";
describe("Test cases for getPostDetail Saga", () => {
  let action, itr;
  beforeEach(() => {
    action = getPostDetail(true);
    itr = getPostDetailSaga(action);
  });
  it("must call get post ", () => {
    expect(itr.next().value).toEqual(call(getPost, action.payload));
  });
  it("it must dispatch action getPostDetailSucceeded for success api call", () => {
    let response = {
      data: "TesT",
    };
    itr.next();
    expect(itr.next(response).value).toEqual(
      put(postDetailSucceeded(response.data))
    );
  });
  it("it must handle failure case", () => {
    itr.next();
    let e = Error("message");
    expect(itr.throw(e).value).toEqual(put(postDetailFailed(e.message)));
  });
});
