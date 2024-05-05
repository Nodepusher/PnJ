import React, {useState} from "react";
import BackButton from "../../Components/Login/BackButton";
import CommonButton from "../../Components/Login/LoginCommonButton";
import CommonSectionContainer from "./CommonSectionContainer";
import LoginInput from "../../Components/Login/LoginInput";

const { LoginCommonButton } = CommonButton;

const LoginPhoneVerifyContainer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumber = (event) => {
    console.log(event.target.value);
    setPhoneNumber(event.target.value);
};
  return (
    <>
      <BackButton />
      <CommonSectionContainer
        divText={
          `휴대폰 번호를
            <br />
            입력해주세요.`
          }
      >
        <div className="w-full">
          <div className="mt-[12px] pb-[28px]">
            <div>
              <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                <LoginInput
                  placeholder={"휴대폰 번호 입력 (‘-’ 제외)"}
                  type={"tel"}
                  value={phoneNumber}
                  onChange={handlePhoneNumber}
                />
              </label>
            </div>
          </div>
          <LoginCommonButton text={"인증번호 받기"} />
        </div>
      </CommonSectionContainer>
    </>
  );
};

export default LoginPhoneVerifyContainer;
