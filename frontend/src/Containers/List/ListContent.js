import React from 'react';

const ListContent = () => {
    const StImg = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: '0px',
        color: 'transparent',
    };

    return (
        <div className="mx-auto min-h-screen max-w-main">
            <div className="px-[16px] md:px-0">
                <div className="surface_accent_light relative rounded-[10px] p-[16px] mobile:py-[20px] mobile:px-[26px]">
                    <a
                        className="content_primary font_label_regular_xl keep-all block max-w-[231px] mobile:max-w-[100%]"
                        href="https://idus.notion.site/087e1b747e364ba69d900a4e32556425?pvs=4"
                        rel="noreferrer"
                        target="_blank"
                    >
                        읽고 싶은 작품에서 필요한 자료까지 판매되는 포스트를 골라 구매하세요.
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="inline h-[14px] w-[14px] align-middle"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.42 20.73a1.076 1.076 0 0 1-.13-1.587L14.832 12 8.289 4.857a1.076 1.076 0 0 1 .13-1.586 1.26 1.26 0 0 1 1.696.122L18 12l-7.885 8.607a1.26 1.26 0 0 1-1.695.122Z"
                            ></path>
                        </svg>
                    </a>
                    <button className="absolute top-[12px] right-[12px]" type="button">
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="content_quaternary h-[16px] w-[16px]"
                        >
                            <path d="M5.707 5.707a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 1 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414-1.414l-4.95-4.95 4.95-4.95a1 1 0 1 0-1.414-1.414l-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="h-[12px]"></div>
            <div className="flex h-[44px] items-center justify-between px-[16px] md:p-0">
                <h5 className="font_title_bold_md">포스트 230</h5>
                <div className="relative">
                    <button
                        aria-label="filter"
                        className="surface_primary false border_black_opacity flex max-w-[164px] items-center rounded-[16px] outline-none"
                        type="button"
                    >
                        <span className="overflow-hidden content_secondary font_label_medium_lg text-ellipsis whitespace-nowrap">
                            인기
                        </span>
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="shrink-0 ml-[4px] w-[10px] h-[10px]"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.27 8.42a1.076 1.076 0 0 1 1.587-.13L12 14.832l7.143-6.544a1.076 1.076 0 0 1 1.586.13 1.26 1.26 0 0 1-.122 1.696L12 18l-8.607-7.885A1.26 1.26 0 0 1 3.27 8.42Z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className="px-[16px] md:px-0">
                <ul className="col-span-full flex flex-col">
                    <li className="border_secondary border-t py-[20px] first:border-0 md:py-[24px]">
                        <div>
                            <button aria-label="post card" className="block w-full text-left" type="button">
                                <div className="flex gap-x-[16px]">
                                    <div className="h-[73px] w-full break-all xl:h-auto">
                                        <h2 className="content_secondary font_title_bold_md overflow-hidden xl:font_title_bold_lg text-ellipsis-1">
                                            멜빵바지를 입은 볼빵빵 아기토끼 키링뜨기 (글도안+부분영상+사진+첨부파일
                                            추가)
                                        </h2>
                                        <p className="content_quaternary font_label_regular_lg mt-[4px] mb-[18px] overflow-hidden xl:mt-[6px] text-ellipsis-1 xl:text-ellipsis-2">
                                            안녕하세요! 모두 설 연휴 잘 보내고 계신가요 :) 볼빵빵 아기토끼 키링 뜨기
                                            유료 도안을 판매합니다! 도안은 글도안, 부분영상,사진,그리고 도안
                                            한글파일까지 제공됩니다. 아기 토끼가 입은 멜빵바지는 제 유튜브에 무료로 영상
                                            업로드가 되어있으니 참고해주세요~ 아기토끼는 다리부터 얼굴까지 한번에 뜨게
                                            되어있구요, 귀와 팔만 따로 떠서 붙이는 방식으로 도안을 제작했습니다! 많은
                                            관심 부탁드립니다. 새해 복 많이받으세요 s2
                                        </p>
                                    </div>
                                    <div className="relative h-[72px] w-[72px] shrink-0 rounded-[8px] md:h-[90px] md:w-[90px]">
                                        <img
                                            alt="멜빵바지를 입은 볼빵빵 아기토끼 키링뜨기 (글도안+부분영상+사진+첨부파일 추가)"
                                            sizes="(max-width: 500px) 72px, 90px"
                                            srcset="
                                            /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=16&amp;q=75     16w,
                                            /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=32&amp;q=75     32w,
                                            /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=48&amp;q=75     48w,
                                            /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=64&amp;q=75     64w,
                                            /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=96&amp;q=75     96w,
                                            /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=128&amp;q=75   128w,
                                            /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=256&amp;q=75   256w,
                                            /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=384&amp;q=75   384w,
                                            /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=500&amp;q=75   500w,
                                            /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=768&amp;q=75   768w,
                                            /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=1024&amp;q=75 1024w
                                        "
                                            src="/_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=1024&amp;q=75"
                                            decoding="async"
                                            data-nimg="fill"
                                            className="rounded-[8px]"
                                            loading="lazy"
                                            style={StImg}
                                        />
                                        <div className="border_black_opacity absolute top-0 left-0 h-full w-full rounded-[8px] border"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-[12px] flex items-center">
                                        <div className="font_label_regular_md flex items-center gap-x-[2px]">
                                            <span className="content_secondary break-all line-clamp-1 lg:max-w-full">
                                                뉴크로셰
                                            </span>
                                            <svg
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="content_disabled h-[8px] w-[8px]"
                                            >
                                                <circle cx="12" cy="12" r="4"></circle>
                                            </svg>
                                            <span className="content_quaternary shrink-0">2024. 2. 10.</span>
                                        </div>
                                    </div>
                                    <div className="mt-[3px] flex items-center">
                                        <div className="font_label_regular_md flex items-center gap-x-[4px]">
                                            <svg
                                                viewBox="0 0 16 12"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-[18px] h-[18px] content_quaternary"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M14.603 6c-.504-.632-1.347-1.59-2.407-2.436C10.92 2.546 9.468 1.8 8.001 1.8s-2.92.746-4.195 1.764C2.746 4.41 1.903 5.368 1.399 6c.504.632 1.347 1.59 2.407 2.435C5.082 9.454 6.534 10.2 8 10.2s2.92-.746 4.195-1.765C13.256 7.59 14.1 6.632 14.603 6Zm1.204.405a.666.666 0 0 0 0-.81C14.86 4.338 11.723.6 8.002.6 4.278.6 1.142 4.34.194 5.594a.666.666 0 0 0 0 .811C1.142 7.661 4.278 11.4 8.001 11.4c3.723 0 6.859-3.74 7.806-4.995Z"
                                                ></path>
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M10.896 5.925a2.925 2.925 0 1 1-5.85 0 2.925 2.925 0 0 1 5.85 0ZM7.97 7.65a1.725 1.725 0 1 0 0-3.45 1.725 1.725 0 0 0 0 3.45Z"
                                                ></path>
                                            </svg>
                                            <span className="content_quaternary shrink-0">1,526</span>
                                            <svg
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-[18px] h-[18px] content_quaternary"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M8.144 13.563v2l2.543-2h2.396a2.74 2.74 0 0 0 2.741-2.74V7.073a2.74 2.74 0 0 0-2.74-2.74h-6.01a2.74 2.74 0 0 0-2.74 2.74v4.012a2.477 2.477 0 0 0 2.477 2.477h1.333Zm-.104 3.778a.815.815 0 0 1-1.23-.702v-1.743A3.81 3.81 0 0 1 3 11.086V7.074A4.074 4.074 0 0 1 7.074 3h6.01a4.074 4.074 0 0 1 4.073 4.074v3.748a4.074 4.074 0 0 1-4.074 4.074h-1.935L8.04 17.341Z"
                                                ></path>
                                                <path d="M8.167 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0ZM10.667 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0ZM13.167 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z"></path>
                                            </svg>
                                            <span className="content_quaternary shrink-0">47</span>
                                            <svg
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-[18px] h-[18px] content_quaternary"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M10 5.406 8.616 4.141c-1.383-1.266-3.682-.982-4.941.422-1.581 1.687-1.582 4.543.092 6.328l5.535 5.487a.988.988 0 0 0 1.396 0l5.535-5.487c1.674-1.785 1.674-4.64.092-6.328-1.259-1.404-3.558-1.688-4.941-.422L10 5.406Zm2.284-.281L10 7.214l-2.284-2.09c-.75-.685-2.203-.615-3.049.329l-.01.01-.01.011c-1.079 1.152-1.117 3.198.077 4.49L10 15.191l5.276-5.229c1.194-1.291 1.156-3.336.076-4.489l-.01-.01-.01-.011c-.846-.944-2.299-1.014-3.048-.328Z"
                                                ></path>
                                            </svg>
                                            <span className="content_quaternary shrink-0">310</span>
                                            <svg
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="content_disabled h-[8px] w-[8px]"
                                            >
                                                <circle cx="12" cy="12" r="4"></circle>
                                            </svg>
                                            <span className="content_quaternary shrink-0">4,000P</span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </li>
                </ul>
                <div></div>
            </div>
        </div>
    );
};

export default ListContent;
