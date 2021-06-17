import React, { useEffect } from "react";
import PostComponent from "components/PostComponent";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getPostDetail } from "redux/action/dashboardActions";
import ClipLoader from "react-spinners/ClipLoader";
function PostContainer() {
  const state = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(getPostDetail({ id }));
  }, [dispatch, id]);
  return (
    <>
      {state.postDetailRequested ? (
        <div className="d-flex align-items-center justify-content-center ">
          <ClipLoader />
        </div>
      ) : (
        <PostComponent post={state.postDetail} />
      )}
    </>
  );
}

export default PostContainer;
