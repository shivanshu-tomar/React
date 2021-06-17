import React, { useEffect } from "react";
import DashboardComponent from "components/DashboardComponent";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "redux/action/dashboardActions";

import ClipLoader from "react-spinners/ClipLoader";
function DashboardContainer() {
  const state = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  console.log(state);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <>
      {state.postsRequested ? (
        <div className="d-flex align-items-center justify-content-center ">
          <ClipLoader />
        </div>
      ) : (
        <DashboardComponent posts={state.posts} />
      )}
    </>
  );
}

export default DashboardContainer;
