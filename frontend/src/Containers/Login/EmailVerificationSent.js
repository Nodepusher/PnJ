import React, { useEffect } from "react";
import UserInput from "../../Components/Login/UserInput";
import UserInputMsg from "../../Components/Login/UserInputMsg";
import useUserInfo from "../../utils/useUserInfo";

const EmailVerificationSent = ({
  sendMailState,
  isValidCallback,
  isCallbackEmail,
}) => {
  let content = "";
  const { userInfo, validationResults, handleInputChange } = useUserInfo();
  console.log("하위 컴포넌트 userInfo", userInfo);
  isValidCallback(validationResults.emailValid);

  if (sendMailState) {
    content =
      "메일이 오지 않을 경우 스팸 메일로 분류되어 있을 수 있으니, 스팸 메일 보관함을 확인해 주세요.";
  } else {
    content =
      "스테디오 가입 시 사용한 이메일 계정을 입력해주세요. 해당 이메일로 비밀번호 재설정 링크를 보내드립니다.";
  }

  useEffect(() => {
    isCallbackEmail(userInfo.email);
  }, [userInfo.email]);

  return (
    <>
      {sendMailState && (
        <div className="relative mx-auto flex w-full rounded-[8px] p-[16px] surface_positive_light">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="content_positive_active mr-[4px] h-[16px] w-[16px] shrink-0"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.959 12.041c-.023 5.5-4.5 9.94-10 9.918-5.5-.023-9.94-4.5-9.918-10 .023-5.5 4.5-9.94 10-9.918 5.5.023 9.94 4.5 9.918 10Zm-4.893-1.92a.896.896 0 0 0-1.268-1.268l-4.539 4.54-2.668-2.585a.896.896 0 1 0-1.247 1.288l3.935 3.811 5.787-5.786Z"
            ></path>
          </svg>
          <div className="flex flex-col items-start">
            <strong className="content_primary font_label_bold_lg mb-[4px]">
              인증메일 발송 완료
            </strong>
            <p className="content_secondary font_body_regular_md">
              <span className="font_label_bold_md">{userInfo.email}</span>으로
              인증메일을 발송했습니다. 메일을 확인해주세요.
            </p>
          </div>
        </div>
      )}
      <p className="content_secondary font_body_regular_md keep-all mt-[24px] text-center">
        {content}
      </p>
      {!sendMailState && (
        <div className="mt-[40px]">
          <div>
            <p className="content_primary font_label_bold_md mb-[8px]">
              이메일 (아이디)
            </p>
            <UserInput
              name="email"
              placeholder="example@gmail.com"
              type="text"
              value={userInfo.email}
              handleInputChange={handleInputChange}
              isValid={validationResults.emailValid}
            />
            <UserInputMsg
              isValid={validationResults.emailValid}
              text={"올바른 이메일 형식이 아닙니다."}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default EmailVerificationSent;
