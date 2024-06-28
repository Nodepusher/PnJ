import React, { useEffect, useState } from "react";
import TuiEditor from "../../Modules/ToastUI";
import WriteInputComponent from "../../Components/Write/WriteInputComponent";
import { useSelector, useDispatch } from "react-redux";
import { updatePostData } from "../../store/postWriteReducer";
const WriteEditorContainer = ({ editorRef }) => {
  const dispatch = useDispatch();
  const { isEdit, inputData } = useSelector((state) => state.write);
  const [inputTitle, setInputTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleChange = (e) => {
    const text = e.target.value;
    setInputTitle(text);
  };
  const addClass = "font_title_bold_md";

  useEffect(() => {
    const savedPost = sessionStorage.getItem("savedPost");
    let data = null;

    if (savedPost) {
      data = JSON.parse(savedPost);
    }

    if (isEdit) {
      setInputTitle(inputData.title);
      setContent(inputData.content);
    } else if (data) {
      setInputTitle(data.title);
      setContent(data.content);
    } else {
      setInputTitle("");
      setContent("");
    }
  }, [isEdit]);

  useEffect(() => {
    dispatch(
      updatePostData({
        content: editorRef.current?.getInstance().getMarkdown(),
        title: inputTitle,
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
