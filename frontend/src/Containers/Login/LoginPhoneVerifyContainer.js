import React, { useState, memo, Suspense, useCallback } from "react";
import BackButton from "../../Components/Login/BackButton";
import CommonSectionContainer from "./CommonSectionContainer";
import LoginInput from "../../Components/Login/LoginInput";
import Modal from "../../Components/Login/Modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../Context/UserContext";

const CommonButton = React.lazy(() =>
  import("../../Components/Button/CommonButton")
);
const phoneReg = /^\d{3}\d{3,4}\d{4}$/;

const LoginPhoneVerifyContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [checkedNumber, setCheckedNumber] = useState(false);
  const { updateUserInfo } = useUser();
  const nav = useNavigate();

  const inputPhoneNumber = useCallback((event) => {
    setPhoneNumber(event.target.value);
  }, []);

  const onClickVerifyPhone = useCallback(async () => {
    const isValidNumber = phoneReg.test(phoneNumber);
    setCheckedNumber(!isValidNumber);

    if (isValidNumber) {
      try {
        const res = await axios.post("/api/auth/send-sms", { phoneNumber });
        console.log(res);
        if (res.status === 200) {
          setCheckedNumber(true);
          updateUserInfo('phoneNumber', phoneNumber);
          nav("/login/verify-phone-token");
        } else {
          setCheckedNumber(true);
        }
      } catch (error) {
        setCheckedNumber(true);
        nav("/login/verify-phone-token");
      }
    }
  }, [phoneNumber, updateUserInfo, nav]);

  const closeModal = useCallback(() => {
    setCheckedNumber(false);
  }, []);

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
                onChange={inputPhoneNumber}
              />
            </label>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <CommonButton onClickNav={onClickVerifyPhone} text={"인증번호 받기"} />
          </Suspense>
        </div>
      </CommonSectionContainer>
      {checkedNumber && (
        <Modal type="phone" modalState={checkedNumber} closeModal={closeModal} />
      )}
    </>
  );
};

export default memo(LoginPhoneVerifyContainer);
