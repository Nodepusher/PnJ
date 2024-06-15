import React, { useEffect, memo } from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "../../Components/MyPage/SideBar";
import MyPageEditContainer from "./MyPageEditContainer";
import MyPagePostContainer from "./MyPagePostContainer";
import { usePage } from "../../Context/MyPageContext";
import { useSelector } from "react-redux";
import Spinner from "../Common/Spinner";

const MyPageContainer = () => {
  const { page, updatePageInfo } = usePage();
  const [searchParams] = useSearchParams();
  const { user, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const myPost = searchParams.get("myPost") === "true";
    const myInfo = searchParams.get("myInfo") === "true";

    if (myPost !== page.myPost || myInfo !== page.myInfo) {
      updatePageInfo("myPost", myPost);
      updatePageInfo("myInfo", myInfo);
    }
  }, [searchParams, page.myPost, page.myInfo, updatePageInfo]);
  console.log("마이페이지 컨테이너");

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <SideBar
        userName={user ? user.name : ""}
        profile={user ? user.profile : ""}
      />
      {page.myPost && <MyPagePostContainer />}
      {page.myInfo && <MyPageEditContainer user={user} />}
    </>
  );
};

export default memo(MyPageContainer);
