import React, { useEffect, useState } from "react";
import WriteEditorContainer from "./WriteEditorContainer";
import WriteAsideContainer from "./WriteAsideContainer";
import WriteInputFileModal from "../../Components/Write/WriteInputFileModal";
import { useSelector } from "react-redux";
import Spinner from "../Common/Spinner";
import "../MyPage/animation.css";
const WriteSectionContainer = ({
  editorRef,
  selectedFiles,
  setSelectedFiles,
  setIsSaved,
  isSaved
}) => {
const { updateState } = useSelector(state => state.write);
  
//   const [animationClass, setAnimationClass] = useState("");
  const [modalOn, setModalOn] = useState(false);
  const state = useSelector((state) => state.write);
  console.log(state.file);
  const loading = useSelector((state) => state.write.loading);
  const error = useSelector((state) => state.write.error);
//   useEffect(() => {
//     if (updateState !== undefined) {
//       setIsSaved(true);
//       setAnimationClass("fadeIn");
//       setTimeout(() => {
//         setAnimationClass("fadeOut");
//         setTimeout(() => {
//           setIsSaved(false);
//         }, 200); // fadeOut 애니메이션이 끝난 후에 컴포넌트를 제거
//       }, 2000); // 2초 후에 fadeOut 시작
//     }
//   }, [updateState]);

  if (loading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }
  
    // setIsSaved(true);
    // setAnimationClass("fadeIn");
    // setTimeout(() => {
    //   setAnimationClass("fadeOut");
    //   setTimeout(() => {
    //     setIsSaved(false);
    //   }, 200); // fadeOut 애니메이션이 끝난 후에 컴포넌트를 제거
    // }, 2000); // 2초 후에 fadeOut 시작

  // // 오류가 발생했을 때 오류 메시지를 표시
//   if (error) {
//     return <div>Error: {error}</div>;
//   }

  return (
    <main class="mt-[32px]">
      <div class="editor mx-auto grid w-desktop-grid grid-cols-15 gap-x-[16px] gap-y-0">
        <WriteEditorContainer editorRef={editorRef} />
        <WriteAsideContainer
          setModalOn={setModalOn}
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
      </div>
      {modalOn && <WriteInputFileModal setModalOn={setModalOn} />}
      {/* {isSaved && (
        <SaveInfo animationClass={animationClass} updateState={updateState} />
      )} */}
    </main>
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
export default WriteSectionContainer;
