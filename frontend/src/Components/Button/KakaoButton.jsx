
import React from 'react';
const KakaoButton = ({ text }) => {
    return (
      <>
        <button
          className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_secondary bg-[#FFEA2B] hover:bg-[#FFDE30] active:bg-[#FFDE30] px-[20px] w-full min-w-[88px] disabled:content_disabled"
          type="button"
        >
          <div className="flex items-center justify-center">
            <svg
              className="mr-[4px] shrink-0"
              height="16px"
              width="16px"
            >
              <path
                d="M8.5 2C4.803 2 1.833 4.306 1.833 7.128a5.026 5.026 0 0 0 3.091 4.339l-.636 2.306c-.03.06 0 .151.06.181.061.061.182.061.243 0l2.697-1.79c.394.061.788.091 1.212.091 3.667 0 6.667-2.306 6.667-5.127C15.167 4.306 12.197 2 8.5 2Z"
              ></path>
            </svg>
            <div>{text}</div>
          </div>
        </button>
      </>
    );
  };
  export default React.memo(KakaoButton);