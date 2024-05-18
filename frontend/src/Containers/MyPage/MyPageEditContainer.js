import React from "react";
import EditInfo from "../../Components/MyPage/EditInfo"
import EditUploadImage from "../../Components/MyPage/EditUploadImage"
import EditUpdateImage from "../../Components/MyPage/EditUpdateImage"
import EditUpdateInput from "../../Components/MyPage/EditUpdateInput"
import EditUpdatePhone from "../../Components/MyPage/EditUpdatePhone"
import EditUpdateIntroduce from "../../Components/MyPage/EditUpdateIntroduce"

const MyPageEditContainer = () => {
  return (
    <>
      <div className="shrink-0 grow basis-0 overflow-x-auto">
        <div className="mx-auto grid w-desktop-grid grid-cols-12 gap-x-[16px] gap-y-0 pb-[64px]">
          <div className="col-span-full">
            <EditInfo />
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
                    <EditUpdateImage />
                    <div>
                      <EditUploadImage />
                    </div>
                  </div>
                </div>
                <hr className="border_secondary col-span-full w-full border-t-[1px]" />
                <EditUpdateIntroduce />
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
                    <EditUpdateInput
                      content={"이메일 아이디"}
                      type={"text"}
                      value={"ailak@naver.com"}
                      readOnly={true}
                      placeholder={""}
                    />
                    <EditUpdateInput
                      content={"비밀번호"}
                      type={"text"}
                      value={""}
                      readOnly={false}
                      placeholder={"비밀번호를 입력해주세요"}
                    />
                    <EditUpdateInput
                      content={"비밀번호 재입력"}
                      type={"text"}
                      value={""}
                      readOnly={false}
                      placeholder={"다시한번 비밀번호를 입력해주세요"}
                    />
                    <EditUpdatePhone
                      content={"연락처"}
                      type={"text"}
                      value={"010-1234-1234"}
                      readOnly={true}
                    />
                  </div>
                </div>
                <hr className="border_secondary col-span-full w-full border-t-[1px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPageEditContainer;
