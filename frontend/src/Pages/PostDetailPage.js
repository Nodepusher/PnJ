import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostData,
  getPostStatsData,
  setPageState,
  getPostId,
} from "../store/postDetailReducer";
import { useSearchParams } from "react-router-dom";
import HeaderContainer from "../Containers/Common/HeaderContainer";
import DetailFooterContainer from "../Containers/Detail/DetailFooterContainer";
import DetailSectionContainer from "../Containers/Detail/DetailSectionContainer";

const PostDetailPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.detail);
  const [searchParams, setSearchParams] = useSearchParams();
  const postId = searchParams.get("post");

  // const currentPostId = 2;
  useEffect(() => {
    console.log(postId);
    dispatch(getPostId(postId));
    dispatch(getPostData(postId));
    dispatch(getPostStatsData(postId));
    // dispatch(setPageState(postId));
  }, [postId, dispatch]);
  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 이동 시 맨 위로 스크롤
  }, [postId]);

  return (
    <>
      <HeaderContainer login={true} />
      <DetailSectionContainer />
      <DetailFooterContainer />
    </>
  );
};

export default React.memo(PostDetailPage);
