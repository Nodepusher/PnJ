import React from "react";

const ClickedInput = () => {
  return (
    <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[2px] border_accent_active disabled:content_disabled">
      <input
        className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
        placeholder="비밀번호 입력"
        type="password"
        value=""
      />
    </label>
  );
};

export default ClickedInput;
