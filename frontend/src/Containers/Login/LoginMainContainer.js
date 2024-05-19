/**
 * 최적화 시작
 * useCallback : 콜백함수에 의존성배열 인자 받아서, 의존성배열 값이 변경 되지 않는한 콜백함수 생성 되지 않음
 * 코드 스플리팅(React.lazy, Suspense) 동적 임포트를 구현 -> 초기 로딩속도 개선
 * React.memo : 컴포넌트가 동일한 props로 다시 렌더링 되지 않는다
 */

import React, { useCallback, memo, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import CommonSectionContainer from "./CommonSectionContainer";
// const LoginButton = React.lazy(() => import("../../Components/Button/LoginButton"));
const KakaoButton = React.lazy(() =>
  import("../../Components/Button/KakaoButton")
);
const EmailButton = React.lazy(() =>
  import("../../Components/Button/EmailButton")
);

const LoginMainContainer = () => {
  const nav = useNavigate();
  const toEmailLogin = useCallback(() => {
    nav("/login/email-login");
  }, [nav]);

  return (
    <>
      <CommonSectionContainer
        text={`취준생들의
          <br />
          정보 공유 공간 `}
      >
        <div className="w-full">
          <div className="mt-[80px] flex flex-col gap-y-[12px]">
              {/* 먼지 잘모르게시만 딤드처리 페이지 만들어서 하면 될듯 */}
            <Suspense fallback={<div>Loading...</div>}>
              <KakaoButton text={"카카오로 시작하기"} />
              <EmailButton
                onClickNav={toEmailLogin}
                text={"이메일로 시작하기"}
              />
            </Suspense>
          </div>
        </div>
      </CommonSectionContainer>
    </>
  );
};

export default memo(LoginMainContainer);
