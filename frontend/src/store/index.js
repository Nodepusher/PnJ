// src/store/index.js
// configureStore는 Redux 스토어를 설정
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; 
// 인증 상태를 관리할 리듀서를 임포트
import authReducer from './authReducer';
import postListReducer from './postListReducer';
import postDetailReducer from './postDetailReducer';
import postWriteReducer from './postWriteReducer';
// configureStore 함수를 사용하여 Redux 스토어를 생성
const store = configureStore({
    // Redux DevTools를 자동으로 설정
    // 리듀서 설정 객체 전달
    // 여러 리듀서를 사용할 경우, 객체 형태로 전달하여 리듀서를 결합
    reducer: {
        // 'auth'라는 키를 사용하여 authReducer를 등록
        // 'auth' 상태가 authReducer에 의해 관리
        auth: authReducer,
        postList: postListReducer,
        detail: postDetailReducer,
        write : postWriteReducer
    },
    // 미들웨어 설정
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// 애플리케이션의 다른 부분에서 이 스토어를 사용
export default store;
