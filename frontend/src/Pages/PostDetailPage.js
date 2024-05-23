import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPostData } from '../store/postDetailReducer';
import HeaderContainer from '../Containers/Common/HeaderContainer';
import DetailFooterContainer from '../Containers/Detail/DetailFooterContainer';
import DetailSectionContainer from '../Containers/Detail/DetailSectionContainer';

const PostDetailPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostData());
    }, [dispatch]);

    return (
        <>
            <HeaderContainer login={true} />
            <DetailSectionContainer />
            <DetailFooterContainer />
        </>
    );
};

export default PostDetailPage;
