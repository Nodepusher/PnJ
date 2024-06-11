import React, { useState, memo, useCallback, useEffect } from "react";
import Modal from "../../Components/Login/Modal";
import { useUser } from "../../Context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const EmailAuthContainer = () => {
  const nav = useNavigate();
  const { user, deleteUserInfo } = useUser();
  const [checkModal, setCheckModal] = useState(false); // 모달 상태관리
  const [emailAuthState, setEmailAuthState] = useState();

  const sendData = {
    email: user.email,
    name: user.name,
    phoneNumber: user.phoneNumber,
  };

  const onSubmitButton = useCallback(() => {
    // axios http request 부분
    // sendEmailAuth().then(res => {
    //     if(res === 'success') { // 백엔드에서 분기 설정 status를 200으로 하든지 아니면, 문자열로 하든지
    //         setEmailAuthState('reEmailAuth')
    //         setCheckModal(true)

    //     }else{
    //         setEmailAuthState('alreadyEmailAuth')
    //         setCheckModal(true)
    //     }
    // })

    // 임시 테스트용
    // const result = "reEmailAuth"
    const result = "alreadyEmailAuth";
    setCheckModal(true);
    setEmailAuthState(result);
  }, []);
  // 모달창 닫기위한 함수
  const closeModal = useCallback(() => {
    setCheckModal(false);
    if (emailAuthState === "alreadyEmailAuth") {
      deleteUserInfo(user.email);
      deleteUserInfo(user.name);
      deleteUserInfo(user.phoneNumber);
      nav("/");
    }
  }, []);

  useEffect(() => {
    const sendEmailAuth = (email) => {
      const url = "http://localhost:4000/user/email-verify";
      return axios
        .post(url, {
          email: email,
        })
        .catch((err) => console.log(err));
    };
    sendEmailAuth(user.email);
    console.log("제발 한번만");
  }, []);

  return (
    <>
      <section className="flex w-full min-w-[320px] max-w-[400px] flex-col items-center px-[32px] lg:mx-auto">
        <div className="mt-[110px] w-full lg:mt-[116px]">
          <div className="flex flex-col items-center justify-center">
            <p className="content_accent font_title_bold_md">
              P&J에 오신 것을 환영합니다.
            </p>
            <h1 className="content_primary font_display_bold_sm mt-[20px] text-center">
              이메일을 인증하고
              <br />
              가입을 완료해주세요.
            </h1>
            <p className="content_primary font_body_regular_md mt-[16px] text-center">
              <strong className="font_label_bold_lg">{user.email}</strong>
              으로 전송된
              <br />
              인증메일을 확인해주세요.
            </p>
          </div>
          <div className="mt-[76px] lg:mt-[58px]">
            <a href="/">
              <button
                aria-label="button"
                className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
                type="button"
              >
                메인으로
              </button>
            </a>
          </div>
          <div className="mt-[28px] flex items-center justify-between">
            <hr className="border_primary max-w-[96px] flex-shrink flex-grow" />
            <p className="content_secondary font_body_regular_md mx-[8px] lg:mx-[18px]">
              인증 메일 링크가 만료되었나요?
            </p>
            <hr className="border_primary max-w-[96px] flex-shrink flex-grow" />
          </div>
          <div className="mt-[20px]">
            <button
              aria-label="button"
              className="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[19px] w-full min-w-[88px] disabled:content_disabled"
              type="button"
              onClick={onSubmitButton}
            >
              인증 메일 재발송
            </button>
          </div>
          <p className="content_secondary font_label_regular_lg mt-[20px] text-center">
            메일을 찾을 수 없다면 스팸 메일함을 확인해주세요.
          </p>
        </div>
      </section>
      {checkModal && (
        <Modal
          type={emailAuthState}
          modalState={checkModal}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default memo(EmailAuthContainer);
