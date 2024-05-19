/**
 * action.js 디스패치로 부터 받음
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : null,
    isAuthenticated : false,
    loading: true,
    user: null
}

// 슬라이스는 리듀서와 액션 크리에이터를 포함하는 단위
const authSlice = createSlice({
    // 슬라이스의 이름을 정의
    name: 'auth',
    // 초기 상태를 설정
    initialState,
    // 리듀서 함수를 정의
    reducers: {
        // // 사용자 정보가 로드되면 인증 상태와 로딩 상태를 업데이트
        userLoaded: (state, action) => {
            state.isAuthenticated = true;
            state.loading = false;
            state.user = action.payload;
        },
        // 로그인 성공 시 토큰을 저장하고 인증 상태와 로딩 상태를 업데이트
        loginSuccess: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            state.loading = false;
        },
        // 인증 에러 시 토큰과 사용자 정보를 초기화하고 인증 상태를 업데이트
        authError : state => {
            state.token = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.user = null;
        },
        // 로그아웃 시 토큰과 사용자 정보를 초기화하고 인증 상태를 업데이트
        logout: state => {
            state.token = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.user = null;
        }
    }
});
// 각 액션 크리에이터는 해당 리듀서를 트리거
export const { userLoaded, loginSuccess, authError, logout } = authSlice.actions;

export default authSlice.reducer;