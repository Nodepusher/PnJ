import axios from "axios";

// 액션 타입 정의
const GET_POST_DATA_REQUEST = "detail/GET_POST_DATA_REQUEST";
const GET_POST_DATA_SUCCESS = "detail/GET_POST_DATA_SUCCESS";
const GET_POST_DATA_FAILURE = "detail/GET_POST_DATA_FAILURE";
const GET_POST_STATS_DATA = "detail/GET_POST_STATS_DATA";
const SET_PAGE_STATE = "detail/SET_PAGE_STATE";
const POST_ID_INPUT_DATA = "detail/POST_ID_INPUT_DATA";
const COMMENT_ID_INPUT_DATA = "detail/COMMENT_ID_INPUT_DATA";
const GET_POST_STATS_DATA_REQUEST = "detail/GET_POST_STATS_DATA_REQUEST";

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
      post.Files = getPost.data.Files;
      console.log(":::::", post);
      const categoryPosts = latestPost.data;
      dispatch({
        type: GET_POST_DATA_SUCCESS,
        payload: {
          authorPosts,
          categoryPosts,
          post,
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

export const getPostStatsData = (postId) => {
  return async (dispatch) => {
    dispatch({ type: GET_POST_STATS_DATA_REQUEST });
    try {
      const response = await axios.get(`/board/comment/${postId}`);
      dispatch({
        type: GET_POST_STATS_DATA,
        payload: {
          comments: response.data,
        },
      });
    } catch (error) {
      console.error(error);
      dispatch({
        type: GET_POST_STATS_DATA,
        payload: {
          comments: [],
        },
      });
    }
  };
};

// 댓글 생성 함수
export const createComment = (boardId, content) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/board/createComment", {
        BoardId: boardId,
        content: content,
      });
      dispatch(getPostStatsData(boardId)); // 댓글 작성 후 댓글 목록 업데이트
      //   dispatch(getPostData(boardId));
    } catch (error) {
      console.log(error.message);
    }
  };
};

// 답글 생성 함수
export const createReply = (boardId, content, commentId) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("/board/createReply", {
        BoardId: boardId,
        content: content,
        CommentId: commentId,
      });
      dispatch(getPostStatsData(boardId)); // 답글 작성 후 댓글 목록 업데이트
      //   dispatch(getPostData(boardId));
    } catch (error) {
      console.log(error.message);
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
export const getCommentId = (commentId) => {
  return {
    type: COMMENT_ID_INPUT_DATA,
    payload: commentId,
  };
};
const initialState = {
  postId: "",
  commentId: "",
  postData: {
    authorPosts: [],
    categoryPosts: [],
    post: {},
  },
  postStats: {
    comments: [],
  },
  pageState: {
    currentPostId: null,
    prevPostId: null,
    nextPostId: null,
  },
  loading: false,
  error: null,
  statsLoading: false, // 댓글 및 답글 로딩 상태
};

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
          post: action.payload.post,
        },
        loading: false,
      };
    case GET_POST_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case GET_POST_STATS_DATA_REQUEST:
      return {
        ...state,
        statsLoading: true,
        error: null,
      };
    case GET_POST_STATS_DATA:
      return {
        ...state,
        postStats: {
          comments: action.payload.comments,
        },
        statsLoading: false, // 로딩 상태 업데이트
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
        commentId: action.payload,
      };
    case COMMENT_ID_INPUT_DATA:
      return {
        ...state,
        commentId: action.payload,
      };
    default:
      return state;
  }
};

export default postDetailReducer;
