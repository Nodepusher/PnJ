/**
 *
 * canvas : html5 동적 그래픽 렌더링 js를 통해 그림을 그림
 * @param {File} file - 업로드된 이미지 파일
 * @param {Object} props - 컴포넌트 속성
 * @param {string} props.uploadImage - 업로드된 이미지의 데이터 URL
 * @param {function} props.setUploadImage - 업로드된 이미지 URL을 설정하는 함수
 */

import React from "react";

const EditUploadImage = ({ uploadImage, setUploadImage, setFile }) => {
  const UploadImage = (e) => {
    const file = e.target.files[0];
    console.log(e.target.files[0]);
    setFile(file);
    resizeImage(file);
  };
  const resizeImage = (file) => {
    // FileReader 객체 생성
    const reader = new FileReader();

    // 파일이 읽혔을때 실행 이벤트
    reader.onload = function (event) {
      // 이미지 객체
      const img = new Image();
      // 이미지 로드 됐을 때 실행 이벤트
      img.onload = function () {
        const size = 200;
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = size;
        canvas.height = size;

        // Create a circular mask
        ctx.beginPath();
        ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        // Calculate the aspect ratio and dimensions
        const aspect = img.width / img.height;
        let drawWidth, drawHeight;

        if (aspect > 1) {
          drawWidth = size * aspect;
          drawHeight = size;
        } else {
          drawWidth = size;
          drawHeight = size / aspect;
        }

        ctx.drawImage(
          img,
          (size - drawWidth) / 2,
          (size - drawHeight) / 2,
          drawWidth,
          drawHeight
        );

        const dataUrl = canvas.toDataURL("image/png");
        setUploadImage(dataUrl);
      };

      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };
  return (
    <>
      <div className="mb-[14px]">
        <button
          aria-label="button"
          className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] false disabled:content_disabled"
          type="button"
        >
          이미지 업로드
          <label
            aria-label="파일 첨부"
            className="absolute top-0 left-0 z-[1] block block h-[100%] w-full cursor-pointer opacity-0"
            htmlFor="fileInputprofile-upload"
          >
            <input
              className="hidden cursor-pointer"
              id="fileInputprofile-upload"
              onChange={UploadImage}
              type="file"
            />
          </label>
        </button>
      </div>
      <p className="content_quaternary font_body_regular_md">
        <span>파일 형식은 jpg 또는 png로,</span>
        <br />
        <span>사이즈는 가로 200px, 세로 200px 이상으로 올려주세요.</span>
      </p>
    </>
  );
};
export default EditUploadImage;
