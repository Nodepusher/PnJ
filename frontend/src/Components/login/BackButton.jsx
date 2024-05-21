import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
const BackButton = ({ url }) => {
  console.log(url);
  const nav = useNavigate();
  const onClickBackButton = useCallback(
    (e) => {
      nav(url);
    },
    [url, nav]
  );

  return (
    <>
      <div className="w-full px-[32px] lg:px-[40px]">
        <button
          className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[24px] content_secondary surface_tertiary hover:surface_primary_active active:surface_primary_active disabled:surface_disabled px-[20px] min-w-[88px] disabled:content_disabled"
          type="button"
          onClick={onClickBackButton}
        >
          <div className="flex items-center justify-center">
            <svg
              viewBox="0 0 17 16"
              className="mr-[4px] shrink-0"
              height="16px"
              width="16px"
            >
              <path d="M13.833 8a.667.667 0 0 0-.666-.667H5.72L8.973 4.08a.667.667 0 1 0-.943-.943L3.167 8l4.863 4.863a.665.665 0 0 0 .94-.94L5.72 8.667h7.447A.667.667 0 0 0 13.833 8Z"></path>
            </svg>
            <div>뒤로</div>
          </div>
        </button>
      </div>
    </>
  );
};

export default React.memo(BackButton);
