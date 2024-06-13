import React from "react";

const EditInputMsg = ({ text, isValid }) => {
  return (
    <>
      {/* <label style={{display: isValid === false ? "block" : "none" }} className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled"> */}
      <label
        style={{
          border: "none",
          display: isValid === false ? "block" : "none",
        }}
        className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled"
      >
        <div className="font_label_regular_sm mt-[8px] flex content_negative">
          <div className="mr-auto flex items-center temp">
            <svg
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
              className="mr-[4px] h-[16px] w-[16px]"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.008 22.05c5.523.023 10.019-4.436 10.042-9.959.023-5.523-4.436-10.018-9.959-10.041C6.568 2.027 2.073 6.485 2.05 12.008c-.023 5.523 4.435 10.019 9.958 10.042Zm1.527-6.494a1.5 1.5 0 1 1-3-.013 1.5 1.5 0 0 1 3 .013Zm-1.181-2.505a.5.5 0 0 0 .498-.436l.646-4.997a.5.5 0 0 0-.494-.564l-1.867-.008a.5.5 0 0 0-.499.56l.604 5.002a.5.5 0 0 0 .495.44l.617.003Z"
              ></path>
            </svg>
            {text}
          </div>
        </div>
      </label>
    </>
  );
};

export default React.memo(EditInputMsg);
