import React from "react";
import SideBar from "../../Components/MyPage/SideBar";
import MyPageEdit from "../../Components/MyPage/MyPageEdit";
import MyPagePost from "../../Components/MyPage/MyPagePost";
const MyPageContainer = () => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="flex h-full overflow-hidden">
          <SideBar />
          <MyPagePost />
          {/* <MyPageEdit /> */}
        </div>
      </div>
    </>
  );
};

export default MyPageContainer;
