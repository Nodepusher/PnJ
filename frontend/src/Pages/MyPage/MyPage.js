import React, { useEffect } from "react";
import MyPageContainer from "../../Containers/MyPage/MyPageContainer";
import { PageProvider } from "../../Context/MyPageContext";
import { useSearchParams } from "react-router-dom";

const MyPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // 기본 쿼리 파라미터 설정
    if (!searchParams.has('myPost') || !searchParams.has('myInfo')) {
      setSearchParams({ myPost: 'true', myInfo: 'false' });
    }
  }, [searchParams, setSearchParams]);

  return (
    <PageProvider>
      <div className="flex h-screen flex-col">
        <div className="flex h-full overflow-hidden">
          <MyPageContainer />
        </div>
      </div>
    </PageProvider>
  );
};

export default MyPage;
