import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { useRef } from 'react';

const TuiEditor = ({ content = '' }) => {
    const editorRef = useRef(true);

    const toolbarItems = [
        ['heading', 'bold', 'italic', 'strike'],
        ['hr', 'quote'],
        ['ul', 'ol', 'task', 'indent', 'outdent'],
        ['table', 'image', 'link'],
        ['code', 'codeblock'],
        ['scrollSync'],
    ];

    const TempFunction = (temp1, temp2) => {
        console.log('토스트ui모듈에 임시함수가 있습니다.')
        console.log(temp1, temp2)
    }
    return (
        <>
            {editorRef.current && (
                <Editor
                    ref={editorRef}
                    initialValue={content || ' '}
                    initialEditType="wysiwyg"
                    hideModeSwitch="true"
                    previewStyle={window.innerWidth > 1000 ? 'vertical' : 'tab'}
                    height="500px"
                    theme=""
                    usageStatistics={false}
                    toolbarItems={toolbarItems}
                    hooks={{addImageBlobHook:TempFunction}}
                    useCommandShortcut={true}
                />
            )}
        </>
    );
};

export default TuiEditor;
