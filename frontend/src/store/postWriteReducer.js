/***
 * @actionType
 *  UPDATE_INPUT_DATA : 게시물에 담을 값
 *  POST_DATA : Submit 했을 때 전달되는 게시물 값
 *
 */

import axios from "axios";

// action type 정의
// 작성 시
const POST_DATA = "post/POST_DATA";
const UPDATE_INPUT_DATA = "post/UPDATE_INPUT_DATA";
const POST_DATA_SUCCESS = "post/POST_DATA_SUCCESS";
const POST_DATA_FAIL = "post/POST_DATA_FAIL";

// 수정 시
const LOAD_POST_DATA = "post/LOAD_POST_DATA";
const LOAD_POST_DATA_SUCCESS = "post/LOAD_POST_DATA_SUCCESS";
const LOAD_POST_DATA_FAIL = "post/LOAD_POST_DATA_FAIL";
const UPDATE_IS_EDIT = "post/UPDATE_IS_EDIT"; // 추가

// action 생성
// 1. 서버와 통신
export const savePostData = (postData, isEdit = false, files) => {
  return async (dispatch) => {
    dispatch(postingData())
    try {
      const formData = new FormData();
      const userId = 1;
      postData.UserId = userId;
      files.map(e => formData.append('files', e))
      // formData.append('postData', postData)
      formData.append('postData', JSON.stringify(postData))
      // formData.append('userId', userId) 
      console.log("postData ::::: ",postData)
      console.log("formData ::::: ", formData)
      const response = isEdit ? 
        await axios.put(`/board/${postData.id}`, postData) : 
        await axios.post("/board/createPost", formData, {headers : 'multipart/form-data'});
      dispatch(postingDataSuccess(response.data));
    } catch (error) {
      dispatch(postingDataFailure(error.message))
    }
  };
};
export const fetchPostData = (boardId) => {
  return async (dispatch) => {
      dispatch(loadPostData());
      let data = {boardId : boardId}
      try {
        const response = await axios.post(`http://localhost:4000/board/writeData`,data);
          // const response = await axios.get(`/board/update/${postId}`);
          console.log(response.data);
          dispatch(loadPostDataSuccess(response.data));
      } catch (error) {
          dispatch(loadPostDataFail(error.message));
      }
  };
};
export const updateIsEdit = (isEdit) => ({
  type: UPDATE_IS_EDIT,
  payload: isEdit,
});


// 2. update post data
export const updatePostData = (inputData) => {
  console.log('updatePostData called with:', inputData);
  return {
    type: UPDATE_INPUT_DATA,
    payload: inputData,
  };
};

// 3. posting data
export const postingData = () => ({ type: POST_DATA });
// 4. success
export const postingDataSuccess = (data) => ({
  type: POST_DATA_SUCCESS,
  payload: data,
});
// 5. fail
export const postingDataFailure = (error) => ({
  type: POST_DATA_FAIL,
  payload: error,
});
// 6. load post data
export const loadPostData = () => ({ type: LOAD_POST_DATA });
// 7. load post data success
export const loadPostDataSuccess = (data) => ({
  type: LOAD_POST_DATA_SUCCESS,
  payload: data,
});
// 8. load post data failure
export const loadPostDataFail = (error) => ({
  type: LOAD_POST_DATA_FAIL,
  payload: error,
});

// 초기 스테이트
const initialState = {
  userId: "",
  inputData: {
    title: "타이틀",
    content: "본문",
    category: "",
    // image : '',
    tag:[]
  },
  loading: false,
  error: null,
  postData: null,
  isEdit: null,
};

//
// 리듀서
const postWriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_INPUT_DATA:
      console.log('Reducer received payload:', action.payload);
      return {
        ...state,
        inputData: {
          ...state.inputData,
          ...action.payload,
        },
      };
    case UPDATE_IS_EDIT: // 추가
      return {
        ...state,
        isEdit: action.payload,
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        postData: action.payload,
      };
    case POST_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case LOAD_POST_DATA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        inputData: {
          title: action.payload.title,
          content: action.payload.content,
          category: action.payload.category,
          tag: action.payload.tag,
        },
      };
    case LOAD_POST_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postWriteReducer;
