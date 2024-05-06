import "../../style/SignUp.css";
import React, { useState, useEffect } from "react";
import CommonSectionContainer from "./CommonSectionContainer";
import UserInput from "../../Components/Login/UserInput";
import UserInputMsg from "../../Components/Login/UserInputMsg";

const EmailSignUpContainer = () => {
  const [userInfo, setUserInfo] = useState({
    email: '',
    name: '',
    password: '',
    passwordCheck: '',
});

const [validationResults, setValidationResults] = useState({
    emailValid: null,
    nameValid: null,
    passwordValid: null,
    passwordMatch: null
});

const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
        ...prevState,
        [name]: value,
    }));
};

useEffect(() => {
  setValidationResults({
      emailValid: userInfo.email ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email) : null,
      nameValid: userInfo.name ? /^[a-zA-Z가-힣]+$/.test(userInfo.name) : null,
      passwordValid: userInfo.password ? /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(userInfo.password) : null,
      passwordMatch: userInfo.password && userInfo.passwordCheck ? userInfo.password === userInfo.passwordCheck : null
  });
}, [userInfo]);

  return (
    <>
      <CommonSectionContainer text={"이메일로 시작하기"}>
        <div className="w-full">
          <form
            className="mt-[40px] mb-[40px] grid grid-cols-1 gap-y-[24px]"
            data-gtm-form-interact-id="0"
          >
            <div>
              <p className="content_primary font_label_bold_md mb-[8px]">
                이메일 (아이디)
              </p>
              <UserInput
                name="email"
                placeholder="example@gmail.com"
                type="text"
                value={userInfo.email}
                handleInputChange={handleInputChange}
                isValid={validationResults.emailValid}
              />
              <UserInputMsg 
                isValid={validationResults.emailValid}
                text={userInfo.email === "" ? "필수항목입니다.": "올바른 이메일 형식이 아닙니다."}
              />
            </div>

            <div>
              <p className="content_primary font_label_bold_md mb-[8px]">
                이용자 이름
              </p>
              <UserInput
                name="name"
                placeholder="이용자 이름 입력"
                type="text"
                value={userInfo.name}
                handleInputChange={handleInputChange}
                isValid={validationResults.nameValid}
              />
              <UserInputMsg 
                isValid={validationResults.nameValid}
                text={userInfo.name === ''? "필수항목입니다." : "올바른 이름을 입력해주세요."}
              />
            </div>
            <div>
              <p className="content_primary font_label_bold_md mb-[8px]">
                비밀번호
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
                text={userInfo.password === ''? "필수항목입니다." : "비밀번호는 8자 이상 특수문자 1개 이상 입력해주세요."}
              />
            </div>
            
            <div>
              <p className="content_primary font_label_bold_md mb-[8px]">
                비밀번호 확인
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
                text={userInfo.passwordCheck === '' ? "필수항목입니다." : "비밀번호와 일치하지 않습니다."} 
              />
            </div>
            <div>
              <div className="border_primary rounded-[8px] border p-[20px]">
                <div className="border_secondary border-b pb-[16px]">
                  <label className="relative flex w-full items-center false">
                    <input
                      className="absolute h-0 w-0 opacity-0"
                      type="checkbox"
                      value="all"
                      data-gtm-form-interact-field-id="0"
                    />
                    <div className="surface_accent flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="content_primary_inverse content_disabled h-[12px] w-[12px]"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-[12px]">
                      <strong className="font_label_bold_lg">
                        이용약관 전체동의
                      </strong>
                      <span className="font_body_regular_md">
                        &nbsp;(선택포함)
                      </span>
                    </div>
                  </label>
                </div>
                <div className="mt-[16px] grid grid-cols-1 gap-y-[12px]">
                  <label className="relative flex w-full items-center false">
                    <input
                      className="absolute h-0 w-0 opacity-0"
                      type="checkbox"
                      value="above14yrsOld"
                    />
                    <div className="surface_accent flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="content_primary_inverse content_disabled h-[12px] w-[12px]"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-[12px]">
                      <div className="flex items-center">
                        <span className="font_body_regular_md">
                          [필수] 만 14세 이상
                        </span>
                      </div>
                    </div>
                  </label>
                  <label className="relative flex w-full items-center false">
                    <input
                      className="absolute h-0 w-0 opacity-0"
                      type="checkbox"
                      value="termsOfUseAgreement"
                    />
                    <div className="surface_accent flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="content_primary_inverse content_disabled h-[12px] w-[12px]"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-[12px]">
                      <div className="flex items-center">
                        <span className="font_body_regular_md">
                          [필수] 스테디오 이용약관
                        </span>
                        <a className="ml-[8px]" target="_blank" href=" ">
                          <div className="content_accent flex items-center">
                            <span className="font_label_bold_lg">보기</span>
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-[16px] w-[16px]"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.42 20.73a1.076 1.076 0 0 1-.13-1.587L14.832 12 8.289 4.857a1.076 1.076 0 0 1 .13-1.586 1.26 1.26 0 0 1 1.696.122L18 12l-7.885 8.607a1.26 1.26 0 0 1-1.695.122Z"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </label>
                  <label className="relative flex w-full items-center false">
                    <input
                      className="absolute h-0 w-0 opacity-0"
                      type="checkbox"
                      value="privacyAgreement"
                    />
                    <div className="surface_accent flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="content_primary_inverse content_disabled h-[12px] w-[12px]"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-[12px]">
                      <div className="flex items-center">
                        <span className="font_body_regular_md">
                          [필수] 개인정보 수집 및 이용
                        </span>
                        <a className="ml-[8px]" target="_blank" href=" ">
                          <div className="content_accent flex items-center">
                            <span className="font_label_bold_lg">보기</span>
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-[16px] w-[16px]"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.42 20.73a1.076 1.076 0 0 1-.13-1.587L14.832 12 8.289 4.857a1.076 1.076 0 0 1 .13-1.586 1.26 1.26 0 0 1 1.696.122L18 12l-7.885 8.607a1.26 1.26 0 0 1-1.695.122Z"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </label>
                  <label className="relative flex w-full items-center false">
                    <input
                      className="absolute h-0 w-0 opacity-0"
                      type="checkbox"
                      value="thirdPartyPrivacyAgreement"
                    />
                    <div className="surface_accent flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="content_primary_inverse content_disabled h-[12px] w-[12px]"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-[12px]">
                      <div className="flex items-center">
                        <span className="font_body_regular_md">
                          [선택] 개인정보 제3자 제공 동의
                        </span>
                        <a className="ml-[8px]" target="_blank" href=" ">
                          <div className="content_accent flex items-center">
                            <span className="font_label_bold_lg">보기</span>
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-[16px] w-[16px]"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.42 20.73a1.076 1.076 0 0 1-.13-1.587L14.832 12 8.289 4.857a1.076 1.076 0 0 1 .13-1.586 1.26 1.26 0 0 1 1.696.122L18 12l-7.885 8.607a1.26 1.26 0 0 1-1.695.122Z"
                              ></path>
                            </svg>
                          </div>
                        </a>
                      </div>
                    </div>
                  </label>
                  <label className="relative flex w-full items-center false">
                    <input
                      className="absolute h-0 w-0 opacity-0"
                      type="checkbox"
                      value="marketingAgreement"
                    />
                    <div className="surface_accent flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full">
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="content_primary_inverse content_disabled h-[12px] w-[12px]"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
                        ></path>
                      </svg>
                    </div>
                    <div className="ml-[12px]">
                      <div className="flex items-center">
                        <span className="font_body_regular_md">
                          [선택] 마케팅 정보 수신 동의
                        </span>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <button
              aria-label="button"
              className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
              type="submit"
            >
              시작하기
            </button>
          </form>
        </div>
      </CommonSectionContainer>
    </>
  );
};

export default EmailSignUpContainer;
