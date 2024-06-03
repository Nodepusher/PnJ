import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePostData, fetchPostData, updatePostData } from '../store/postWriteReducer'
import WriteHeaderContainer from '../Containers/Write/WriteHeaderContainer';
import WriteSectionContainer from '../Containers/Write/WriteSectionContainer';
import styles from '../style/writePage.css'
const PostWritepage = ({match}) => { // match : parameter 값을 가져옴
    const editorRef = useRef(null);
    const dispatch = useDispatch();
    const { inputData, loading } = useSelector(state => state.write);

    try {
        var postId = match.params.id 
        
    } catch (error) {
        var isEdit = !!postId // Id가 null 이거나 undefine이면 !!undefine : !true : false
        
    }
    useEffect(() => {
        if(isEdit){ // 수정 게시물
            dispatch(fetchPostData(postId))
        } else {
            dispatch(updatePostData({
                id: '',
                title: '',
                content: '',
                category: '',
                // tags: [],
                // image: '',
                file: null,
                isEdit : isEdit
            }))
        }
    }, [dispatch, isEdit, postId])
    // const handleChange = (e) => {
    //     const {name, value, files} = e.target
    //     dispatch(updatePostData({
    //         [name] : files ? files[0] : value
    //     }))
    // }
    const handleSubmit = () => {
        let markdownContent = editorRef.current?.getInstance().getMarkdown();
        let htmlContent = editorRef.current?.getInstance().getHTML();
        console.log("::::::::: ",inputData)
        console.log(markdownContent);
        console.log('================================================');
        console.log(htmlContent);
        const postData = {
            ...inputData,
            content: markdownContent,
            htmlContent: htmlContent
        };

        dispatch(savePostData(postData, isEdit));
    };

    return (
        <>
            <WriteHeaderContainer handleSubmit={handleSubmit} />
            <WriteSectionContainer editorRef={editorRef}/>
        </>
    );
};

export default PostWritepage;
