import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Editor, Viewer } from '@toast-ui/react-editor';
import React, { useEffect } from 'react';

const TuiEditor = ({ editorRef, content }) => {
    const toolbarItems = [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
        ['scrollSync'],
    ];
    // 여기 함수 내용을 백이랑 상의하면서 설계해야함
    const handleImage = async (blob, callback) => {
        var reader = new FileReader();
        reader.onload = function (_a) {
            var target = _a.target;
            console.log('target.result', target.result.split('base64,'));
            return callback(target.result);
        };
        reader.readAsDataURL(blob);
    };
    useEffect(() => {
        editorRef.current?.getInstance().setMarkdown(content);
    }, [content]);

    return (
        <>
            <Editor
                ref={editorRef}
                initialEditType="wysiwyg"
                initialContent={content}
                hideModeSwitch={true}
                autofocus={false}
                height="500px"
                theme=""
                usageStatistics={false}
                toolbarItems={toolbarItems}
                hooks={{ addImageBlobHook: handleImage }}
                useCommandShortcut={true}
            />
        </>
    );
};

const TuiViewer = ({ content }) => {
    return <Viewer initialValue={content} />;
};

export default TuiEditor;
export { TuiViewer };
