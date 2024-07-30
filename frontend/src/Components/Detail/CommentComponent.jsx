import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReplyComponent from "./ReplyComponent";
import { getCommentId, getPostStatsData } from "../../store/postDetailReducer";
import axios from "axios";

const CommentComponent = ({ commentData, profile, loginUser }) => {
  const [activeReply, setActiveReply] = useState(null); // 현재 활성화된 답글 입력 상태
  const postId = useSelector((state) => state.detail.postId); // 현재 게시물 ID
  const { post } = useSelector((state) => state.detail.postData); // 현재 게시물 데이터
  const dispatch = useDispatch();

  // 답글 입력창 토글 함수
  const showReplyInputComment = (commentId) => {
    setActiveReply((prev) => (prev === commentId ? null : commentId));
    dispatch(getCommentId(commentId));
  };

  // 답글 입력창 숨김 함수
  const hideReplyInputComment = () => {
    setActiveReply(null);
    dispatch(getCommentId(""));
  };

  // 댓글 삭제 함수
  const removeComment = async (commentId) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/board/deleteComment/${commentId}`
      );
      if (response.data.success) {
        dispatch(getPostStatsData(postId)); // 댓글 삭제 후 댓글 목록 업데이트
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  // 스타일 설정
  const StImg = {
    position: "absolute",
    height: "100%",
    width: "100%",
    inset: "0px",
    objectFit: "cover",
    objectPosition: "center center",
    color: "transparent",
  };

  const StBtn = {
    width: "32px",
    height: "32px",
    outline: "none",
  };

  // 날짜 형식 변환 함수
  const formatDateTime = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Asia/Seoul",
    };
    return new Date(dateString)
      .toLocaleDateString("ko-KR", options)
      .replace(/\./g, ".");
  };

  return (
    <ul>
      {commentData.comments.map((comment) => (
        <li
          key={comment.id}
          className="pt-[24px] border-t-[1px] pb-[12px] last:pb-[0px] border_secondary pl-[10px] first:border-t-0"
        >
          <div className="flex gap-[10px]">
            <div className="shrink-0">
              <div>
                <button
                  aria-label="profile image"
                  className="relative flex h-full w-full items-center justify-center rounded-full"
                  type="button"
                  style={StBtn}
                >
                  <img
                    alt={comment.User.name}
                    sizes="(max-width: 240px) 100vw, 240px"
                    src={
                      `/uploads/file/${comment.User.profile}` ||
                      `/uploads/file/default_profile_image.png`
                    }
                    decoding="async"
                    data-nimg="fill"
                    className="rounded-full"
                    loading="lazy"
                    style={StImg}
                  />
                  <div className="border_black_opacity absolute top-0 left-0 h-full w-full rounded-full border"></div>
                </button>
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[4px]">
                  <div className="content_primary font_label_bold_lg">
                    {comment.User.name}
                  </div>
                  {comment.UserId == post.UserId && (
                    <div
                      className="surface_accent inline-flex h-[14px] w-[14px] items-center justify-center rounded-[4px] p-[2px]"
                      data-testid="creator-badge"
                    >
                      <svg
                        viewBox="0 0 12 12"
                        xmlns="http://www.w3.org/2000/svg"
                        className="content_primary_inverse h-[14px] w-[14px]"
                      >
                        <path d="M5.567 1.748a.5.5 0 0 1 .866 0L7.499 3.59a.5.5 0 0 0 .329.238l2.082.445a.5.5 0 0 1 .268.823L8.754 6.681a.5.5 0 0 0-.125.386l.22 2.118a.5.5 0 0 1-.7.51L6.203 8.83a.5.5 0 0 0-.406 0l-1.946.864a.5.5 0 0 1-.7-.509l.22-2.118a.5.5 0 0 0-.125-.386L1.822 5.097a.5.5 0 0 1 .268-.823l2.082-.445a.5.5 0 0 0 .329-.238l1.066-1.843Z"></path>
                      </svg>
                    </div>
                  )}
                </div>
                {loginUser.id == comment.UserId && (
                  <button
                    aria-label="remove comment button"
                    type="button"
                    onClick={() => removeComment(comment.id)}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="content_quaternary_inverse h-[20px] w-[20px]"
                    >
                      <path d="M5.707 5.707a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 1 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414-1.414l-4.95-4.95 4.95-4.95a1 1 0 1 0-1.414-1.414l-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0Z"></path>
                    </svg>
                  </button>
                )}
              </div>
              <div className="h-[5px]"></div>
              <div className="font_label_regular_lg whitespace-pre-wrap break-all content_secondary">
                <p>
                  <span>{comment.content}</span>
                </p>
              </div>
              <div className="h-[8px]"></div>
              <div className="flex gap-[13px]">
                <div className="flex items-center">
                  <span className="content_quaternary font_label_regular_sm">
                    {formatDateTime(comment.updatedAt)}
                  </span>
                </div>
                <button
                  aria-label="sub comment toggle button"
                  className="content_quaternary font_label_bold_sm"
                  type="button"
                  onClick={() => showReplyInputComment(comment.id)}
                >
                  답글달기
                </button>
              </div>
            </div>
          </div>
          <div className="h-[12px]"></div>
          <ReplyComponent
            showReply={activeReply === comment.id} // 답글 입력창 표시 여부
            hideReply={hideReplyInputComment} // 답글 입력창 숨김 함수
            StBtn={StBtn}
            StImg={StImg}
            formatDateTime={formatDateTime}
            replies={comment.Replies} // 답글 데이터
            profile={profile}
            loginUser={loginUser}
            post={post}
          />
        </li>
      ))}
    </ul>
  );
};

export default CommentComponent;
