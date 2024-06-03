import React, { useState } from 'react'
import WriteEditorContainer from './WriteEditorContainer'
import WriteAsideContainer from './WriteAsideContainer'
import WriteInputFileModal from '../../Components/Write/WriteInputFileModal'

const WriteSectionContainer = ({ editorRef}) => {
    const [modalOn, setModalOn] = useState(false)

    return (
        <main class="mt-[32px]">
            <div class="editor mx-auto grid w-desktop-grid grid-cols-15 gap-x-[16px] gap-y-0">
                <WriteEditorContainer editorRef={editorRef}/>
                <WriteAsideContainer setModalOn={setModalOn} />
            </div>
            {modalOn && <WriteInputFileModal setModalOn={setModalOn} />}
        </main>
    )
}

export default WriteSectionContainer
