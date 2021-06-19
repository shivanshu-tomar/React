import { fetchPosts } from "redux/action/dashboardActions";
import { initialState } from "../dashboardReducer";
import dashboardReducer from "../dashboardReducer";
describe("dashboard reducers", () => {
  let state = initialState;
  beforeAll(() => {
    state = initialState;
  });
  it("must return initial state and postRequested as True", () => {
    const updatedState = { ...state, postsRequested: true };
    console.log(updatedState);
    console.log(state);
    expect(dashboardReducer(state, fetchPosts(true))).toEqual(updatedState);
  });
});
