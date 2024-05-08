/**
 *  Context 연습용 임시로 만듬
 *  LoginPhoneVerifyContainer에서 입력한 휴대폰번호를 회원가입페이지(EmailSignUpContainer)에서 사용하기 위함
 */
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    phoneNumber: '',
    email: '',
    username: ''
  });

  const updateUserInfo = (key, value) => {
    setUser(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const deleteUserInfo = (key) => {
    setUser(prev => ({
      ...prev,
      [key]: ''
    }));
  };

  return (
    <UserContext.Provider value={{ user, updateUserInfo, deleteUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};