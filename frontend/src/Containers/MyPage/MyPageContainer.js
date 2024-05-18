import React, {useEffect} from "react";
import {useSearchParams} from "react-router-dom"
import SideBar from "../../Components/MyPage/SideBar";
import MyPageEditContainer from "./MyPageEditContainer";
import MyPagePostContainer from "./MyPagePostContainer";
import { usePage } from "../../Context/MyPageContext";
const MyPageContainer = () => {
  const { page, updatePageInfo } = usePage();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const myPost = searchParams.get("myPost") === 'true';
    const myInfo = searchParams.get("myInfo") === 'true';

    if(myPost){
      updatePageInfo('myPost', true);
      updatePageInfo('myInfo', false);
    }else if(myInfo){
      updatePageInfo('myPost', false);
      updatePageInfo('myInfo', true);
    }
  }, [searchParams, updatePageInfo])

  useEffect(() => {
    const params = {}
    if(page.myPost){
      params.myPost = "true"
      params.myInfo = "false"
    }else if(page.myInfo){
      params.myPost = "false"
      params.myInfo = "true"
    }

  },[page,setSearchParams])

  return (
    <>
      <SideBar />
      {page.myPost && <MyPagePostContainer />}
      {page.myInfo && <MyPageEditContainer />}
    </>
  );
};

export default MyPageContainer;
