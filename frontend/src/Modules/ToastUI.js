import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor/dist/toastui-editor-viewer.css";
import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import { Editor, Viewer } from "@toast-ui/react-editor";
import React, { useEffect } from "react";
import axios from "axios";

const TuiEditor = ({ editorRef, content }) => {
  const toolbarItems = [
    ["heading", "bold", "italic", "strike"],
    ["hr", "quote"],
    ["ul", "ol", "task", "indent", "outdent"],
    ["table", "image", "link"],
    ["code", "codeblock"],
    ["scrollSync"],
    // ['modeSwitch']
  ];
  // 여기 함수 내용을 백이랑 상의하면서 설계해야함
  const handleImage = async (blob, callback) => {
    const formData = new FormData();
    formData.append("image", blob);
    console.log("blob", blob);
    try {
      const response = await axios.post(
        "http://localhost:4000/board/uploadImg",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(":::::::::::::: ", response.data.url);
      console.log(":::::::::::::: ", response);
      callback(response.data.url);
    } catch (error) {
      console.error("Image upload failed:", error);
    }

    // console.log('blob :::::::: ',blob);
    // var reader = new FileReader();
    // reader.onload = function (_a) {
    //     var target = _a.target;
    //     console.log('target.result', target.result.split('base64,'));
    //     return callback(target.result);
    // };
    // reader.readAsDataURL(blob);
  };
  useEffect(() => {
    editorRef.current?.getInstance().setMarkdown(content);
  }, [content]);

  const TempFunction = (temp1, temp2) => {
    console.log("토스트ui모듈에 임시함수가 있습니다.");
    console.log(temp1, temp2);
  };
  return (
    <>
      <Editor
        ref={editorRef}
        // initialEditType="wysiwyg"
        initialEditType="markdown"
        previewStyle="vertical"
        initialContent={content}
        // hideModeSwitch={true}
        hideModeSwitch={false}
        autofocus={false}
        height="550px"
        theme=""
        usageStatistics={false}
        toolbarItems={toolbarItems}
        hooks={{ addImageBlobHook: handleImage }}
        useCommandShortcut={true}
        plugins={[colorSyntax]} // 컬러 플러그인 추가
      />
    </>
  );
};

const TuiViewer = ({ content }) => {
  return <Viewer initialValue={content} />;
};

export default TuiEditor;
export { TuiViewer };
