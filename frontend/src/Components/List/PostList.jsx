import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { getPostData } from "../../store/postListReducer";
import { marked } from "marked";
import DOMPurify from "dompurify";
import defaultThumb from "../../Assets/images/noThumb.png";

const PostList = ({ StProps, category, dropdownState }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const moveToDetail = (postId) => {
    nav(`/detail?post=${postId}`);
  };
  const { StfirstPost = "", StUlMargin = "" } = StProps || {};
  const StImg = {
    position: "absolute",
    height: "100%",
    width: "100%",
    inset: "0px",
    color: "transparent",
  };

  const [page, setPage] = useState(2);
  const posts = useSelector((state) => state.postList.postsData);
  const hasMore = useSelector((state) => state.postList.hasMore);
  
  console.log("postlist jsx", posts);
  // useEffect(() => {
  //   setPage(2);
  // }, [category]);

  // const fetchData = () => {
  //   dispatch(getPostData(category, page, dropdownState));
  //   setPage(page + 1);
  // };
  useEffect(() => {
    setPage(2);
    dispatch(getPostData(category, 1, dropdownState));
  }, [category, dropdownState, dispatch]);

  const fetchData = useCallback(() => {
    dispatch(getPostData(category, page, dropdownState));
    setPage((prevPage) => prevPage + 1);
  }, [dispatch, category, page, dropdownState]);

  // 마크다운을 텍스트로 변환
  const extractTextFromMarkdown = (markdown) => {
    const html = marked(markdown);
    const cleanHTML = DOMPurify.sanitize(html);
    const tempElement = document.createElement("div");
    tempElement.innerHTML = cleanHTML;
    return tempElement.textContent || tempElement.innerText || "";
  };

  return location.pathname === "/" ? (
    <InfiniteScroll
      dataLength={[posts.length]}
      next={fetchData}
      hasMore={hasMore}
    >
      <ul className={`col-span-full flex flex-col ${StUlMargin}`}>
        {console.log(posts)}
        {posts.map((post, i) => (
          <li
            key={post.id}
            className={`border_secondary border-t py-[20px] first:border-0 md:py-[24px] ${StfirstPost}`}
          >
            <div onClick={() => moveToDetail(post.id)}>
              <button
                aria-label="post card"
                className="block w-full text-left"
                type="button"
              >
                <div className="flex gap-x-[16px]">
                  <div className="h-[73px] w-full break-all xl:h-auto">
                    <h2 className="content_secondary font_title_bold_md overflow-hidden xl:font_title_bold_lg text-ellipsis-1">
                      {post.title}
                    </h2>
                    <p className="content_quaternary font_label_regular_lg mt-[4px] mb-[18px] overflow-hidden xl:mt-[6px] text-ellipsis-1 xl:text-ellipsis-2">
                      {extractTextFromMarkdown(post.content)}
                    </p>
                  </div>
                  <div className="relative h-[72px] w-[72px] shrink-0 rounded-[8px] md:h-[90px] md:w-[90px]">
                    <img
                      alt="thumbnail img"
                      sizes="(max-width: 500px) 72px, 90px"
                      src={
                        post.thumbnail
                          ? `/uploads/thumbnail/${post.thumbnail}`
                          : defaultThumb
                      }
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-[8px]"
                      loading="lazy"
                      style={StImg}
                    />
                    <div className="border_black_opacity absolute top-0 left-0 h-full w-full rounded-[8px] border"></div>
                  </div>
                </div>
                <div>
                  <div className="mt-[12px] flex items-center">
                    <div className="font_label_regular_md flex items-center gap-x-[2px]">
                      <span className="content_secondary break-all line-clamp-1 lg:max-w-full">
                        {post.User.name}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="content_disabled h-[8px] w-[8px]"
                      >
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                      <span className="content_quaternary shrink-0">
                        {new Date(post.createdAt).toLocaleDateString("ko-KR", {
                          timeZone: "Asia/Seoul",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="mt-[3px] flex items-center">
                    <div className="font_label_regular_md flex items-center gap-x-[4px]">
                      <svg
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[18px] h-[18px] content_quaternary"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.144 13.563v2l2.543-2h2.396a2.74 2.74 0 0 0 2.741-2.74V7.073a2.74 2.74 0 0 0-2.74-2.74h-6.01a2.74 2.74 0 0 0-2.74 2.74v4.012a2.477 2.477 0 0 0 2.477 2.477h1.333Zm-.104 3.778a.815.815 0 0 1-1.23-.702v-1.743A3.81 3.81 0 0 1 3 11.086V7.074A4.074 4.074 0 0 1 7.074 3h6.01a4.074 4.074 0 0 1 4.073 4.074v3.748a4.074 4.074 0 0 1-4.074 4.074h-1.935L8.04 17.341Z"
                        ></path>
                        <path d="M8.167 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0ZM10.667 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0ZM13.167 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z"></path>
                      </svg>
                      <span className="content_quaternary shrink-0">47</span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </InfiniteScroll>
  ) : (
    <ul className={`col-span-full flex flex-col ${StUlMargin}`}>
      {posts.map((post, i) => (
        <li
          key={post.id}
          className={`border_secondary border-t py-[20px] first:border-0 md:py-[24px] ${StfirstPost}`}
        >
          <div onClick={() => moveToDetail(post.id)}>
            <button
              aria-label="post card"
              className="block w-full text-left"
              type="button"
            >
              <div className="flex gap-x-[16px]">
                <div className="h-[73px] w-full break-all xl:h-auto">
                  <h2 className="content_secondary font_title_bold_md overflow-hidden xl:font_title_bold_lg text-ellipsis-1">
                    {post.title}
                  </h2>
                  <p className="content_quaternary font_label_regular_lg mt-[4px] mb-[18px] overflow-hidden xl:mt-[6px] text-ellipsis-1 xl:text-ellipsis-2">
                    {extractTextFromMarkdown(post.content)}
                  </p>
                </div>
                <div className="relative h-[72px] w-[72px] shrink-0 rounded-[8px] md:h-[90px] md:w-[90px]">
                  <img
                    alt="detail Thumb"
                    sizes="(max-width: 500px) 72px, 90px"
                    src={
                      post.thumbnail
                        ? `/uploads/thumbnail/${post.thumbnail}`
                        : defaultThumb
                    }
                    decoding="async"
                    data-nimg="fill"
                    className="rounded-[8px]"
                    loading="lazy"
                    style={StImg}
                  />
                  <div className="border_black_opacity absolute top-0 left-0 h-full w-full rounded-[8px] border"></div>
                </div>
              </div>
              <div>
                <div className="mt-[12px] flex items-center">
                  <div className="font_label_regular_md flex items-center gap-x-[2px]">
                    <span className="content_secondary break-all line-clamp-1 lg:max-w-full">
                      {post.User.name}
                    </span>
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="content_disabled h-[8px] w-[8px]"
                    >
                      <circle cx="12" cy="12" r="4"></circle>
                    </svg>
                    <span className="content_quaternary shrink-0">
                      {new Date(post.createdAt).toLocaleDateString("ko-KR", {
                        timeZone: "Asia/Seoul",
                      })}
                    </span>
                  </div>
                </div>
                <div className="mt-[3px] flex items-center">
                  <div className="font_label_regular_md flex items-center gap-x-[4px]">
                    <svg
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[18px] h-[18px] content_quaternary"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.144 13.563v2l2.543-2h2.396a2.74 2.74 0 0 0 2.741-2.74V7.073a2.74 2.74 0 0 0-2.74-2.74h-6.01a2.74 2.74 0 0 0-2.74 2.74v4.012a2.477 2.477 0 0 0 2.477 2.477h1.333Zm-.104 3.778a.815.815 0 0 1-1.23-.702v-1.743A3.81 3.81 0 0 1 3 11.086V7.074A4.074 4.074 0 0 1 7.074 3h6.01a4.074 4.074 0 0 1 4.073 4.074v3.748a4.074 4.074 0 0 1-4.074 4.074h-1.935L8.04 17.341Z"
                      ></path>
                      <path d="M8.167 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0ZM10.667 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0ZM13.167 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z"></path>
                    </svg>
                    <span className="content_quaternary shrink-0">47</span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PostList;
