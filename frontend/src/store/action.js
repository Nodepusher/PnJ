// src/store/actions.js
/**
 *  Thunk는 비동기 작업을 위함
 *  dispatch : authReducer로 보냄
 */

import { createAsyncThunk } from "@reduxjs/toolkit"; // 비동기 작업을 생성하는 Redux Toolkit 함수
// import api from "../utils/api";
// import { userLoaded, loginSuccess, authError } from "./authReducer";
import axios from "axios";

// 사용자 데이터를 로드하는 비동기 작업 (Thunk)
export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, { dispatch }) => {
    // 첫 번째 인자는 액션 타입 문자열
    // 두 번째 인자는 페이로드 생성자 함수이며, 여기서는 비동기 함수
    try {
      // '/auth/user' 엔드포인트로부터 사용자 데이터를 가져옵니다.
      // const res = await api.get("/auth/user");
      // 성공하면, 응답 데이터를 포함하여 userLoaded 액션을 디스패치
      // dispatch(userLoaded(res.data));
    } catch (err) {
      // 에러가 발생하면, authError 액션을 디스패치
      // dispatch(authError());
    }
  }
);

// 사용자 로그인을 처리하는 비동기 작업 (Thunk)
export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { dispatch }) => {
    // 페이로드는 이메일과 비밀번호를 포함하는 객체

    try {
      console.log("액션 들어왔는지");
      // '/auth/login' 엔드포인트로 POST 요청을 보내 로그인을 시도
      const res = await axios.post("http://localhost:4000/user/login", {
        email,
        password,
      });

      const { token, success } = res.data;
      return { token, success };

      // 성공하면, 응답 데이터를 포함하여 loginSuccess 액션을 디스패치

      // 사용자 데이터를 로드하기 위해 loadUser Thunk를 디스패치
      // dispatch(loadUser());
    } catch (err) {
      console.log(err);
      if (err.response.data.status === '"require_verify"') {
        console.log(
          "이메일 인증이 필요합니다. 아직 이메일 인증이 이루어지지 않았습니다."
        );
      }
      throw err;
      // 에러가 발생하면, authError 액션을 디스패치
      // dispatch(authError());
    }
  }
);
