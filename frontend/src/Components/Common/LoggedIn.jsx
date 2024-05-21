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
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=64&amp;q=75     64w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=96&amp;q=75     96w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=128&amp;q=75   128w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=256&amp;q=75   256w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=384&amp;q=75   384w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=500&amp;q=75   500w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=768&amp;q=75   768w,
                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75 1024w
                "
                        src="/_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2Fba353699-f46e-4e8a-928c-155da0f36c0a%2FprofileImage%2F2671fe08-9b48-48ab-9b1e-16844e76ce61.R640x640%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75"
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
