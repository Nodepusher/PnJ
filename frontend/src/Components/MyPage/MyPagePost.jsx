import React from "react";
import PostListComponent from "./PostListComponent";
import MyPagePostHeader from "./MyPagePostHeader";
const MyPagePost = () => {
  return (
    <>
      <div className="shrink-0 grow basis-0 overflow-x-auto">
        <div className="mx-auto grid w-desktop-grid grid-cols-12 gap-x-[16px] gap-y-0 pb-[64px]">
          <div className="col-span-full">
            <MyPagePostHeader />
            <PostListComponent />
          </div>
        </div>
      </div>
    </>
  );
};
export default MyPagePost;
