import React from "react";
import SendVerifyEmailModal from "../../Components/Login/SendVerifyEmailModal";
const EmailAuthContainer = () => {
  return (
    <>
          <section className="flex w-full min-w-[320px] max-w-[400px] flex-col items-center px-[32px] lg:mx-auto">
            <div className="mt-[110px] w-full lg:mt-[116px]">
              <div className="flex flex-col items-center justify-center">
                <p className="content_accent font_title_bold_md">
                  스테디오에 오신 것을 환영합니다.
                </p>
                <h1 className="content_primary font_display_bold_sm mt-[20px] text-center">
                  이메일을 인증하고
                  <br />
                  가입을 완료해주세요.
                </h1>
                <p className="content_primary font_body_regular_md mt-[16px] text-center">
                  <strong className="font_label_bold_lg">
                    jh940412@naver.com
                  </strong>
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
                >
                  인증 메일 재발송
                </button>
              </div>
              <p className="content_secondary font_label_regular_lg mt-[20px] text-center">
                메일을 찾을 수 없다면 스팸 메일함을 확인해주세요.
              </p>
            </div>
          </section>
          <SendVerifyEmailModal></SendVerifyEmailModal>
      
    </>
  );
};

export default EmailAuthContainer;
