// src/components/PrivateRoute.js

import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Spinner from "../Containers/Common/Spinner";

const PrivateRoute = () => {
  const isAuthenticated =
    sessionStorage.getItem("isAuthenticated") === "true" ? true : false;
  const loading = false;
  console.log("프라이빗", isAuthenticated, loading);

  return loading ? (
    <Spinner />
  ) : isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
