import React, { useEffect, useState } from "react";
import defaultThumb from "../../Assets/images/noThumb.png";
import { updatePostData } from "../../store/postWriteReducer";
import { useDispatch } from "react-redux";

const Thumbnail = ({ hideThumbModal, handleSubmit, setThumbFile }) => {
  const [PreviewImage, setPreviewImage] = useState(null);

  const insertImage = (e) => {
    const image = e.target.files[0];
    if (image) {
      setThumbFile(image);
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
    }
  };

  return (
    <div className="z-0">
      <div className="surface_primary border_primary fixed top-0 left-1/2 z-[9999] flex h-[100vh] w-full -translate-x-1/2 flex-col items-center overflow-y-auto overflow-x-hidden border shadow-s mobile:top-[30px] mobile:h-auto mobile:w-max mobile:justify-center mobile:overflow-hidden mobile:rounded-[16px]">
        <div className="flex w-full items-center justify-between px-[16px] pt-[22px] pb-[10px] mobile:pr-[34px] mobile:pl-[40px]">
          <h4 className="content_primary font_headline_bold_sm">썸네일 등록</h4>
          <button
            aria-label="close button"
            className="flex h-[32px] w-[32px] items-center justify-center"
            type="button"
            onClick={hideThumbModal}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-[20px] w-[20px] mobile:content_primary"
            >
              <path d="M5.707 5.707a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 1 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414-1.414l-4.95-4.95 4.95-4.95a1 1 0 1 0-1.414-1.414l-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0Z"></path>
            </svg>
          </button>
        </div>
        <div className="modal-inner w-full max-w-[540px] overflow-hidden overflow-y-auto px-[16px] pt-[14px] pb-[20px] mobile:max-h-[654px] mobile:px-[40px]">
          <div className="content_secondary font_body_regular_lg">
            <div className="xs:min-w-[460px] w-full">
              <div className="flex justify-center items-center flex-col">
                <div className="surface_black_opacity_6 border_black_opacity relative flex h-[144px] w-[144px] justify-center items-center border">
                  <img
                    className="h-full"
                    src={PreviewImage ? PreviewImage : defaultThumb}
                  />
                </div>
                <div className="h-[10px]"></div>

                <div className="flex justify-center">
                  <button
                    aria-label="button"
                    className="font_button_bold_md relative flex items-center justify-center h-[32px] rounded-[8px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] false disabled:content_disabled"
                    type="button"
                  >
                    새 이미지 등록
                    <label
                      aria-label="파일 첨부"
                      className="absolute top-0 left-0 z-[1] block block h-[100%] w-full cursor-pointer opacity-0"
                      htmlFor="fileInputattached-thumbnail"
                    >
                      <input
                        className="hidden cursor-pointer"
                        id="fileInputattached-thumbnail"
                        type="file"
                        accept="image/*"
                        onChange={insertImage}
                      />
                    </label>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="surface_primary flex w-full justify-end gap-[16px] px-[16px] pt-[12px] pb-[22px] mobile:px-[40px]">
          <button
            aria-label="button"
            className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[24px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[19px] min-w-[88px] disabled:content_disabled"
            type="button"
            onClick={hideThumbModal}
          >
            취소
          </button>
          <button
            aria-label="button"
            className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[24px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] min-w-[88px] disabled:content_disabled"
            type="submit"
            onClick={handleSubmit}
          >
            게시
          </button>
        </div>
      </div>
      <div className="dimmed_40 fixed top-0 left-0 z-30 h-full w-full mobile:block"></div>
    </div>
  );
};

export default Thumbnail;
