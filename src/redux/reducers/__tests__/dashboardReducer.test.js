import {
  fetchPosts,
  postDetailSucceeded,
  postDetailFailed,
  setPosts,
  getPostDetail,
  changePostsError,
} from "redux/action/dashboardActions";
import { initialState } from "../dashboardReducer";
import dashboardReducer from "../dashboardReducer";
describe("dashboard reducer Test", () => {
  let state = initialState;
  beforeEach(() => {
    state = initialState;
  });
  it("must return initial state and postRequested as True", () => {
    const updatedState = { ...state, postsRequested: true };

    expect(dashboardReducer(state, fetchPosts(true))).toEqual(updatedState);
  });
  it("must return initial state and postRequested as false and postsError as payload", () => {
    const updatedState = {
      ...state,
      postsRequested: false,
      postsError: "Error",
    };

    expect(dashboardReducer(state, changePostsError("Error"))).toEqual(
      updatedState
    );
  });
  it("must return initial state and postRequested as false and posts as payload", () => {
    const updatedState = {
      ...state,
      postsRequested: false,
      posts: [{ 1: "one" }, { 2: "two" }],
    };

    expect(
      dashboardReducer(state, setPosts([{ 1: "one" }, { 2: "two" }]))
    ).toEqual(updatedState);
  });

  it("must return initial state and postDetailsRequested is true", () => {
    const updatedState = {
      ...state,
      postDetailRequested: true,
    };
    expect(dashboardReducer(state, getPostDetail())).toEqual(updatedState);
  });
  it("must return initial state and postDetailRequested as false and postDetailError as payload", () => {
    const updatedState = {
      ...state,
      postDetailRequested: false,
      postDetailError: "Error",
    };
    expect(dashboardReducer(state, postDetailFailed("Error"))).toEqual(
      updatedState
    );
  });
  it("must return initial state and postDetailRequested as false and postDetail as payload", () => {
    const updatedState = {
      ...state,
      postDetailRequested: false,
      postDetail: { data: "data" },
    };
    expect(
      dashboardReducer(state, postDetailSucceeded({ data: "data" }))
    ).toEqual(updatedState);
  });
  it("must return initial state for invalid action", () => {
    expect(
      dashboardReducer(state, { type: "INVALID", payload: "INVALID" })
    ).toEqual(state);
  });
});
