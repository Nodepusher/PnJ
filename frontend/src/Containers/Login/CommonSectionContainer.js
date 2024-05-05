import React from "react";

// props 객체에서 text 속성을 구조 분해 할당 방식으로 추출합니다.
const CommonSectionContainer = ({ text, divText, children }) => {
  return (
    <>
      <section className="mt-[76px] flex w-full min-w-[320px] max-w-[400px] flex-col items-center px-[32px] lg:mx-auto lg:mt-[52px]">
        <h1 className="font_display_bold_sm" dangerouslySetInnerHTML={{ __html: text }}></h1>
        <h1 className="font_display_bold_sm" >
          <div className="text-center" dangerouslySetInnerHTML={{ __html: divText }}>
          </div>
        </h1>
        {children}
      </section>
    </>
  );
};

export default CommonSectionContainer;
