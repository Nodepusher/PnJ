import React from 'react';

const DetailWrtierInfoTop = () => {
    const url =
        'https://steadio.imgix.net/profiles/f7261458-bcc0-4313-88a9-c1a86625ecee/profileImage/3b1c4b3e-b460-4670-ad69-c2a071216470.png?auto=format%2Ccompress&amp;fm=jpg&amp;h=300&amp;lossless=true&amp;w=300';
    const StProfileImg = {
        width: '34px',
        height: '34px',
        background: `url(${url}) center center / cover no-repeat rgb(255, 255, 255)`,
    };
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-[10px] whitespace-nowrap">
                <div>
                    <a href="/creator/newcrochet">
                        <div
                            className="relative shrink-0 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]"
                            style={StProfileImg}
                        ></div>
                    </a>
                </div>
                <div>
                    <div>
                        <a className="content_secondary font_label_bold_md" href="/creator/newcrochet">
                            뉴크로셰
                        </a>
                    </div>
                    <div className="mt-[2px] flex items-center">
                        <a
                            className="content_quaternary font_label_regular_sm flex items-center"
                            href="/creator/newcrochet"
                        >
                            <span>2024. 3. 4. 20:56</span>
                        </a>
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="content_disabled mx-[4px] h-[8px] w-[8px]"
                        >
                            <circle cx="12" cy="12" r="4"></circle>
                        </svg>
                        <p className="content_quaternary font_label_medium_sm">전체공개</p>
                    </div>
                </div>
            </div>
            <div className="flex gap-[12px]">
                <div className="relative flex items-center">
                    <button className="" type="button">
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[24px] h-[24px] content_quaternary"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M20 6a3 3 0 0 1-5.022 2.216l-5.01 3.34c.018.127.029.255.031.385l4.84 2.978a3 3 0 1 1-.83 1.838l-4.672-2.876a3 3 0 1 1-.315-4.098l5.01-3.34A3 3 0 1 1 20 6Z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailWrtierInfoTop;
