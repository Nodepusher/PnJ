import React, { useState } from 'react';
import SearchButton from '../../Components/List/SearchButton';
import LoginButton from '../../Components/List/LoginButton';
import EditButton from '../../Components/List/EditButton';
import LoggedIn from '../../Components/List/LoggedIn';
import { useNavigate } from 'react-router-dom';

const HeaderActionContainer = () => {
    const nav = useNavigate();
    // 로그인 상태값 추후 업데이트 필요 (프롭스 쓸건지, 컨텍스트 쓸건지, 리덕스 쓸건지)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 로그인 상태값 추후 업데이트 필요 (위에 방법에 맞춰서 업데이트)
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const moveToLoginPage = () => {
        nav('/login');
    };

    const style = {
        display: 'flex',
        columnGap: '16px',
    };

    return (
        <div style={style}>
            <SearchButton></SearchButton>
            {isLoggedIn ? <LoggedIn /> : <LoginButton onClick={moveToLoginPage} />}
            <EditButton></EditButton>
        </div>
    );
};

export default HeaderActionContainer;
