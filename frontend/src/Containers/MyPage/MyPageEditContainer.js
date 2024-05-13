import React from "react";
import SideBar from "../../Components/MyPage/SideBar";

const MyPageEditContainer = () => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <div className="flex h-full overflow-hidden">
          <SideBar />
          <div className="shrink-0 grow basis-0 overflow-x-auto">
            <div className="mx-auto grid w-desktop-grid grid-cols-12 gap-x-[16px] gap-y-0 pb-[64px]">
              <div className="col-span-full">
                <div className="surface_primary sticky top-0 z-10">
                  <div className="border_black_opacity col-span-full border-b pt-[41px] pb-[26px]">
                    <div className="flex justify-between">
                      <h3 className="content_primary font_headline_bold_lg">
                        내 스튜디오
                      </h3>
                      <div className="flex">
                        <div className="ml-[12px] w-[88px]">
                          <button
                            aria-label="button"
                            className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[16px] w-full false disabled:content_disabled"
                            type="button"
                          >
                            수정
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mx-auto grid w-desktop-grid grid-cols-12 gap-x-[16px] gap-y-0 pb-[64px]">
                    <div className="col-span-3 pt-[48px] mobile:pt-[56px] pb-[20px] mobile:pb-[40px]">
                      <div className="w-[297px]">
                        <div className="mb-[7px] flex items-center">
                          <strong className="content_primary font_title_bold_md mr-[6px]">
                            프로필 사진
                          </strong>
                        </div>
                        <span className="content_secondary font_body_regular_md">
                          크리에이터를 대표하는 프로필 사진을 등록 해주세요.
                        </span>
                      </div>
                    </div>
                    <div className="col-span-7 col-start-6 mobile:pt-[56px] pb-[40px]">
                      <div className="flex">
                        <div className="relative mr-[32px] flex h-[96px] min-w-[96px] items-center justify-center">
                          <img
                            alt="프로필 이미지"
                            sizes="100vw"
                            srcset="
                        /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=500&amp;q=100   500w,
                        /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=768&amp;q=100   768w,
                        /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=100 1024w
                      "
                            src="/_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=100"
                            decoding="async"
                            data-nimg="fill"
                            className="rounded-full profile_image"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="mb-[14px]">
                            <button
                              aria-label="button"
                              className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] false disabled:content_disabled"
                              type="button"
                            >
                              이미지 업로드
                              <label
                                aria-label="파일 첨부"
                                className="absolute top-0 left-0 z-[1] block block h-[100%] w-full cursor-pointer opacity-0"
                                for="fileInputprofile-upload"
                              >
                                <input
                                  accept="image/png,image/jpeg,image/jpg"
                                  className="hidden cursor-pointer"
                                  id="fileInputprofile-upload"
                                  type="file"
                                />
                              </label>
                            </button>
                          </div>
                          <p className="content_quaternary font_body_regular_md">
                            <span>파일 형식은 jpg 또는 png로,</span>
                            <br />
                            <span>
                              사이즈는 가로 200px, 세로 200px 이상으로
                              올려주세요.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <hr className="border_secondary col-span-full w-full border-t-[1px]" />
                    <div className="col-span-3 pt-[40px] pb-[20px] mobile:pb-[40px]">
                      <div className="w-[297px]">
                        <div className="mb-[7px] flex items-center">
                          <strong className="content_primary font_title_bold_md mr-[6px]">
                            한 줄 소개
                          </strong>
                          <svg
                            viewBox="0 0 8 8"
                            xmlns="http://www.w3.org/2000/svg"
                            className="content_negative h-[8px] w-[8px]"
                          >
                            <circle cx="4" cy="4" r="4"></circle>
                          </svg>
                        </div>
                        <span className="content_secondary font_body_regular_md">
                          자신을 소개하는 간략한 글을 입력해주세요.
                        </span>
                      </div>
                    </div>
                    <div className="col-span-7 col-start-6 mobile:pt-[40px] pb-[40px]">
                      <div>
                        <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                          <input
                            className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                            placeholder="한 줄 소개를 입력해주세요."
                            type="text"
                            value="IT 위주의 제품 소개를 합니다"
                          />
                        </label>
                        <div className="font_label_regular_sm mt-[8px] flex content_quaternary">
                          <div className="ml-auto">17/50</div>
                        </div>
                      </div>
                    </div>
                    <hr className="border_secondary col-span-full w-full border-t-[1px]" />
                    <div className="col-span-3 pt-[48px] mobile:pt-[56px] pb-[20px] mobile:pb-[40px]">
                      <div className="w-[297px]">
                        <div className="mb-[7px] flex items-center">
                          <strong className="content_primary font_title_bold_md mr-[6px]">
                            계정 설정
                          </strong>
                        </div>
                        <span className="content_secondary font_body_regular_md">
                          사용자 계정 재설정
                        </span>
                      </div>
                    </div>
                    <div className="col-span-7 col-start-6 mobile:pt-[56px] pb-[40px]">
                          <div className="flex flex-col justify-between gap-y-[16px]">
                            <div>
                              <p className="content_primary font_label_bold_md mb-[8px]">
                                이메일 아이디
                              </p>
                              <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                                <input
                                  className="font_label_bold_md h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                                  type="text"
                                  value="ailak@naver.com"
                                  readOnly="true"
                                />
                              </label>
                            </div>
                            <div>
                              <p className="content_primary font_label_bold_md mb-[8px]">
                                비밀번호
                              </p>
                              <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                                <input
                                  className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                                  placeholder="비밀번호를 입력해주세요."
                                  type="text"
                                  value=""
                                />
                              </label>
                            </div>
                            <div>
                              <p className="content_primary font_label_bold_md mb-[8px]">
                                비밀번호 재입력
                              </p>
                              <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                                <input
                                  className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                                  placeholder="다시한번 비밀번호를 입력해주세요."
                                  type="text"
                                  value=""
                                />
                              </label>
                            </div>
                            <div>
                              <p className="content_primary font_label_bold_md mb-[8px]">
                                연락처
                              </p>
                              <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                                <input
                                  className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                                  type="text"
                                  value="010-1234-1234"
                                  readOnly="true"
                                />
                                <button
                                  className="border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid disabled:content_disabled"
                                  type="button"
                                  style={{ width : "15%"}}
                                >
                                  <div className="content_accent font_button_bold_md" style={{margin : "16px"}}>
                                    변경
                                  </div>
                                </button>
                              </label>
                              
                            </div>
                          </div>
                    </div>
                    <hr className="border_secondary col-span-full w-full border-t-[1px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageEditContainer;
