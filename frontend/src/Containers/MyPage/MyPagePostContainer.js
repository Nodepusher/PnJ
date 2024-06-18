import React, { memo } from "react";
import MyPagePostHeader from "../../Components/MyPage/MyPagePostHeader";
import PostListComponent from "../../Components/MyPage/PostListComponent";
import { useState, useEffect } from "react";
import axios from "axios";

const MyPagePostContainer = () => {
  const [post, setPost] = useState([]);
  const [postState, setPostState] = useState(false);
  const [sort, setSort] = useState("최신순");

  useEffect(() => {
    console.log(sort);
    const requestPost = async () => {
      try {
        // 요청
        const res = await axios.get("http://localhost:4000/user/mypost", {
          params: { sort },
        });
        const myPosts = res.data.myPosts;
        console.log("res.data", res.data);
        setPost(myPosts);
        post.length > 0 ? setPostState(true) : setPostState(false);
      } catch (error) {
        // setPost(mockData)
        console.log("에러 마이페이지 포스트 컨테이너 에러", error);
        post.length > 0 ? setPostState(true) : setPostState(false);
      }
    };
    requestPost();
  }, [post.length, sort]);

  return (
    <>
      <div className="shrink-0 grow basis-0 overflow-x-auto">
        <div className="mx-auto grid w-desktop-grid grid-cols-12 gap-x-[16px] gap-y-0 pb-[64px]">
          <div className="col-span-full">
            <MyPagePostHeader post={post} setSort={setSort} sort={sort} />
            <PostListComponent
              postState={postState}
              post={post}
              sort={sort}
              setPost={setPost}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(MyPagePostContainer);
