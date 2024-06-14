import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserProvider } from "../Context/UserContext";
import ToastMsg from "../utils/ToastMsg";

const tempStyle = {
  justifyContent: "center",
};

const LoginPage = () => {
  const [onTimer, setOnTimer] = useState(false);
  const [msg, setMsg] = useState("");
  const isAuthenticated =
    sessionStorage.getItem("isAuthenticated") === "true" ? true : false;

  useEffect(() => {
    if (isAuthenticated) {
      setOnTimer(true);
      setMsg("이미 로그인 되어있는 상태입니다.");
    }
  }, [isAuthenticated]);

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <UserProvider>
      <div className="flex h-full min-h-screen" style={tempStyle}>
        <div className="flex w-[100%] flex-col items-center py-[40px] lg:w-[55%] lg:py-[56px]">
          <Outlet />
        </div>
      </div>
      {onTimer && (
        <ToastMsg text={msg} onTimer={onTimer} setOnTimer={setOnTimer} />
      )}
    </UserProvider>
  );
};

export default LoginPage;
