import { produce } from "immer";
import axios from "axios";

// action type 정의
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

// action 생성
export const savePostData = (postData, isEdit = false, files, postId, deleteFile) => {
  return async (dispatch) => {
    dispatch(postingData());
    try {
      const formData = new FormData();
      const existFile = [];
      const userId = 1;
      if (isEdit) {
        postData.BoardId = postId;
      }
      postData.UserId = userId;
      console.log(files);
      files.forEach((e, i) => {
        console.log(i, " e ::", e);
        if (e.id) {
          existFile.push(e);
        } else {
          formData.append("files", e);
        }
      });
      postData.files = existFile;
      postData.deleteFile = deleteFile
      formData.append("postData", JSON.stringify(postData));

      console.log("postData ::::: ", postData);
      console.log("formData ::::: ", formData);
      const response = isEdit
        ? await axios.put(`/board/updatePost/${postId}`, formData, {
            headers: "multipart/form-data",
          })
        : await axios.post("/board/createPost", formData, {
            headers: "multipart/form-data",
          });

      console.log("response.data :::::::::::::: ",response.data)
      dispatch(postingDataSuccess(response));
    } catch (error) {
      dispatch(postingDataFailure(error.message));
    }
  };
};

export const fetchPostData = (boardId) => {
  return async (dispatch) => {
    dispatch(loadPostData());
    const data = { boardId: boardId };
    try {
      const response = await axios.post(
        `http://localhost:4000/board/writeData`,
        data
      );
      console.log("response.data :: ", response.data);
      dispatch(loadPostDataSuccess(response.data));
    } catch (error) {
      dispatch(loadPostDataFail(error.message));
    }
  };
};

export const updateIsEdit = (isEdit, boardId) => ({
  type: UPDATE_IS_EDIT,
  payload: { isEdit, boardId },
});
export const deleteFileData = (files) => ({
  type: DELETE_FILE,
  payload: files,
});

export const updatePostData = (inputData) => {
  console.log("updatePostData called with:", inputData);
  return {
    type: UPDATE_INPUT_DATA,
    payload: inputData,
  };
};

export const updateFileData = (fileData) => {
  console.log("updateFileData called with:", fileData);
  return {
    type: UPDATE_FILE_DATA,
    payload: Array.isArray(fileData) ? fileData : [fileData],
  };
};

export const postingData = () => ({ type: POST_DATA });
export const postingDataSuccess = (data) => ({
  type: POST_DATA_SUCCESS,
  payload: data,
});
export const postingDataFailure = (error) => ({
  type: POST_DATA_FAIL,
  payload: error,
});
export const loadPostData = () => ({ type: LOAD_POST_DATA });
export const loadPostDataSuccess = (data) => ({
  type: LOAD_POST_DATA_SUCCESS,
  payload: data,
});
export const loadPostDataFail = (error) => ({
  type: LOAD_POST_DATA_FAIL,
  payload: error,
});

// 초기 스테이트
const initialState = {
  userId: "",
  boardId: "",
  inputData: {
    title: "타이틀",
    content: "본문",
    category: "",
    tag: [],
  },
  loading: false,
  error: null,
  postData: null,
  isEdit: null,
  file: [],
  deleteFile: [],
  updateState : false,
  status : ''
};

// 리듀서
const postWriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_DATA:
      return {
        ...state,
        loading: true,
        updateState : false
      };
    case UPDATE_INPUT_DATA:
      console.log("Reducer received payload:", action.payload);
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
        updateState : true,
        status : action.payload.status
      };
    case POST_DATA_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        updateState : false
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
