import React from "react";
import LoginContainer from "../Containers/Login/LoginMainContainer";
import BackButton from "../Components/Login/BackButton";
const LoginPage = () => {
  return (
      <>
        <BackButton />
        <LoginContainer></LoginContainer>
      </>
  );
};

export default LoginPage;
