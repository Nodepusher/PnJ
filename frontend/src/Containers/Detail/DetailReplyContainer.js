import React from 'react';
import InputCommentComponent from '../../Components/Detail/InputCommentComponent';
import CommentComponent from '../../Components/Detail/CommentComponent';

const DetailReplyContainer = () => {

    return (
        <div>
            <h4 className="font_headline_bold_sm content_secondary">
                댓글 <span>2</span>
            </h4>
            <div className="h-[24px]"></div>
            {/* 댓글 인풋 컴포넌트 */}
            <InputCommentComponent />
            <div className="h-[23px]"></div>
            <CommentComponent />
        </div>
    );
};

export default DetailReplyContainer;
