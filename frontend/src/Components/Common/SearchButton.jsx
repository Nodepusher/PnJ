import React from "react";

const SearchButton = () => {
  const ButtonStyle = {
    backgroundColor: "transparent",
    backgroundImage: "none",
    border: "0 solid",
  };
  const SvgStyle = { width: "20px", height: "20px" };
  return (
    <button aria-label="search" type="button" style={ButtonStyle}>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={SvgStyle}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.83 16.561a7.8 7.8 0 1 1 1.233-1.312l3.465 3.465a.9.9 0 1 1-1.272 1.273L15.83 16.56Zm1.13-5.961a6.16 6.16 0 1 1-12.32 0 6.16 6.16 0 0 1 12.32 0Z"
        ></path>
      </svg>
    </button>
  );
};

export default SearchButton;
