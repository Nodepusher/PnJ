import React from 'react'
import DropdownList from '../List/DropdownList'

const AsideCategory = ({
    dropdownState,
    dropdownRef,
    isOpen,
    setIsOpen,
    handleMenuClick,
}) => {
    const propsClassName =
        'absolute top-[8px] z-10 max-h-[192px] overflow-y-auto w-full shadow-menu'
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
    ]
    return (
        <div className="px-[20px]">
            <div className="mb-[16px] flex gap-x-[12px]">
                <div
                    className="mt-[24px] mb-[8px] w-full"
                    ref={dropdownRef}
                    onClick={(e) => {
                        setIsOpen(!isOpen)
                    }}
                >
                    <div>
                        <label
                            className="surface_primary rounded-[8px] h-[48px] flex items-center cursor-pointer border border_black_opacity pl-[20px] pr-[16px]"
                            onClick={(e) => e.preventDefault()}
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
                                style={{ pointerEvents: 'none' }}
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
    )
}

export default AsideCategory
