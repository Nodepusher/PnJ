import "../../style/SignUp.css";
import React, { useState, useEffect } from "react";
import CommonSectionContainer from "./CommonSectionContainer";
import UserInput from "../../Components/Login/UserInput";
import UserInputMsg from "../../Components/Login/UserInputMsg";
import UserSignUpCheckBox from "../../Components/Login/UserSignUpCheckBox";

const EmailSignUpContainer = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
    passwordCheck: "",
  });

  const [validationResults, setValidationResults] = useState({
    emailValid: null,
    nameValid: null,
    passwordValid: null,
    passwordMatch: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
 
  useEffect(() => {
    setValidationResults({
      emailValid: userInfo.email
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userInfo.email)
        : null,
      nameValid: userInfo.name ? /^[a-zA-Z가-힣]+$/.test(userInfo.name) : null,
      passwordValid: userInfo.password
        ? /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
            userInfo.password
          )
        : null,
      passwordMatch:
        userInfo.password && userInfo.passwordCheck
          ? userInfo.password === userInfo.passwordCheck
          : null,
    });
  }, [userInfo]);


  const [options, setOptions] = useState([
    { label: "[필수] 만 14세 이상", isChecked: false },
    { label: "[필수] P&J 이용약관", isChecked: false },
    { label: "[필수] 개인정보 수집 및 이용", isChecked: false },
  ])
  const [allChecked, setAllChecked] = useState(false);
  
  useEffect(() => {
    const allChecked = options.every((option) => option.isChecked);
    setAllChecked(allChecked);
  },[options])

  const handleCheckBoxChange = (e, index) => {
    if(typeof index === 'number'){
      const newOptions = [...options];
      newOptions[index].isChecked = e.target.checked;
      setOptions(newOptions);
    }else{
      setAllChecked(e.target.checked);
      setOptions(options.map((option) => ({...option, isChecked: e.target.checked})));
    }
  }

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
                text={
                  userInfo.email === ""
                    ? "필수항목입니다."
                    : "올바른 이메일 형식이 아닙니다."
                }
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
                text={
                  userInfo.name === ""
                    ? "필수항목입니다."
                    : "올바른 이름을 입력해주세요."
                }
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
                text={
                  userInfo.password === ""
                    ? "필수항목입니다."
                    : "비밀번호는 8자 이상 특수문자 1개 이상 입력해주세요."
                }
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
                text={
                  userInfo.passwordCheck === ""
                    ? "필수항목입니다."
                    : "비밀번호와 일치하지 않습니다."
                }
              />
            </div>

            {/* 체크박스 시작 부분 */}
            <UserSignUpCheckBox 
              options={options}
              allChecked={allChecked}
              onChange={handleCheckBoxChange}
            />

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
