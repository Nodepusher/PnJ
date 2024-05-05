import React from "react";

const EmailLoginContainer = () => {
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
            <h1 class="font_display_bold_sm">로그인</h1>
            <div class="w-full">
              <form>
                <div class="mt-[40px]">
                  <div>
                    <p class="content_primary font_label_bold_md mb-[8px]">
                      이메일 (아이디)
                    </p>
                    <label class="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                      <input
                        class="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                        name="email"
                        placeholder="example@gmail.com"
                        type="text"
                        value=""
                      />
                    </label>
                  </div>
                </div>
                <div class="mt-[24px]">
                  <div>
                    <p class="content_primary font_label_bold_md mb-[8px]">
                      비밀번호
                    </p>
                    <label class="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                      <input
                        class="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                        name="password"
                        placeholder="비밀번호 입력"
                        type="password"
                        value=""
                      />
                    </label>
                  </div>
                </div>
                <div class="mt-[24px]">
                  <button
                    aria-label="button"
                    class="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
                    type="submit"
                  >
                    로그인
                  </button>
                </div>
              </form>
              <div class="mt-[28px] flex items-center justify-between">
                <hr class="border_primary max-w-[96px] flex-shrink flex-grow" />
                <p class="content_secondary font_body_regular_md mx-[23px] lg:mx-[18px]">
                  계정이 없으신가요?
                </p>
                <hr class="border_primary max-w-[96px] flex-shrink flex-grow" />
              </div>
              <div class="mt-[20px] flex flex-col gap-y-[12px]">
                <button
                  aria-label="button"
                  class="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_secondary bg-[#FFEA2B] hover:bg-[#FFDE30] active:bg-[#FFDE30] px-[20px] w-full min-w-[88px] disabled:content_disabled"
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
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.5 2C4.803 2 1.833 4.306 1.833 7.128a5.026 5.026 0 0 0 3.091 4.339l-.636 2.306c-.03.06 0 .151.06.181.061.061.182.061.243 0l2.697-1.79c.394.061.788.091 1.212.091 3.667 0 6.667-2.306 6.667-5.127C15.167 4.306 12.197 2 8.5 2Z"
                      ></path>
                    </svg>
                    <div>카카오로 시작하기</div>
                  </div>
                </button>
                <button
                  aria-label="button"
                  class="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[19px] w-full min-w-[88px] disabled:content_disabled"
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
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.833 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9.334a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3.833Zm1.008 1.924a.533.533 0 1 0-.682.819L8.5 9.361l4.341-3.618a.533.533 0 0 0-.682-.82L8.5 7.974l-3.659-3.05Z"
                      ></path>
                    </svg>
                    <div>이메일로 시작하기</div>
                  </div>
                </button>
              </div>
              <div class="mt-[20px] flex items-center justify-center">
                <p class="content_secondary font_body_regular_md mr-[8px]">
                  비밀번호를 잊으셨나요?
                </p>
                <a
                  class="content_accent font_label_bold_lg"
                  href="/login/find-password"
                >
                  비밀번호 찾기
                </a>
              </div>
            </div>
          </section>
    </>
  );
};

export default EmailLoginContainer;
