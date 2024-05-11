import React, { useState } from 'react';
import ReplyComponent from './ReplyComponent';

const CommentComponent = () => {
    const [replyBtn, setReplyBtn] = useState(false);

    const showReplyInputComment = () => {
        setReplyBtn(!replyBtn);
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
            <li className="pt-[24px] border-t-[1px] pb-[12px] last:pb-[0px] border_secondary pl-[10px] first:border-t-0">
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
                                <div className="content_primary font_label_bold_lg">선영</div>
                            </div>
                        </div>
                        <div className="h-[5px]"></div>
                        <div className="font_label_regular_lg whitespace-pre-wrap break-all content_secondary">
                            <p>
                                <span>
                                    귀 부분에서 꼬리실을 자르고 난 다음부터 이해가 잘..ㅠㅜ 정리할려고하면 귀가 둥글게
                                    말린다고 해야할까요?ㅠㅜ 사진에서도 귀는 잘 안보이고 도와주세요ㅠㅜㅜ
                                </span>
                            </p>
                        </div>
                        <div className="h-[8px]"></div>
                        <div className="flex gap-[13px]">
                            <div className="flex items-center">
                                <span className="content_quaternary font_label_regular_sm">2024. 3. 8. 04:27</span>
                            </div>

                            {replyBtn ? (
                                ''
                            ) : (
                                <button
                                    aria-label="sub comment toggle button"
                                    className="content_quaternary font_label_bold_sm"
                                    type="button"
                                    onClick={showReplyInputComment}
                                >
                                    답글달기
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="h-[12px]"></div>
                <ReplyComponent props={replyBtn} StBtn={StBtn} StImg={StImg} />
            </li>
        </ul>
    );
};

export default CommentComponent;
