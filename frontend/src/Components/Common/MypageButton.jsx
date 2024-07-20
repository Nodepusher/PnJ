import React from "react";

const MypageButton = ({ onClick }) => {
  const style = {
    padding: "0 16px",
    borderRadius: "16px",
    height: "32px",
    color: "#fff",
    backgroundColor: "#1d1d1e",
    fontWeight: "600",
    fontSize: "14px",
  };
  return (
    <div className="hidden lg:block">
      <button aria-label="button" type="button" style={style} onClick={onClick}>
        MY P&J 
      </button>
    </div>
  );
};

export default MypageButton;
