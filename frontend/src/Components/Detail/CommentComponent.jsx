import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ReplyComponent from "./ReplyComponent";
import { getCommentId } from "../../store/postDetailReducer";

const CommentComponent = ({ commentData }) => {
  const [activeReply, setActiveReply] = useState(null);
  const dispatch = useDispatch();

  const showReplyInputComment = (commentId) => {
    setActiveReply((prev) => (prev === commentId ? null : commentId));
    dispatch(getCommentId(commentId));
  };

  const hideReplyInputComment = () => {
    setActiveReply(null);
    dispatch(getCommentId(''));
  };

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
                    src={comment.User.profile || "default-profile-url"}
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
                </div>
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
            showReply={activeReply === comment.id}
            hideReply={hideReplyInputComment}
            StBtn={StBtn}
            StImg={StImg}
            formatDateTime={formatDateTime}
            replies={comment.Replies}
          />
        </li>
      ))}
    </ul>
  );
};

export default CommentComponent;
