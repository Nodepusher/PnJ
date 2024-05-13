import React from "react";

const SideBar = () => {
    return(
        <>
            <nav className="surface_secondary border_primary relative basis-[260px] border">
            <div className="border_disabled mx-[32px] border-b pt-[40px] pb-[28px]">
              <div className="flex flex-col items-center">
                <div className="mb-[12px]">
                  <button
                    aria-label="profile image"
                    className="relative flex h-full w-full items-center justify-center rounded-full profile_image_button"
                    type="button"
                  >
                    <img
                      alt="프로필 이미지"
                      sizes="(max-width: 240px) 100vw, 240px"
                      srcset="
                  /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=500&amp;q=75   500w,
                  /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=768&amp;q=75   768w,
                  /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75 1024w
                "
                      src="/_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75"
                      decoding="async"
                      data-nimg="fill"
                      className="rounded-full profile_image"
                      loading="lazy"
                    />
                    <div className="border_black_opacity absolute top-0 left-0 h-full w-full rounded-full border"></div>
                  </button>
                </div>
                <h2 className="content_primary font_title_bold_md mb-[12px] text-center">
                  황자현
                </h2>
                <a target="_blank" href="/creator/code">
                  <button
                    aria-label="button"
                    className="font_button_bold_md relative flex items-center justify-center h-[32px] rounded-[16px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] false disabled:content_disabled"
                    type="button"
                  >
                    <div className="flex items-center justify-center">
                      <div>내 스튜디오</div>
                      <svg
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-[4px] shrink-0"
                        height="16px"
                        width="16px"
                      >
                        <path d="M11 7a1 1 0 0 0-1-1H4v14h14v-6a1 1 0 1 0-2 0v4H6V8h4a1 1 0 0 0 1-1Z"></path>
                        <path d="M19.01 3.829H20v6.656a1 1 0 1 1-2 0V7.244l-5.293 5.293a1 1 0 0 1-1.414-1.415l5.293-5.292h-3.243a1 1 0 1 1 0-2H19.01Z"></path>
                      </svg>
                    </div>
                  </button>
                </a>
              </div>
            </div>
            <ul className="px-[24px] py-[32px]">
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] false hover:surface_accent_light">
                <a className="flex grow items-center" href="/creator-studio/posts">
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
                  <span className="font_label_bold_xl block content_secondary">
                    포스트
                  </span>
                </a>
              </li>
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] surface_accent_light hover:surface_accent_light">
                <a className="flex grow items-center" href="/creator-studio/page">
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
                  <span className="font_label_bold_xl block content_primary">
                    내 스튜디오
                  </span>
                </a>
              </li>
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] false hover:surface_accent_light">
                <a className="flex grow items-center" href="/creator-studio/info">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[24px] w-[24px] mr-[10px] content_secondary"
                  >
                    <path d="M5.5 7.8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM5.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 17.7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM10 5.4a1 1 0 0 0 0 2h10a1 1 0 1 0 0-2H10ZM9 12a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H10a1 1 0 0 1-1-1ZM10 16.6a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2H10Z"></path>
                  </svg>
                  <span className="font_label_bold_xl block content_secondary">
                    기본정보
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </>
    )
}

export default SideBar;