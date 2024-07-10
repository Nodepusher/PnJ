import axios from "axios";

// 액션 타입 정의
const SELECT_CATEGORY = "post/SELECT_CATEGORY";
const GET_POST_DATA = "post/GET_POST_DATA";
const APPEND_POST_DATA = "post/APPEND_POST_DATA";
const START_LOADING = "post/START_LOADING";
const FINISH_LOADING = "post/FINISH_LOADING";

// 액션 생성자
export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: category,
});

export const startLoading = () => ({
  type: START_LOADING,
});

export const finishLoading = () => ({
  type: FINISH_LOADING,
});

// 서버에서 포스트 데이터를 가져오는 액션 생성자
export const getPostData = (category, page = 1, dropdownState = "최신순") => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      const response = await axios.post("http://localhost:4000/board/list", {
        dropdownState,
        category,
        page,
        limit: 8,
      });
      dispatch({
        type: page === 1 ? GET_POST_DATA : APPEND_POST_DATA,
        payload: response.data,
      });
    } catch (error) {
      // 에러가 발생할 경우 더미 데이터를 사용
      const categories = ["all", "study", "info", "qna"];
      const postData = [];
      for (let i = 0; i < 50; i++) {
        postData.push({
          id: Date.now() + i, // 현재 시간을 기반으로 고유한 ID 생성
          title: `데이터를 가져올 수 없습니다. ::: ${i + 1}`,
          content: `데이터를 가져올 수 없습니다. :::: ${i + 1}`,
          category: categories[i % categories.length],
          User : {
            id : i + 1,
            name: `User ${i + 1}`
          }
        });
      }
      dispatch({
        type: GET_POST_DATA,
        payload: postData,
      });
    } finally {
      dispatch(finishLoading());
    }
  };
};

// 초기 상태
const initialState = {
  category: "",
  postsData: [],
  filteredPosts: [],
  hasMore: true,
  loading: false,
};

// 리듀서
const postListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      // 선택된 카테고리에 따라 포스트 필터링
      const filteredPosts = action.payload
        ? state.postsData.filter((post) => post.category === action.payload)
        : state.postsData;
      return {
        ...state,
        category: action.payload,
        filteredPosts: filteredPosts,
      };
    case GET_POST_DATA:
      return {
        ...state,
        postsData: action.payload,
        filteredPosts: action.payload,
        hasMore: action.payload.length >= 8,
      };
    case APPEND_POST_DATA:
      return {
        ...state,
        postsData: [...state.postsData, ...action.payload],
        filteredPosts: [...state.postsData, ...action.payload],
        hasMore: action.payload.length >= 8,
      };
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default postListReducer;
