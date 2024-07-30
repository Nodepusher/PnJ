import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getPostData,
  getPostStatsData,
  getPostId,
} from "../store/postDetailReducer";
import { useSearchParams } from "react-router-dom";
import HeaderContainer from "../Containers/Common/HeaderContainer";
import DetailFooterContainer from "../Containers/Detail/DetailFooterContainer";
import DetailSectionContainer from "../Containers/Detail/DetailSectionContainer";

const PostDetailPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const postId = searchParams.get("post");

  useEffect(() => {
    dispatch(getPostId(postId));
    dispatch(getPostData(postId));
    dispatch(getPostStatsData(postId));
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
