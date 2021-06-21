import { call, put } from "@redux-saga/core/effects";
import { getPosts } from "api/postsApiWrapper";
import {
  changePostsError,
  fetchPosts,
  setPosts,
} from "redux/action/dashboardActions";
import fetchPostsSaga from "saga/postsSaga";
describe("Test cases for getchPosts Saga", () => {
  let action, itr;
  beforeEach(() => {
    action = fetchPosts({});
    itr = fetchPostsSaga(action);
  });
  it("must call api ", () => {
    expect(itr.next().value).toEqual(call(getPosts));
  });
  it("it must dispatch action for success api call", () => {
    let response = {
      data: "TesT",
    };
    itr.next();
    expect(itr.next(response).value).toEqual(put(setPosts(response.data)));
  });
  it("it must handle failure case", () => {
    itr.next();
    let e = Error("message");
    expect(itr.throw(e).value).toEqual(put(changePostsError(e.message)));
  });
});
// function* fetchPosts(action) {
//   try {
//     console.log(action);
//     const response = yield call(getPosts);
//     console.log(response);
//     yield put({ type: GET_POSTS_SUCCEEDED, payload: response.data });
//   } catch (e) {
//     yield put({ type: GET_POSTS_FAILED, payload: e.message });
//   }
// }
