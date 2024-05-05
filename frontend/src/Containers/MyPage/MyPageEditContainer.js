import React from "react";

const MyPageEditContainer = () => {
  return (
    <>
      <div className="flex h-screen flex-col">
        <nav className="sticky top-0 left-0 surface_primary_inverse z-20 flex h-[56px] w-full shrink-0 items-center justify-between px-[16px] lg:h-[58px] lg:px-[32px]">
          <div>
            <div className="flex items-center">
              <a href="/">
                <svg
                  viewBox="0 0 32 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="content_primary_inverse w-[31px] lg:hidden"
                >
                  <path d="M21.96 15.796h9.232A15.592 15.592 0 0 0 .059 14.55c-.011.116-.019.234-.027.351v.105c-.013.21-.022.423-.022.637v.154h9.957c0-2.987-2.228-5.412-4.978-5.412a4.755 4.755 0 0 0-3.41 1.473c1.051-1.346 2.63-2.203 4.395-2.203 3.165 0 5.725 2.75 5.725 6.142h7.562v-.154c0-5.7-4.31-10.321-9.629-10.321a9.085 9.085 0 0 0-4.62 1.266 10.976 10.976 0 0 1 16.949 9.21v-.003Z"></path>
                </svg>
                <svg
                  viewBox="0 0 115 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="content_primary_inverse hidden w-[96px] lg:block"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M98.073 1.695a1.695 1.695 0 1 1 1.695 1.695 1.687 1.687 0 0 1-1.695-1.695Zm2.967 2.863v11.23h-2.539V4.556l2.539.002Zm-7.842 11.23h2.544V.102h-2.544v5.725h-.042a4.791 4.791 0 0 0-3.517-1.483c-2.925 0-5.214 2.332-5.214 5.828 0 3.496 2.29 5.827 5.214 5.827a4.79 4.79 0 0 0 3.517-1.483h.042v1.272Zm-3.054-2.162c-1.737 0-3.093-1.4-3.093-3.454 0-2.056 1.355-3.455 3.093-3.455 1.739 0 3.094 1.4 3.094 3.455s-1.356 3.454-3.094 3.454Zm-45.282 2.373c-3.709 0-6.167-1.867-6.336-4.978h2.925c.317 1.906 1.653 2.584 3.327 2.584 1.843 0 2.986-.847 2.986-1.927 0-1.376-1.604-1.75-3.542-2.202l-.462-.108C41.28 8.774 38.78 7.8 38.78 4.81c0-2.204 1.887-4.492 5.531-4.492 3.221 0 5.68 1.908 6.04 4.768h-2.884c-.296-1.292-1.207-2.374-3.094-2.374-1.674 0-2.839.827-2.839 1.93 0 1.49 1.468 1.83 3.482 2.298l.587.138c2.331.551 4.916 1.42 4.916 4.344 0 2.86-2.31 4.576-5.658 4.576Zm11.59-9.155v5.02c0 1.526.933 1.759 1.675 1.759.405.003.805-.091 1.166-.275v2.288c-.46.18-.948.272-1.441.276-2.14 0-3.942-1.06-3.942-4.108v-4.96h-2.328V4.556h2.33V1.32h2.543v3.236h2.843v2.288h-2.845Zm14.814 5.532h-2.739c-.516 1.113-1.329 1.377-2.516 1.377-1.441 0-2.712-.954-2.903-2.755h8.304c0-4.539-2.648-6.654-5.615-6.654-3.052 0-5.446 2.332-5.446 5.828 0 3.496 2.4 5.827 5.636 5.827 2.268 0 4.532-1.048 5.279-3.623Zm-2.67-3.328h-5.51c.277-1.415 1.42-2.437 2.756-2.437 1.335 0 2.479 1.018 2.754 2.437Zm14.135 6.74h-2.5a17.563 17.563 0 0 1-.063-1.442h-.044C79.107 15.597 77.837 16 76.564 16c-2.246 0-3.877-1.334-3.877-3.496 0-1.674 1.08-3.263 4.068-3.391 1.357-.064 3.327-.085 3.327-.085v-.571c0-1.378-1.144-2.035-2.331-2.035-1.188 0-2.097.657-2.24 1.695h-2.634c.125-2.395 2.098-3.772 4.895-3.772 2.819 0 4.854 1.76 4.854 4.408v3.39c0 2.035.02 2.946.105 3.645Zm-5.234-4.832c-1.59.085-2.183.678-2.183 1.505 0 .953.763 1.44 1.844 1.44 1.59 0 2.924-.975 2.924-2.628v-.423s-1.419.043-2.585.106Zm31.193-6.57c-3.242 0-5.742 2.522-5.742 5.807 0 3.289 2.498 5.805 5.741 5.805 3.243 0 5.744-2.521 5.744-5.805 0-3.285-2.501-5.808-5.743-5.808Zm.004 2.373c1.777 0 3.112 1.42 3.112 3.434 0 2.012-1.336 3.432-3.112 3.432s-3.111-1.419-3.111-3.432c0-2.014 1.334-3.434 3.111-3.434Z"
                  ></path>
                  <path d="M21.96 15.796h9.232A15.592 15.592 0 0 0 .059 14.55c-.011.116-.019.234-.027.351v.105c-.013.21-.022.423-.022.637v.154h9.957c0-2.987-2.228-5.412-4.978-5.412a4.755 4.755 0 0 0-3.41 1.473c1.051-1.346 2.63-2.203 4.395-2.203 3.165 0 5.725 2.75 5.725 6.142h7.562v-.154c0-5.7-4.31-10.321-9.629-10.321a9.085 9.085 0 0 0-4.62 1.266 10.976 10.976 0 0 1 16.949 9.21v-.003Z"></path>
                </svg>
              </a>
              <div className="content_primary_inverse font_body_regular_md mx-[10px]">
                |
              </div>
              <div className="content_primary_inverse font_body_regular_lg flex items-center">
                <span>Creator Center</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end">
            <div className="relative">
              <button className="surface_primary_active relative h-[32px] w-[32px] rounded-full">
                <img
                  alt="프로필 이미지"
                  sizes="10vw"
                  srcset="
              /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=64&amp;q=75     64w,
              /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=96&amp;q=75     96w,
              /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=128&amp;q=75   128w,
              /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=256&amp;q=75   256w,
              /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=384&amp;q=75   384w,
              /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=500&amp;q=75   500w,
              /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=768&amp;q=75   768w,
              /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75 1024w
            "
                  src="/_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=75"
                  decoding="async"
                  data-nimg="fill"
                  className="rounded-full profile_image_2"
                  loading="lazy"
                />
              </button>
            </div>
          </div>
        </nav>
        <div className="flex h-full overflow-hidden">
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
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] false hover:surface_accent_light">
                <a
                  className="flex grow items-center"
                  href="/creator-studio/community-category"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[24px] w-[24px] mr-[10px] content_secondary"
                  >
                    <path
                      d="M2 5.111C2 4.498 2.45 4 3.007 4h15.099c.556 0 1.006.498 1.006 1.111 0 .614-.45 1.112-1.006 1.112h-15.1C2.452 6.223 2 5.725 2 5.11ZM2 10.668c0-.614.45-1.111 1.007-1.111h10.946a6.53 6.53 0 0 0-2.418 2.223H3.007C2.45 11.78 2 11.282 2 10.668ZM10.503 15.114H3.007C2.45 15.114 2 15.61 2 16.225s.45 1.111 1.007 1.111h7.818a6.496 6.496 0 0 1-.322-2.222Z"
                      fill="#333334"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.945 12.347a.665.665 0 0 1 .306-.74l.833-.49a.665.665 0 0 1 .795.092l.46.437c.167.16.398.231.63.23a.892.892 0 0 0 .626-.24l.451-.445a.665.665 0 0 1 .794-.105l.84.476a.665.665 0 0 1 .32.735l-.15.616a.895.895 0 0 0 .116.66c.118.2.298.36.522.423l.61.169c.287.079.486.338.488.635l.008.965a.665.665 0 0 1-.477.644l-.608.179a.892.892 0 0 0-.513.43.898.898 0 0 0-.105.663l.159.614a.665.665 0 0 1-.307.74l-.832.49a.665.665 0 0 1-.795-.092l-.46-.437a.898.898 0 0 0-.63-.23.893.893 0 0 0-.626.24l-.452.445a.665.665 0 0 1-.794.105l-.84-.476a.665.665 0 0 1-.319-.734l.15-.618a.894.894 0 0 0-.117-.66.894.894 0 0 0-.52-.421l-.612-.17a.665.665 0 0 1-.488-.635l-.008-.965a.665.665 0 0 1 .477-.643l.608-.18a.892.892 0 0 0 .514-.43.898.898 0 0 0 .105-.663l-.159-.614Zm3.115 4.279a1.283 1.283 0 1 0 0-2.567 1.283 1.283 0 0 0 0 2.567Z"
                      fill="#333334"
                    ></path>
                  </svg>
                  <span className="font_label_bold_xl block content_secondary">
                    커뮤니티 카테고리
                  </span>
                </a>
              </li>
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] false hover:surface_accent_light">
                <a
                  className="flex grow items-center"
                  href="/creator-studio/member-management"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[24px] w-[24px] mr-[10px] content_secondary"
                  >
                    <path d="M8.5 11.7h2a6.057 6.057 0 0 1 1.769.265 6.51 6.51 0 0 0-.888 1.335H8.5a4.4 4.4 0 0 0-4.4 4.4v1c0 .22.18.4.4.4h6.881c.295.59.677 1.129 1.129 1.6H4.5a2 2 0 0 1-2-2v-1a6 6 0 0 1 6-6Z"></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.5 10.2a3.502 3.502 0 0 1 0-7 3.5 3.5 0 1 1 0 7Zm1.9-3.5a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0ZM13.945 13.147a.665.665 0 0 1 .306-.74l.833-.49a.665.665 0 0 1 .795.092l.46.437c.167.16.398.231.63.23a.892.892 0 0 0 .626-.24l.451-.445a.665.665 0 0 1 .794-.105l.84.476a.665.665 0 0 1 .32.735l-.15.616a.895.895 0 0 0 .116.66c.118.2.298.36.522.423l.61.168c.287.08.486.339.488.636l.008.965a.665.665 0 0 1-.477.644l-.608.179a.892.892 0 0 0-.513.43.898.898 0 0 0-.105.663l.159.614a.665.665 0 0 1-.307.74l-.832.49a.665.665 0 0 1-.795-.092l-.46-.437a.898.898 0 0 0-.63-.23.893.893 0 0 0-.626.24l-.452.445a.665.665 0 0 1-.794.105l-.84-.476a.665.665 0 0 1-.319-.735l.15-.617a.894.894 0 0 0-.117-.66.894.894 0 0 0-.52-.421l-.612-.17a.665.665 0 0 1-.488-.635l-.008-.965a.665.665 0 0 1 .477-.644l.608-.179a.892.892 0 0 0 .514-.43.898.898 0 0 0 .105-.663l-.159-.614Zm3.115 4.278a1.283 1.283 0 1 0 0-2.566 1.283 1.283 0 0 0 0 2.566Z"
                    ></path>
                  </svg>
                  <span className="font_label_bold_xl block content_secondary">
                    멤버
                  </span>
                </a>
              </li>
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] false hover:surface_accent_light">
                <a
                  className="flex grow items-center"
                  href="/creator-studio/post-sale-management"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[24px] w-[24px] mr-[10px] content_secondary"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="m21.226 6.582-.534.534.005.004-1.131 1.131-.005-.004-6.52 6.52-3.74 1.104a.8.8 0 0 1-.994-.994l1.103-3.74 8.186-8.185a2.567 2.567 0 1 1 3.63 3.63Zm-9.03 6.766 6.234-6.232-1.368-1.368-6.233 6.233-.572 1.94 1.94-.572Zm5.998-8.731 1.367 1.367.534-.533a.967.967 0 0 0-1.368-1.368l-.533.534ZM8.6 3.137h6.478l-1.6 1.6H8.6a4 4 0 0 0-4 4v6.8a4 4 0 0 0 4 4h4.498a5.46 5.46 0 0 0 .574 1.6H8.6a5.6 5.6 0 0 1-5.6-5.6v-6.8a5.6 5.6 0 0 1 5.6-5.6ZM21 13.6V8.943l-1.6 1.6v2.53a5.461 5.461 0 0 1 1.6.527ZM17.959 14.446a.617.617 0 0 1 .593-.446h.896c.276 0 .518.182.594.446l.161.563c.06.207.211.373.398.48a.828.828 0 0 0 .612.103l.572-.143a.618.618 0 0 1 .684.29l.448.773c.138.238.101.538-.09.735l-.646.665c.012.111.018.224.018.338 0 .215.068.427.218.58l.41.423a.614.614 0 0 1 .09.735l-.448.774a.618.618 0 0 1-.684.289l-.572-.143a.828.828 0 0 0-.612.102.834.834 0 0 0-.398.481l-.161.563a.617.617 0 0 1-.594.446h-.896a.617.617 0 0 1-.593-.446l-.162-.563a.834.834 0 0 0-.397-.48.828.828 0 0 0-.613-.103l-.572.143a.618.618 0 0 1-.684-.29l-.448-.773a.614.614 0 0 1 .09-.735l.411-.423a.825.825 0 0 0 .218-.58.825.825 0 0 0-.218-.58l-.41-.423a.614.614 0 0 1-.091-.735l.448-.774a.618.618 0 0 1 .684-.289l.572.143a.828.828 0 0 0 .613-.102.834.834 0 0 0 .397-.481l.162-.563ZM19 19.744c.78 0 1.41-.63 1.41-1.406 0-.777-.63-1.406-1.41-1.406-.78 0-1.411.63-1.411 1.406 0 .776.632 1.406 1.41 1.406Z"
                      fill="#000"
                    ></path>
                  </svg>
                  <span className="font_label_bold_xl block content_secondary">
                    포스트 판매
                  </span>
                </a>
              </li>
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] false hover:surface_accent_light">
                <a
                  className="flex grow items-center"
                  href="/creator-studio/coupon-management"
                >
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[24px] w-[24px] mr-[10px] content_secondary"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22 8.942c0 .513-.24.996-.649 1.304A2.188 2.188 0 0 0 20.477 12c0 .716.34 1.351.874 1.754.409.308.649.79.649 1.304v.968A3.967 3.967 0 0 1 18.04 20H5.96A3.967 3.967 0 0 1 2 16.026v-.968c0-.513.24-.996.649-1.304A2.188 2.188 0 0 0 3.523 12c0-.716-.34-1.351-.874-1.754A1.633 1.633 0 0 1 2 8.942v-.967A3.967 3.967 0 0 1 5.96 4h12.08C20.228 4 22 5.78 22 7.975v.967ZM5.96 5.631a2.34 2.34 0 0 0-2.336 2.344v.967A3.82 3.82 0 0 1 5.147 12a3.82 3.82 0 0 1-1.523 3.058v.968a2.34 2.34 0 0 0 2.335 2.343h12.082a2.34 2.34 0 0 0 2.335-2.343v-.968A3.82 3.82 0 0 1 18.853 12c0-1.25.598-2.36 1.523-3.058v-.967A2.34 2.34 0 0 0 18.04 5.63H5.959Z"
                      fill="#333334"
                    ></path>
                    <path
                      d="M16.112 14.066c0 .751-.606 1.36-1.354 1.36a1.356 1.356 0 0 1-1.353-1.36c0-.75.606-1.358 1.353-1.358.748 0 1.354.608 1.354 1.358ZM10.697 9.537c0 .75-.606 1.359-1.353 1.359A1.356 1.356 0 0 1 7.99 9.537c0-.75.606-1.359 1.354-1.359.747 0 1.353.609 1.353 1.36ZM13.957 8.728a.772.772 0 0 1 1.095 0 .78.78 0 0 1 0 1.1l-5.419 5.44a.773.773 0 0 1-1.095 0 .78.78 0 0 1 0-1.1l5.419-5.44Z"
                      fill="#333334"
                    ></path>
                  </svg>
                  <span className="font_label_bold_xl block content_secondary">
                    쿠폰
                  </span>
                </a>
              </li>
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] false hover:surface_accent_light">
                <a
                  className="flex grow items-center"
                  href="/creator-studio/earnings"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[24px] w-[24px] mr-[10px] content_secondary"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15.3 4.3H8.7a4.4 4.4 0 0 0-4.4 4.4v6.6a4.4 4.4 0 0 0 4.4 4.4h6.6a4.4 4.4 0 0 0 4.4-4.4V8.7a4.4 4.4 0 0 0-4.4-4.4ZM8.7 2.7a6 6 0 0 0-6 6v6.6a6 6 0 0 0 6 6h6.6a6 6 0 0 0 6-6V8.7a6 6 0 0 0-6-6H8.7Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.874 14.516c.129.434.543.734 1.014.734.474 0 .89-.303 1.016-.74l.724-2.501h.66l.724 2.501c.126.437.542.74 1.015.74.472 0 .886-.3 1.015-.734l.743-2.507h.6c.34 0 .615-.264.615-.59a.603.603 0 0 0-.615-.589h-.252l.274-.925c.135-.454-.221-.905-.714-.905a.737.737 0 0 0-.72.539l-.338 1.291h-1.409l-.3-1.113A.992.992 0 0 0 11.96 9a.99.99 0 0 0-.967.721l-.295 1.11H9.283l-.339-1.293A.738.738 0 0 0 8.224 9c-.494 0-.85.451-.715.906l.274.924h-.168a.603.603 0 0 0-.615.59c0 .325.276.589.615.589h.516l.743 2.507Zm.718-2.507h.793l-.368 1.388h-.06l-.365-1.388Zm4.32 1.365-.368-1.365h.783l-.356 1.365h-.06Z"
                    ></path>
                  </svg>
                  <span className="font_label_bold_xl block content_secondary">
                    정산
                  </span>
                </a>
              </li>
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] false hover:surface_accent_light">
                <a className="flex grow items-center" href="/creator-studio/club">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 -3 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[24px] w-[24px] mr-[10px] content_secondary"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17 3.7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.6 0a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0ZM8.6 4.599a2.6 2.6 0 1 1-5.2 0 2.6 2.6 0 0 1 5.2 0Zm-1.4 0a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0ZM6.8 13.4a4.8 4.8 0 0 1 4.8-4.8h4a4.8 4.8 0 0 1 4.8 4.8v2a2.8 2.8 0 0 1-2.8 2.8h-8a2.8 2.8 0 0 1-2.8-2.8v-2Zm4.8-3.2a3.2 3.2 0 0 0-3.2 3.2v2a1.2 1.2 0 0 0 1.2 1.2h8a1.2 1.2 0 0 0 1.2-1.2v-2a3.2 3.2 0 0 0-3.2-3.2h-4Z"
                      fill="#333334"
                    ></path>
                    <path
                      d="M3.6 16.6h1.61c.07.705.507 1.303 1.117 1.6H3.6a2.8 2.8 0 0 1-2.8-2.8v-2a4.8 4.8 0 0 1 4.8-4.8h2.346a4.01 4.01 0 0 0-2.088 1.6H5.6a3.2 3.2 0 0 0-3.2 3.2v2a1.2 1.2 0 0 0 1.2 1.2Z"
                      fill="#333334"
                    ></path>
                  </svg>
                  <span className="font_label_bold_xl block content_secondary">
                    클럽
                  </span>
                </a>
              </li>
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] false hover:surface_accent_light">
                <a
                  className="flex grow items-center"
                  href="/creator-studio/memberships"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[24px] w-[24px] mr-[10px] content_secondary"
                  >
                    <path d="M8.892 9.13a.5.5 0 0 0-.862 0l-.576.977a.5.5 0 0 1-.33.236l-1.112.228a.5.5 0 0 0-.266.83l.748.806a.5.5 0 0 1 .13.394l-.12 1.092a.5.5 0 0 0 .697.513l1.06-.462a.5.5 0 0 1 .4 0l1.06.462a.5.5 0 0 0 .697-.513l-.12-1.092a.5.5 0 0 1 .13-.395l.748-.805a.5.5 0 0 0-.267-.83l-1.11-.228a.5.5 0 0 1-.33-.236l-.577-.977ZM18.108 10.3a.7.7 0 0 1-.7.7h-3.732a.7.7 0 1 1 0-1.4h3.732a.7.7 0 0 1 .7.7ZM17.408 14a.7.7 0 1 0 0-1.4h-3.732a.7.7 0 1 0 0 1.4h3.732Z"></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.2 8.4A4.4 4.4 0 0 1 6.6 4h10.7a4.4 4.4 0 0 1 4.4 4.4v6.8a4.4 4.4 0 0 1-4.4 4.4H6.6a4.4 4.4 0 0 1-4.4-4.4V8.4Zm4.4-2.8h10.7a2.8 2.8 0 0 1 2.8 2.8v6.8a2.8 2.8 0 0 1-2.8 2.8H6.6a2.8 2.8 0 0 1-2.8-2.8V8.4a2.8 2.8 0 0 1 2.8-2.8Z"
                    ></path>
                  </svg>
                  <span className="font_label_bold_xl block content_secondary">
                    멤버십
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
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] false hover:surface_accent_light">
                <a
                  className="flex grow items-center"
                  href="/creator-studio/account-setting"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[24px] w-[24px] mr-[10px] content_secondary"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.123 13.575a1.8 1.8 0 1 0 .113-3.599 1.8 1.8 0 0 0-.113 3.599Zm-.05 1.599a3.4 3.4 0 1 0 .213-6.797 3.4 3.4 0 0 0-.213 6.797Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.916 5.077a.543.543 0 0 0-.245.606l.332 1.236c.186.694.03 1.387-.274 1.935-.305.552-.81 1.048-1.497 1.257l-1.225.372a.543.543 0 0 0-.385.529l.034 1.95a.543.543 0 0 0 .402.514l1.24.331c.692.186 1.213.664 1.537 1.203.324.54.501 1.225.339 1.924l-.29 1.249a.543.543 0 0 0 .265.597l1.705.946c.212.117.476.08.647-.091l.905-.906c.508-.508 1.182-.72 1.813-.73.627-.01 1.312.177 1.837.668l.934.874a.543.543 0 0 0 .65.069l1.672-1.004a.543.543 0 0 0 .245-.606l-.332-1.236c-.187-.694-.03-1.387.273-1.935.306-.552.81-1.047 1.497-1.256l1.224-.373a.543.543 0 0 0 .385-.528l-.033-1.95a.543.543 0 0 0-.403-.515l-1.236-.33c-.694-.186-1.216-.664-1.54-1.204-.324-.54-.501-1.226-.339-1.925l.29-1.247a.543.543 0 0 0-.266-.597l-1.705-.946a.543.543 0 0 0-.647.09l-.904.906c-.508.508-1.182.72-1.813.73-.626.01-1.311-.177-1.836-.668l-.935-.874a.543.543 0 0 0-.65-.069L6.916 5.077Zm-1.79 1.02c-.249-.923.146-1.9.966-2.392l1.671-1.003a2.143 2.143 0 0 1 2.567.272l.934.874c.159.148.41.242.719.237.306-.005.551-.106.706-.261l.904-.906a2.143 2.143 0 0 1 2.556-.36l1.704.946a2.143 2.143 0 0 1 1.048 2.359l-.29 1.247c-.049.213-.005.476.153.74.158.262.37.425.58.481l1.237.33a2.143 2.143 0 0 1 1.59 2.034l.033 1.95a2.143 2.143 0 0 1-1.519 2.086l-1.224.372c-.21.064-.414.232-.563.5-.15.27-.184.537-.128.746l.332 1.236c.248.924-.146 1.9-.967 2.393l-1.671 1.003a2.143 2.143 0 0 1-2.566-.271l-.935-.874c-.158-.149-.41-.243-.719-.238-.306.005-.551.107-.706.262l-.905.906a2.143 2.143 0 0 1-2.555.359l-1.705-.946a2.143 2.143 0 0 1-1.048-2.358l.29-1.25c.05-.212.006-.475-.151-.737-.158-.263-.37-.425-.58-.48l-1.239-.332a2.143 2.143 0 0 1-1.589-2.033l-.033-1.95A2.143 2.143 0 0 1 3.54 8.953l1.225-.373c.21-.064.415-.232.563-.5.15-.27.185-.537.128-.746l-.331-1.236Z"
                    ></path>
                  </svg>
                  <span className="font_label_bold_xl block content_secondary">
                    크리에이터 설정
                  </span>
                </a>
              </li>
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] hover:surface_accent_light">
                <a
                  className="flex grow items-center justify-between"
                  href="https://steadio.zendesk.com/hc/ko"
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="content_secondary font_label_bold_xl flex items-center">
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="content_secondary mr-[12px] h-[24px] w-[24px]"
                    >
                      <path d="M10.457 8.471a1.494 1.494 0 1 1 2.988 0 1.494 1.494 0 0 1-2.988 0ZM10.955 11.459c0-.275.223-.498.498-.498h.996c.275 0 .498.223.498.498v4.979a.498.498 0 0 1-.498.498h-.996a.498.498 0 0 1-.498-.498v-4.98Z"></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.951 20.117a8.166 8.166 0 1 0 0-16.333 8.166 8.166 0 0 0 0 16.333Zm0 1.792c5.5 0 9.959-4.458 9.959-9.958S17.45 1.99 11.95 1.99s-9.959 4.46-9.959 9.96c0 5.5 4.459 9.958 9.959 9.958Z"
                      ></path>
                    </svg>
                    헬프센터
                  </div>
                  <svg
                    viewBox="0 0 11 12"
                    xmlns="http://www.w3.org/2000/svg"
                    className="content_quaternary h-[16px] w-[16px]"
                  >
                    <path d="M4.834 2.667A.667.667 0 0 0 4.167 2h-4v9.333H9.5v-4a.667.667 0 0 0-1.333 0V10H1.5V3.333h2.667a.667.667 0 0 0 .667-.666Z"></path>
                    <path d="M10.173.552h.66V4.99a.667.667 0 0 1-1.333 0V2.828L5.972 6.357a.667.667 0 0 1-.943-.943l3.528-3.528H6.396a.667.667 0 0 1 0-1.334h3.777Z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <div className="shrink-0 grow basis-0 overflow-x-auto">
            <div className="mx-auto grid w-desktop-grid grid-cols-12 gap-x-[16px] gap-y-0 pb-[64px]">
              <div className="col-span-full">
                <div className="surface_primary sticky top-0 z-10">
                  <div className="border_black_opacity col-span-full border-b pt-[41px] pb-[26px]">
                    <div className="flex justify-between">
                      <h3 className="content_primary font_headline_bold_lg">
                        내 스튜디오
                      </h3>
                      <div className="flex">
                        <button
                          aria-label="button"
                          className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] false disabled:content_disabled"
                          type="button"
                        >
                          <div className="flex items-center justify-center">
                            <div>스튜디오 샘플</div>
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="ml-[4px] shrink-0"
                              height="10px"
                              width="10px"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.27 8.42a1.076 1.076 0 0 1 1.587-.13L12 14.832l7.143-6.544a1.076 1.076 0 0 1 1.586.13 1.26 1.26 0 0 1-.122 1.696L12 18l-8.607-7.885A1.26 1.26 0 0 1 3.27 8.42Z"
                              ></path>
                            </svg>
                          </div>
                        </button>
                        <div className="ml-[12px] w-[88px]">
                          <button
                            aria-label="button"
                            className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[16px] w-full false disabled:content_disabled"
                            type="button"
                          >
                            수정
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mx-auto grid w-desktop-grid grid-cols-12 gap-x-[16px] gap-y-0 pb-[64px]">
                    <div className="col-span-3 pt-[48px] mobile:pt-[56px] pb-[20px] mobile:pb-[40px]">
                      <div className="w-[297px]">
                        <div className="mb-[7px] flex items-center">
                          <strong className="content_primary font_title_bold_md mr-[6px]">
                            프로필 사진
                          </strong>
                        </div>
                        <span className="content_secondary font_body_regular_md">
                          크리에이터를 대표하는 프로필 사진을 등록 해주세요.
                        </span>
                      </div>
                    </div>
                    <div className="col-span-7 col-start-6 mobile:pt-[56px] pb-[40px]">
                      <div className="flex">
                        <div className="relative mr-[32px] flex h-[96px] min-w-[96px] items-center justify-center">
                          <img
                            alt="프로필 이미지"
                            sizes="100vw"
                            srcset="
                        /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=500&amp;q=100   500w,
                        /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=768&amp;q=100   768w,
                        /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=100 1024w
                      "
                            src="/_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fprofiles%2F64cbbe30-9f2b-4957-8c4d-47b9660d2f21%2FprofileImage%2Fee000ebf-015d-4a6d-a30e-1536049c0ef0.jpg%3Fauto%3Dformat%252Ccompress%26fm%3Djpg%26h%3D300%26lossless%3Dtrue%26w%3D300&amp;w=1024&amp;q=100"
                            decoding="async"
                            data-nimg="fill"
                            className="rounded-full profile_image"
                            loading="lazy"
                          />
                        </div>
                        <div className="flex flex-col">
                          <div className="mb-[14px]">
                            <button
                              aria-label="button"
                              className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] false disabled:content_disabled"
                              type="button"
                            >
                              이미지 업로드
                              <label
                                aria-label="파일 첨부"
                                className="absolute top-0 left-0 z-[1] block block h-[100%] w-full cursor-pointer opacity-0"
                                for="fileInputprofile-upload"
                              >
                                <input
                                  accept="image/png,image/jpeg,image/jpg"
                                  className="hidden cursor-pointer"
                                  id="fileInputprofile-upload"
                                  type="file"
                                />
                              </label>
                            </button>
                          </div>
                          <p className="content_quaternary font_body_regular_md">
                            <span>파일 형식은 jpg 또는 png로,</span>
                            <br />
                            <span>
                              사이즈는 가로 200px, 세로 200px 이상으로
                              올려주세요.
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3 pt-[48px] mobile:pt-[56px] pb-[20px] mobile:pb-[40px]">
                      <div className="w-[297px]">
                        <div className="mb-[7px] flex items-center">
                          <strong className="content_primary font_title_bold_md mr-[6px]">
                            프로필 사진
                          </strong>
                        </div>
                        <span className="content_secondary font_body_regular_md">
                          크리에이터를 대표하는 프로필 사진을 등록 해주세요.
                        </span>
                      </div>
                    </div>
                    <div className="col-span-7 col-start-6 mobile:pt-[56px] pb-[40px]">
                      <main className="py-[20px] px-[16px]">
                        <div className="font_title_bold_lg">계정 설정</div>
                        <div className="mt-[20px] mb-[12px] w-full p-[16px] text-center">
                          <div className="content_quaternary font_label_bold_md mb-[8px]">
                            이메일 아이디
                          </div>
                          <div className="font_title_bold_lg">ailak@naver.com</div>
                        </div>
                        <div className="w-full">
                          <button
                            aria-label="button"
                            className="font_button_bold_md relative flex items-center justify-center flex justify-between py-[38px] px-[31px] h-[32px] rounded-[16px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] w-full false disabled:content_disabled"
                            type="button"
                          >
                            <div className="text-left">
                              <div className="font_title_bold_md">연락처</div>
                              <div className="content_quaternary font_label_regular_lg mt-[4px]">
                                010-5121-3284
                              </div>
                            </div>
                            <div className="content_accent font_button_bold_md">
                              변경
                            </div>
                          </button>
                        </div>
                      </main>
                    </div>
                    <hr className="border_secondary col-span-full w-full border-t-[1px]" />
                    <div className="col-span-3 pt-[40px] pb-[20px] mobile:pb-[40px]">
                      <div className="w-[297px]">
                        <div className="mb-[7px] flex items-center">
                          <strong className="content_primary font_title_bold_md mr-[6px]">
                            커버 사진
                          </strong>
                        </div>
                        <span className="content_secondary font_body_regular_md">
                          스튜디오 커버 사진을 등록해주세요.
                        </span>
                      </div>
                    </div>
                    <div className="col-span-7 col-start-6 mobile:pt-[40px] pb-[40px]">
                      <div className="surface_primary border_primary rounded-[8px] border p-[24px]">
                        <div className="relative mb-[16px] h-[196px] border border-dashed surface_secondary border_primary flex items-center justify-center">
                          <svg
                            viewBox="0 0 49 49"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-[48px] w-[48px] rounded-[8px] border-2 border-accent_100"
                          >
                            <path
                              d="M27.782 19.785c1.154-2.172 4.29-2.108 5.354.11l6.68 13.917c1.275 2.655-.66 5.731-3.606 5.731H9.882c-1.506 0-2.472-1.6-1.77-2.932l4.998-9.486a3 3 0 0 1 4.765-.733l4.192 4.151 5.715-10.758ZM19.067 15.543a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                              fill="#C2B8FF"
                            ></path>
                          </svg>
                        </div>
                        <div className="mb-[8px]">
                          <button
                            aria-label="button"
                            className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] false disabled:content_disabled"
                            type="button"
                          >
                            이미지 업로드
                            <label
                              aria-label="파일 첨부"
                              className="absolute top-0 left-0 z-[1] block block h-[100%] w-full cursor-pointer opacity-0"
                              for="fileInputimage-upload"
                            >
                              <input
                                accept="image/png,image/jpeg,image/jpg"
                                className="hidden cursor-pointer"
                                id="fileInputimage-upload"
                                type="file"
                              />
                            </label>
                          </button>
                        </div>
                        <p className="content_quaternary font_body_regular_md">
                          <span>파일 형식은 jpg 또는 png로,</span>
                          <br />
                          <span>
                            사이즈는 가로 800px, 세로 296px로 올려주세요.
                          </span>
                        </p>
                      </div>
                    </div>
                    <hr className="border_secondary col-span-full w-full border-t-[1px]" />
                    <div className="col-span-3 pt-[40px] pb-[20px] mobile:pb-[40px]">
                      <div className="w-[297px]">
                        <div className="mb-[7px] flex items-center">
                          <strong className="content_primary font_title_bold_md mr-[6px]">
                            한 줄 소개
                          </strong>
                          <svg
                            viewBox="0 0 8 8"
                            xmlns="http://www.w3.org/2000/svg"
                            className="content_negative h-[8px] w-[8px]"
                          >
                            <circle cx="4" cy="4" r="4"></circle>
                          </svg>
                        </div>
                        <span className="content_secondary font_body_regular_md">
                          창작 분야 등의 간략한 소개글을 입력해주세요.
                        </span>
                      </div>
                    </div>
                    <div className="col-span-7 col-start-6 mobile:pt-[40px] pb-[40px]">
                      <div>
                        <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                          <input
                            className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                            placeholder="한 줄 소개를 입력해주세요."
                            type="text"
                            value="IT 위주의 제품 소개를 합니다"
                          />
                        </label>
                        <div className="font_label_regular_sm mt-[8px] flex content_quaternary">
                          <div className="ml-auto">17/50</div>
                        </div>
                      </div>
                    </div>
                    <hr className="border_secondary col-span-full w-full border-t-[1px]" />
                    <div className="col-span-3 pt-[40px] pb-[20px] mobile:pb-[40px]">
                      <div className="w-[297px]">
                        <div className="mb-[7px] flex items-center">
                          <strong className="content_primary font_title_bold_md mr-[6px]">
                            크리에이터 소개
                          </strong>
                          <svg
                            viewBox="0 0 8 8"
                            xmlns="http://www.w3.org/2000/svg"
                            className="content_negative h-[8px] w-[8px]"
                          >
                            <circle cx="4" cy="4" r="4"></circle>
                          </svg>
                        </div>
                        <span className="content_secondary font_body_regular_md">
                          어떤 창작 활동을 하시는지 상세한 소개글을
                          입력해주세요. 매력적인 소개글을 작성하여 멤버십 가입을
                          유도해보세요.
                        </span>
                      </div>
                    </div>
                    <div className="col-span-7 col-start-6 mobile:pt-[40px] pb-[40px]">
                      <div className="rounded-lg border border-[#e6e6e7] p-0">
                        <textarea
                          id="tiny-react_49165891681714579170311"
                          // style="display: none"
                          aria-hidden="true"
                        ></textarea>
                        <div
                          role="application"
                          className="tox tox-tinymce"
                          aria-disabled="false"
                          // style="visibility: hidden; height: 400px"
                        >
                          <div className="tox-editor-container">
                            <div
                              data-alloy-vertical-dir="toptobottom"
                              className="tox-editor-header"
                            >
                              <div
                                role="group"
                                className="tox-toolbar-overlord"
                                aria-disabled="false"
                              >
                                <div role="group" className="tox-toolbar__primary">
                                  <div
                                    title=""
                                    role="toolbar"
                                    data-alloy-tabstop="true"
                                    tabindex="-1"
                                    className="tox-toolbar__group"
                                  >
                                    <button
                                      aria-label="굵게"
                                      title="굵게"
                                      type="button"
                                      tabindex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                      // style="width: 34px"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap">
                                        <svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 0 1-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8Zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4Zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4Z"
                                            fill-rule="evenodd"
                                          ></path>
                                        </svg>
                                      </span>
                                    </button>
                                    <button
                                      aria-label="기울임체"
                                      title="기울임체"
                                      type="button"
                                      tabindex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                      // style="width: 34px"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap">
                                        <svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="m16.7 4.7-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8Z"
                                            fill-rule="evenodd"
                                          ></path>
                                        </svg>
                                      </span>
                                    </button>
                                    <button
                                      aria-label="글머리 기호 목록"
                                      title="글머리 기호 목록"
                                      type="button"
                                      tabindex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                      // style="width: 34px"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap">
                                        <svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M11 5h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0 6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2ZM4.5 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1Zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1Zm0 6c0-.4.1-.8.4-1 .3-.4.7-.5 1.1-.5.4 0 .8.1 1 .4.4.3.5.7.5 1.1 0 .4-.1.8-.4 1-.3.4-.7.5-1.1.5-.4 0-.8-.1-1-.4-.4-.3-.5-.7-.5-1.1Z"
                                            fill-rule="evenodd"
                                          ></path>
                                        </svg>
                                      </span>
                                    </button>
                                    <button
                                      aria-label="번호 매기기 목록"
                                      title="번호 매기기 목록"
                                      type="button"
                                      tabindex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                      // style="width: 34px"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap">
                                        <svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M10 17h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0-6h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 1 1 0-2ZM6 4v3.5c0 .3-.2.5-.5.5a.5.5 0 0 1-.5-.5V5h-.5a.5.5 0 0 1 0-1H6Zm-1 8.8.2.2h1.3c.3 0 .5.2.5.5s-.2.5-.5.5H4.9a1 1 0 0 1-.9-1V13c0-.4.3-.8.6-1l1.2-.4.2-.3a.2.2 0 0 0-.2-.2H4.5a.5.5 0 0 1-.5-.5c0-.3.2-.5.5-.5h1.6c.5 0 .9.4.9 1v.1c0 .4-.3.8-.6 1l-1.2.4-.2.3ZM7 17v2c0 .6-.4 1-1 1H4.5a.5.5 0 0 1 0-1h1.2c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.4a.4.4 0 1 1 0-.8h1.3c.2 0 .3-.1.3-.3 0-.2-.1-.3-.3-.3H4.5a.5.5 0 1 1 0-1H6c.6 0 1 .4 1 1Z"
                                            fill-rule="evenodd"
                                          ></path>
                                        </svg>
                                      </span>
                                    </button>
                                    <button
                                      aria-label="링크 삽입/편집"
                                      title="링크 삽입/편집"
                                      type="button"
                                      tabindex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      aria-pressed="false"
                                      // style="width: 34px"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap">
                                        <svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M6.2 12.3a1 1 0 0 1 1.4 1.4l-2 2a2 2 0 1 0 2.6 2.8l4.8-4.8a1 1 0 0 0 0-1.4 1 1 0 1 1 1.4-1.3 2.9 2.9 0 0 1 0 4L9.6 20a3.9 3.9 0 0 1-5.5-5.5l2-2Zm11.6-.6a1 1 0 0 1-1.4-1.4l2-2a2 2 0 1 0-2.6-2.8L11 10.3a1 1 0 0 0 0 1.4A1 1 0 1 1 9.6 13a2.9 2.9 0 0 1 0-4L14.4 4a3.9 3.9 0 0 1 5.5 5.5l-2 2Z"
                                            fill-rule="nonzero"
                                          ></path>
                                        </svg>
                                      </span>
                                    </button>
                                    <button
                                      type="button"
                                      tabindex="-1"
                                      className="tox-tbtn"
                                      aria-disabled="false"
                                      // style="width: 34px"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap">
                                        <svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            fill-rule="nonzero"
                                            d="m5 15.7 2.3-2.2c.3-.3.7-.3 1 0L11 16l5.1-5c.3-.4.8-.4 1 0l2 1.9V8H5v7.7ZM5 18V19h3l1.8-1.9-2-2L5 17.9Zm14-3-2.5-2.4-6.4 6.5H19v-4ZM4 6h16c.6 0 1 .4 1 1v13c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V7c0-.6.4-1 1-1Zm6 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4.5 4h15a.5.5 0 1 1 0 1h-15a.5.5 0 0 1 0-1Zm2-2h11a.5.5 0 1 1 0 1h-11a.5.5 0 0 1 0-1Z"
                                          ></path>
                                        </svg>
                                      </span>
                                    </button>
                                    <button
                                      aria-haspopup="true"
                                      type="button"
                                      tabindex="-1"
                                      unselectable="on"
                                      className="tox-tbtn tox-tbtn--select"
                                      aria-expanded="false"
                                      // style="user-select: none; width: 48px"
                                    >
                                      <span className="tox-icon tox-tbtn__icon-wrap">
                                        <svg
                                          width="24"
                                          height="24"
                                          focusable="false"
                                        >
                                          <path
                                            d="M4 3h16c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V4c0-.6.4-1 1-1Zm1 2v14h14V5H5Zm4.8 2.6 5.6 4a.5.5 0 0 1 0 .8l-5.6 4A.5.5 0 0 1 9 16V8a.5.5 0 0 1 .8-.4Z"
                                            fill-rule="nonzero"
                                          ></path>
                                        </svg>
                                      </span>
                                      <div className="tox-tbtn__select-chevron">
                                        <svg
                                          width="10"
                                          height="10"
                                          focusable="false"
                                        >
                                          <path
                                            d="M8.7 2.2c.3-.3.8-.3 1 0 .4.4.4.9 0 1.2L5.7 7.8c-.3.3-.9.3-1.2 0L.2 3.4a.8.8 0 0 1 0-1.2c.3-.3.8-.3 1.1 0L5 6l3.7-3.8Z"
                                            fill-rule="nonzero"
                                          ></path>
                                        </svg>
                                      </div>
                                    </button>
                                  </div>
                                </div>
                              </div>
                              <div className="tox-anchorbar"></div>
                            </div>
                            <div className="tox-sidebar-wrap">
                              <div className="tox-edit-area">
                                <iframe
                                  id="tiny-react_49165891681714579170311_ifr"
                                  frameborder="0"
                                  allowtransparency="true"
                                  title="서식 있는 텍스트 영역"
                                  className="tox-edit-area__iframe"
                                  srcdoc='<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /></head><body id="tinymce" className="mce-content-body creator-description editor" data-id="tiny-react_49165891681714579170311" aria-label="서식 있는 텍스트 영역. 도움말을 보려면 ALT-0을 누르십시오."><br></body></html>'
                                ></iframe>
                              </div>
                              <div role="presentation" className="tox-sidebar">
                                <div
                                  data-alloy-tabstop="true"
                                  tabindex="-1"
                                  className="tox-sidebar__slider tox-sidebar--sliding-closed"
                                  // style="width: 0px"
                                >
                                  <div className="tox-sidebar__pane-container"></div>
                                </div>
                              </div>
                            </div>
                            <div className="tox-bottom-anchorbar"></div>
                          </div>
                          <div
                            aria-hidden="true"
                            className="tox-view-wrap"
                            // style="display: none"
                          >
                            <div className="tox-view-wrap__slot-container"></div>
                          </div>
                          <div
                            aria-hidden="true"
                            className="tox-throbber"
                            // style="display: none"
                          ></div>
                        </div>
                        <div className="z-50 mt-[-30px] mr-3 flex justify-end p-2 text-[14px] text-[#222f3e] opacity-70">
                          0자
                        </div>
                      </div>
                      <div className="font_label_regular_sm mt-[8px] flex content_quaternary"></div>
                    </div>
                    <hr className="border_secondary col-span-full w-full border-t-[1px]" />
                    <div className="col-span-3 pt-[40px] pb-[20px] mobile:pb-[40px]">
                      <div className="w-[297px]">
                        <div className="mb-[7px] flex items-center">
                          <strong className="content_primary font_title_bold_md mr-[6px]">
                            SNS 계정
                          </strong>
                        </div>
                        <span className="content_secondary font_body_regular_md">
                          내 창작 활동을 소개할 만한 대표 SNS 계정을 입력해
                          주세요.
                        </span>
                      </div>
                    </div>
                    <div className="col-span-7 col-start-6 mobile:pt-[40px] pb-[40px]">
                      <div className="flex flex-col justify-between gap-y-[16px]">
                        <div>
                          <p className="content_primary font_label_bold_md mb-[8px]">
                            Instagram
                          </p>
                          <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                            <input
                              className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                              placeholder="URL 입력..."
                              type="text"
                              value=""
                            />
                          </label>
                        </div>
                        <div>
                          <p className="content_primary font_label_bold_md mb-[8px]">
                            Twitter
                          </p>
                          <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                            <input
                              className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                              placeholder="URL 입력..."
                              type="text"
                              value=""
                            />
                          </label>
                        </div>
                        <div>
                          <p className="content_primary font_label_bold_md mb-[8px]">
                            Youtube
                          </p>
                          <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                            <input
                              className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                              placeholder="URL 입력..."
                              type="text"
                              value=""
                            />
                          </label>
                        </div>
                        <div>
                          <p className="content_primary font_label_bold_md mb-[8px]">
                            Facebook
                          </p>
                          <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                            <input
                              className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                              placeholder="URL 입력..."
                              type="text"
                              value=""
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <hr className="border_secondary col-span-full w-full border-t-[1px]" />
                    <div className="col-span-3 pt-[40px] pb-[20px] mobile:pb-[40px]">
                      <div className="w-[297px]">
                        <div className="mb-[7px] flex items-center">
                          <strong className="content_primary font_title_bold_md mr-[6px]">
                            링크
                          </strong>
                        </div>
                        <span className="content_secondary font_body_regular_md">
                          나의 창작 활동과 연관된 링크를 아카이빙 해보세요.
                        </span>
                      </div>
                    </div>
                    <div className="col-span-7 col-start-6 mobile:pt-[40px] pb-[40px]">
                      <div className="surface_secondary border_disabled rounded-[8px] border p-[32px]">
                        <div className="xl:flex">
                          <div className="mb-[22px] flex items-center gap-x-[23px] xl:mb-0 xl:mr-[32px] xl:w-[136px] xl:flex-col xl:gap-x-0">
                            <div className="surface_primary border_disabled relative flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-[8px] border xl:mb-[12px]">
                              <svg
                                viewBox="0 0 49 49"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-[48px] w-[48px]"
                              >
                                <path
                                  d="M27.782 19.785c1.154-2.172 4.29-2.108 5.354.11l6.68 13.917c1.275 2.655-.66 5.731-3.606 5.731H9.882c-1.506 0-2.472-1.6-1.77-2.932l4.998-9.486a3 3 0 0 1 4.765-.733l4.192 4.151 5.715-10.758ZM19.067 15.543a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                                  fill="#C2B8FF"
                                ></path>
                              </svg>
                            </div>
                            <div className="shrink">
                              <div className="mb-[12px]">
                                <button
                                  aria-label="button"
                                  className="font_button_bold_md relative flex items-center justify-center h-[32px] rounded-[16px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] false disabled:content_disabled"
                                  type="button"
                                >
                                  링크 썸네일 업로드
                                  <label
                                    aria-label="파일 첨부"
                                    className="absolute top-0 left-0 z-[1] block block h-[100%] w-full cursor-pointer opacity-0"
                                    for="fileInputfile-thumbnail"
                                  >
                                    <input
                                      accept="image/png,image/jpeg,image/jpg"
                                      className="hidden cursor-pointer"
                                      id="fileInputfile-thumbnail"
                                      type="file"
                                    />
                                  </label>
                                </button>
                              </div>
                              <span className="content_quaternary font_body_regular_sm">
                                파일 형식은 jpg 또는 png로, 사이즈는 가로 200px,
                                세로 200px 이상으로 올려주세요.
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-grow flex-col">
                            <div className="mb-[12px]">
                              <div>
                                <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                                  <input
                                    className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                                    placeholder="링크 제목 입력"
                                    type="text"
                                    value=""
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="mb-[12px]">
                              <div>
                                <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
                                  <input
                                    className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
                                    placeholder="URL 입력"
                                    type="text"
                                    value=""
                                  />
                                </label>
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <button
                                aria-label="button"
                                className="font_button_bold_md relative flex items-center justify-center h-[32px] rounded-[16px] content_primary_inverse surface_accent hover:surface_accent_active active:surface_accent_active disabled:surface_disabled px-[16px] false disabled:content_disabled"
                                disabled=""
                                type="button"
                              >
                                링크 만들기
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageEditContainer;
