import React from "react";

const EmailAuthContainer = () => {
  return (
    <>
      <div>이메일 인증 페이지</div>
      <div class="flex h-full min-h-screen">
        <div class="flex w-[100%] flex-col items-center py-[40px] lg:w-[55%] lg:py-[56px]">
          <section class="flex w-full min-w-[320px] max-w-[400px] flex-col items-center px-[32px] lg:mx-auto">
            <div class="mt-[110px] w-full lg:mt-[116px]">
              <div class="flex flex-col items-center justify-center">
                <p class="content_accent font_title_bold_md">
                  스테디오에 오신 것을 환영합니다.
                </p>
                <h1 class="content_primary font_display_bold_sm mt-[20px] text-center">
                  이메일을 인증하고
                  <br />
                  가입을 완료해주세요.
                </h1>
                <p class="content_primary font_body_regular_md mt-[16px] text-center">
                  <strong class="font_label_bold_lg">jh940412@naver.com</strong>
                  으로 전송된
                  <br />
                  인증메일을 확인해주세요.
                </p>
              </div>
              <div class="mt-[76px] lg:mt-[58px]">
                <a href="/">
                  <button
                    aria-label="button"
                    class="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
                    type="button"
                  >
                    메인으로
                  </button>
                </a>
              </div>
              <div class="mt-[28px] flex items-center justify-between">
                <hr class="border_primary max-w-[96px] flex-shrink flex-grow" />
                <p class="content_secondary font_body_regular_md mx-[8px] lg:mx-[18px]">
                  인증 메일 링크가 만료되었나요?
                </p>
                <hr class="border_primary max-w-[96px] flex-shrink flex-grow" />
              </div>
              <div class="mt-[20px]">
                <button
                  aria-label="button"
                  class="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[19px] w-full min-w-[88px] disabled:content_disabled"
                  type="button"
                >
                  인증 메일 재발송
                </button>
              </div>
              <p class="content_secondary font_label_regular_lg mt-[20px] text-center">
                메일을 찾을 수 없다면 스팸 메일함을 확인해주세요.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div class="z-0">
        <div
          class="surface_primary border_primary fixed top-1/2 left-1/2 z-50 box-border flex min-w-[360px]
      -translate-y-1/2 -translate-x-1/2 transform flex-col items-center justify-center rounded-[16px] border p-[32px] shadow-s"
        >
          <h4 class="content_primary font_headline_bold_sm mb-[12px] text-center">
            메일 발송 실패
          </h4>
          <div class="content_secondary font_body_regular_lg max-w-[300px] text-center">
            이미 인증된 이메일입니다.
          </div>
          <div class="mt-[24px] flex w-full items-center justify-between">
            <div class="flex-1">
              <button
                aria-label="button"
                class="font_button_bold_md relative flex items-center justify-center  h-[40px] rounded-[20px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[16px] w-full false disabled:content_disabled"
                type="button"
              >
                확인
              </button>
            </div>
          </div>
        </div>
        <div class="dimmed_40 fixed top-0 left-0 z-40 h-full w-full"></div>
      </div>
    </>
  );
};

export default EmailAuthContainer;
