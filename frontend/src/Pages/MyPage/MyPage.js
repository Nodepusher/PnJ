import React from "react";
import MyPagePostContainer from "../../Containers/MyPage/MyPagePostContainer";
import MyPageContainer from "../../Containers/MyPage/MyPageContainer";
import { PageProvider } from "../../Context/MyPageContext";
const MyPage = () => {
  return <>
    {/* <MyPagePostContainer /> */}
    <PageProvider>
      <MyPageContainer />
    </PageProvider>
  </>;
};

export default MyPage;
