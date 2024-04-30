import React from 'react';
import DetailHeaderContainer from '../Containers/Detail/DetailHeaderContainer';
import DetailFooterContainer from '../Containers/Detail/DetailFooterContainer';
import DetailSectionContainer from '../Containers/Detail/DetailSectionContainer';

const PostDetailPage = () => {
    return (
        <>
            <DetailHeaderContainer></DetailHeaderContainer>
            <DetailSectionContainer></DetailSectionContainer>
            <DetailFooterContainer></DetailFooterContainer>
        </>
    );
};

export default PostDetailPage;
