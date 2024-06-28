import React from "react";

const AsideRadioBtn = () => {
  return (
    <div className="px-[20px]">
      <ul>
        <li className="border_secondary border-t py-[26px] first:border-t-0">
          <label className="relative flex">
            <input
              className="absolute h-0 w-0 opacity-0"
              name="group"
              type="radio"
              value="PUBLIC"
            />
            <div className="shrink-0 grow-0 surface_primary border_accent_active flex h-[20px] w-[20px] items-center justify-center rounded-full border">
              <svg
                viewBox="0 0 8 8"
                xmlns="http://www.w3.org/2000/svg"
                className="content_accent_active h-[12px] w-[12px]"
              >
                <circle cx="4" cy="4" r="4"></circle>
              </svg>
            </div>
            <div className="content_primary font_label_bold_lg mt-[1px] ml-[12px] flex-grow">
              <div className="content_primary font_label_bold_lg">
                전체 공개
              </div>
            </div>
          </label>
        </li>
      </ul>
    </div>
  );
};

export default AsideRadioBtn;
