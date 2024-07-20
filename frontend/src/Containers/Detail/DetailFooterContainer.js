import React from 'react';
import DetailFooterPostStats from '../../Components/Detail/DetailFooterPostStats';
import DetailFooterNavigation from '../../Components/Detail/DetailFooterNavigation';
import { useSelector } from 'react-redux';

const DetailFooterContainer = () => {
    const { likes, commentCount, views } = useSelector((state) => state.detail.postStats);
    const { prevPostId, nextPostId } = useSelector((state) => state.detail.pageState);
    return (
        <footer className="sticky bottom-0 z-[2]">
            <div className="border-secondary surface_primary flex w-full items-center justify-center border-t-[1px] p-[16px] shadow-[0px_-2px_20px_rgba(0,0,0,0.08)]">
                <div className="flex w-[720px] justify-between">
                    <DetailFooterPostStats likes={likes} commentCount={commentCount} views={views} />
                    <DetailFooterNavigation prevPostId={prevPostId} nextPostId={nextPostId} />
                </div>
            </div>
        </footer>
    );
};

export default DetailFooterContainer;
