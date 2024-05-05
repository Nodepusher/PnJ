import React, {useState} from "react";
import BackButton from "../../Components/Login/BackButton";
import CommonButton from "../../Components/Login/LoginCommonButton";
import CommonSectionContainer from "./CommonSectionContainer";
import LoginInput from "../../Components/Login/LoginInput";


const { LoginCommonButton } = CommonButton;

const InputVerifyNumberContainer = () => {
  const [verifyNumber, setVerifyNumber] = useState("");
  const onChangeVerifyNumber = (event) => {
    console.log(event.target.value);
    setVerifyNumber(event.target.value);
  }
  return (
    <>
      <BackButton />
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
                <div className="flex w-full justify-end px-[20px] py-[15px]">
                  <div className="content_accent font_title_bold_sm">
                    <p>0:51</p>
                  </div>
                </div>
              </label>
            </div>
          </div>
          <LoginCommonButton text={"인증하기"} />
        </div>
      </CommonSectionContainer>
    </>
  );
};

export default InputVerifyNumberContainer;
