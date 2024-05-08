import React, { useState, useEffect } from "react";
import BackButton from "../../Components/Login/BackButton";
import CommonButton from "../../Components/Login/LoginCommonButton";
import CommonSectionContainer from "./CommonSectionContainer";
import LoginInput from "../../Components/Login/LoginInput";
import { useNavigate } from "react-router-dom";
import SendVerifyEmailModal from "../../Components/Login/SendVerifyEmailModal";
import { useUser } from "../../Context/UserContext";

const { LoginCommonButton } = CommonButton;
const phoneReg = /^\d{3}\d{3,4}\d{4}$/;

const LoginPhoneVerifyContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkedNumber, setCheckedNumber] = useState(false);
  const {user, updateUserInfo, deleteUserInfo} = useUser();
  const nav = useNavigate();

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const onClickVerifyPhone = () => {
    const isValidNumber = phoneReg.test(phoneNumber);
    setCheckedNumber(!isValidNumber);
    if (isValidNumber) {
      updateUserInfo('phoneNumber',phoneNumber)
      nav("/login/verify-phone-token");
    }
  };

  const closeModal = () => {
    setCheckedNumber(false);
  };

  return (
    <>
      <BackButton url={"/login/email-login"} />
      <CommonSectionContainer divText={`휴대폰 번호를 <br /> 입력해주세요.`}>
        <div className="w-full">
          <div className="mt-[12px] pb-[28px]">
            <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
              <LoginInput
                placeholder={"휴대폰 번호 입력 (‘-’ 제외)"}
                type={"tel"}
                value={phoneNumber}
                onChange={handlePhoneNumber}
              />
            </label>
          </div>
          <LoginCommonButton onClickNav={onClickVerifyPhone} text={"인증번호 받기"} />
        </div>
      </CommonSectionContainer>
      {/* checkedNumber가 참인 경우 렌더링 */}
      {checkedNumber && <SendVerifyEmailModal type="phone" modalState={checkedNumber} closeModal={closeModal} />}
    </>
  );
};

export default LoginPhoneVerifyContainer;
