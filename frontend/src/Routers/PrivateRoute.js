// src/components/PrivateRoute.js

import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
//   const { isAuthenticated, loading } = useSelector(state => state.auth);
  let { isAuthenticated, loading } = useSelector(state => state.auth);
  // 임시 
  isAuthenticated = true;
  loading = false;

  if (loading) {
    return <div>Loading...</div>;
  }
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
