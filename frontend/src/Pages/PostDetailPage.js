import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPostData, getPostStatsData, setPageState } from '../store/postDetailReducer';
import HeaderContainer from '../Containers/Common/HeaderContainer';
import DetailFooterContainer from '../Containers/Detail/DetailFooterContainer';
import DetailSectionContainer from '../Containers/Detail/DetailSectionContainer';

const PostDetailPage = () => {
    const dispatch = useDispatch();
    const currentPostId = 2;
    useEffect(() => {
        dispatch(getPostData());
        dispatch(getPostStatsData());
        dispatch(setPageState(currentPostId));
    }, [dispatch, currentPostId]);

    return (
        <>
            <HeaderContainer login={true} />
            <DetailSectionContainer />
            <DetailFooterContainer />
        </>
    );
};

export default PostDetailPage;
