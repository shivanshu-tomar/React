import React from "react";

function PostComponent({ post }) {
  return (
    <div>
      <h1>{post.body}</h1>
    </div>
  );
}

export default PostComponent;
