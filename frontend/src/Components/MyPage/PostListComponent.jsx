import React, {useState, useEffect, useCallback} from "react";
import NoPost from "./NoPost";
import MyPageModal from "../MyPage/MyPageModal"

const PostListComponent = ({postState, post, sort, setPost}) => {

  return (
    <>
      {postState ? <PostList postList={post} sort={sort} setPost={setPost}/> : <NoPost />}
    </>
  );
};

const PostList = ({ postList, sort, setPost }) => {
  const [checkModal, setCheckModal] = useState(false) // 모달 상태관리
  const [deleteId, setDeleteId] = useState()
  const ascPost = (postList) => {
    return postList.sort((a,b) => new Date(a.date) - new Date(b.date))
  }
  const descPost = (postList) => {
    return postList.sort((a,b) => new Date(b.date) - new Date(a.date))
  }
  const onDeleteModal = useCallback( (id) => {
    setCheckModal(true)
    setDeleteId(id)
  }, [])

  const sortPostList = sort === "최신순" ? ascPost(postList) : descPost(postList)
  return (
    <>
      <ul className="col-span-full mt-[8px] flex flex-col">
        {sortPostList.map((post) => {
          return (
            <li className="border_secondary flex items-center border-b px-[8px] py-[16px] hover:surface_secondary">
              <button className="block w-[280px] text-left">
                <div className="content_secondary flex flex-col gap-y-[2px]">
                  <div className="flex gap-[12px]">
                    <div className="flex flex-col">
                      <div className="flex gap-[2px]">
                        <p className="font_label_medium_xl text-ellipsis-1 overflow-hidden">
                          {post.title}
                        </p>
                      </div>
                      <p className="content_quaternary font_body_regular_md text-ellipsis-1 mt-[2px] overflow-hidden">
                        {post.content}
                      </p>
                    </div>
                  </div>
                </div>
              </button>
              <div className="ml-[32px] flex items-center gap-x-[32px]">
                <div className="flex w-[56px] flex-col items-end gap-y-[4px]">
                  <p className="font_label_medium_lg">1</p>
                  <p className="content_quaternary font_label_regular_md">조회</p>
                </div>
                <div className="flex w-[56px] flex-col items-end gap-y-[4px]">
                  <p className="font_label_medium_lg">0</p>
                  <p className="content_quaternary font_label_regular_md">좋아요</p>
                </div>
                <div className="flex w-[76px] flex-col items-end gap-y-[4px]">
                  <p className="font_label_medium_lg">{post.date}</p>
                  <p className="content_quaternary font_label_regular_md">게시일</p>
                </div>
              </div>
              <div className="ml-auto flex items-center gap-x-[12px]">
                <button
                  aria-label="edit button"
                  className="border_primary flex h-[40px] w-[40px] items-center justify-center rounded-full border"
                  type="button"
                >
                  <svg
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="content_secondary h-[20px] w-[20px]"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m15.687 8.163.545-.506c1.024-.951 1.024-2.493 0-3.444-1.024-.95-2.684-.95-3.709 0l-8.362 7.765-1.127 3.547c-.183.577.395 1.113 1.016.943l3.82-1.046 6.661-6.186.005.004 1.155-1.073-.004-.004Zm-2.312 0-6.367 5.912-1.981.543.584-1.84 6.367-5.912 1.397 1.297Zm1.156-1.073-1.397-1.298.545-.506a1.042 1.042 0 0 1 1.397 0 .872.872 0 0 1 0 1.298l-.545.506Z"
                    ></path>
                  </svg>
                </button>
                <button
                  aria-label="delete button"
                  className="border_primary flex h-[40px] w-[40px] items-center justify-center rounded-full border"
                  type="button"
                  onClick={() => onDeleteModal(post.id)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="content_secondary h-[20px] w-[20px]"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 15.6a.7.7 0 0 1-.7-.7v-3.6a.7.7 0 0 1 1.4 0v3.6a.7.7 0 0 1-.7.7ZM14 15.6a.7.7 0 0 1-.7-.7v-3.6a.7.7 0 1 1 1.4 0v3.6a.7.7 0 0 1-.7.7Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.6 3.8h4.6c.22 0 .4.178.4.4v1.4H9.2V4.2c0-.222.179-.4.4-.4Zm-2 .4a2 2 0 0 1 2-2h4.6a2 2 0 0 1 2 2v1.4h3.5a.8.8 0 0 1 0 1.6H19v10.4a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V7.2h-.7a.8.8 0 1 1 0-1.6h3.3V4.2Zm-1 3h10.8v10.4A2.4 2.4 0 0 1 15 20H9a2.4 2.4 0 0 1-2.4-2.4V7.2Z"
                    ></path>
                  </svg>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <MyPageModal></MyPageModal> */}
      {checkModal && <MyPageModal setCheckModal={setCheckModal} deletePostId={deleteId} setPost={setPost} postList={postList}/>}
    </>
  );
};

export default React.memo(PostListComponent);
