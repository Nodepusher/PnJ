import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListHeaderContainer from "../Containers/List/ListHeaderContainer";
import ListFooterContainer from "../Containers/List/ListFooterContainer";
import Spinner from "../Containers/Common/Spinner";
import { getPostData, startLoading, finishLoading } from "../store/postListReducer";
import ListContentContainer from "../Containers/List/ListContentContainer"

const PostListPage = () => {
  const [dropdownState, setDropdownState] = useState("최신순");
  const category = useSelector((state) => state.postList.category);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const preloadData = useCallback(async () => {
    dispatch(startLoading());
    setLoading(true);
    await dispatch(getPostData(category, 1, dropdownState));
    setLoading(false);
    dispatch(finishLoading());
  }, [category, dropdownState, dispatch]);

  useEffect(() => {
    preloadData();
  }, [preloadData]);

  return (
    <>
      <ListHeaderContainer search={true} login={true} mypage={true} />
        <ListContentContainer
          category={category}
          dropdownState={dropdownState}
          setDropdownState={setDropdownState}
          loading={loading}
        />
      <ListFooterContainer />
    </>
  );
};

export default React.memo(PostListPage);
