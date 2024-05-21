import React from 'react';
import InputCommentComponent from '../../Components/Detail/InputCommentComponent';
import CommentComponent from '../../Components/Detail/CommentComponent';

const DetailReplyContainer = () => {
    const comments = [
        {
            id: 1,
            content: '댓글내용1',
            userInfo: { userName: '유저닉네임1' },
            replies: [
                {
                    id: 1,
                    content: '대댓글내용1',
                    userInfo: { userName: '유저닉네임2' },
                    updateTime: '2024. 3. 8. 08:15',
                },
                {
                    id: 2,
                    content: '대댓글내용2',
                    userInfo: { userName: '유저닉네임1' },
                    updateTime: '2024. 3. 8. 08:50',
                },
            ],
            updateTime: '2024. 3. 8. 07:50',
        },
        {
            id: 2,
            content: '댓글내용2',
            userInfo: { userName: '유저닉네임1' },
            replies: [
                {
                    id: 1,
                    content: '대댓글내용1',
                    userInfo: { userName: '유저닉네임2' },
                    updateTime: '2024. 3. 8. 08:15',
                },
                {
                    id: 2,
                    content: '대댓글내용2',
                    userInfo: { userName: '유저닉네임1' },
                    updateTime: '2024. 3. 8. 08:50',
                },
                {
                    id: 2,
                    content: '대댓글내용2',
                    userInfo: { userName: '유저닉네임1' },
                    updateTime: '2024. 3. 8. 08:50',
                },
            ],
            updateTime: '2024. 3. 8. 07:50',
        },
        {
            id: 3,
            content: '댓글내용3',
            userInfo: { userName: '유저닉네임3' },
            replies: [],
            updateTime: '2024. 3. 8. 07:50',
        },
    ];
    const type = 'comment';

    const totalLength = comments.reduce((acc, comment) => {
        return acc + 1 + comment.replies.length;
    }, 0);

    return (
        <div>
            <h4 className="font_headline_bold_sm content_secondary">
                댓글 <span>{totalLength}</span>
            </h4>
            <div className="h-[24px]"></div>
            {/* 댓글 인풋 컴포넌트 */}
            <InputCommentComponent type={type} />
            <div className="h-[23px]"></div>
            <CommentComponent comments={comments} />
        </div>
    );
};

export default DetailReplyContainer;
