import React from 'react';

const EditButton = () => {
    const style = {
        padding: '0 16px',
        borderRadius: '16px',
        height: '32px',
        color: '#fff',
        backgroundColor: '#1d1d1e',
        fontWeight: '600',
        fontSize: '14px',
    };
    return (
        <div class="hidden lg:block">
            <button aria-label="button" type="button" style={style}>
                스튜디오 만들기
            </button>
        </div>
    );
};

export default EditButton;
