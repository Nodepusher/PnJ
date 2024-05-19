// src/utils/api.js

// Axios 라이브러리를 임포트합니다.
import axios from 'axios';
// Redux 스토어를 임포트합니다. 이 스토어는 인증 토큰을 포함한 애플리케이션 상태를 관리합니다.
import store from '../store'; // index.js가 기본 파일로 인식되어 경로에 index를 명시하지 않아도 됩니다.

// Axios 인스턴스를 생성합니다. 이 인스턴스는 API 요청을 보낼 때 사용됩니다.
const api = axios.create({
  // 서버의 기본 URL을 설정합니다. 모든 요청은 이 URL을 기반으로 합니다.
  baseURL: '/api',
});

// 요청 인터셉터를 설정하여 모든 요청에 JWT 토큰을 포함시킵니다.
api.interceptors.request.use(
  config => {
    // 현재 Redux 스토어의 상태를 가져옵니다.
    const state = store.getState();
    // 상태에서 JWT 토큰을 가져옵니다.
    const token = state.auth.token;
    // 토큰이 존재하면 요청 헤더에 Authorization 헤더를 추가합니다.
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    // 수정된 설정을 반환하여 요청이 진행되도록 합니다.
    return config;
  },
  // 요청 에러가 발생하면 에러를 그대로 반환합니다.
  error => Promise.reject(error)
);

// 설정된 Axios 인스턴스를 기본으로 내보냅니다. 다른 모듈에서 이 인스턴스를 사용하여 API 요청을 보낼 수 있습니다.
export default api;
