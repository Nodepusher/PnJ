import React from "react";
import BackButton from "../../Components/Login/BackButton";
import {LoginCommonButton, EmailButton} from "../../Components/Login/LoginCommonButton";
import CommonSectionContainer from "./CommonSectionContainer";
import { useNavigate } from "react-router-dom";

const ExistingAccountContainer = () => {
  const nav = useNavigate();
  const onClickEmailLogin = () => {
    nav("/login/email-login");
  };
  const onClickEmailSignUp = () => {
    nav("/login/email-sign-up");
  };
  return (
    <>
      <BackButton />
      <CommonSectionContainer
        divText={` 휴대폰 번호로 인증한 <br />
            기존 계정이 존재합니다.`}
        >
        <div className="w-full">
          <div className="mt-[24px] mb-[24px] text-center">
            <p className="font_label_bold_lg">010-5121-3284</p>
            <p className="font_label_regular_lg">
              휴대폰 번호로 인증한 이메일 계정이 있습니다.
            </p>
          </div>
          <div className="surface_secondary content_primary font_body_regular_md mb-[40px] rounded-[8px] p-[16px] text-center">
            <p>ail**@naver.com</p>
          </div>
          <LoginCommonButton onClickNav={onClickEmailLogin} text={"기존 계정으로 계속하기"} />
          {/* <EmailButton onClickNav={onClickEmailSignUp} text={"다른 이메일로 시작하기"} /> */}
        </div>
      </CommonSectionContainer>
    </>
  );
};

export default ExistingAccountContainer;
