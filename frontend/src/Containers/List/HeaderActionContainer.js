import React, { useState } from 'react';
import SearchButton from '../../Components/List/SearchButton';
import LoginButton from '../../Components/List/LoginButton';
import EditButton from '../../Components/List/EditButton';
import LoggedIn from '../../Components/List/LoggedIn';

const HeaderActionContainer = () => {
    // 로그인 상태값 추후 업데이트 필요 (프롭스 쓸건지, 컨텍스트 쓸건지, 리덕스 쓸건지)
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    // 로그인 상태값 추후 업데이트 필요 (위에 방법에 맞춰서 업데이트)
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const style = {
        display: 'flex',
        columnGap: '16px',
    };

    return (
        <div style={style}>
            <SearchButton></SearchButton>
            {isLoggedIn ? <LoggedIn></LoggedIn> : <LoginButton onClick={handleLogin}></LoginButton>}
            <EditButton></EditButton>
        </div>
    );
};

export default HeaderActionContainer;
