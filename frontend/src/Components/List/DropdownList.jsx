import React, { useRef } from 'react';

const DropdownList = () => {

    return (
        <div className="absolute top-[42px] right-0 z-10 w-[248px]">
            <ul className="rounded-[8px] p-[8px] surface_primary shadow-menu">
                <li data-option-value="popular" tabindex="-1">
                    <button
                        aria-label="dropdown option"
                        className="surface_primary content_primary font_label_regular_lg w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-[8px] py-[12px] px-[20px] text-left hover:surface_tertiary"
                        data-option-value="popular"
                        type="button"
                    >
                        인기
                    </button>
                </li>
                <li data-option-value="time" tabindex="-1">
                    <button
                        aria-label="dropdown option"
                        className="surface_primary content_primary font_label_regular_lg w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-[8px] py-[12px] px-[20px] text-left hover:surface_tertiary"
                        data-option-value="time"
                        type="button"
                    >
                        최신
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default DropdownList;
