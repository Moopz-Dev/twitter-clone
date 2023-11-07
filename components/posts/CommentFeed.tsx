import React from "react";
import CommentItem from "./CommentItem";

interface CommentFeedProps {
  comments?: Record<string, any>[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments }) => {
  return (
    <>
      {comments?.map((comment) => (
        // <div key={comment.id}></div>
        <CommentItem key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default CommentFeed;
