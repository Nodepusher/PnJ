import React from 'react';
import WriteEditorContainer from './WriteEditorContainer';
import WriteAsideContainer from './WriteAsideContainer';

const WriteSectionContainer = ({ editorRef }) => {
    return (
        <main class="mt-[32px]">
            <div class="mx-auto grid w-desktop-grid grid-cols-15 gap-x-[16px] gap-y-0">
                <WriteEditorContainer editorRef={editorRef} />
                <WriteAsideContainer />
            </div>
        </main>
    );
};

export default WriteSectionContainer;
