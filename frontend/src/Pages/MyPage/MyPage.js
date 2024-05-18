import React from "react";
import MyPageContainer from "../../Containers/MyPage/MyPageContainer";
import { PageProvider } from "../../Context/MyPageContext";
const MyPage = () => {
  return (
    <>
      <PageProvider>
        <div className="flex h-screen flex-col">
          <div className="flex h-full overflow-hidden">
            <MyPageContainer />
          </div>
        </div>
      </PageProvider>
    </>
  );
};

export default MyPage;
