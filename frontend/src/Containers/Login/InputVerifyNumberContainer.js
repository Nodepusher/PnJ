import React, {useState, useEffect, Suspense, useCallback} from "react";
import BackButton from "../../Components/Login/BackButton";
import axios from "axios";

import CommonSectionContainer from "./CommonSectionContainer";
import LoginInput from "../../Components/Login/LoginInput";
import Modal from "../../Components/Login/Modal"

import { useNavigate, Prompt } from "react-router-dom";
import AuthTimer from "../../Components/Login/AuthTimer";
import { useUser } from "../../Context/UserContext"
const CommonButton = React.lazy(() =>
  import("../../Components/Button/CommonButton")
);

const InputVerifyNumberContainer = () => {

  const [verifyNumber, setVerifyNumber] = useState("");
  const {user, updateUserInfo, deleteUserInfo} = useUser();
  const [modalState, setModalState] = useState(false);
  const onChangeVerifyNumber = useCallback((event) => {
    console.log(event.target.value);
    setVerifyNumber(event.target.value);
  },[])
  const nav = useNavigate();

  // const onClickExistAccount = () => {
  //   nav("/login/existing-account")
  // }
  // const onClickEmailSignUp = () => {
  //   nav("/login/email-sign-up");
  // };

  const onClickVerifyButton = useCallback(async() => {
    try {
      const res = await axios.post("/api/auth/verify-sms", {  });
      console.log(res);
      if(res.type === "success") {
        nav("/login/email-sign-up");
      }else if(res.type === "exist") {
        nav("/login/existing-account")
      }else{
        // 인증번호 잘못입력
        setModalState(true)
      }

      // 페이지 확인 시 이거 이용 테스트용이므로 이후에 지울것
    } catch (error) {
      const testType = 1 // 1 : success, 2: existing, 3.fail
      if(testType === 1){
        nav("/login/email-sign-up");
      }else if(testType === 2){
        nav("/login/existing-account")
      }else{
        setModalState(true)
      }
      
    }
  },[])
  const closeModal = useCallback(() => {
    setModalState(false);
  }, []);


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
          <Suspense >
            <CommonButton onClickNav={onClickVerifyButton} text={"인증하기"} />
            {/* <CommonButton onClickNav={onClickEmailSignUp} text={"임시(인증 성공 시 회원가입 페이지로)"} /> */}
          </Suspense>
        </div>
      </CommonSectionContainer>
      {modalState && (
        <Modal type="failVerify" modalState={modalState} closeModal={closeModal} />
      )}
    </>
  );
};

export default InputVerifyNumberContainer;
