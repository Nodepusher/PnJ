import React from 'react';
import LoginContainer from '../Containers/Login/LoginMainContainer';
import BackButton from '../Components/Login/BackButton';

const LoginMainPage = () => {
    const backButtonUrl = '/';

    return (
        <>
            <BackButton url={backButtonUrl} />
            <LoginContainer></LoginContainer>
        </>
    );
};

export default LoginMainPage;
