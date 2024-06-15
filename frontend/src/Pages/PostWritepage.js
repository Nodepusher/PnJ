import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  savePostData,
  fetchPostData,
  updatePostData,
  updateIsEdit,
} from "../store/postWriteReducer";
import WriteHeaderContainer from "../Containers/Write/WriteHeaderContainer";
import WriteSectionContainer from "../Containers/Write/WriteSectionContainer";
import "../Components/MyPage/animation.css";
import styles from "../style/writePage.css";
const PostWritepage = ({ match }) => {
  // match : parameter 값을 가져옴
  const [isSaved, setIsSaved] = useState(false);
  const nav = useNavigate()
  let [query, setQuery] = useSearchParams();
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [animationClass, setAnimationClass] = useState("");
  const { inputData, loading, deleteFile, updateState } = useSelector(
    (state) => state.write
  );
  console.log(query.get("postId"));
  var postId = query.get("postId");
  var isEdit = postId ? true : false;
  useEffect(() => {
    dispatch(updateIsEdit(isEdit, postId));
    if (isEdit) {
      // 수정 게시물
      dispatch(fetchPostData(postId));
    } else {
      dispatch(
        updatePostData({
          // id: '',
          title: "타이틀",
          content: "본문",
          category: "",
          tags: [],
          isEdit: isEdit,
        })
      );
    }
  }, [dispatch, isEdit, postId]);

  const handleSubmit = () => {
    let markdownContent = editorRef.current?.getInstance().getMarkdown();
    let htmlContent = editorRef.current?.getInstance().getHTML();
    console.log("::::::::: ", inputData);
    console.log(markdownContent);
    console.log("================================================");
    console.log(htmlContent);
    const postData = {
      ...inputData,
      content: markdownContent,
    };
    console.log("submit file :::: ", deleteFile);

    dispatch(savePostData(postData, isEdit, selectedFiles, postId, deleteFile));
    setIsSaved(true);
  };
  useEffect(() => {
    dispatch(fetchPostData(postId));
    if (updateState) {
      setAnimationClass("fadeIn");
      setTimeout(() => {
        setAnimationClass("fadeOut");
        setTimeout(() => {
          setIsSaved(false);
        }, 200); // fadeOut 애니메이션이 끝난 후에 컴포넌트를 제거
      }, 2000); // 2초 후에 fadeOut 시작
    }else {
        
    }
  }, [updateState]);

  return (
    <>
      <WriteHeaderContainer handleSubmit={handleSubmit} />
      <WriteSectionContainer
        editorRef={editorRef}
        selectedFiles={selectedFiles}
        setSelectedFiles={setSelectedFiles}
        setIsSaved={setIsSaved}
        isSaved={isSaved}
      />
      {isSaved && (
        <SaveInfo animationClass={animationClass} updateState={updateState} />
      )}
    </>
  );
};
const SaveInfo = ({ animationClass, updateState }) => {
  return (
    
    <div
      className={`fixed flex flex-col surface_secondary_inverse
            bottom-[30px] left-[50%] z-50 box-border min-w-[358px] translate-x-[-50%] translate-y-[-50%] rounded-[8px] py-[16px] px-[20px] shadow-s ${animationClass}`}
    >
      <div className="content_primary_inverse font_label_bold_lg text-left">
        <div className="flex">
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[20px] w-[20px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.702 7.288a1 1 0 0 1 .01 1.414l-8.59 8.723-5.834-5.923a1 1 0 0 1 1.424-1.404l4.41 4.477 7.166-7.277a1 1 0 0 1 1.414-.01Z"
            ></path>
          </svg>
          <span className="ml-[6px]">
            {updateState ? "수정 성공" : "수정 실패"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(PostWritepage);
