import React from "react";

const checkedTrue = {
  backgroundColor: "#7e69fe",
};
const checkedFalse = {
  backgroundColor: "rgb(232 232 232)",
};
const CheckBoxOption = ({ label, onChange, isChecked }) => {
  return (
    <label className="relative flex w-full items-center false">
      <input
        className="absolute h-0 w-0 opacity-0"
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <div
        style={isChecked ? checkedTrue : checkedFalse}
        className="surface_accent flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="content_primary_inverse content_disabled h-[12px] w-[12px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
          ></path>
        </svg>
      </div>
      <div className="ml-[12px]">
        {/* <strong className="font_label_bold_lg">이용약관 전체동의</strong> */}
        <span className="font_body_regular_md">{label}</span>
      </div>
    </label>
  );
};

const UserSignUpCheckBox = ({ onChange, options, allChecked }) => {
  return (
    <div className="border_primary rounded-[8px] border p-[20px]">
      <div className="border_secondary border-b pb-[16px]">
        <CheckBoxOption
          label="이용약관 전체동의"
          isChecked={allChecked}
          onChange={onChange}
        />
      </div>
      <div className="mt-[16px] grid grid-cols-1 gap-y-[12px]">
        {options.map((option, index) => (
          <CheckBoxOption
            key={index}
            label={option.label}
            isChecked={option.isChecked}
            onChange={(e) => onChange(e, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(UserSignUpCheckBox);
