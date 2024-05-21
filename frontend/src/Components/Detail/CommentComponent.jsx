import React, { useState } from 'react';
import ReplyComponent from './ReplyComponent';

const CommentComponent = ({ comments }) => {
    const [activeReply, setActiveReply] = useState(null);

    const showReplyInputComment = (commentId) => {
        setActiveReply((prev) => (prev === commentId ? null : commentId));
    };

    const StImg = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: '0px',
        objectFit: 'cover',
        objectPosition: 'center center',
        color: 'transparent',
    };
    const StBtn = {
        width: '32px',
        height: '32px',
        outline: 'none',
    };

    return (
        <ul>
            {comments.map((comment, i) => (
                <li
                    key={comment.id}
                    className="pt-[24px] border-t-[1px] pb-[12px] last:pb-[0px] border_secondary pl-[10px] first:border-t-0"
                >
                    <div className="flex gap-[10px]">
                        <div className="shrink-0">
                            <div>
                                <button
                                    aria-label="profile image"
                                    className="relative flex h-full w-full items-center justify-center rounded-full"
                                    type="button"
                                    style={StBtn}
                                >
                                    <img
                                        alt="선영"
                                        sizes="(max-width: 240px) 100vw, 240px"
                                        srcset="
                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F28c0845c-9406-4167-b341-f7800d702f0c%2FprofileImage%2Faa7691d4-1677-4caa-a74c-758475197fba.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=500&amp;q=75   500w,
                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F28c0845c-9406-4167-b341-f7800d702f0c%2FprofileImage%2Faa7691d4-1677-4caa-a74c-758475197fba.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=768&amp;q=75   768w,
                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F28c0845c-9406-4167-b341-f7800d702f0c%2FprofileImage%2Faa7691d4-1677-4caa-a74c-758475197fba.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75 1024w
                                "
                                        src="/_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F28c0845c-9406-4167-b341-f7800d702f0c%2FprofileImage%2Faa7691d4-1677-4caa-a74c-758475197fba.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75"
                                        decoding="async"
                                        data-nimg="fill"
                                        className="rounded-full"
                                        loading="lazy"
                                        style={StImg}
                                    />
                                    <div className="border_black_opacity absolute top-0 left-0 h-full w-full rounded-full border"></div>
                                </button>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-[4px]">
                                    <div className="content_primary font_label_bold_lg">
                                        {comment.userInfo.userName}
                                    </div>
                                </div>
                            </div>
                            <div className="h-[5px]"></div>
                            <div className="font_label_regular_lg whitespace-pre-wrap break-all content_secondary">
                                <p>
                                    <span>{comment.content}</span>
                                </p>
                            </div>
                            <div className="h-[8px]"></div>
                            <div className="flex gap-[13px]">
                                <div className="flex items-center">
                                    <span className="content_quaternary font_label_regular_sm">
                                        {comment.updateTime}
                                    </span>
                                </div>
                                <button
                                    aria-label="sub comment toggle button"
                                    className="content_quaternary font_label_bold_sm"
                                    type="button"
                                    onClick={() => showReplyInputComment(comment.id)}
                                >
                                    답글달기
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-[12px]"></div>
                    <ReplyComponent
                        showReply={activeReply === comment.id}
                        StBtn={StBtn}
                        StImg={StImg}
                        replies={comment.replies}
                    />
                </li>
            ))}
        </ul>
    );
};

export default CommentComponent;
