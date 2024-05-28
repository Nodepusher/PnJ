import React from 'react';

const WriteInputComponent = ({ value, onChange, onKeyDown, placeholder, addClass }) => {
    return (
        <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
            <input
                className={`h-[48px] w-full px-[20px] outline-none placeholder:font_body_regular_md content_primary 
                placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity
                ${addClass ? addClass : ''}`}
                placeholder={placeholder}
                type="text"
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </label>
    );
};

export default WriteInputComponent;
