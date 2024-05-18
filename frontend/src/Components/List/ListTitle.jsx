import React from 'react';

const ListTitle = () => {
    return (
        <div className="pt-[8px] md:pt-[12px] min-w-screen mx-auto flex flex-col items-start px-[16px] md:items-center md:px-0">
            <div className="flex gap-[16px] xl:gap-[20px]">
                <span className="font_headline_bold_md md:font_display_bold_sm content_primary cursor-pointer">
                    포스트
                </span>
            </div>
        </div>
    );
};

export default ListTitle;
