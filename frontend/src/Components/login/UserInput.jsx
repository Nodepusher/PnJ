import React from "react";

/* const ValidLabelStyle = {
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: "8px",
    overFlow: "hidden",
    display: "flex",
    position: "relative",
    backgroundColor: "#fff",
    borderColor: "rgba(0, 0, 0, 0.1)",
    boxSizing: "border-box",
} 
const InvalidLabelStyle = {
    borderStyle: "solid",
    borderWidth: "2px",
    borderRadius: "8px",
    overFlow: "hidden",
    display: "flex",
    position: "relative",
    backgroundColor: "#fff",
    borderColor: "#eb4545",
    color: "#333334",
    fontWeight: "600",
    fontSize: "14px",
} */

// 아오 스타일 안먹네;;
const ValidLabelStyle = "relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled"
const InValidLabelStyle = "relative flex overflow-hidden rounded-[8px] border-solid border-[2px] border_negative_active focus:border_negative_active disabled:content_disabled"
const ValidInputStyle = "h-[48px] w-full px-[20px] outline-none font_body_regular_md";
const InValidInputStyle ="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"

const UserInput = ({ name, placeholder, type, value, handleInputChange, isValid }) => {
    console.log(`${name} isValid: ${isValid}`);
  return (
    <>
      <label className={isValid === false ? InValidLabelStyle : ValidLabelStyle }>
        <input
            className={isValid === false ? InValidInputStyle : ValidInputStyle}
            name={name}
            placeholder={placeholder}
            type={type}
            value={value}
            onChange={handleInputChange}
        />
      </label>
    </>
  );
};

export default UserInput;
