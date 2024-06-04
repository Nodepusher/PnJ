import React from 'react';

const LoggedIn = () => {
    const StImg = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: '0px',
        color: 'transparent',
    };

    return (
        <div>
            <div className="relative">
                <button className="relative block h-[32px] w-[32px] rounded-full">
                    <img
                        alt="프로필 이미지"
                        sizes="10vw"
                        srcset="
                   
                "
                        src=""
                        decoding="async"
                        data-nimg="fill"
                        className="rounded-full"
                        loading="lazy"
                        style={StImg}
                    />
                </button>
            </div>
        </div>
    );
};

export default LoggedIn;
