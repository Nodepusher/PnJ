import { produce } from "immer";
import axios from "axios";

// 액션 타입 정의
const POST_DATA = "post/POST_DATA";
const UPDATE_INPUT_DATA = "post/UPDATE_INPUT_DATA";
const UPDATE_FILE_DATA = "post/UPDATE_FILE_DATA";
const POST_DATA_SUCCESS = "post/POST_DATA_SUCCESS";
const POST_DATA_FAIL = "post/POST_DATA_FAIL";
const LOAD_POST_DATA = "post/LOAD_POST_DATA";
const LOAD_POST_DATA_SUCCESS = "post/LOAD_POST_DATA_SUCCESS";
const LOAD_POST_DATA_FAIL = "post/LOAD_POST_DATA_FAIL";
const UPDATE_IS_EDIT = "post/UPDATE_IS_EDIT";
const DELETE_FILE = "post/DELETE_FILE";
const WRITE_STATE = "post/WRITE_STATE";
const UPDATE_STATE = "post/UPDATE_STATE";

// 액션 생성 함수

// 게시물 데이터를 저장 또는 업데이트
export const savePostData = (
  postData,
  thumbFile,
  isEdit = false,
  files,
  postId,
  deleteFile
) => {
  return async (dispatch) => {
    dispatch(postingData());
    dispatch(updateState());
    try {
      const formData = new FormData();
      const existFile = [];
      const userId = 1;
      
      if (isEdit) {
        postData.BoardId = postId;
      }
      if (thumbFile) {
        formData.append("thumbnail", thumbFile);
      }
      postData.UserId = userId;
      
      files.forEach((e) => {
        if (e.id) {
          existFile.push(e);
        } else {
          formData.append("files", e);
        }
      });
      
      postData.files = existFile;
      postData.deleteFile = deleteFile;
      formData.append("postData", JSON.stringify(postData));

      const response = isEdit
        ? await axios.put(`/board/updatePost/${postId}`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
        : await axios.post("/board/createPost", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });

      dispatch(writeState(true));
      dispatch(postingDataSuccess(response));
    } catch (error) {
      dispatch(writeState(false));
      dispatch(postingDataFailure(error.message));
    }
  };
};

// 게시물 데이터를 가져오기 (수정을 위해)
export const fetchPostData = (boardId) => {
  return async (dispatch) => {
    dispatch(loadPostData());
    const data = { boardId: boardId };
    try {
      const response = await axios.post(
        `http://localhost:4000/board/writeData`,
        data
      );
      dispatch(loadPostDataSuccess(response.data));
    } catch (error) {
      dispatch(loadPostDataFail(error.message));
    }
  };
};

// 수정 상태와 게시물 ID 업데이트
export const updateIsEdit = (isEdit, boardId) => ({
  type: UPDATE_IS_EDIT,
  payload: { isEdit, boardId },
});

// 파일 데이터 삭제
export const deleteFileData = (files) => ({
  type: DELETE_FILE,
  payload: files,
});

// 입력 데이터 업데이트
export const updatePostData = (inputData) => ({
  type: UPDATE_INPUT_DATA,
  payload: inputData,
});

// 파일 데이터 업데이트
export const updateFileData = (fileData) => {
  console.log("updateFileData called with:", fileData);
  return {
    type: UPDATE_FILE_DATA,
    payload: Array.isArray(fileData) ? fileData : [fileData],
  };
};

// 게시물 데이터를 포스팅하는 액션
export const postingData = () => ({ type: POST_DATA });
export const writeState = (state) => ({ type: WRITE_STATE, payload: state });
export const updateState = () => ({ type: UPDATE_STATE });
export const postingDataSuccess = (data) => ({
  type: POST_DATA_SUCCESS,
  payload: data,
});
export const postingDataFailure = (error) => ({
  type: POST_DATA_FAIL,
  payload: error,
});

// 게시물 데이터를 로드하는 액션
export const loadPostData = () => ({ type: LOAD_POST_DATA });
export const loadPostDataSuccess = (data) => ({
  type: LOAD_POST_DATA_SUCCESS,
  payload: data,
});
export const loadPostDataFail = (error) => ({
  type: LOAD_POST_DATA_FAIL,
  payload: error,
});

// 초기 상태 정의
const initialState = {
  userId: "",
  boardId: "",
  inputData: {
    title: "",
    content: "",
    category: "",
    tag: [],
  },
  loading: false,
  updateState: false,
  writeState: "",
  error: null,
  postData: null,
  isEdit: null,
  file: [],
  deleteFile: [],
  status: "",
  saveCompleted: false,
};

// 리듀서 함수
const postWriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case WRITE_STATE:
      return {
        ...state,
        writeState: action.payload,
      };
    case UPDATE_STATE:
      return {
        ...state,
        updateState: false,
      };
    case POST_DATA:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_INPUT_DATA:
      return {
        ...state,
        inputData: {
          ...state.inputData,
          ...action.payload,
        },
      };
    case UPDATE_FILE_DATA:
      return produce(state, (draft) => {
        const fileSet = new Set(draft.file.concat(action.payload));
        draft.file = Array.from(fileSet);
      });
    case DELETE_FILE:
      return produce(state, (draft) => {
        const fileSet = new Set(draft.deleteFile.concat(action.payload));
        draft.deleteFile = Array.from(fileSet);
      });
    case UPDATE_IS_EDIT:
      return {
        ...state,
        isEdit: action.payload.isEdit,
        boardId: action.payload.boardId,
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        updateState: true,
        status: action.payload.status,
      };
    case POST_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        updateState: false,
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
          title: action.payload.boardData.title,
          content: action.payload.boardData.content,
          category: action.payload.boardData.category,
          tag: action.payload.boardData.tag,
        },
        file: action.payload.files,
        saveCompleted: true,
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
