import React from "react";

const LoginCommonButton = ({ text, onClickNav }) => {
  return (
    <>
      <button
        aria-label="button"
        className="font_button_bold_md relative flex items-center justify-center mb-[16px] h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
        type="submit"
        // onClick={onClickNav}
      >
        {text}
      </button>
    </>
  );
};

const KakaoButton = ({ text }) => {
  return (
    <>
      <button
        aria-label="button"
        className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_secondary bg-[#FFEA2B] hover:bg-[#FFDE30] active:bg-[#FFDE30] px-[20px] w-full min-w-[88px] disabled:content_disabled"
        type="button"
      >
        <div className="flex items-center justify-center">
          <svg
            viewBox="0 0 17 16"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-[4px] shrink-0"
            height="16px"
            width="16px"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8.5 2C4.803 2 1.833 4.306 1.833 7.128a5.026 5.026 0 0 0 3.091 4.339l-.636 2.306c-.03.06 0 .151.06.181.061.061.182.061.243 0l2.697-1.79c.394.061.788.091 1.212.091 3.667 0 6.667-2.306 6.667-5.127C15.167 4.306 12.197 2 8.5 2Z"
            ></path>
          </svg>
          <div>{text}</div>
        </div>
      </button>
    </>
  );
};

const EmailButton = ({text, onClickNav}) => {
    return (
      <>
        <button
          aria-label="button"
          className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[19px] w-full min-w-[88px] disabled:content_disabled"
          type="button"
          onClick={onClickNav}
        >
          <div className="flex items-center justify-center">
            <svg
              viewBox="0 0 17 16"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-[4px] shrink-0"
              height="16px"
              width="16px"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.833 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9.334a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3.833Zm1.008 1.924a.533.533 0 1 0-.682.819L8.5 9.361l4.341-3.618a.533.533 0 0 0-.682-.82L8.5 7.974l-3.659-3.05Z"
              ></path>
            </svg>
            <div >{text}</div>
          </div>
        </button>
      </>
    );
  };


  export { LoginCommonButton, KakaoButton, EmailButton };