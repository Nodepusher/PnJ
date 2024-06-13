import React, { useEffect, memo } from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "../../Components/MyPage/SideBar";
import MyPageEditContainer from "./MyPageEditContainer";
import MyPagePostContainer from "./MyPagePostContainer";
import { usePage } from "../../Context/MyPageContext";
import { useSelector } from "react-redux";

const MyPageContainer = () => {
  const { page, updatePageInfo } = usePage();
  const [searchParams] = useSearchParams();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("Mypage isAuthenticated", isAuthenticated);

  if (!isAuthenticated) {
    console.log("몇번 들어오나 보자");
  }

  useEffect(() => {
    const myPost = searchParams.get("myPost") === "true";
    const myInfo = searchParams.get("myInfo") === "true";

    if (myPost !== page.myPost || myInfo !== page.myInfo) {
      updatePageInfo("myPost", myPost);
      updatePageInfo("myInfo", myInfo);
    }
  }, [searchParams, page.myPost, page.myInfo, updatePageInfo]);

  return (
    <>
      <SideBar />
      {page.myPost && <MyPagePostContainer />}
      {page.myInfo && <MyPageEditContainer />}
    </>
  );
};

export default memo(MyPageContainer);
