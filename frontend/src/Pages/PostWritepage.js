import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  savePostData,
  fetchPostData,
  updatePostData,
  updateIsEdit,
  loadPostDataSuccess,
} from "../store/postWriteReducer";

import WriteHeaderContainer from "../Containers/Write/WriteHeaderContainer";
import WriteSectionContainer from "../Containers/Write/WriteSectionContainer";
import "../Components/MyPage/animation.css";
import HeaderContainer from '../Containers/Common/HeaderContainer';
import styles from "../style/writePage.css";
import Thumbnail from "../Components/Write/Thumbnail";
const PostWritepage = ({ match }) => {
  // match : parameter 값을 가져옴
  const [isSaved, setIsSaved] = useState(false);
  const nav = useNavigate();
  let [query, setQuery] = useSearchParams();
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [animationClass, setAnimationClass] = useState("");
  const [saveTrigger, setSaveTrigger] = useState(false);
  // 썸네일 모달 창 위한 스테이트
  const [onThumbModal, setOnThumbModal] = useState(false);
  const [thumbFile, setThumbFile] = useState(null);

  const {
    inputData,
    deleteFile,
    updateState,
    writeState,
  } = useSelector((state) => state.write);
  var postId = query.get("postId");
  var isEdit = postId ? true : false;

  useEffect(() => {
    dispatch(updateIsEdit(isEdit, postId));
    const savedPost = sessionStorage.getItem("savedPost");

    if (isEdit) {
      // 수정 게시물
      dispatch(fetchPostData(postId));
    } else if (savedPost) {
      // 세션스토리지에 임시저장 데이터가 있다면
      const { title, content, category, tag, files } = JSON.parse(savedPost);
      const data = {
        boardData: {
          title: title,
          content: content,
          category: category,
          tag: tag,
        },
        files: files,
      };
      dispatch(loadPostDataSuccess(data));
    } else {
      dispatch(
        updatePostData({
          // id: '',
          title: "",
          content: "본문",
          category: "",
          tag: [],
          isEdit: isEdit,
        })
      );
    }
  }, []);
  // 모달 show/hide
  const showThumbModal = () => {
    setOnThumbModal(true);
  };
  const hideThumbModal = () => {
    setOnThumbModal(false);
  };
  // 임시저장 이벤트
  const savedPost = () => {
    sessionStorage.setItem(
      "savedPost",
      JSON.stringify({
        ...inputData,
        files: Array(0),
      })
    );
  };
  // 게시 이벤트
  const handleSubmit = (e) => {
    e.preventDefault();
    let markdownContent = editorRef.current?.getInstance().getMarkdown();
    const { title, content, category } = inputData;
    if (!title || !content || !category) {
      alert("필수 필드를 입력해 주세요.");
      return;
    }

    const postData = {
      ...inputData,
      content: markdownContent,
    };

    dispatch(
      savePostData(
        postData,
        thumbFile,
        isEdit,
        selectedFiles,
        postId,
        deleteFile
      )
    );
    setSaveTrigger(true);
    if (!saveTrigger) {
      window.location.href = "/";
    }
  };

  useEffect(() => {
    dispatch(fetchPostData(postId));

    // if (saveTrigger) {
    //   setIsSaved(true);
    //   setAnimationClass("fadeIn");
    //   setTimeout(() => {
    //     setAnimationClass("fadeOut");
    //     setTimeout(() => {
    //       setIsSaved(false);
    //       setSaveTrigger(false);
    //       setOnThumbModal(false);
    //     }, 200);
    //   }, 2000); 
    // }
  }, [updateState, saveTrigger]);

  return (
    <>
      <HeaderContainer search={true} login={true} mypage={true} />
      <WriteHeaderContainer
        showThumbModal={showThumbModal}
        savedPost={savedPost}
      />
      
      <WriteSectionContainer
        editorRef={editorRef}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        setIsSaved={setIsSaved}
        isSaved={isSaved}
      />
      {onThumbModal && (
        <Thumbnail
          hideThumbModal={hideThumbModal}
          handleSubmit={handleSubmit}
          setThumbFile={setThumbFile}
        />
      )}
      {/* {isSaved && (
        <SaveInfo
          animationClass={animationClass}
          updateState={updateState}
          writeState={writeState}
        />
      )} */}
    </>
  );
};
// const SaveInfo = ({ animationClass, writeState }) => {
//   return (
//     <div
//       className={`fixed flex flex-col surface_secondary_inverse
//             bottom-[30px] left-[50%] z-50 box-border min-w-[358px] translate-x-[-50%] translate-y-[-50%] rounded-[8px] py-[16px] px-[20px] shadow-s ${animationClass}`}
//     >
//       <div className="content_primary_inverse font_label_bold_lg text-left">
//         <div className="flex">
//           <svg
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-[20px] w-[20px]"
//           >
//             <path
//               fillRule="evenodd"
//               clipRule="evenodd"
//               d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
//             ></path>
//           </svg>
//           <span className="ml-[6px]">{writeState ? "성공" : "실패"}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

export default React.memo(PostWritepage);
