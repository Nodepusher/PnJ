import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { savePostData, fetchPostData, updatePostData, updateIsEdit } from '../store/postWriteReducer'
import WriteHeaderContainer from '../Containers/Write/WriteHeaderContainer';
import WriteSectionContainer from '../Containers/Write/WriteSectionContainer';
import styles from '../style/writePage.css'
const PostWritepage = ({match}) => { // match : parameter 값을 가져옴
    let [query, setQuery] = useSearchParams();
    const editorRef = useRef(null);
    const dispatch = useDispatch();
    const [selectedFiles, setSelectedFiles] = useState([])
    const { inputData, loading } = useSelector(state => state.write);
    console.log(query.get('postId'))
    var postId = query.get('postId')
    // try {
    //     var postId = query.get('postId')
        
    // } catch (error) {
    //     isEdit = !!postId // Id가 null 이거나 undefine이면 !!undefine : !true : false
        
    // }
    var isEdit = postId ? true : false 
    
    console.log()
    useEffect(() => {
        dispatch(updateIsEdit(isEdit))
        if(isEdit){ // 수정 게시물
            dispatch(fetchPostData(postId))
        } else {
            dispatch(updatePostData({
                id: '',
                title: '타이틀',
                content: '본문',
                category: '',
                tags: [],
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
        };

        dispatch(savePostData(postData, isEdit, selectedFiles));
    };

    return (
        <>
            <WriteHeaderContainer handleSubmit={handleSubmit} />
            <WriteSectionContainer editorRef={editorRef} selectedFiles={selectedFiles} setSelectedFiles={setSelectedFiles}/>
        </>
    );
};

export default React.memo(PostWritepage);
