import React, { useRef } from 'react';
import WriteHeaderContainer from '../Containers/Write/WriteHeaderContainer';
import WriteSectionContainer from '../Containers/Write/WriteSectionContainer';
import styles from '../style/writePage.css'
const PostWritepage = () => {
    const editorRef = useRef(null);

    const handleSubmit = () => {
        let markdownContent = editorRef.current?.getInstance().getMarkdown();
        let htmlContent = editorRef.current?.getInstance().getHTML();

        console.log(markdownContent);
        console.log('================================================');
        console.log(htmlContent);
    };

    return (
        <>
            <WriteHeaderContainer handleSubmit={handleSubmit} />
            <WriteSectionContainer editorRef={editorRef} />
        </>
    );
};

export default PostWritepage;
