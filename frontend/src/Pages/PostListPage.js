import React from 'react';
import ListHeaderContainer from '../Containers/List/ListHeaderContainer';
import ListContentContainer from '../Containers/List/ListContentContainer';
import ListFooterContainer from '../Containers/List/ListFooterContainer';

const PostListPage = () => {
    return (
        <>
            <ListHeaderContainer></ListHeaderContainer>
            <ListContentContainer></ListContentContainer>
            <ListFooterContainer></ListFooterContainer>
        </>
    );
};

export default PostListPage;
