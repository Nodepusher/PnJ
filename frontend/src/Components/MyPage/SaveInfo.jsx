import React from "react";
import "./animation.css";

const SaveInfo = ({ animationClass, updateState }) => {
  return (
    <div className={`fixed flex flex-col surface_secondary_inverse
        bottom-[30px] left-[50%] z-50 box-border min-w-[358px] translate-x-[-50%] translate-y-[-50%] rounded-[8px] py-[16px] px-[20px] shadow-s ${animationClass}`}>
      <div className="content_primary_inverse font_label_bold_lg text-left">
        <div className="flex">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[20px] w-[20px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
            ></path>
          </svg>
          <span className="ml-[6px]">{updateState ? "저장됨" : "이미지 또는 패스워드 변경을 다시 한번 확인해주세요"}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SaveInfo);
