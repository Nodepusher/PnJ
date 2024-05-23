import React, { memo } from 'react';

const CommonButton = ({ text, onClickNav }) => {
    return (
        <>
            <button
                className="font_button_bold_md relative flex items-center justify-center mb-[16px] h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
                type="button"
                onClick={onClickNav}
            >
                {text}
            </button>
        </>
    );
};
export default memo(CommonButton);
