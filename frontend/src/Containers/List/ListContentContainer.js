import React, { useEffect, useState } from 'react';
import PostList from '../../Components/List/PostList';
import SortPost from '../../Components/List/SortPost';
import axios from 'axios';

const ListContentContainer = () => {
    return (
        <div className="mx-auto min-h-screen max-w-main">
            <SortPost />
            <div className="px-[16px] md:px-0">
                <ul className="col-span-full flex flex-col">
                    <PostList />
                </ul>
            </div>
        </div>
    );
};

export default ListContentContainer;
