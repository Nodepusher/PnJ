import React, { useEffect, memo } from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "../../Components/MyPage/SideBar";
import MyPageEditContainer from "./MyPageEditContainer";
import MyPagePostContainer from "./MyPagePostContainer";
import { usePage } from "../../Context/MyPageContext";
import { useSelector } from "react-redux";
import Spinner from "../Common/Spinner";

const MyPageContainer = ({}) => {
  const { page, updatePageInfo } = usePage();
  const { user, loading } = useSelector((state) => state.auth);

  const profile = user
    ? `/uploads/file/${user.profile}`
    : `/uploads/file/default_profile_image.png`;

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <SideBar userName={user ? user.name : ""} profile={profile} />
      {page.myPost && <MyPagePostContainer />}
      {page.myInfo && <MyPageEditContainer user={user} profile={profile} />}
    </>
  );
};

export default memo(MyPageContainer);
