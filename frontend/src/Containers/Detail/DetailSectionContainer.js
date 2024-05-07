import React from 'react';
import DetailReplyContainer from './DetailReplyContainer';
import DetailWrtierInfo from './DetailWrtierInfo';
import DetailSectionContent from './DetailSectionContent';
import DetailSectionTop from './DetailSectionTop';
import PostList from '../../Components/List/PostList';
import PostHeader from '../../Components/Detail/PostHeader';

// 작성자 최신포스트와 카테고리 최신 포스트는 겹치는 부분이 많아 재사용 가능성이 있음

const DetailSectionContainer = () => {
    const userName = '토야';
    const category = '스터디해요';
    const writerHeaderData = `${userName} 님의`;
    const StProps = {
        StfirstPost: 'first:pt-[8px]',
        StUlMargin: 'mt-[8px]',
    };
    const latestPostData = [
        {
            id: '1',
            title: '최근 게시글 제목1',
            content: '최근 게시글 내용1',
            category: '1',
        },
    ];
    const writerPostData = [
        {
            id: '1',
            title: '작성자 게시글 제목1',
            content: '작성자 게시글 내용1',
            category: '2',
        },
    ];

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
                {/*작성자 글 리스트, 최신 글 리스트 둘다 5개씩 띄워주면 됨*/}
                <PostHeader props={writerHeaderData} />
                <PostList props={writerPostData} StProps={StProps} />
                <div className="h-[48px]"></div>
                <div className="border-t border_primary"></div>
                <div className="h-[28px]"></div>
                <PostHeader props={category} />
                <PostList props={latestPostData} StProps={StProps} />
            </main>
        </div>
    );
};

export default DetailSectionContainer;
