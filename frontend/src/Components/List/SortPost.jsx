import React, { useEffect, useRef, useState, useCallback } from "react";
import DropdownList from "./DropdownList";
import ErrorToast from "./ErrorToast";
import { useSelector } from "react-redux";
import axios from "axios";

const SortPost = ({ dropdownState, setDropdownState }) => {
  // 카테고리 상태값 
  const category = useSelector((state) => state.postList.category);
  const [isOpen, setIsOpen] = useState(false);
  const [errorInfo, setError] = useState(null);
  const [postCount, setPostCount] = useState(0);
  const dropdownRef = useRef();
  const [animationClass, setAnimationClass] = useState("");

  // 오래된순, 최신순 드롭다운 메뉴 클릭
  const handleMenuClick = (selected) => {setDropdownState(selected)};
  // 드롭다운 클릭 이벤트
  const handleClickOutside = useCallback((e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, []);

  // 게시물 카운트 요청 함수
  const fetchPostCount = useCallback(async (category) => {
    try {
      const res = await axios.post("/board/count", { category });
      setPostCount(res.data);
      setError(false);
    } catch (error) {
      console.error("fail to fetch post count :::: ",error.message);
      setError(true);
      errorToast()
    }
  }, []);
  // 게시물 카운트 요청
  useEffect(() => {
    fetchPostCount(category || 'all');
}, [category, fetchPostCount]);

  // 드롭다운 이벤트 리스너
  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, handleClickOutside]);

  // 에러 처리
  const errorToast = () => {
    setTimeout(() => {
      setAnimationClass("fadeIn");
      setTimeout(() => {
        setAnimationClass("fadeOut");
      }, 200); // fadeOut 애니메이션이 끝난 후에 컴포넌트를 제거
    }, 2000); // 2초 후에 fadeOut 시작
  }

  return (
    <div className="flex h-[44px] items-center justify-between px-[16px] md:p-0">
      <h5 className="font_title_bold_md">포스트 {postCount}</h5>
      <div
        className="relative"
        ref={dropdownRef}
        onClick={() => setIsOpen(!isOpen)}
      >
        <button
          aria-label="filter"
          className="surface_primary false border_black_opacity flex max-w-[164px] items-center rounded-[16px] outline-none"
          type="button"
        >
          <span className="overflow-hidden content_secondary font_label_medium_lg text-ellipsis whitespace-nowrap">
            {dropdownState}
          </span>
          <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0 ml-[4px] w-[10px] h-[10px]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.27 8.42a1.076 1.076 0 0 1 1.587-.13L12 14.832l7.143-6.544a1.076 1.076 0 0 1 1.586.13 1.26 1.26 0 0 1-.122 1.696L12 18l-8.607-7.885A1.26 1.26 0 0 1 3.27 8.42Z"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <DropdownList
            onClick={handleMenuClick}
          />
        )}
      </div>
      {errorInfo && <ErrorToast animationClass={animationClass} errorState={errorInfo}/>}
    </div>
  );
};

export default SortPost;
