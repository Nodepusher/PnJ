import React from "react";
import { usePage } from "../../Context/MyPageContext";
import { useSearchParams } from "react-router-dom";
import tempImage from "../../Assets/images/temp.png";
const SideBar = () => {
  const { page, updatePageInfo } = usePage();
  const [searchParams, setSearchParams] = useSearchParams();

  const onClickPage = (e) => {
    const target = e.target.closest(".buttonClass");
    if (target) {
      const isPostButton = target.classList.contains("postButton");
      const isInfoButton = target.classList.contains("infoButton");

      if (isPostButton) {
        updatePageInfo("myPost", true);
        updatePageInfo("myInfo", false);
      } else if (isInfoButton) {
        updatePageInfo("myPost", false);
        updatePageInfo("myInfo", true);
      }

      const params = {};
      if (isPostButton) {
        params.myPost = "true";
        params.myInfo = "false";
      } else if (isInfoButton) {
        params.myPost = "false";
        params.myInfo = "true";
      }
      setSearchParams(params);
    }
  };

  return (
    <nav className="surface_secondary border_primary relative basis-[260px] border">
      <div className="border_disabled mx-[32px] border-b pt-[40px] pb-[28px]">
        <div className="flex flex-col items-center">
          <div className="mb-[12px]">
            <button
              aria-label="profile image"
              className="relative flex h-full w-full items-center justify-center rounded-full profile_image_button"
              type="button"
            >
              {/* 임시 이미지 */}
              <img
                alt="프로필 이미지"
                sizes="(max-width: 240px) 100vw, 240px"
                src={tempImage}
                data-nimg="fill"
                className="rounded-full profile_image"
                loading="lazy"
              />
              <div className="border_black_opacity absolute top-0 left-0 h-full w-full rounded-full border"></div>
            </button>
          </div>
          <h2 className="content_primary font_title_bold_md mb-[12px] text-center">
            유저 이름
          </h2>
        </div>
      </div>
      <ul className="px-[24px] py-[32px]">
        <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] false hover:surface_accent_light">
          <button
            onClick={onClickPage}
            className="flex grow items-center postButton buttonClass"
          >
            <PostMenu postState={page.myPost} />
            <span className="font_label_bold_xl block content_secondary">
              포스트
            </span>
          </button>
        </li>
        <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px]  hover:surface_accent_light">
          <button
            onClick={onClickPage}
            className="flex grow items-center infoButton buttonClass"
          >
            <MyInfo myInfoState={page.myInfo} />
            <span className="font_label_bold_xl block content_primary">
              내 정보
            </span>
          </button>
        </li>
      </ul>
    </nav>
  );
};

const PostMenu = ({ postState }) => {
  return (
    <>
      {!postState && (
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[24px] w-[24px] mr-[10px] content_secondary"
        >
          <path d="M15.078 3.137H8.6a5.6 5.6 0 0 0-5.6 5.6v6.8a5.6 5.6 0 0 0 5.6 5.6h6.8a5.6 5.6 0 0 0 5.6-5.6V8.944l-1.6 1.6v4.993a4 4 0 0 1-4 4H8.6a4 4 0 0 1-4-4v-6.8a4 4 0 0 1 4-4h4.878l1.6-1.6Z"></path>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="m20.692 7.116.534-.534a2.567 2.567 0 1 0-3.63-3.63L9.41 11.138l-1.103 3.74a.8.8 0 0 0 .994.993l3.74-1.103 6.52-6.52.005.004 1.13-1.132-.004-.004Zm-2.262 0-6.233 6.233-1.94.572.572-1.94 6.233-6.233 1.368 1.368Zm1.131-1.132-1.367-1.367.533-.534a.967.967 0 0 1 1.368 1.368l-.534.533Z"
          ></path>
        </svg>
      )}
      {postState && (
        <svg
          viewBox="0 0 24 25"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[24px] w-[24px] mr-[10px] content_accent_active"
        >
          <path d="M21.38 2.768a1.726 1.726 0 0 0-2.441 0L17.807 3.9l2.442 2.441L21.38 5.21a1.727 1.727 0 0 0 0-2.441ZM19.141 7.449 16.7 5.007l-6.542 6.541-1.193 2.573c-.314.676.386 1.376 1.062 1.062L12.6 13.99l6.541-6.541Z"></path>
          <path d="M16.015 3.233A5.662 5.662 0 0 0 15.4 3.2H8.6A5.6 5.6 0 0 0 3 8.8v6.8a5.6 5.6 0 0 0 5.6 5.6h6.8a5.6 5.6 0 0 0 5.6-5.6V8.8c0-.247-.016-.49-.047-.729l-7.397 7.075a.447.447 0 0 1-.127.086l-2.764 1.228a2.281 2.281 0 0 1-3.034-2.959l.915-2.205a4.805 4.805 0 0 1 1.02-1.536l6.449-6.527Z"></path>
        </svg>
      )}
    </>
  );
};

const MyInfo = ({ myInfoState }) => {
  return (
    <>
      {!myInfoState && (
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[24px] w-[24px] mr-[10px] content_secondary"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.4 4.4H8.8a4.4 4.4 0 0 0-4.4 4.4v6.6a4.4 4.4 0 0 0 4.4 4.4h6.6a4.4 4.4 0 0 0 4.4-4.4V8.8a4.4 4.4 0 0 0-4.4-4.4ZM8.8 2.8a6 6 0 0 0-6 6v6.6a6 6 0 0 0 6 6h6.6a6 6 0 0 0 6-6V8.8a6 6 0 0 0-6-6H8.8Z"
          ></path>
          <path d="M12.2 12.5a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM12.2 16.4c2.21 0 4-.672 4-1.5s-1.79-1.5-4-1.5-4 .672-4 1.5 1.79 1.5 4 1.5Z"></path>
        </svg>
      )}
      {myInfoState && (
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[24px] w-[24px] mr-[10px] content_accent_active"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.8 2.8a6 6 0 0 0-6 6v6.6a6 6 0 0 0 6 6h6.6a6 6 0 0 0 6-6V8.8a6 6 0 0 0-6-6H8.8Zm5.65 7.45a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm1.75 4.65c0 .828-1.79 1.5-4 1.5-2.209 0-4-.672-4-1.5s1.791-1.5 4-1.5c2.21 0 4 .672 4 1.5Z"
          ></path>
        </svg>
      )}
    </>
  );
};

export default SideBar;
