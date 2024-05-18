import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SideBar from "../../Components/MyPage/SideBar";
import MyPageEditContainer from "./MyPageEditContainer";
import MyPagePostContainer from "./MyPagePostContainer";
import { usePage } from "../../Context/MyPageContext";

const MyPageContainer = () => {
  const { page, updatePageInfo } = usePage();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const myPost = searchParams.get("myPost") === 'true';
    const myInfo = searchParams.get("myInfo") === 'true';

    if (myPost !== page.myPost || myInfo !== page.myInfo) {
      updatePageInfo('myPost', myPost);
      updatePageInfo('myInfo', myInfo);
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

export default MyPageContainer;
