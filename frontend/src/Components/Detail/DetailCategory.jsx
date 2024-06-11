import React from 'react';

const DetailCategory = ({category}) => {
    return (
        <div>
            <button aria-label="category button" className="content_accent font_label_bold_lg text-left" type="button">
                {category}
            </button>
        </div>
    );
};

export default DetailCategory;
