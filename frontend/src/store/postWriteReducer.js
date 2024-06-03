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

// action 생성
// 1. 서버와 통신
export const savePostData = (postData, isEdit = false) => {
  return async (dispatch) => {
    dispatch(postingData())
    try {
      console.log(postData)
      const response = isEdit ? 
        await axios.put(`/board/${postData.id}`, postData) : 
        await axios.post("/board/write", postData);
        dispatch(postingDataSuccess(response.data));
    } catch (error) {
        dispatch(postingDataFailure(error.message))
    }
  };
};
export const fetchPostData = (postId) => {
  return async (dispatch) => {
      dispatch(loadPostData());
      try {
          const response = await axios.get(`/board/${postId}`);
          dispatch(loadPostDataSuccess(response.data));
      } catch (error) {
          dispatch(loadPostDataFail(error.message));
      }
  };
};


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
    title: "",
    content: "",
    category: "",
    // image : '',
    file: "",
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
            error: null
        };
    case LOAD_POST_DATA_SUCCESS:
        return {
            ...state,
            loading: false,
            inputData: action.payload
        };
    case LOAD_POST_DATA_FAIL:
        return {
            ...state,
            loading: false,
            error: action.payload
        };
    default:
      return state;
  }
};

export default postWriteReducer;
