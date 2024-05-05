import React from 'react';

const InputVerifyNumberContainer = () => {
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
                <div class="mb-[40px] text-center">
                  인증번호를
                  <br />
                  입력해주세요.
                </div>
              </h1>
              <div class="w-full">
                <div class="mt-[12px] pb-[28px]">
                  <div>
                    <label class="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                      <input
                        class="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                        placeholder="인증번호 6자리"
                        type="tel"
                        value=""
                      />
                      <div class="flex w-full justify-end px-[20px] py-[15px]">
                        <div class="content_accent font_title_bold_sm">
                          <p>0:51</p>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
                <button
                  aria-label="button"
                  class="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
                  disabled=""
                  type="button"
                >
                  인증하기
                </button>
              </div>
            </section>
      </>
    );
}

export default InputVerifyNumberContainer;