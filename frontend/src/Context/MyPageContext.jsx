import React, { createContext, useContext, useState } from 'react';

const MyPageContext = createContext();

export const usePage = () => useContext(MyPageContext);

export const PageProvider = ({ children }) => {
  const [page, setPage] = useState({
    myPost: true,
    myInfo : false,
  });

  const updatePageInfo = (key, value) => {
    setPage(prev => ({
      ...prev,
      [key]: value
    }));
  };


  return (
    <MyPageContext.Provider value={{ page, updatePageInfo}}>
      {children}
    </MyPageContext.Provider>
  );
};