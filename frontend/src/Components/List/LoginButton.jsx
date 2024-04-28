import React from 'react';

const LoginButton = () => {
    const style = {
        padding: '0 15px',
        border: '1px solid',
        borderRadius: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        height: '32px',
        display: 'flex',
        position: 'relative',
        borderColor: 'rgba(0, 0, 0, 0.1)',
        color: '#333334',
        backgroundColor: '#fff',
        fontWeight: '600',
        fontSize: '14px',
    };

    return (
        <div>
            <button aria-label="button" type="button" style={style}>
                로그인
            </button>
        </div>
    );
};

export default LoginButton;
