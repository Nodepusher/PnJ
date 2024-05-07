import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputCommentComponent from '../../Components/Detail/InputCommentComponent';

const DetailReplyContainer = () => {
    const nav = useNavigate();

    const moveToLoginPage = () => {
        nav('/login');
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
        <div>
            <h4 className="font_headline_bold_sm content_secondary">
                댓글 <span>2</span>
            </h4>
            <div className="h-[24px]"></div>
            {/* 댓글 인풋 컴포넌트 */}
            <InputCommentComponent />
            <div className="h-[23px]"></div>
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
                                        귀 부분에서 꼬리실을 자르고 난 다음부터 이해가 잘..ㅠㅜ 정리할려고하면 귀가
                                        둥글게 말린다고 해야할까요?ㅠㅜ 사진에서도 귀는 잘 안보이고 도와주세요ㅠㅜㅜ
                                    </span>
                                </p>
                            </div>
                            <div className="h-[8px]"></div>
                            <div className="flex gap-[13px]">
                                <div className="flex items-center">
                                    <span className="content_quaternary font_label_regular_sm">2024. 3. 8. 04:27</span>
                                </div>
                                <button
                                    aria-label="sub comment toggle button"
                                    className="content_quaternary font_label_bold_sm"
                                    type="button"
                                >
                                    답글달기
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-[12px]"></div>
                    <div className="pl-[41px]">
                        <div>
                            <ul>
                                <li className="py-[12px] first:pt-[12px] border_secondary pl-[10px] first:border-t-0">
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
                                                        alt="뉴크로셰"
                                                        sizes="(max-width: 240px) 100vw, 240px"
                                                        srcset="
                                                        /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FprofileImage%2F3b1c4b3e-b460-4670-ad69-c2a071216470.png%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=500&amp;q=75   500w,
                                                        /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FprofileImage%2F3b1c4b3e-b460-4670-ad69-c2a071216470.png%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=768&amp;q=75   768w,
                                                        /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FprofileImage%2F3b1c4b3e-b460-4670-ad69-c2a071216470.png%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75 1024w
                                                    "
                                                        src="/_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FprofileImage%2F3b1c4b3e-b460-4670-ad69-c2a071216470.png%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75"
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
                                                    <div className="content_primary font_label_bold_lg">뉴크로셰</div>
                                                    <div
                                                        className="surface_accent inline-flex h-[14px] w-[14px] items-center justify-center rounded-[4px] p-[2px]"
                                                        data-testid="creator-badge"
                                                    >
                                                        <svg
                                                            viewBox="0 0 12 12"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="content_primary_inverse h-[14px] w-[14px]"
                                                        >
                                                            <path d="M5.567 1.748a.5.5 0 0 1 .866 0L7.499 3.59a.5.5 0 0 0 .329.238l2.082.445a.5.5 0 0 1 .268.823L8.754 6.681a.5.5 0 0 0-.125.386l.22 2.118a.5.5 0 0 1-.7.51L6.203 8.83a.5.5 0 0 0-.406 0l-1.946.864a.5.5 0 0 1-.7-.509l.22-2.118a.5.5 0 0 0-.125-.386L1.822 5.097a.5.5 0 0 1 .268-.823l2.082-.445a.5.5 0 0 0 .329-.238l1.066-1.843Z"></path>
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="h-[5px]"></div>
                                            <div className="font_label_regular_lg whitespace-pre-wrap break-all content_secondary">
                                                <p>
                                                    <span>
                                                        꼬리실 자르고 난다음에 귀 뒤편에다가 숨길때 귀모양이 유지되도록
                                                        엄청엄청 느슨하게 숨기셔야합니다! 기존에 만들어놓은 귀가 너무
                                                        쫀쫀하게 떠진경우 돗바늘정리가 힘들어서 더 말릴수있구요
                                                        정리하면서 힘들어가면 귀가 둥글게 말려요! ㅠㅠ 힘 많이빼고
                                                        느슨하게 이동해주세요! 짧게 남아있던 꼬리실과 한번 묶어서
                                                        안쪽으로 숨길때도 느슨하게 이동하시면 돼요 ㅎㅎ
                                                    </span>
                                                </p>
                                            </div>
                                            <div className="h-[8px]"></div>
                                            <div className="flex gap-[13px]">
                                                <div className="flex items-center">
                                                    <span className="content_quaternary font_label_regular_sm">
                                                        2024. 3. 8. 07:55
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default DetailReplyContainer;
