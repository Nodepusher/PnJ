import React from 'react';
import DetailReplyContainer from './DetailReplyContainer';
import DetailWrtierInfo from './DetailWrtierInfo';
import DetailSectionContent from './DetailSectionContent';
import DetailSectionTop from './DetailSectionTop';
import PostList from '../../Components/List/PostList';
import PostHeader from '../../Components/Detail/PostHeader';
import { useSelector } from 'react-redux';

const DetailSectionContainer = () => {
    const { authorPosts, categoryPosts, post } = useSelector((state) => state.detail.postData);
    const loading = useSelector((state) => state.detail.loading);
    const error = useSelector((state) => state.detail.error);

    // 로딩 중일 때 로딩 메시지를 표시
    if (loading) {
        return <div>Loading...</div>;
    }

    // 오류가 발생했을 때 오류 메시지를 표시
    if (error) {
        return <div>Error: {error}</div>;
    }

    // post 객체가 존재하지 않으면 null 반환
    if (!post || !post.User) {
        return <div>No data available</div>;
    }

    const name = post.User.name;
    const {title, tags, createdAt} = post
    const category = post.category === 'info' ? '정보 공유' 
        : post.category === 'study' ? '스터디해요' : 'Q&A';
    const writerHeaderData = `${name} 님의`;
    const StProps = {
        StfirstPost: 'first:pt-[8px]',
        StUlMargin: 'mt-[8px]',
    };

    return (
        <div className="py-[16px] px-[16px]">
            <main className="min-w-screen surface_primary relative mx-auto flex w-full min-w-[320px] max-w-main flex-col">
                <DetailSectionTop category={category} title={title} createdAt={createdAt} name={name}/>
                <DetailSectionContent content={post.content} tags={tags}/>
                <DetailWrtierInfo name={name} />
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
