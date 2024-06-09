import React from 'react';
import InputCommentComponent from '../../Components/Detail/InputCommentComponent';
import CommentComponent from '../../Components/Detail/CommentComponent';
import { useSelector } from 'react-redux';
const DetailReplyContainer = () => {
    const commentData = useSelector(state => state.detail.postStats);
    console.log("asdfdasfadsfadsfdas",commentData)
    // const comments = [
    //     {
    //         id: 1,
    //         content: '댓글내용1',
    //         userInfo: { userName: '유저닉네임1' },
    //         replies: [
    //             {
    //                 id: 1,
    //                 content: '대댓글내용1',
    //                 userInfo: { userName: '유저닉네임2' },
    //                 updateTime: '2024. 3. 8. 08:15',
    //             },
    //             {
    //                 id: 2,
    //                 content: '대댓글내용2',
    //                 userInfo: { userName: '유저닉네임1' },
    //                 updateTime: '2024. 3. 8. 08:50',
    //             },
    //         ],
    //         updateTime: '2024. 3. 8. 07:50',
    //     },
    //     {
    //         id: 2,
    //         content: '댓글내용2',
    //         userInfo: { userName: '유저닉네임1' },
    //         replies: [
    //             {
    //                 id: 1,
    //                 content: '대댓글내용1',
    //                 userInfo: { userName: '유저닉네임2' },
    //                 updateTime: '2024. 3. 8. 08:15',
    //             },
    //             {
    //                 id: 2,
    //                 content: '대댓글내용2',
    //                 userInfo: { userName: '유저닉네임1' },
    //                 updateTime: '2024. 3. 8. 08:50',
    //             },
    //             {
    //                 id: 2,
    //                 content: '대댓글내용2',
    //                 userInfo: { userName: '유저닉네임1' },
    //                 updateTime: '2024. 3. 8. 08:50',
    //             },
    //         ],
    //         updateTime: '2024. 3. 8. 07:50',
    //     },
    //     {
    //         id: 3,
    //         content: '댓글내용3',
    //         userInfo: { userName: '유저닉네임3' },
    //         replies: [],
    //         updateTime: '2024. 3. 8. 07:50',
    //     },
    // ];
    const type = 'comment';

    const commentCount = commentData.comments.length;
    const replyCount = commentData.comments.reduce((acc, comment) => acc + comment.Replies.length, 0);
    const totalCount = commentCount + replyCount
    // const totalLength = commentData.comments.reduce((acc, comment) => {
    //     return acc + 1 + comment.replies.length;
    // }, 0);

    return (
        <div>
            <h4 className="font_headline_bold_sm content_secondary">
                댓글 <span>{totalCount}</span>
            </h4>
            <div className="h-[24px]"></div>
            {/* 댓글 인풋 컴포넌트 
            만약 댓글 입력 후 게시버튼을 눌렀는데 댓글이 등록이 안되면 게시 버튼 눌렀을때 commentComponent를 리렌더링 시켜야함
            답글 달기의 게시버튼은 버블링때문에 리렌더링 되고있어서 문제 없음 */}
            <InputCommentComponent type={type} />
            <div className="h-[23px]"></div>
            <CommentComponent commentData={commentData} />
        </div>
    );
};

export default DetailReplyContainer;
