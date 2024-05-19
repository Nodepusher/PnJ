import React, {useState, useEffect} from "react";
import BackButton from "../../Components/Login/BackButton";
import { LoginCommonButton } from "../../Components/Login/LoginCommonButton";
import CommonSectionContainer from "./CommonSectionContainer";
import LoginInput from "../../Components/Login/LoginInput";
import { useNavigate, Prompt } from "react-router-dom";
import AuthTimer from "../../Components/Login/AuthTimer";
import { useUser } from "../../Context/UserContext"

const InputVerifyNumberContainer = () => {

  const [verifyNumber, setVerifyNumber] = useState("");
  const {user, updateUserInfo, deleteUserInfo} = useUser();
  const onChangeVerifyNumber = (event) => {
    console.log(event.target.value);
    setVerifyNumber(event.target.value);
  }
  const nav = useNavigate();
  const onClickExistAccount = () => {
    nav("/login/existing-account")
  }

  //
  const onClickEmailSignUp = () => {
    nav("/login/email-sign-up");
  };

  return (
    <>
      <BackButton url="/login/verify-phone" />
      <CommonSectionContainer
        divText={`인증번호를
            <br />
            입력해주세요.`}
       >
        <div className="w-full">
          <div className="mt-[12px] pb-[28px]">
            <div>
              <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                <LoginInput 
                   placeholder={"인증번호 6자리"} 
                   type={"tel"}
                   value={verifyNumber}
                   onChange={onChangeVerifyNumber}
                />
                <AuthTimer />
              </label>
            </div>
          </div>
          <LoginCommonButton onClickNav={onClickExistAccount} text={"인증하기"} />
          <LoginCommonButton onClickNav={onClickEmailSignUp} text={"임시(인증 성공 시 회원가입 페이지로)"} />
        </div>
      </CommonSectionContainer>
    </>
  );
};

export default InputVerifyNumberContainer;
