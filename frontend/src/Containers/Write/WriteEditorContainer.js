import React, { useEffect, useState } from "react";
import TuiEditor from "../../Modules/ToastUI";
import WriteInputComponent from "../../Components/Write/WriteInputComponent";
import { useSelector, useDispatch } from "react-redux";
import { updatePostData } from "../../store/postWriteReducer";
const WriteEditorContainer = ({ editorRef }) => {
  const dispatch = useDispatch();
  const { isEdit, inputData } = useSelector((state) => state.write);
  console.log(":::::::::::",inputData)
  const [inputTitle, setInputTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    const text = e.target.value;
    setInputTitle(text);
  };
  console.log(":::::::", isEdit)
  const addClass = "font_title_bold_md";

  useEffect(() => {
    // const axiosData = async () => {
    //     // 게시글 수정시 DB에서 전달받을 타이틀과 텍스트
    //     const tempTitle = '타이틀';
    //     const tempText = '텍스트';
    //     // 게시글 초기 작성시 tempTitle과 tempText가 없으면 set을 하지 않고 기존의 ''값을 갖고 있어야함
    //     if (tempTitle && tempText) {
    //         setInputTitle(tempTitle);
    //         setContent(tempText);
    //     }
    // };
    // axiosData();
    if (isEdit) {
      setInputTitle(inputData.title);
      setContent(inputData.content);
    } else {
      setInputTitle("타이틀");
      setContent("텍스트");
    }
  }, [isEdit]);
  useEffect(() => {
    dispatch(
      updatePostData({
        content :  editorRef.current?.getInstance().getMarkdown(),
        title : inputTitle
      })
    );
  }, [dispatch, editorRef, inputTitle]);

  return (
    <section className="col-span-10">
      <div className="mb-[14px]">
        <div>
          <WriteInputComponent
            value={inputTitle}
            onChange={handleChange}
            addClass={addClass}
            placeholder="제목을 입력해주세요."
          />
        </div>
      </div>
      <div className="mb-[14px]"></div>
      <TuiEditor editorRef={editorRef} content={content} />
    </section>
  );
};

export default WriteEditorContainer;
