import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getPostData } from '../store/postListReducer';
import ListHeaderContainer from '../Containers/List/ListHeaderContainer';
import ListContentContainer from '../Containers/List/ListContentContainer';
import ListFooterContainer from '../Containers/List/ListFooterContainer';

const PostListPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostData());
    }, [dispatch]);

    return (
        <>
            <ListHeaderContainer search={true} login={true} mypage={true} />
            <ListContentContainer />
            <ListFooterContainer />
        </>
    );
};

export default PostListPage;
