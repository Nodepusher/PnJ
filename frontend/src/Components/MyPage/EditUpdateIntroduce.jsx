
const EditUpdateIntroduce = () => {
    return (
      <>
        <div className="col-span-3 pt-[40px] pb-[20px] mobile:pb-[40px]">
          <div className="w-[297px]">
            <div className="mb-[7px] flex items-center">
              <strong className="content_primary font_title_bold_md mr-[6px]">
                한 줄 소개
              </strong>
              <svg
                viewBox="0 0 8 8"
                xmlns="http://www.w3.org/2000/svg"
                className="content_negative h-[8px] w-[8px]"
              >
                <circle cx="4" cy="4" r="4"></circle>
              </svg>
            </div>
            <span className="content_secondary font_body_regular_md">
              자신을 소개하는 간략한 글을 입력해주세요.
            </span>
          </div>
        </div>
        <div className="col-span-7 col-start-6 mobile:pt-[40px] pb-[40px]">
          <div>
            <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
              <input
                className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                placeholder="한 줄 소개를 입력해주세요."
                type="text"
                value="IT 위주의 제품 소개를 합니다"
              />
            </label>
            <div className="font_label_regular_sm mt-[8px] flex content_quaternary">
              <div className="ml-auto">17/50</div>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default EditUpdateIntroduce