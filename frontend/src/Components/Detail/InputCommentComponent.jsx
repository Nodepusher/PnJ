// src/Components/Detail/InputCommentComponent.js

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  createComment,
  createReply,
  getPostStatsData,
} from "../../store/postDetailReducer";

const InputCommentComponent = ({ type, replyCallback }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const commentId = useSelector((state) => state.detail.commentId);
  const postId = useSelector((state) => state.detail.postId);
  const userId = 1;
  const moveToLoginPage = () => {
    nav("/login");
  };
  const isLoggedIn = true;

  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === "comment") {
      console.log("Comment submitted:", comment);
      await dispatch(createComment(postId, comment, userId));
    } else if (type === "reply") {
      console.log(commentId);
      console.log("Reply submitted:", comment);
      await dispatch(createReply(postId, comment, userId, commentId));
      replyCallback();
    }
    setComment("");
    await dispatch(getPostStatsData(postId)); // 댓글 작성 후 댓글 목록 업데이트
  };

  const StBtn = {
    width: "32px",
    height: "32px",
    outline: "none",
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

  const StInput = {
    backgroundColor: "#fafafb",
    color: "#757575",
    width: "100%",
  };

  return (
    <div className="border_primary rounded-[8px] border">
      <div className="surface_secondary flex items-center justify-between gap-[16px] overflow-hidden rounded-[8px] py-[12px] px-[16px]">
        {isLoggedIn ? (
          <div className="flex items-center justify-between gap-[16px] w-full">
            <div className="shrink-0">
              <button
                aria-label="profile image"
                className="relative flex h-full w-full items-center justify-center rounded-full"
                type="button"
                style={StBtn}
              >
                <img
                  alt="임웅빈"
                  sizes="(max-width: 240px) 100vw, 240px"
                  srcSet=""
                  src=""
                  decoding="async"
                  data-nimg="fill"
                  className="rounded-full"
                  loading="lazy"
                  style={StImg}
                />
                <div className="border_black_opacity absolute top-0 left-0 h-full w-full rounded-full border"></div>
              </button>
            </div>
            <form className="w-full">
              <input
                type="text"
                placeholder="댓글을 입력해주세요."
                className="content_disabled font_label_regular_lg"
                value={comment}
                onChange={(e) => handleChange(e)}
                style={StInput}
              />
            </form>
          </div>
        ) : (
          <div className="flex items-center justify-between gap-[16px]">
            <p className="content_disabled font_label_regular_lg">
              댓글을 작성하려면 로그인을 해주세요.
            </p>
          </div>
        )}
        <div className="shrink-0">
          <button
            aria-label="button"
            className="font_button_bold_md relative flex items-center justify-center h-[32px] rounded-[16px] content_primary_inverse surface_accent hover:surface_accent_active active:surface_accent_active disabled:surface_disabled px-[16px] false disabled:content_disabled"
            type="button"
            onClick={isLoggedIn ? (e) => handleSubmit(e) : moveToLoginPage}
          >
            {isLoggedIn ? "게시" : "로그인"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputCommentComponent;
