
const EditUploadImage = () => {
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
              for="fileInputprofile-upload"
            >
              <input
                accept="image/png,image/jpeg,image/jpg"
                className="hidden cursor-pointer"
                id="fileInputprofile-upload"
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
  export default EditUploadImage