import React, { useEffect } from "react";
import MyPageContainer from "../../Containers/MyPage/MyPageContainer";
import { PageProvider } from "../../Context/MyPageContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import HeaderContainer from "../../Containers/Common/HeaderContainer";

const MyPage = () => {
  const nav = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("마이페이지 들어옴");
  useEffect(() => {
    // 기본 쿼리 파라미터 설정
    if (!searchParams.has("myPost") || !searchParams.has("myInfo")) {
      setSearchParams({ myPost: "true", myInfo: "false" });
    }
  }, [searchParams, setSearchParams]);

  const isAuthenticated =
    sessionStorage.getItem("isAuthenticated") === "true" ? true : false;
  console.log("isAuthenticated", isAuthenticated);
  if (isAuthenticated === false) {
    return nav("/");
  }

  return (
    <PageProvider>
      <div className="flex h-screen flex-col">
        <HeaderContainer login={true}></HeaderContainer>
        <div className="flex h-full overflow-hidden">
          <MyPageContainer />
        </div>
      </div>
    </PageProvider>
  );
};

export default MyPage;
