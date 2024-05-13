import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import PostListPage from '../Pages/PostListPage';
import PostDetailPage from '../Pages/PostDetailPage';
import LoginPage from '../Pages/LoginPage';

import EmailLoginPage from '../Pages/EmailLoginPage';
import LoginPhoneVerifyPage from '../Pages/LoginPhoneVerifyPage';
import InputVerifyNumberPage from '../Pages/InputVerifyNumberPage';
import ExistingAccountPage from '../Pages/ExistingAccountPage';
import EmailAuthSuccessPage from '../Pages/EmailAuthSuccessPage';
import EmailAuthPage from '../Pages/EmailAuthPage';
import EmailSignUpPage from '../Pages/EmailSignUpPage';
import LoginMainPage from '../Pages/LoginMainPage';

import MyPage from '../Pages/MyPage/MyPage'; 
import MyPagePostContainer from '../Containers/MyPage/MyPagePostContainer';

const MainRouter = () => {
    {/* 리덕스나 컨텍스트로 전달할 것
    const nav = useNavigate();

    const moveToPrev = () => {
        nav(-1)
    }

    const moveToList = () => {
        nav('/')
    }

    const moveToLogin = () => {
        nav('/login');
    };

    const moveToDetail = () => {
        nav('/detail');
    };
    */}
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
                <Route path="success-verify-email/:token" element={<EmailAuthSuccessPage />} />
                <Route path="email-auth" element={<EmailAuthPage />} />
                <Route path="email-sign-up" element={<EmailSignUpPage />} />
            </Route>
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/MyPagePostContainer" element={<MyPagePostContainer />} />
        </Routes> 
    );
};

export default MainRouter;
