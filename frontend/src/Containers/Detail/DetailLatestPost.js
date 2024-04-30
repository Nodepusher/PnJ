import React from 'react';
import LatestPostHeader from '../../Components/Detail/LatestPostHeader';
import LatestPostList from '../../Components/Detail/LatestPostList';

const DetailLatestPost = () => {
    return (
        <>
            <LatestPostHeader></LatestPostHeader>
            <LatestPostList></LatestPostList>
            <div>===============주석===============</div>
            <div>리스트 5개 띄워주면 됨</div>
        </>
    );
};

export default DetailLatestPost;
