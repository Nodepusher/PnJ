import React, { useEffect, useState } from 'react';
import ListHeaderContainer from '../Containers/List/ListHeaderContainer';
import ListContentContainer from '../Containers/List/ListContentContainer';
import ListFooterContainer from '../Containers/List/ListFooterContainer';
import { useDispatch } from 'react-redux';
import { getPostData } from '../store/postListReducer';

const PostListPage = () => {
    const [activeCategory, setActiveCategory] = useState('');
    const [posts, setPosts] = useState([]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPostData());
    }, [dispatch]);

    return (
        <>
            <ListHeaderContainer></ListHeaderContainer>
            <ListContentContainer></ListContentContainer>
            <ListFooterContainer></ListFooterContainer>
        </>
    );
};

export default PostListPage;
