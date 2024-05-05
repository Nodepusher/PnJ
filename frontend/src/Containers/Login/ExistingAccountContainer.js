import React from "react";

const ExistingAccountContainer = () => {
  return (
    <>
      <div class="w-full px-[32px] lg:px-[40px]">
        <button
          aria-label="button"
          class="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[24px] content_secondary surface_tertiary hover:surface_primary_active active:surface_primary_active disabled:surface_disabled px-[20px] min-w-[88px] disabled:content_disabled"
          type="button"
        >
          <div class="flex items-center justify-center">
            <svg
              viewBox="0 0 17 16"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-[4px] shrink-0"
              height="16px"
              width="16px"
            >
              <path d="M13.833 8a.667.667 0 0 0-.666-.667H5.72L8.973 4.08a.667.667 0 1 0-.943-.943L3.167 8l4.863 4.863a.665.665 0 0 0 .94-.94L5.72 8.667h7.447A.667.667 0 0 0 13.833 8Z"></path>
            </svg>
            <div>뒤로</div>
          </div>
        </button>
      </div>
      <section class="mt-[76px] flex w-full min-w-[320px] max-w-[400px] flex-col items-center px-[32px] lg:mx-auto lg:mt-[52px]">
        <h1 class="font_display_bold_sm">
          <div class="text-center">
            휴대폰 번호로 인증한 <br />
            기존 계정이 존재합니다.
          </div>
        </h1>
        <div class="w-full">
          <div class="mt-[24px] mb-[24px] text-center">
            <p class="font_label_bold_lg">010-5121-3284</p>
            <p class="font_label_regular_lg">
              휴대폰 번호로 인증한 이메일 계정이 있습니다.
            </p>
          </div>
          <div class="surface_secondary content_primary font_body_regular_md mb-[40px] rounded-[8px] p-[16px] text-center">
            <p>ail**@naver.com</p>
          </div>
          <button
            aria-label="button"
            class="font_button_bold_md relative flex items-center justify-center mb-[16px] h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
            type="button"
          >
            기존 계정으로 계속하기
          </button>
          <button
            aria-label="button"
            class="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[19px] w-full min-w-[88px] disabled:content_disabled"
            type="button"
          >
            <svg
              viewBox="0 0 17 16"
              xmlns="http://www.w3.org/2000/svg"
              class="mr-[4px] h-[16px] w-[16px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.833 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9.334a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3.833Zm1.008 1.924a.533.533 0 1 0-.682.819L8.5 9.361l4.341-3.618a.533.533 0 0 0-.682-.82L8.5 7.974l-3.659-3.05Z"
              ></path>
            </svg>
            다른 이메일로 시작하기
          </button>
        </div>
      </section>
    </>
  );
};

export default ExistingAccountContainer;
