import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../Components/Common/Logo';
import SearchButton from '../../Components/Common/SearchButton';
import LoggedIn from '../../Components/Common/LoggedIn';
import LoginButton from '../../Components/Common/LoginButton';
import MypageButton from '../../Components/Common/MypageButton';

const HeaderContainer = ({ search, login, mypage }) => {
    const nav = useNavigate();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const moveToLoginPage = () => {
        nav('/login');
    };

    const moveToMyPage = () => {
        nav('/myPage');
    };

    const Stdiv = {
        display: 'flex',
        columnGap: '16px',
    };

    const Stnav = {
        display: 'flex',
        padding: '0px 32px 0px 32px',
        height: '58px',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 50,
    };

    return (
        <nav className="sticky shadow-[0px_-2px_20px_rgba(0,0,0,0.08)]" style={Stnav}>
            <Logo />
            <div style={Stdiv}>
                {search && <SearchButton />}
                {login && (isLoggedIn ? <LoggedIn /> : <LoginButton onClick={moveToLoginPage} />)}
                {mypage && <MypageButton onClick={moveToMyPage} />}
            </div>
        </nav>
    );
};

HeaderContainer.defaultProps = {
    search: false,
    login: false,
    mypage: false,
};

export default HeaderContainer;
