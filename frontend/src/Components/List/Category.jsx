import React, { useState } from 'react';
import '../../style/List.css';
import '../../style/List2.css';

function Category() {
    const [activeBtn, setActiveBtn] = useState(0);

    const handleBtnClick = (i) => {
        setActiveBtn(i);
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

    const categories = ['스터디해요', '정보 공유', 'Q&A'];

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
                        {categories.map((category, i) => (
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
                                            {category}
                                        </button>
                                    </div>
                                </li>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-[22px]"></div>
        </div>
    );
}

export default Category;
