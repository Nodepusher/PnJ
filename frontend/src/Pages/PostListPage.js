import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPostData } from "../store/postListReducer";
import ListHeaderContainer from "../Containers/List/ListHeaderContainer";
import ListContentContainer from "../Containers/List/ListContentContainer";
import ListFooterContainer from "../Containers/List/ListFooterContainer";
import Spinner from "../Containers/Common/Spinner";

const PostListPage = () => {
  const [dropdownState, setDropdownState] = useState("최신순");
  const dispatch = useDispatch();
  // 카테고리 상태 데이터
  const category = useSelector((state) => state.postList.category);
  // 리스트 데이터
  const postData = useSelector((state) => state.postList.postsData);

  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
    console.log(`Render count: ${renderCount.current}`);
  });

  // 리스트 데이터 요청
  // useEffect(() => {
  //   dispatch(getPostData(category, 1, dropdownState));
  // }, [dispatch, category, dropdownState]);
  // const loading = useSelector((state) => state.postList.loading);
  // if(loading){
  //   <Spinner />
  // }
  return (
    <>
      <ListHeaderContainer search={true} login={true} mypage={true} />
      <ListContentContainer
        category={category}
        dropdownState={dropdownState}
        setDropdownState={setDropdownState}
      />
      <ListFooterContainer />
    </>
  );
};

export default React.memo(PostListPage);
