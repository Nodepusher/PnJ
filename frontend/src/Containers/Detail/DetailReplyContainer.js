import React, { useState, useEffect } from "react";
import InputCommentComponent from "../../Components/Detail/InputCommentComponent";
import CommentComponent from "../../Components/Detail/CommentComponent";
import { useSelector } from "react-redux";
const DetailReplyContainer = ({ profile }) => {
  const commentData = useSelector((state) => state.detail.postStats);
  const loginUser = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.detail.statsLoading);
  if (loading) {
    return <div></div>;
  }
  const type = "comment";
  const commentCount = commentData.comments.length;
  const replyCount = commentData.comments.reduce(
    (acc, comment) => acc + comment.Replies.length,
    0
  );
  const totalCount = commentCount + replyCount;
  return (
    <div>
      <h4 className="font_headline_bold_sm content_secondary">
        댓글 <span>{totalCount}</span>
      </h4>
      <div className="h-[24px]"></div>
      <InputCommentComponent type={type} profile={profile} />
      <div className="h-[23px]"></div>
      <CommentComponent
        commentData={commentData}
        profile={profile}
        loginUser={loginUser}
      />
    </div>
  );
};

export default DetailReplyContainer;
