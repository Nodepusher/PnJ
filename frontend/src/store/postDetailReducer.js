import axios from 'axios';

// 액션 타입 정의
const GET_POST_DATA_REQUEST = 'detail/GET_POST_DATA_REQUEST';
const GET_POST_DATA_SUCCESS = 'detail/GET_POST_DATA_SUCCESS';
const GET_POST_DATA_FAILURE = 'detail/GET_POST_DATA_FAILURE';
const GET_POST_STATS_DATA = 'detail/GET_POST_STATS_DATA';
const SET_PAGE_STATE = 'detail/SET_PAGE_STATE';
const POST_ID_INPUT_DATA = 'detail/POST_ID_INPUT_DATA';

// 액션 생성
export const getPostData = (postId) => {
    return async (dispatch) => {
        dispatch({ type: GET_POST_DATA_REQUEST });
        try {
            const getPost = await axios.get(`board/detail/${postId}`); // 현재 게시판 정보와 작성한 user의 게시물
            const category = getPost.data.category;
            const latestPost = await axios.get(`board/latest?category=${category}`);
            
            const authorPosts = getPost.data.userPost;
            const post = getPost.data.postData;
            const categoryPosts = latestPost.data;
            dispatch({
                type: GET_POST_DATA_SUCCESS,
                payload: {
                    authorPosts,
                    categoryPosts,
                    post
                },
            });
        } catch (error) {
            console.error(error);
            dispatch({
                type: GET_POST_DATA_FAILURE,
                payload: error.message,
            });
        }
    };
};

export const getPostStatsData = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get('http://localhost:4000/detail');
            const { likes, comments, views } = response.data;
            dispatch({
                type: GET_POST_STATS_DATA,
                payload: {
                    likes,
                    commentCount: comments, // Here, we map comments to commentCount
                    views,
                },
            });
        } catch (error) {
            console.error(error);
            dispatch({
                type: GET_POST_STATS_DATA,
                payload: {
                    likes: 0,
                    commentCount: 0,
                    views: 0,
                },
            });
        }
    };
};

// 현재 포스트의 작성자가 작성한 게시글 중 이전 작성글 다음 작성글로 움직이는 로직 구현 필요
export const setPageState = (currentPostId) => {
    return (dispatch) => {
        const prevPostId = currentPostId - 1;
        const nextPostId = currentPostId + 1;

        dispatch({
            type: SET_PAGE_STATE,
            payload: {
                currentPostId,
                prevPostId,
                nextPostId,
            },
        });
    };
};

export const getPostId = (postId) => {
    return {
      type: POST_ID_INPUT_DATA,
      payload: postId,
    };
};

// 초기 스테이트
const initialState = {
    postId: "",
    postData: {
        authorPosts: [],
        categoryPosts: [],
        post: {}
    },
    postStats: {
        likes: 0,
        commentCount: 0,
        views: 0,
    },
    pageState: {
        currentPostId: null,
        prevPostId: null,
        nextPostId: null,
    },
    loading: false,
    error: null,
};

// 리듀서
const postDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_DATA_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GET_POST_DATA_SUCCESS:
            return {
                ...state,
                postData: {
                    ...state.postData,
                    authorPosts: action.payload.authorPosts,
                    categoryPosts: action.payload.categoryPosts,
                    post: action.payload.post
                },
                loading: false,
            };
        case GET_POST_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case GET_POST_STATS_DATA:
            return {
                ...state,
                postStats: {
                    ...state.postStats,
                    likes: action.payload.likes,
                    commentCount: action.payload.commentCount,
                    views: action.payload.views,
                },
            };
        case SET_PAGE_STATE:
            return {
                ...state,
                pageState: {
                    ...state.pageState,
                    currentPostId: action.payload.currentPostId,
                    prevPostId: action.payload.prevPostId,
                    nextPostId: action.payload.nextPostId,
                },
            };
        case POST_ID_INPUT_DATA:
            return {
                ...state,
                postId: action.payload,
            };
        default:
            return state;
    }
};

export default postDetailReducer;
