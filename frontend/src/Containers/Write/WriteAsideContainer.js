import React, { useEffect, useRef, useState } from 'react';
import WriteInputComponent from '../../Components/Write/WriteInputComponent';
import DropdownList from '../../Components/List/DropdownList';

const WriteAsideContainer = () => {
    const StDescriptTag = {
        wordBreak: 'keep-all',
    };
    const propsClassName = 'absolute top-[8px] z-10 max-h-[192px] overflow-y-auto w-full shadow-menu';

    const propsList = [
        {
            dataOptionValue: 'study',
            content: '스터디해요',
        },
        {
            dataOptionValue: 'shareInfo',
            content: '정보 공유',
        },
        {
            dataOptionValue: 'QnA',
            content: 'Q&A',
        },
    ];

    const [tagList, setTagList] = useState([]);
    const [inputTag, setInputTag] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownState, setDropdownState] = useState(null);
    const dropdownRef = useRef();

    const handleMenuClick = (selected) => {
        setDropdownState(selected);
        setIsOpen(false);
    };

    const handleChange = (e) => {
        const text = e.target.value;
        setInputTag(text);
    };


    return (
        <section className="col-span-5 col-start-11 ml-[15px]">
            <section className="border_primary flex flex-col rounded-[12px] border">
                <div className="surface_secondary border_primary flex h-[54px] items-center justify-between border-y px-[16px] first:rounded-t-[12px] first:border-t-0">
                    <div className="flex items-center">
                        <strong className="content_primary font_label_bold_xl">카테고리</strong>
                    </div>
                </div>
                <div className="px-[20px]">
                    <div className="mb-[16px] flex gap-x-[12px]">
                        <div className="mt-[24px] mb-[8px] w-full">
                            <div>
                                <label
                                    className="surface_primary rounded-[8px] h-[48px] flex items-center cursor-pointer border border_black_opacity pl-[20px] pr-[16px] focus-within:border-2 focus-within:border_accent_active focus-within:pl-[19px] focus-within:pr-[15px]"
                                    ref={dropdownRef}
                                    onClick={() => {
                                        setIsOpen(!isOpen);
                                    }}
                                >
                                    <input
                                        className="outline-none w-full font_body_regular_md placeholder:content_disabled cursor-pointer surface_primary content_primary"
                                        name=""
                                        placeholder="카테고리 미설정"
                                        readonly=""
                                        type="text"
                                        value={dropdownState}
                                    />
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="ml-[10px] h-[16px] w-[16px] content_secondary"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M3.27 8.42a1.076 1.076 0 0 1 1.587-.13L12 14.832l7.143-6.544a1.076 1.076 0 0 1 1.586.13 1.26 1.26 0 0 1-.122 1.696L12 18l-8.607-7.885A1.26 1.26 0 0 1 3.27 8.42Z"
                                        ></path>
                                    </svg>
                                </label>
                                <div className="relative flex">
                                    {isOpen && (
                                        <DropdownList
                                            onClick={handleMenuClick}
                                            propsClassName={propsClassName}
                                            props={propsList}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="surface_secondary border_primary flex h-[54px] items-center justify-between border-y px-[16px] first:rounded-t-[12px] first:border-t-0">
                    <div className="flex items-center">
                        <strong className="content_primary font_label_bold_xl">공개 범위</strong>
                    </div>
                </div>
                <div className="px-[20px]">
                    <ul>
                        <li className="border_secondary border-t py-[26px] first:border-t-0">
                            <label className="relative flex">
                                <input
                                    className="absolute h-0 w-0 opacity-0"
                                    name="group"
                                    type="radio"
                                    value="PUBLIC"
                                    checked=""
                                />
                                <div className="shrink-0 grow-0 surface_primary border_accent_active flex h-[20px] w-[20px] items-center justify-center rounded-full border">
                                    <svg
                                        viewBox="0 0 8 8"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="content_accent_active h-[12px] w-[12px]"
                                    >
                                        <circle cx="4" cy="4" r="4"></circle>
                                    </svg>
                                </div>
                                <div className="content_primary font_label_bold_lg mt-[1px] ml-[12px] flex-grow">
                                    <div className="content_primary font_label_bold_lg">전체 공개</div>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="surface_secondary border_primary flex h-[54px] items-center justify-between border-y px-[16px] first:rounded-t-[12px] first:border-t-0">
                    <div className="flex items-center">
                        <strong className="content_primary font_label_bold_xl">태그</strong>
                    </div>
                </div>
                <div className="mb-[16px] flex gap-x-[12px]">
                    <div className="mt-[24px] mb-[8px] w-full px-[16px]">
                        <div>
                            <WriteInputComponent
                                value={inputTag}
                                onChange={handleChange}
                                placeholder={'포스트의 키워드를 태그로 입력하세요.'}
                            />
                            <div className="font_label_regular_sm mt-[8px] flex content_quaternary">
                                <div className="mr-auto flex items-center" style={StDescriptTag}>
                                    최대 5개, 1개당 20자까지 입력할 수 있습니다. 태그를 입력하면 태그별 탐색 및 검색에
                                    활용되어 내 포스트가 더 많이 노출됩니다.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="mb-[12px] flex flex-wrap px-[16px]"></ul>
                <div className="surface_secondary border_primary flex h-[54px] items-center justify-between border-y px-[16px] first:rounded-t-[12px] first:border-t-0">
                    <div className="flex items-center">
                        <strong className="content_primary font_label_bold_xl">파일 첨부</strong>
                        <button aria-label="post guide button" className="ml-[4px]" type="button">
                            <svg
                                viewBox="0 0 25 25"
                                xmlns="http://www.w3.org/2000/svg"
                                className="content_quaternary h-[18px] w-[18px]"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.008 20.041a8 8 0 1 0 .067-16 8 8 0 0 0-.067 16Zm-.008 2c5.523.023 10.018-4.435 10.041-9.958.023-5.523-4.435-10.019-9.958-10.041C6.56 2.019 2.064 6.477 2.04 12 2.02 17.523 6.477 22.018 12 22.041Z"
                                ></path>
                                <path d="M11.984 13.372c-.528-.002-.974-.436-.888-.957.116-.702.408-1.305 1.088-1.753.574-.387 1.011-.768 1.02-1.363-.004-.594-.45-.993-1.01-.988-.283-.005-.552.1-.75.295-.348.343-.712.793-1.2.79-.655-.002-1.214-.559-.978-1.17.46-1.19 1.614-1.739 2.948-1.733 1.886.007 3.242.97 3.241 2.706-.011 1.156-.593 1.857-1.467 2.4-.388.236-.67.511-.843.852-.24.47-.633.923-1.16.92ZM12.02 17.492a1.5 1.5 0 1 0 .013-3 1.5 1.5 0 0 0-.012 3Z"></path>
                            </svg>
                        </button>
                    </div>
                    <button
                        aria-label="button"
                        className="font_button_bold_md relative flex items-center justify-center h-[32px] rounded-[16px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] false disabled:content_disabled"
                        type="button"
                    >
                        업로드
                    </button>
                </div>
                <div className="px-[20px]">
                    <div className="flex h-[88px] items-center justify-center">
                        <span className="content_disabled font_body_regular_md">첨부된 파일이 없습니다.</span>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default WriteAsideContainer;
