import './App.css';
import { BrowserRouter, Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import PostListPage from './Pages/PostListPage';
import PostDetailPage from './Pages/PostDetailPage';
import PostWritepage from './Pages/PostWritepage';

import LoginMainPage from './Pages/LoginMainPage';
import LoginPhoneVerifyPage from './Pages/LoginPhoneVerifyPage';
import EmailLoginPage from './Pages/EmailLoginPage';
import InputVerifyNumberPage from './Pages/InputVerifyNumberPage';
import ExistingAccountPage from './Pages/ExistingAccountPage';
import EmailSignUpPage from './Pages/EmailSignUpPage';
import EmailAuthPage from './Pages/EmailAuthPage';
import EmailAuthSuccessPage from './Pages/EmailAuthSuccessPage';

import MyPage from './Pages/MyPage/MyPage';
import LoginPage from './Pages/LoginPage';
function App() {
    return (
        <>
            {/* 게시판 페이지 */}
            {/* <PostDetailPage></PostDetailPage> */}

            {/* 마이페이지 */}
            {/* <MyPage></MyPage> */}

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<PostListPage />} />

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
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;