import React from 'react';

const PostHeader = ({ props }) => {
    return (
        <h4 className="content_primary font_headline_bold_sm mb-[16px]">
            <div className="flex whitespace-nowrap">
                <span className="overflow-x-hidden text-ellipsis whitespace-nowrap">{props}</span>
                &nbsp;최신 포스트
            </div>
        </h4>
    );
};

export default PostHeader;
