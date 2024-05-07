import React from 'react';
import LoginMainContainer from '../Containers/Login/LoginMainContainer';
import BackButton from '../Components/Login/BackButton';

const LoginMainPage = () => {
    const backButtonUrl = '/';

    return (
        <>
            <BackButton url={backButtonUrl} />
            <LoginMainContainer></LoginMainContainer>
        </>
    );
};

export default LoginMainPage;
