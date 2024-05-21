import React, { useEffect } from "react";
import axios from "axios";

const MyPageModal = ({ setCheckModal, deletePostId, setPost, postList }) => {
  const closeModal = () => {
    setCheckModal(false);
  };
    const requestDelete = async () => {
      try {
        // 아마 성공하면 상태 변화 되지 않을가?
        await axios.get("http://localhost:4000/deletePost", {
          params: deletePostId,
        });
        setCheckModal(false);
    } catch (error) {
        setPost(postList.filter(post => post.id !== deletePostId))
        setCheckModal(false);
      }
    };
  return (
    <>
      <div className="z-10">
        <div
          className="surface_primary border_primary fixed top-1/2 left-1/2 z-50 box-border flex min-w-[360px]
      -translate-y-1/2 -translate-x-1/2 transform flex-col items-center justify-center rounded-[16px] border p-[32px] shadow-s"
        >
          <h4 className="content_primary font_headline_bold_sm mb-[12px] text-center">
            포스트 삭제
          </h4>
          <div className="content_secondary font_body_regular_lg max-w-[300px] text-center">
            해당 포스트를 삭제하시겠습니까?
          </div>
          <div className="mt-[24px] flex w-full items-center justify-between">
            <div className="flex-1">
              <button
                aria-label="button"
                className="font_button_bold_md relative flex items-center justify-center  h-[40px] rounded-[20px] content_secondary surface_tertiary hover:surface_primary_active active:surface_primary_active disabled:surface_disabled px-[16px] w-full false disabled:content_disabled"
                type="button"
                onClick={closeModal}
              >
                취소
              </button>
            </div>
            <div className="ml-[16px] flex-1">
              <button
                aria-label="button"
                className="font_button_bold_md relative flex items-center justify-center  h-[40px] rounded-[20px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[16px] w-full false disabled:content_disabled"
                type="button"
                onClick={requestDelete}
              >
                확인
              </button>
            </div>
          </div>
        </div>
        <div className="dimmed_40 fixed top-0 left-0 z-40 h-full w-full"></div>
      </div>
    </>
  );
};

export default MyPageModal;
