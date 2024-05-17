import React from "react";
import SideBar from "../../Components/MyPage/SideBar";
import MyPageEditContainer from "./MyPageEditContainer";
import MyPagePostContainer from "./MyPagePostContainer";
import { usePage } from "../../Context/MyPageContext";
const MyPageContainer = () => {
  const { page, updatePageInfo } = usePage();
  return (
    <>
      <SideBar />
      {page.myPost && <MyPagePostContainer />}
      {page.myInfo && <MyPageEditContainer />}
    </>
  );
};

export default MyPageContainer;
