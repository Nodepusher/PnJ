import React, { useState } from "react";
import EmailVerificationSent from "../Containers/Login/EmailVerificationSent";
import CommonSectionContainer from "../Containers/Login/CommonSectionContainer";
import BackButton from "../Components/Login/BackButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const FindPasswordPage = () => {
  const [sendMailState, setSendMailState] = useState(false);
  const [validState, setValidState] = useState(false);
  const [email, setEmail] = useState(null);
  const nav = useNavigate();

  const isCallbackEmail = (email) => {
    setEmail((prev) => ({ ...prev, email }));
  };

  const isValidCallback = (isValid) => {
    setValidState(isValid);
  };
  const sendEmailAuth = (email) => {
    const url = "http://localhost:4000/user/send-reset-mail";
    return axios
      .post(url, {
        email: email,
      })
      .catch((err) => console.log(err));
  };

  const handleOnClick = () => {
    console.log("sendMailState", sendMailState);
    if (sendMailState) {
      nav("/login/email-login");
    } else {
      console.log("email", email.email);
      setSendMailState(validState);
      sendEmailAuth(email.email);
    }
  };

  return (
    <>
      <BackButton url={-1} />
      <CommonSectionContainer text="비밀번호 찾기">
        <div className="w-full">
          <div className="mt-[24px]">
            <EmailVerificationSent
              sendMailState={sendMailState}
              isValidCallback={isValidCallback}
              isCallbackEmail={isCallbackEmail}
            />

            <div className="mt-[40px]">
              <button
                aria-label="button"
                className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
                type="button"
                onClick={handleOnClick}
              >
                {sendMailState ? "로그인" : "비밀번호 재설정 링크 받기"}
              </button>
            </div>
          </div>
        </div>
      </CommonSectionContainer>
    </>
  );
};

export default FindPasswordPage;
