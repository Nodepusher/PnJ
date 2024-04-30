import React from 'react';

const DetailWrtierInfo = () => {
    const StImg = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: '0px',
        objectFit: 'cover',
        objectPosition: 'center center',
        color: 'transparent',
    };
    return (
        <section className="border_secondary relative flex flex-col flex-wrap items-center gap-[12px] border-t-[1px] py-[32px]">
            <div>
                <button className="border_black_opacity relative box-border h-[60px] w-[60px] overflow-hidden rounded-full border-[0.8px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]">
                    <img
                        alt="프로필 이미지"
                        sizes="100vw"
                        srcset="
                        /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FprofileImage%2F3b1c4b3e-b460-4670-ad69-c2a071216470.png%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=500&amp;q=75   500w,
                        /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FprofileImage%2F3b1c4b3e-b460-4670-ad69-c2a071216470.png%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=768&amp;q=75   768w,
                        /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FprofileImage%2F3b1c4b3e-b460-4670-ad69-c2a071216470.png%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75 1024w
                    "
                        src="/_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FprofileImage%2F3b1c4b3e-b460-4670-ad69-c2a071216470.png%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75"
                        decoding="async"
                        data-nimg="fill"
                        loading="lazy"
                        style={StImg}
                    />
                </button>
            </div>
            <div>
                <div className="flex flex-col gap-[4px] px-[40px]">
                    <button className="font_title_bold_lg text-center">뉴크로셰</button>
                    <p className="content_quaternary font_label_regular_md break-all text-center md:w-[404px]">
                        코바늘을 사용 해 창작해낼 수 있는, 보다 새로운 것들
                    </p>
                </div>
            </div>
            <div className="flex flex-row items-center gap-[8px] whitespace-nowrap">
                <div className="font_label_bold_lg relative mx-auto flex h-[32px]">
                    <button
                        aria-label="follow button"
                        className="flex h-full w-full items-center justify-center rounded-full px-[16px] font-bold surface_primary border_black_opacity border-[1px]"
                        type="button"
                    >
                        <div className="flex items-center justify-center">
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-[4px] shrink-0"
                                height="16px"
                                width="16px"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12 3a1 1 0 0 0-1 1v7H4a1 1 0 1 0 0 2h7v7a1 1 0 1 0 2 0v-7h7a1 1 0 1 0 0-2h-7V4a1 1 0 0 0-1-1Z"
                                ></path>
                            </svg>
                            <div>구독</div>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default DetailWrtierInfo;
