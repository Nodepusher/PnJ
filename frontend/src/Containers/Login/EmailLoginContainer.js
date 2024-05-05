import React, {useState} from "react";
import CommonButton from "../../Components/Login/LoginCommonButton";
import CommonSectionContainer from "./CommonSectionContainer";
import LoginInput from "../../Components/Login/LoginInput";

const { LoginCommonButton, KakaoButton, EmailButton } = CommonButton;
const EmailLoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeInputEmail = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  }
  const onChangeInputPassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  }

  return (
    <>
      <CommonSectionContainer text={"로그인"}>
        <div className="w-full">
          <form>
            <div className="mt-[40px]">
              <div>
                <p className="content_primary font_label_bold_md mb-[8px]">
                  이메일 (아이디)
                </p>
                <label className="relative flex overflow-hidden rounded-[8px] border-solid border">
                  <LoginInput
                    name={"email"}
                    placeholder={"example@gmail.com"}
                    type={"text"}
                    value={email}
                    onChange={onChangeInputEmail}
                    />
                  </label>
              </div>
            </div>
            <div className="mt-[24px]">
              <div>
                <p className="content_primary font_label_bold_md mb-[8px]">
                  비밀번호
                </p>
                <label className="relative flex overflow-hidden rounded-[8px] border-solid border">
                  <LoginInput
                    name={"password"}
                    placeholder={"비밀번호 입력"}
                    type={"password"}
                    value={password}
                    onChange={onChangeInputPassword}
                  />
                </label>
              </div>
            </div>
            <div className="mt-[24px]">
              <LoginCommonButton text={"로그인"} />
            </div>
          </form>
          <div className="mt-[28px] flex items-center justify-between">
            <hr className="border_primary max-w-[96px] flex-shrink flex-grow" />
            <p className="content_secondary font_body_regular_md mx-[23px] lg:mx-[18px]">
              계정이 없으신가요?
            </p>
            <hr className="border_primary max-w-[96px] flex-shrink flex-grow" />
          </div>
          <div className="mt-[20px] flex flex-col gap-y-[12px]">
            <KakaoButton text={"카카오로 시작하기"} />
            <EmailButton text={"이메일로 시작하기"} />
          </div>
          <div className="mt-[20px] flex items-center justify-center">
            <p className="content_secondary font_body_regular_md mr-[8px]">
              비밀번호를 잊으셨나요?
            </p>
            <a
              className="content_accent font_label_bold_lg"
              href="/login/find-password"
            >
              비밀번호 찾기
            </a>
          </div>
        </div>
      </CommonSectionContainer>
    </>
  );
};

export default EmailLoginContainer;
