import React from "react";
import { useNavigate } from "react-router-dom";

const DetailFooterNavigation = ({ prevPostId, nextPostId }) => {
  const nav = useNavigate();
  const MoveToPost = (postId) => {
    nav(`/detail/${postId}`);
  };
  return (
    <div className="flex items-center gap-[20px]">
      <button
        onClick={() => {
          MoveToPost(prevPostId);
        }}
      >
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          className="content_secondary h-[24px] w-[24px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m5.325 9.45 8.858-5.03c2.082-1.183 4.773.266 4.773 2.749V17.23c0 2.482-2.69 3.931-4.773 2.749l-8.858-5.032c-2.14-1.216-2.14-4.281 0-5.497Zm.89 1.566a1.356 1.356 0 0 0 0 2.367l8.857 5.031c.926.527 2.084-.131 2.084-1.183V7.169c0-1.053-1.158-1.71-2.084-1.184l-8.858 5.03Z"
          ></path>
        </svg>
      </button>
      <button>
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="content_secondary h-[24px] w-[24px]"
        >
          <path d="M6.3 5.8a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0ZM6.3 11.8a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0ZM6.3 17.8a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0ZM8.7 5.8a1.2 1.2 0 0 1 1.2-1.2h10.6a1.2 1.2 0 0 1 0 2.4H9.9a1.2 1.2 0 0 1-1.2-1.2ZM8.7 11.8a1.2 1.2 0 0 1 1.2-1.2h10.6a1.2 1.2 0 0 1 0 2.4H9.9a1.2 1.2 0 0 1-1.2-1.2ZM8.7 17.8a1.2 1.2 0 0 1 1.2-1.2h10.6a1.2 1.2 0 0 1 0 2.4H9.9a1.2 1.2 0 0 1-1.2-1.2Z"></path>
        </svg>
      </button>
      <button
        onClick={() => {
          MoveToPost(nextPostId);
        }}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="content_secondary h-[24px] w-[24px]"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m18.595 14.948-8.858 5.03c-2.082 1.184-4.773-.266-4.773-2.748V7.168c0-2.483 2.69-3.932 4.773-2.75l8.858 5.032c2.14 1.216 2.14 4.282 0 5.498Zm-.89-1.565a1.356 1.356 0 0 0 0-2.368l-8.857-5.03c-.926-.527-2.084.13-2.084 1.183V17.23c0 1.052 1.158 1.71 2.084 1.184l8.858-5.031Z"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default DetailFooterNavigation;
