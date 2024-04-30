import React from 'react';
import DetailLatestPost from './DetailLatestPost';
import DetailReplyContainer from './DetailReplyContainer';
import DetailWrtierInfo from './DetailWrtierInfo';
import DetailTop from './DetailTop';
import DetailSectionContent from './DetailSectionContent';

// 작성자 최신포스트와 카테고리 최신 포스트는 겹치는 부분이 많아 재사용 가능성이 있음

const DetailSectionContainer = () => {
    return (
        <div className="py-[16px] px-[16px]">
            <main class="min-w-screen surface_primary relative mx-auto flex w-full min-w-[320px] max-w-main flex-col">
                <DetailTop></DetailTop>
                <DetailSectionContent></DetailSectionContent>
                <DetailWrtierInfo></DetailWrtierInfo>
                <div className="border-t border_primary"></div>
                <div className="h-[28px]"></div>
                <DetailReplyContainer></DetailReplyContainer>
                <div className="h-[28px]"></div>
                <div className="border-t border_primary"></div>
                <div className="h-[28px]"></div>
                <DetailLatestPost></DetailLatestPost>
            </main>
        </div>
    );
};

export default DetailSectionContainer;
