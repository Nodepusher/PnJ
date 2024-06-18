import React from "react";
import BackButton from "../Components/Login/BackButton";
import CommonSectionContainer from "../Containers/Login/CommonSectionContainer";
import useUserInfo from "../utils/useUserInfo";
import UserInput from "../Components/Login/UserInput";
import UserInputMsg from "../Components/Login/UserInputMsg";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPasswordPage = () => {
  const nav = useNavigate();

  const moveToLoginPage = async () => {
    if (userInfo.password === userInfo.passwordCheck) {
      const url = "http://localhost:4000/user/req-reset-password";
      await axios.post(url, {
        password: userInfo.password,
      });
      return nav("/login");
    }
  };
  const { userInfo, validationResults, handleInputChange } = useUserInfo();

  return (
    <>
      <BackButton url={-1} />
      <CommonSectionContainer text="비밀번호 재설정">
        <div className="w-full">
          <div className="mt-[24px]">
            <p className="content_secondary font_body_regular_md text-center">
              새로운 비밀번호를 입력해주세요.
            </p>
            <div className="mt-[40px]">
              <div>
                <p className="content_primary font_label_bold_md mb-[8px]">
                  새 비밀번호
                </p>
                <UserInput
                  name="password"
                  placeholder="비밀번호 입력"
                  type="password"
                  value={userInfo.password}
                  handleInputChange={handleInputChange}
                  isValid={validationResults.passwordValid}
                />
                <UserInputMsg
                  isValid={validationResults.passwordValid}
                  text={"올바른 비밀번호 형식이 아닙니다."}
                />
              </div>
            </div>
            <div className="mt-[24px]">
              <div>
                <p className="content_primary font_label_bold_md mb-[8px]">
                  새 비밀번호 확인
                </p>
                <UserInput
                  name="passwordCheck"
                  placeholder="비밀번호 입력"
                  type="password"
                  value={userInfo.passwordCheck}
                  handleInputChange={handleInputChange}
                  isValid={validationResults.passwordMatch}
                />
                <UserInputMsg
                  isValid={validationResults.passwordMatch}
                  userInfo={userInfo}
                  text={"비밀번호와 일치하지 않습니다."}
                />
              </div>
            </div>
            <div className="mt-[24px]">
              <button
                aria-label="button"
                className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
                type="button"
                onClick={moveToLoginPage}
              >
                비밀번호 재설정
              </button>
            </div>
          </div>
        </div>
      </CommonSectionContainer>
    </>
  );
};

export default ResetPasswordPage;
