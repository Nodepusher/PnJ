import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPostData, getPostStatsData, setPageState } from '../store/postDetailReducer';
import { useSearchParams } from 'react-router-dom';
import HeaderContainer from '../Containers/Common/HeaderContainer';
import DetailFooterContainer from '../Containers/Detail/DetailFooterContainer';
import DetailSectionContainer from '../Containers/Detail/DetailSectionContainer';

const PostDetailPage = () => {
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const postId = searchParams.get("post")
    console.log("test")
    // const currentPostId = 2;
    useEffect(() => {
        dispatch(getPostData(postId));
        // dispatch(getPostStatsData());
        // dispatch(setPageState(postId));
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
