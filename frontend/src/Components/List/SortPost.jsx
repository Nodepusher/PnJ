import React, { useEffect, useRef, useState } from 'react';
import DropdownList from './DropdownList';
import { useSelector } from 'react-redux';

const SortPost = () => {
    const postData = useSelector((state) => state.postList.filteredPosts);

    const [isOpen, setIsOpen] = useState(false);
    const [dropdownState, setDropdownState] = useState('인기');
    const dropdownRef = useRef();

    const handleMenuClick = (selected) => {
        setDropdownState(selected);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                // 클릭된 요소가 드롭다운 메뉴 바깥인 경우에 메뉴를 닫음
                setIsOpen(false);
            }
        };

        // 윈도우 전역에 클릭 이벤트 리스너 추가
        window.addEventListener('click', handleClickOutside);

        return () => {
            // 컴포넌트가 unmount 될 때 클릭 이벤트 리스너 제거
            window.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const propsClassName = 'absolute top-[42px] right-0 z-10 w-[248px]';

    const propsList = [
        {
            dataOptionValue: 'popular',
            content: '인기',
        },
        { dataOptionValue: 'time', content: '최신' },
    ];

    return (
        <div className="flex h-[44px] items-center justify-between px-[16px] md:p-0">
            <h5 className="font_title_bold_md">포스트 {postData.length}</h5>
            <div className="relative">
                <button
                    onClick={() => {
                        setIsOpen(!isOpen);
                    }}
                    ref={dropdownRef}
                    aria-label="filter"
                    className="surface_primary false border_black_opacity flex max-w-[164px] items-center rounded-[16px] outline-none"
                    type="button"
                >
                    <span className="overflow-hidden content_secondary font_label_medium_lg text-ellipsis whitespace-nowrap">
                        {dropdownState}
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
                {isOpen && <DropdownList onClick={handleMenuClick} propsClassName={propsClassName} props={propsList} />}
            </div>
        </div>
    );
};

export default SortPost;
