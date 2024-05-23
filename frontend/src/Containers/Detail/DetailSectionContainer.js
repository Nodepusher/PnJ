import React from 'react';
import DetailReplyContainer from './DetailReplyContainer';
import DetailWrtierInfo from './DetailWrtierInfo';
import DetailSectionContent from './DetailSectionContent';
import DetailSectionTop from './DetailSectionTop';
import PostList from '../../Components/List/PostList';
import PostHeader from '../../Components/Detail/PostHeader';
import { useSelector } from 'react-redux';

const DetailSectionContainer = () => {
    const userName = '토야';
    const category = '스터디해요';
    const writerHeaderData = `${userName} 님의`;
    const StProps = {
        StfirstPost: 'first:pt-[8px]',
        StUlMargin: 'mt-[8px]',
    };
    const { authorPosts, categoryPosts } = useSelector((state) => state.detail);
    console.log(authorPosts, categoryPosts);
    return (
        <div className="py-[16px] px-[16px]">
            <main class="min-w-screen surface_primary relative mx-auto flex w-full min-w-[320px] max-w-main flex-col">
                <DetailSectionTop />
                <DetailSectionContent />
                <DetailWrtierInfo />
                <div className="border-t border_primary"></div>
                <div className="h-[28px]"></div>
                <DetailReplyContainer />
                <div className="h-[28px]"></div>
                <div className="border-t border_primary"></div>
                <div className="h-[28px]"></div>
                <PostHeader props={writerHeaderData} />
                <PostList StProps={StProps} postData={authorPosts} />
                <div className="h-[48px]"></div>
                <div className="border-t border_primary"></div>
                <div className="h-[28px]"></div>
                <PostHeader props={category} />
                <PostList StProps={StProps} postData={categoryPosts} />
            </main>
        </div>
    );
};

export default DetailSectionContainer;
