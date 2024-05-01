import './App.css';
import PostListPage from './Pages/PostListPage';
import PostDetailPage from './Pages/PostDetailPage';
import LoginPage from './Pages/LoginMainPage';
import LoginPhoneVerifyPage from './Pages/LoginPhoneVerifyPage';
import EmailLgoinPage from './Pages/EmailLoginPage';
import InputVerifyNumberPage from './Pages/InputVerifyNumberPage';
import ExistingAccountPage from './Pages/ExistingAccountPage';
import EmailSignUpPage from './Pages/EmailSignUpPage';
import EmailAuthPage from './Pages/EmailAuthPage';
import EmailAuthSuccessPage from './Pages/EmailAuthSuccessPage';
import MyPage from './Pages/MyPage/MyPage';
function App() {
    return (
        <>
            {/* 게시판 페이지 */}
            {/* <PostDetailPage></PostDetailPage> */}

            {/* 로그인/회원가입 페이지 */}
            {/* <LoginPage></LoginPage> */}
            {/* <EmailLgoinPage></EmailLgoinPage> */}
            {/* <LoginPhoneVerifyPage></LoginPhoneVerifyPage> */}
            {/* <InputVerifyNumberPage /> */}
            {/* <ExistingAccountPage></ExistingAccountPage> */}
            {/* <EmailSignUpPage></EmailSignUpPage> */}
            {/* <EmailAuthPage></EmailAuthPage> */}
            {/* <EmailAuthSuccessPage></EmailAuthSuccessPage> */}
            <MyPage></MyPage>
        </>
    );
}

export default App;
