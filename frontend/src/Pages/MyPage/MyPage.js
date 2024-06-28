import React, { useEffect, useState } from "react";
import MyPageContainer from "../../Containers/MyPage/MyPageContainer";
import { PageProvider } from "../../Context/MyPageContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import HeaderContainer from "../../Containers/Common/HeaderContainer";

const MyPage = () => {
  const nav = useNavigate();

  const isAuthenticated =
    sessionStorage.getItem("isAuthenticated") === "true" ? true : false;
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
