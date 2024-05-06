import React from "react";
import EmailLoginContainer from "../Containers/Login/EmailLoginContainer";
import BackButton from "../Components/Login/BackButton";

const EmailLoginPage = () => {
    const backButtonUrl = "/login"
    return(
        <>
            <BackButton url={backButtonUrl}/>
            <EmailLoginContainer></EmailLoginContainer>
        </>
    )
}

export default EmailLoginPage;

