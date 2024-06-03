import axios from "axios";

// action type 정의
const POSTING_DATA = 'post/POSTING_DATA';


// action 생성
export const savePostData = () => {
    return async() => {
        
    }

  };

// 초기 스테이트
const initialState = {
    userId : '',
    inputData : {
        title : '',
        content : '',
        category : '',
        tags : '',
        image : '',
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