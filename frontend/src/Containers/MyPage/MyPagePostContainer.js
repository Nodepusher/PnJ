import React from "react";
import PostListComponent from "../../Components/MyPage/PostListComponent";
import MyPagePostHeader from "../../Components/MyPage/MyPagePostHeader";
import { useState, useReducer, useEffect } from "react";
import axios from "axios";
const mockData = [
  {
    id: 0,
    title: "post 1",
    content: "test Post 1",
    date: "2024.05.15",
  },
  {
    id: 1,
    title: "post 2",
    content: "test Post 2",
    date: "2024.05.16",
  },
  {
    id: 2,
    title: "post 3",
    content: "test Post 3",
    date: "2024.05.17",
  },
  {
    id: 3,
    title: "post 4",
    content: "test Post 4",
    date: "2024.05.18",
  },
];

const MyPagePostContainer = () => {
  const [post, setPost] = useState(mockData);
  const [postState, setPostState] = useState();
  const [sort, setSort] = useState("최신순");
    useEffect(() =>{
        const requestPost = async () => {
          try {
            // 요청
            const res = await axios.get("http://localhost:4000/selectPost")
            setPost(res.data)
            post.length > 0 ? setPostState(true) : setPostState(false)
          } catch (error) {
            // setPost(mockData)
            post.length > 0 ? setPostState(true) : setPostState(false)
          }
        }
        requestPost()
    },[post.length])

  return (
    <>
      <div className="shrink-0 grow basis-0 overflow-x-auto">
        <div className="mx-auto grid w-desktop-grid grid-cols-12 gap-x-[16px] gap-y-0 pb-[64px]">
          <div className="col-span-full">
            <MyPagePostHeader post={post} setSort={setSort} sort={sort}/>
            <PostListComponent postState={postState} post={post} sort={sort} setPost={setPost}/>
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPagePostContainer;
