import React from "react";
import { Outlet } from "react-router-dom";
import { UserProvider } from "../Context/UserContext";

const tempStyle = {
  justifyContent: "center",
};

const LoginPage = () => {
  return (
    <UserProvider> 
      <div className="flex h-full min-h-screen" style={tempStyle}>
        <div className="flex w-[100%] flex-col items-center py-[40px] lg:w-[55%] lg:py-[56px]">
          <Outlet /> 
        </div>
      </div>
    </UserProvider>
  );
};

export default LoginPage;
