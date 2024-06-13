import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../Components/Common/Logo";
import SearchButton from "../../Components/Common/SearchButton";
import LoggedIn from "../../Components/Common/LoggedIn";
import LoginButton from "../../Components/Common/LoginButton";
import MypageButton from "../../Components/Common/MypageButton";
import { loadUser, logout } from "../../store/action";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "./Spinner";

const HeaderContainer = ({ search = false, login = false, mypage = false }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const [loading, setLoading] = useState(true);
  const moveToLoginPage = () => {
    nav("/login");
  };

  const moveToMyPage = () => {
    nav("/myPage");
  };

  const moveToLogout = useCallback(async () => {
    await dispatch(logout());
    window.location.reload(); // 현재 페이지 새로고침
  }, [dispatch]);

  const Stdiv = {
    display: "flex",
    columnGap: "16px",
  };

  const Stnav = {
    display: "flex",
    padding: "0px 32px 0px 32px",
    height: "58px",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 50,
  };

  console.log("공통 헤더 콘솔로그");
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(loadUser());
      setLoading(false);
    };
    fetchData();
  }, [dispatch]);

  if (loading) {
    console.log("로딩 몇번 들어오냐");
    return <Spinner />;
  }

  return (
    <nav
      className="sticky shadow-[0px_-2px_20px_rgba(0,0,0,0.08)]"
      style={Stnav}
    >
      <Logo />
      <div style={Stdiv}>
        {search && <SearchButton />}
        {login &&
          (isAuthenticated ? (
            <LoggedIn onClick={moveToLogout} profile={user.profile} />
          ) : (
            <LoginButton onClick={moveToLoginPage} text="로그인" />
          ))}
        {mypage && <MypageButton onClick={moveToMyPage} />}
      </div>
    </nav>
  );
};

export default HeaderContainer;
