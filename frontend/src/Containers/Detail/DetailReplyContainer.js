import React, { useState, useEffect } from "react";
import InputCommentComponent from "../../Components/Detail/InputCommentComponent";
import CommentComponent from "../../Components/Detail/CommentComponent";
import { useSelector } from "react-redux";
// import Spinner from '../Common/Spinner'
const DetailReplyContainer = ({ profile }) => {
  const commentData = useSelector((state) => state.detail.postStats);
  const loginUser = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.detail.statsLoading);
  if (loading) {
    return <div></div>;
  }
  const type = "comment";
  console.log("commentData", commentData);
  const commentCount = commentData.comments.length;
  const replyCount = commentData.comments.reduce(
    (acc, comment) => acc + comment.Replies.length,
    0
  );
  const totalCount = commentCount + replyCount;
  // const totalLength = commentData.comments.reduce((acc, comment) => {
  //     return acc + 1 + comment.replies.length;
  // }, 0);
  return (
    <div>
      <h4 className="font_headline_bold_sm content_secondary">
        댓글 <span>{totalCount}</span>
      </h4>
      <div className="h-[24px]"></div>
      {/* 댓글 인풋 컴포넌트 
            만약 댓글 입력 후 게시버튼을 눌렀는데 댓글이 등록이 안되면 게시 버튼 눌렀을때 commentComponent를 리렌더링 시켜야함
            답글 달기의 게시버튼은 버블링때문에 리렌더링 되고있어서 문제 없음 */}
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
