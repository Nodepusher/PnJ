import React from "react";
import { Route, Routes } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import MyPage from "../Pages/MyPage/MyPage";

import PostListPage from "../Pages/PostListPage";
import PostDetailPage from "../Pages/PostDetailPage";
import LoginPage from "../Pages/LoginPage";
import PostWritepage from "../Pages/PostWritepage";

import LoginMainPage from "../Pages/LoginMainPage";
import FindPasswordPage from "../Pages/FindPasswordPage";
import ResetPasswordPage from "../Pages/ResetPasswordPage";
import EmailSignUpPage from "../Pages/EmailSignUpPage";
import EmailLoginPage from "../Pages/EmailLoginPage";
import EmailAuthPage from "../Pages/EmailAuthPage";
import EmailAuthSuccessPage from "../Pages/EmailAuthSuccessPage";
import LoginPhoneVerifyPage from "../Pages/LoginPhoneVerifyPage";
import InputVerifyNumberPage from "../Pages/InputVerifyNumberPage";
import ExistingAccountPage from "../Pages/ExistingAccountPage";

import ExpiredLinkPage from "../Pages/ExpiredLinkPage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";

const MainRouter = () => {
  return (
    <Routes>
      {/* 목록 페이지 */}
      <Route path="/" element={<PostListPage />} />
      {/* 상세 페이지 */}
      <Route path="/detail" element={<PostDetailPage />} />
      {/* 로그인/회원가입 페이지 */}
      <Route path="/login" element={<LoginPage />}>
        <Route path="" element={<LoginMainPage />} />
        <Route path="email-login" element={<EmailLoginPage />} />
        <Route path="verify-phone" element={<LoginPhoneVerifyPage />} />
        <Route path="verify-phone-token" element={<InputVerifyNumberPage />} />
        <Route path="existing-account" element={<ExistingAccountPage />} />
        <Route path="success-verify-email" element={<EmailAuthSuccessPage />} />
        <Route path="email-auth" element={<EmailAuthPage />} />
        <Route path="email-sign-up" element={<EmailSignUpPage />} />
        <Route path="find-password" element={<FindPasswordPage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
        <Route path="expired" element={<ExpiredLinkPage />} />
      </Route>
      <Route path="/myPage" element={<PrivateRoute />}>
        <Route path="" element={<MyPage />} />
      </Route>
      <Route path="/write" element={<PostWritepage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRouter;
