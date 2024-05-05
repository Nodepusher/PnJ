import React from "react";
import { Outlet } from "react-router-dom";
const tempStyle = {
  justifyContent: "center",
}
const LoginPage = () => {
  return (
    <>
      <div class="flex h-full min-h-screen" style={tempStyle}>
        <div class="flex w-[100%] flex-col items-center py-[40px] lg:w-[55%] lg:py-[56px]">
            <Outlet />
        </div>
      </div>
    </>
  );
};
export default LoginPage;
