import axios from 'axios';

// 액션 타입 정의
const SELECT_CATEGORY = 'post/SELECT_CATEGORY';
const GET_POST_DATA = 'post/GET_POST_DATA';

// 액션 생성
export const selectCategory = (category) => ({
    type: SELECT_CATEGORY,
    payload: category,
});

export const getPostData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:4000/posts');

            dispatch({
                type: GET_POST_DATA,
                payload: response.data,
            });
        } catch (error) {
            console.error('Error fetching post data:', error);
            const postData = [
                { id: 1, title: '게시글 제목1', content: '게시글 내용1', category: 'study' },
                { id: 2, title: '게시글 제목2', content: '게시글 내용2', category: 'info' },
                { id: 3, title: '게시글 제목3', content: '게시글 내용3', category: 'qa' },
                { id: 4, title: '게시글 제목4', content: '게시글 내용4', category: 'study' },
            ];
            dispatch({
                type: GET_POST_DATA,
                payload: postData,
            });
        }
    };
};

// 초기 스테이트
const initialState = {
    category: '',
    postsData: [],
    filteredPosts: [],
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
            };
        default:
            return state;
    }
};

export default postListReducer;
