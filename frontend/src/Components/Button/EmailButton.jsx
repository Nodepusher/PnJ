import React from "react";
const EmailButton = ({text, onClickNav}) => {
    return (
      <>
        <button
          className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[19px] w-full min-w-[88px] disabled:content_disabled"
          type="button"
          onClick={onClickNav}
        >
          <div className="flex items-center justify-center">
            <svg
              className="mr-[4px] shrink-0"
              height="16px"
              width="16px"
            >
              <path
                d="M3.833 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9.334a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3.833Zm1.008 1.924a.533.533 0 1 0-.682.819L8.5 9.361l4.341-3.618a.533.533 0 0 0-.682-.82L8.5 7.974l-3.659-3.05Z"
              ></path>
            </svg>
            <div >{text}</div>
          </div>
        </button>
      </>
    );
  };

  export default React.memo(EmailButton);