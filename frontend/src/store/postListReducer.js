import axios from "axios";

// 액션 타입 정의
const SELECT_CATEGORY = "post/SELECT_CATEGORY";
const GET_POST_DATA = "post/GET_POST_DATA";
const APPEND_POST_DATA = "post/APPEND_POST_DATA";

// 액션 생성
export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  payload: category,
});

export const getPostData = (category, page = 1, dropdownState = "최신순") => {
  return async (dispatch) => {
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
      const categories = ["all", "study", "info", "qna"];
      const postData = [];
      for (let i = 0; i < 50; i++) {
        postData.push({
          id: i + 1,
          title: `게시글 제목${i + 1}`,
          content: `게시글 내용${i + 1}`,
          category: categories[i % 3],
        });
      }
      dispatch({
        type: GET_POST_DATA,
        payload: postData,
      });
    }
  };
};

// 초기 스테이트
const initialState = {
  category: "",
  postsData: [],
  filteredPosts: [],
  hasMore: true,
};

// 리듀서
const postListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const filteredPosts =
        action.payload === undefined
          ? state.postsData
          : state.postsData.filter((post) => post.category === action.payload);
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
        hasMore: action.payload.length >= 8,
      };
    default:
      return state;
  }
};

export default postListReducer;
