import React from "react";

import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.username} comment={comment} />
      ))}
    </>
  );
};

export default Comments;
