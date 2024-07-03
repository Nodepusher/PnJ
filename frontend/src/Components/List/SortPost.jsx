import React, { useEffect, useRef, useState, useCallback } from "react";
import DropdownList from "./DropdownList";
import { useSelector } from "react-redux";
import axios from "axios";

const SortPost = ({ dropdownState, setDropdownState }) => {
  const category = useSelector((state) => state.postList.category);
  const [isOpen, setIsOpen] = useState(false);
  const [postCount, setPostCount] = useState(0);
  const dropdownRef = useRef();

  const handleMenuClick = (selected) => {
    setDropdownState(selected);
  };

  const handleClickOutside = useCallback((e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  }, []);

  const fetchPostCount = useCallback(async (category) => {
    try {
      const res = await axios.post("/board/count", { category });
      setPostCount(res.data);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

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

  useEffect(() => {
    if (category) {
      fetchPostCount(category);
    } else {
      fetchPostCount("all");
    }
  }, [category, fetchPostCount]);

  const propsClassName = "absolute top-[42px] right-0 z-10 w-[248px]";

  const propsList = [
    { dataOptionValue: "old", content: "오래된순" },
    { dataOptionValue: "latest", content: "최신순" },
  ];

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
            propsClassName={propsClassName}
            props={propsList}
          />
        )}
      </div>
    </div>
  );
};

export default SortPost;
