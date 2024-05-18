import React from 'react';

const WriterPostHeader = ({ handleSubmit }) => {
    return (
        <header className="surface_primary border_primary flex h-[68px] items-center border-b">
            <div className="mx-auto flex min-w-desktop-grid items-center justify-between">
                <div className="content_primary flex items-center">
                    <button className="surface_tertiary mr-[16px] flex h-[32px] w-[32px] items-center justify-center rounded-full">
                        <svg viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg" className="h-[16px] w-[16px]">
                            <path d="M13.833 8a.667.667 0 0 0-.666-.667H5.72L8.973 4.08a.667.667 0 1 0-.943-.943L3.167 8l4.863 4.863a.665.665 0 0 0 .94-.94L5.72 8.667h7.447A.667.667 0 0 0 13.833 8Z"></path>
                        </svg>
                    </button>
                    <h1 className="font_title_bold_lg">포스트 작성하기</h1>
                </div>
                <div className="flex items-center">
                    <div className="mr-[12px]">
                        <button
                            aria-label="button"
                            className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] false disabled:content_disabled"
                            type="button"
                            disabled=""
                        >
                            임시저장
                        </button>
                    </div>
                    <div>
                        <button
                            aria-label="button"
                            className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[16px] false disabled:content_disabled"
                            disabled=""
                            type="button"
                            onClick={handleSubmit}
                        >
                            게시
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default WriterPostHeader;
