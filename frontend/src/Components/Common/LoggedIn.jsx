import React from "react";
import LoginButton from "./LoginButton";
import defaultImage from "../../Assets/images/temp.png";

const LoggedIn = ({ onClick, profile }) => {
  const StImg = {
    position: "absolute",
    height: "100%",
    width: "100%",
    inset: "0px",
    color: "transparent",
  };
  return (
    <div className="flex">
      <div className="relative mr-[6px]">
        <button className="relative block h-[32px] w-[32px] rounded-full">
          <img
            alt="프로필 이미지"
            sizes="10vw"
            src={profile === "default_image" ? defaultImage : ""}
            decoding="async"
            data-nimg="fill"
            className="rounded-full"
            loading="lazy"
            style={StImg}
          />
        </button>
      </div>
      <LoginButton onClick={onClick} text="로그아웃" />
    </div>
  );
};

export default LoggedIn;
