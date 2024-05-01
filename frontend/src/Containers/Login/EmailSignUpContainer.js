import React from "react";
import '../../style/SignUp.css'
const EmailSignUpContainer = () => {
  return (
    <>
      이메일 회원가입 컨테이너
      <div class="flex h-full min-h-screen">
        <div class="flex w-[100%] flex-col items-center py-[40px] lg:w-[55%] lg:py-[56px]">
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
            <h1 class="font_display_bold_sm">이메일로 시작하기</h1>
            <div class="w-full">
              <form
                class="mt-[40px] mb-[40px] grid grid-cols-1 gap-y-[24px]"
                data-gtm-form-interact-id="0"
              >
                <div>
                  <p class="content_primary font_label_bold_md mb-[8px]">
                    이메일 (아이디)
                  </p>
                  <label class="relative flex overflow-hidden rounded-[8px] border-solid border-[2px] border_negative_active focus:border_negative_active disabled:content_disabled">
                    <input
                      class="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                      name="email"
                      placeholder="example@gmail.com"
                      type="text"
                      value="asdf"
                      data-gtm-form-interact-field-id="1"
                    />
                  </label>
                  <div class="font_label_regular_sm mt-[8px] flex content_negative">
                    <div class="mr-auto flex items-center temp">
                      <svg
                        viewBox="0 0 25 25"
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-[4px] h-[16px] w-[16px]"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.008 22.05c5.523.023 10.019-4.436 10.042-9.959.023-5.523-4.436-10.018-9.959-10.041C6.568 2.027 2.073 6.485 2.05 12.008c-.023 5.523 4.435 10.019 9.958 10.042Zm1.527-6.494a1.5 1.5 0 1 1-3-.013 1.5 1.5 0 0 1 3 .013Zm-1.181-2.505a.5.5 0 0 0 .498-.436l.646-4.997a.5.5 0 0 0-.494-.564l-1.867-.008a.5.5 0 0 0-.499.56l.604 5.002a.5.5 0 0 0 .495.44l.617.003Z"
                        ></path>
                      </svg>
                      올바른 이메일 형식이 아닙니다.
                    </div>
                  </div>
                </div>
                <div>
                  <p class="content_primary font_label_bold_md mb-[8px]">
                    이용자 이름
                  </p>
                  <label class="relative flex overflow-hidden rounded-[8px] border-solid border-[2px] border_negative_active focus:border_negative_active disabled:content_disabled">
                    <input
                      class="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                      name="username"
                      placeholder="이용자 이름 입력"
                      type="text"
                      value=""
                      data-gtm-form-interact-field-id="2"
                    />
                  </label>
                  <div class="font_label_regular_sm mt-[8px] flex content_negative">
                    <div class="mr-auto flex items-center temp">
                      <svg
                        viewBox="0 0 25 25"
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-[4px] h-[16px] w-[16px]"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.008 22.05c5.523.023 10.019-4.436 10.042-9.959.023-5.523-4.436-10.018-9.959-10.041C6.568 2.027 2.073 6.485 2.05 12.008c-.023 5.523 4.435 10.019 9.958 10.042Zm1.527-6.494a1.5 1.5 0 1 1-3-.013 1.5 1.5 0 0 1 3 .013Zm-1.181-2.505a.5.5 0 0 0 .498-.436l.646-4.997a.5.5 0 0 0-.494-.564l-1.867-.008a.5.5 0 0 0-.499.56l.604 5.002a.5.5 0 0 0 .495.44l.617.003Z"
                        ></path>
                      </svg>
                      필수항목입니다.
                    </div>
                  </div>
                </div>
                <div>
                  <p class="content_primary font_label_bold_md mb-[8px]">
                    비밀번호
                  </p>
                  <label class="relative flex overflow-hidden rounded-[8px] border-solid border-[2px] border_negative_active focus:border_negative_active disabled:content_disabled">
                    <input
                      class="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                      name="password"
                      placeholder="비밀번호 입력"
                      type="password"
                      value="d"
                      data-gtm-form-interact-field-id="3"
                    />
                  </label>
                </div>
                <div>
                  <p class="content_primary font_label_bold_md mb-[8px]">
                    비밀번호 확인
                  </p>
                  <label class="relative flex overflow-hidden rounded-[8px] border-solid border-[2px] border_negative_active focus:border_negative_active disabled:content_disabled">
                    <input
                      class="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                      name="passwordConfirm"
                      placeholder="비밀번호 입력"
                      type="password"
                      value="s"
                      data-gtm-form-interact-field-id="4"
                    />
                  </label>
                  <div class="font_label_regular_sm mt-[8px] flex content_negative">
                    <div class="mr-auto flex items-center temp">
                      <svg
                        viewBox="0 0 25 25"
                        xmlns="http://www.w3.org/2000/svg"
                        class="mr-[4px] h-[16px] w-[16px]"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12.008 22.05c5.523.023 10.019-4.436 10.042-9.959.023-5.523-4.436-10.018-9.959-10.041C6.568 2.027 2.073 6.485 2.05 12.008c-.023 5.523 4.435 10.019 9.958 10.042Zm1.527-6.494a1.5 1.5 0 1 1-3-.013 1.5 1.5 0 0 1 3 .013Zm-1.181-2.505a.5.5 0 0 0 .498-.436l.646-4.997a.5.5 0 0 0-.494-.564l-1.867-.008a.5.5 0 0 0-.499.56l.604 5.002a.5.5 0 0 0 .495.44l.617.003Z"
                        ></path>
                      </svg>
                      비밀번호가 일치하지 않습니다.
                    </div>
                  </div>
                </div>
                <div>
                  <div class="border_primary rounded-[8px] border p-[20px]">
                    <div class="border_secondary border-b pb-[16px]">
                      <label class="relative flex w-full items-center false">
                        <input
                          class="absolute h-0 w-0 opacity-0"
                          type="checkbox"
                          value="all"
                          data-gtm-form-interact-field-id="0"
                        />
                        <div class="surface_accent flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="content_primary_inverse content_disabled h-[12px] w-[12px]"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-[12px]">
                          <strong class="font_label_bold_lg">
                            이용약관 전체동의
                          </strong>
                          <span class="font_body_regular_md">
                            &nbsp;(선택포함)
                          </span>
                        </div>
                      </label>
                    </div>
                    <div class="mt-[16px] grid grid-cols-1 gap-y-[12px]">
                      <label class="relative flex w-full items-center false">
                        <input
                          class="absolute h-0 w-0 opacity-0"
                          type="checkbox"
                          value="above14yrsOld"
                        />
                        <div class="surface_accent flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="content_primary_inverse content_disabled h-[12px] w-[12px]"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-[12px]">
                          <div class="flex items-center">
                            <span class="font_body_regular_md">
                              [필수] 만 14세 이상
                            </span>
                          </div>
                        </div>
                      </label>
                      <label class="relative flex w-full items-center false">
                        <input
                          class="absolute h-0 w-0 opacity-0"
                          type="checkbox"
                          value="termsOfUseAgreement"
                        />
                        <div class="surface_accent flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="content_primary_inverse content_disabled h-[12px] w-[12px]"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-[12px]">
                          <div class="flex items-center">
                            <span class="font_body_regular_md">
                              [필수] 스테디오 이용약관
                            </span>
                            <a class="ml-[8px]" target="_blank" href=" ">
                              <div class="content_accent flex items-center">
                                <span class="font_label_bold_lg">보기</span>
                                <svg
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-[16px] w-[16px]"
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
                      <label class="relative flex w-full items-center false">
                        <input
                          class="absolute h-0 w-0 opacity-0"
                          type="checkbox"
                          value="privacyAgreement"
                        />
                        <div class="surface_accent flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="content_primary_inverse content_disabled h-[12px] w-[12px]"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-[12px]">
                          <div class="flex items-center">
                            <span class="font_body_regular_md">
                              [필수] 개인정보 수집 및 이용
                            </span>
                            <a class="ml-[8px]" target="_blank" href=" ">
                              <div class="content_accent flex items-center">
                                <span class="font_label_bold_lg">보기</span>
                                <svg
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-[16px] w-[16px]"
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
                      <label class="relative flex w-full items-center false">
                        <input
                          class="absolute h-0 w-0 opacity-0"
                          type="checkbox"
                          value="thirdPartyPrivacyAgreement"
                        />
                        <div class="surface_accent flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="content_primary_inverse content_disabled h-[12px] w-[12px]"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-[12px]">
                          <div class="flex items-center">
                            <span class="font_body_regular_md">
                              [선택] 개인정보 제3자 제공 동의
                            </span>
                            <a class="ml-[8px]" target="_blank" href=" ">
                              <div class="content_accent flex items-center">
                                <span class="font_label_bold_lg">보기</span>
                                <svg
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                  class="h-[16px] w-[16px]"
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
                      <label class="relative flex w-full items-center false">
                        <input
                          class="absolute h-0 w-0 opacity-0"
                          type="checkbox"
                          value="marketingAgreement"
                        />
                        <div class="surface_accent flex h-[20px] w-[20px] shrink-0 items-center justify-center rounded-full">
                          <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            class="content_primary_inverse content_disabled h-[12px] w-[12px]"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-[12px]">
                          <div class="flex items-center">
                            <span class="font_body_regular_md">
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
                  class="font_button_bold_md relative flex items-center justify-center h-[48px] rounded-[8px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[20px] w-full min-w-[88px] disabled:content_disabled"
                  type="submit"
                >
                  시작하기
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default EmailSignUpContainer;
