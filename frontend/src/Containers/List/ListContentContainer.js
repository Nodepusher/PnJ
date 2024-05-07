import React, { useEffect, useState } from 'react';
import PostList from '../../Components/List/PostList';
import SortPost from '../../Components/List/SortPost';

const ListContentContainer = () => {
    const [posts, setPosts] = useState([]);

    const postdata = [
        {
            id: '1',
            title: '게시글 제목1',
            content: '게시글 내용1',
            category: '1',
        },
        {
            id: '2',
            title: '게시글 제목2',
            content: '게시글 내용2',
            category: '2',
        },
    ];

    useEffect(() => {
        setPosts(postdata);
    }, []);

    return (
        <div className="mx-auto min-h-screen max-w-main">
            <SortPost props={posts} />
            <div className="px-[16px] md:px-0">
                <ul className="col-span-full flex flex-col">
                    <PostList props={posts} />
                </ul>
            </div>
        </div>
    );
};

export default ListContentContainer;
