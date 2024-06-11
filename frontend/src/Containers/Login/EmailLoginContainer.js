import React, { useState, memo, Suspense, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/action";
import CommonSectionContainer from "./CommonSectionContainer";
import LoginInput from "../../Components/Login/LoginInput";
import { useNavigate, Navigate } from "react-router-dom";
const LoginButton = React.lazy(() =>
  import("../../Components/Button/LoginButton")
);
const KakaoButton = React.lazy(() =>
  import("../../Components/Button/KakaoButton")
);
const EmailButton = React.lazy(() =>
  import("../../Components/Button/EmailButton")
);

const EmailLoginContainer = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { isAuthenticated, error } = useSelector((state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.auth.error,
  }));

  const toVerifyPhonePage = useCallback(() => {
    nav("/login/verify-phone");
  }, [nav]);

  const onChangeInput = useCallback((event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const onSubmitLogin = useCallback(
    (e) => {
      e.preventDefault();
      console.log(formData.email, " :::: ", formData.password);
      dispatch(login({ email: formData.email, password: formData.password }));
    },
    [dispatch, formData]
  );

  if (isAuthenticated) {
    //return <Navigate to="/myPage" />;
    return <Navigate to="/" />;
  }

  return (
    <CommonSectionContainer text={"로그인"}>
      <div className="w-full">
        <form onSubmit={onSubmitLogin}>
          <div className="mt-[40px]">
            <div>
              <p className="content_primary font_label_bold_md mb-[8px]">
                이메일 (아이디)
              </p>
              <label className="relative flex overflow-hidden rounded-[8px] border-solid border">
                <LoginInput
                  name="email"
                  placeholder="example@gmail.com"
                  type="text"
                  value={formData.email}
                  onChange={onChangeInput}
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
                  name="password"
                  placeholder="비밀번호 입력"
                  type="password"
                  value={formData.password}
                  onChange={onChangeInput}
                />
              </label>
            </div>
          </div>
          <div className="mt-[24px]">
            <Suspense fallback={<div>Loading...</div>}>
              <LoginButton text="로그인" />
            </Suspense>
          </div>
        </form>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        <div className="mt-[28px] flex items-center justify-between">
          <hr className="border_primary max-w-[96px] flex-shrink flex-grow" />
          <p className="content_secondary font_body_regular_md mx-[23px] lg:mx-[18px]">
            계정이 없으신가요?
          </p>
          <hr className="border_primary max-w-[96px] flex-shrink flex-grow" />
        </div>
        <div className="mt-[20px] flex flex-col gap-y-[12px]">
          <Suspense fallback={<div>Loading...</div>}>
            <KakaoButton text="카카오로 시작하기" />
            <EmailButton
              onClickNav={toVerifyPhonePage}
              text="이메일로 시작하기"
            />
          </Suspense>
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
  );
};

export default memo(EmailLoginContainer);
