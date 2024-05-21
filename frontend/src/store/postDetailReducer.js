import axios from 'axios';

// 액션 타입 정의
const GET_POST_DATA = 'detail/GET_POST_DATA';

// 액션 생성
export const getPostData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:4000/detail');
            const { authorPosts, categoryPosts } = response.data;
            dispatch({
                type: GET_POST_DATA,
                payload: {
                    authorPosts,
                    categoryPosts,
                },
            });
        } catch (error) {
            const categories = ['study', 'info', 'qa'];
            const authorPosts = [];
            const categoryPosts = [];
            for (let i = 0; i < 5; i++) {
                authorPosts.push({
                    id: i + 1,
                    title: `작성자 게시글 제목${i + 1}`,
                    content: `작성자 게시글 내용${i + 1}`,
                    category: categories[i % 3],
                });
                categoryPosts.push({
                    id: i + 1,
                    title: `최근 게시글 제목${i + 1}`,
                    content: `최근 게시글 내용${i + 1}`,
                    category: categories[i % 3],
                });
            }
            dispatch({
                type: GET_POST_DATA,
                payload: {
                    authorPosts,
                    categoryPosts,
                },
            });
        }
    };
};

// 초기 스테이트
const initialState = {
    authorPosts: [],
    categoryPosts: [],
};

// 리듀서
const postDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_DATA:
            return {
                ...state,
                authorPosts: action.payload.authorPosts,
                categoryPosts: action.payload.categoryPosts,
            };
        default:
            return state;
    }
};

export default postDetailReducer;
