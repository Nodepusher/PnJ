import React from "react";
import WriterPostHeader from "../../Components/Write/WriterPostHeader";
import WriteNavigation from "../../Components/Write/WriteNavigation";

const WriteHeaderContainer = ({ showThumbModal, savedPost }) => {
  const StImg = {
    position: "absolute",
    height: "100%",
    width: "100%",
    inset: "0px",
    color: "transparent",
  };

  const StTemp = {
    width: "0%",
    height: "3px",
  };
  const zIndex = {
    zIndex : 30
  }

  return (
    <div className="sticky top-0 z-10 z-100" style={zIndex}>
      {/* <WriteNavigation StImg={StImg} /> */}
      <WriterPostHeader showThumbModal={showThumbModal} savedPost={savedPost} />
      <div
        className="surface_accent translate-x-0 animate-slideLeftToRight"
        style={StTemp}
      ></div>
    </div>
  );
};

export default WriteHeaderContainer;
