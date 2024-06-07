import axios from 'axios';

// 액션 타입 정의
const GET_POST_DATA = 'detail/GET_POST_DATA';
const GET_POST_STATS_DATA = 'detail/GET_POST_STATS_DATA';
const SET_PAGE_STATE = 'detail/SET_PAGE_STATE';
const POSTIID_INPUT_DATA = 'detail/POSTIID_INPUT_DATA';

// 액션 생성
export const getPostData = (postId) => {
    console.log(postId)
    return async (dispatch) => {
        try {
            const response = await axios.get(`board/detail/${postId}`);
            const { authorPosts, categoryPosts } = response.data;
            dispatch({
                type: GET_POST_DATA,
                payload: {
                    authorPosts,
                    categoryPosts,
                },
            });
        } catch (error) {
            console.log(error)
            const categories = ['study', 'info', 'qna'];
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
            const likes = '좋아요 수 데이터';
            const commentCount = '댓글 수 데이터';
            const views = '조회 수 데이터';
            dispatch({
                type: GET_POST_STATS_DATA,
                payload: {
                    likes,
                    commentCount,
                    views,
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
    console.log('updatePostData called with:', postId);
    return {
      type: POSTIID_INPUT_DATA,
      payload: postId,
    };
  };


// 초기 스테이트
const initialState = {
    postId : "",
    postData: {
        authorPosts: [],
        categoryPosts: [],
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
};

// 리듀서
const postDetailReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_DATA:
            return {
                ...state,
                postData: {
                    authorPosts: action.payload.authorPosts,
                    categoryPosts: action.payload.categoryPosts,
                },
            };
        case GET_POST_STATS_DATA:
            return {
                ...state,
                postStats: {
                    likes: action.payload.likes,
                    commentCount: action.payload.commentCount, // Here, we use commentCount instead of comments
                    views: action.payload.views,
                },
            };
        case SET_PAGE_STATE:
            return {
                ...state,
                pageState: {
                    currentPostId: action.payload.currentPostId,
                    prevPostId: action.payload.prevPostId,
                    nextPostId: action.payload.nextPostId,
                },
            };
        case POSTIID_INPUT_DATA : {
            return {
                ...state,
                postId : action.payload,
            }
        }
        default:
            return state;
    }
};

export default postDetailReducer;
