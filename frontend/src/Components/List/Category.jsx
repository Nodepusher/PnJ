import React, { useState } from 'react';
import '../../style/List.css';
import '../../style/List2.css';

function Category() {
    const [activeBtn, setActiveBtn] = useState(0);

    const handleBtnClick = (i) => {
        setActiveBtn(i); // 클릭된 버튼의 인덱스로 state를 업데이트
    };

    const StDefaultBtn = {
        position: 'relative',
        height: '32px',
        borderRadius: '9999px',
        padding: '0px 12px',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '18px',
        boxSizing: 'border-box',
        border: '0 solid #e5e7eb',
    };

    const StActive = {
        color: '#fff',
        fill: '#fff',
        backgroundColor: '#1d1d1e',
    };

    const StInactive = {
        color: '#1d1d1e',
        fill: '#1d1d1e',
        backgroundColor: '#fff',
        borderWidth: '1px',
        borderColor: '#e6e6e7',
    };

    const buttons = ['스터디해요', '정보 공유', 'Q&A'];

    const StBtn = {
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px, rgba(0, 0, 0, 0.1) 0px 4px 5px',
        top: '0px',
    };
    const style = {
        transitionDuration: '0ms',
        transform: 'translate3d(0px, 0px, 0px)',
    };
    const StStatic = { position: 'static' };
    return (
        <div className="mx-auto max-w-main">
            <div className="pt-[8px] md:pt-[12px] min-w-screen mx-auto flex flex-col items-start px-[16px] md:items-center md:px-0">
                <div className="flex gap-[16px] xl:gap-[20px]">
                    <span className="font_headline_bold_md md:font_display_bold_sm content_primary cursor-pointer">
                        포스트
                    </span>
                </div>
            </div>
            <div className="h-[18px]"></div>
            <div className="relative">
                <div
                    className="swiper swiper-initialized swiper-horizontal swiper-pointer-events"
                    style={StStatic}
                    draggable="true"
                >
                    <div className="swiper-wrapper" style={style}>
                        {buttons.map((button, i) => (
                            <div className="swiper-slide swiper-slide-active !w-auto !ml-[16px] md:!ml-[0] mr-[12px] shrink-0 relative">
                                <li key={i} className="shrink-0">
                                    <div>
                                        <button
                                            aria-label="category chip"
                                            style={
                                                activeBtn === i
                                                    ? { ...StDefaultBtn, ...StActive }
                                                    : { ...StDefaultBtn, ...StInactive }
                                            }
                                            type="button"
                                            onClick={() => handleBtnClick(i)}
                                        >
                                            {button}
                                        </button>
                                    </div>
                                </li>
                            </div>
                        ))}
                    </div>
                    {/* <button
                        aria-label="prev button"
                        className="absolute z-[5] w-[32px] h-[32px] rounded-full surface_primary items-center justify-center left-[-16px] hidden"
                        type="button"
                        style={StBtn}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="content_primary h-[16px] w-[16px]"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M15.58 3.27c.504.405.563 1.115.13 1.587L9.168 12l6.543 7.143a1.076 1.076 0 0 1-.13 1.586 1.26 1.26 0 0 1-1.695-.122L6 12l7.885-8.607a1.26 1.26 0 0 1 1.695-.122Z"
                            ></path>
                        </svg>
                    </button>
                    <button
                        aria-label="next button"
                        className="absolute z-[5] w-[32px] h-[32px] rounded-full surface_primary items-center justify-center right-[-16px] hidden md:flex"
                        type="button"
                        style={StBtn}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="content_primary h-[16px] w-[16px]"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.42 20.73a1.076 1.076 0 0 1-.13-1.587L14.832 12 8.289 4.857a1.076 1.076 0 0 1 .13-1.586 1.26 1.26 0 0 1 1.696.122L18 12l-7.885 8.607a1.26 1.26 0 0 1-1.695.122Z"
                            ></path>
                        </svg>
                    </button>*/}
                </div>
            </div>
            <div className="h-[22px]"></div>
        </div>
    );
}

export default Category;
