import axios from "axios";

// action type 정의
const POSTING_DATA = 'post/POSTING_DATA';
const UPDATE_INPUT_DATA = 'post/UPDATE_INPUT_DATA';


// action 생성
// 1. 서버와 통신
export const savePostData = () => {
    return async() => {
        
    }

  };
// 2. update post data
export const updatePostData = (inputData) => ({
  type : UPDATE_INPUT_DATA,
  payload : inputData,
})

// 초기 스테이트
const initialState = {
    userId : '',
    inputData : {
        title : '',
        content : '',
        category : '',
        tags : '',
        // image : '',
        file : ''
    }
  };

//

// 리듀서
const postWriteReducer = (state = initialState, action) => {
    switch (action.type) { 
      case POSTING_DATA:
      default:
        return state;
    }
  };

export default postWriteReducer;