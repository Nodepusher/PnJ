import React from "react";
import EmailSignUpContainer from "../Containers/Login/EmailSignUpContainer";
import BackButton from "../Components/Login/BackButton";

const EmailSignUpPage = () => {
  return (
    <>
      <BackButton url={"/login/email-login"} />
      <EmailSignUpContainer></EmailSignUpContainer>
    </>
  );
};

export default EmailSignUpPage;
