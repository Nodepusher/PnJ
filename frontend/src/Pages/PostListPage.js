import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPostData } from '../store/postListReducer';
import ListHeaderContainer from '../Containers/List/ListHeaderContainer';
import ListContentContainer from '../Containers/List/ListContentContainer';
import ListFooterContainer from '../Containers/List/ListFooterContainer';

const PostListPage = () => {
    const [dropdownState, setDropdownState] = useState('최신순');
    const dispatch = useDispatch();
    const category = useSelector(state => state.postList.category);
    const postData = useSelector((state) => state.postList.filteredPosts);
    useEffect(() => {
        dispatch(getPostData(category, 1,dropdownState));
    }, [dispatch, category, dropdownState]);
    

    return (
        <>
            <ListHeaderContainer search={true} login={true} mypage={true} />
            <ListContentContainer postData={postData} category={category} dropdownState={dropdownState} setDropdownState={setDropdownState}/>
            <ListFooterContainer />
        </>
    );
};

export default React.memo(PostListPage);
