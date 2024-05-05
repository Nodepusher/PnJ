import React from "react";
import '../../style/MyPagePost.css'

const MyPagePostContainer = () => {
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
          <div className="flex items-center justify-end profile_image_2">
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
                  className="rounded-full"
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
                    aria-label="profile image profile_image_button"
                    className="relative flex h-full w-full items-center justify-center rounded-full"
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
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] surface_accent_light hover:surface_accent_light">
                <a className="flex grow items-center" href="/creator-studio/posts">
                  <svg
                    viewBox="0 0 24 25"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[24px] w-[24px] mr-[10px] content_accent_active"
                  >
                    <path d="M21.38 2.768a1.726 1.726 0 0 0-2.441 0L17.807 3.9l2.442 2.441L21.38 5.21a1.727 1.727 0 0 0 0-2.441ZM19.141 7.449 16.7 5.007l-6.542 6.541-1.193 2.573c-.314.676.386 1.376 1.062 1.062L12.6 13.99l6.541-6.541Z"></path>
                    <path d="M16.015 3.233A5.662 5.662 0 0 0 15.4 3.2H8.6A5.6 5.6 0 0 0 3 8.8v6.8a5.6 5.6 0 0 0 5.6 5.6h6.8a5.6 5.6 0 0 0 5.6-5.6V8.8c0-.247-.016-.49-.047-.729l-7.397 7.075a.447.447 0 0 1-.127.086l-2.764 1.228a2.281 2.281 0 0 1-3.034-2.959l.915-2.205a4.805 4.805 0 0 1 1.02-1.536l6.449-6.527Z"></path>
                  </svg>
                  <span className="font_label_bold_xl block content_primary">
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
              <li className="mb-[8px] flex h-[40px] items-center rounded-[8px] px-[12px] false hover:surface_accent_light">
                <a className="flex grow items-center" href="/creator-studio/page">
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
                  <span className="font_label_bold_xl block content_secondary">
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
                  <header className="flex items-center justify-between pt-[40px]">
                    <h1 className="content_primary font_headline_bold_lg">
                      포스트
                    </h1>
                    <div>
                      <div className="flex gap-[16px]">
                        <button
                          aria-label="button"
                          className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] false disabled:content_disabled"
                          type="button"
                        >
                          카테고리 편집
                        </button>
                        <button
                          aria-label="button"
                          className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[16px] false disabled:content_disabled"
                          type="button"
                        >
                          작성
                        </button>
                      </div>
                    </div>
                  </header>
                  <div className="mt-[26px]">
                    <ul className="border_black_opacity flex h-[36px] gap-x-[20px] border-b">
                      <li className="relative">
                        <button
                          aria-label="tab button"
                          className="font_label_bold_xl relative block h-full pb-[16px] text-left content_primary"
                          type="button"
                        >
                          <div className="flex">
                            <p className="font_label_bold_xl">게시완료</p>
                            <div className="ml-[8px] rounded-[25px] px-[8px] py-[2px] surface_tertiary">
                              <p className="font_label_bold_sm">0</p>
                            </div>
                          </div>
                        </button>
                        <div className="surface_primary_inverse absolute -bottom-[1.5px] h-[2px] w-full"></div>
                      </li>
                      <li className="relative">
                        <button
                          aria-label="tab button"
                          className="font_label_bold_xl relative block h-full pb-[16px] text-left content_disabled"
                          type="button"
                        >
                          <div>
                            <div className="flex">
                              <p className="font_label_bold_xl">임시보관</p>
                              <div className="ml-[8px] rounded-[25px] px-[8px] py-[2px] surface_disabled">
                                <p className="font_label_bold_sm">0</p>
                              </div>
                            </div>
                          </div>
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
                <div>
                  <div className="col-span-full">
                    <div className="flex items-center justify-between py-[12px]">
                      <div>
                        <span className="content_primary font_button_bold_md">
                          전체
                        </span>
                        <span className="content_accent font_button_bold_md ml-[4px]">
                          0
                        </span>
                      </div>
                      <div className="flex gap-x-[12px]">
                        <div className="relative">
                          <button
                            aria-label="filter"
                            className="surface_primary h-[32px] border px-[16px] py-[8px] border_black_opacity flex max-w-[164px] items-center rounded-[16px] outline-none"
                            type="button"
                          >
                            <span className="overflow-hidden content_secondary font_label_medium_lg text-ellipsis whitespace-nowrap">
                              카테고리 전체
                            </span>
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="shrink-0 ml-[4px] w-[10px] h-[10px]"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.27 8.42a1.076 1.076 0 0 1 1.587-.13L12 14.832l7.143-6.544a1.076 1.076 0 0 1 1.586.13 1.26 1.26 0 0 1-.122 1.696L12 18l-8.607-7.885A1.26 1.26 0 0 1 3.27 8.42Z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div className="relative">
                          <button
                            aria-label="filter"
                            className="surface_primary h-[32px] border px-[16px] py-[8px] border_black_opacity flex max-w-[164px] items-center rounded-[16px] outline-none"
                            type="button"
                          >
                            <span className="overflow-hidden content_secondary font_label_medium_lg text-ellipsis whitespace-nowrap">
                              공개범위 전체
                            </span>
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="shrink-0 ml-[4px] w-[10px] h-[10px]"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.27 8.42a1.076 1.076 0 0 1 1.587-.13L12 14.832l7.143-6.544a1.076 1.076 0 0 1 1.586.13 1.26 1.26 0 0 1-.122 1.696L12 18l-8.607-7.885A1.26 1.26 0 0 1 3.27 8.42Z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                        <div className="relative">
                          <button
                            aria-label="filter"
                            className="surface_primary h-[32px] border px-[16px] py-[8px] border_black_opacity flex max-w-[164px] items-center rounded-[16px] outline-none"
                            type="button"
                          >
                            <span className="overflow-hidden content_secondary font_label_medium_lg text-ellipsis whitespace-nowrap">
                              최신순
                            </span>
                            <svg
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              className="shrink-0 ml-[4px] w-[10px] h-[10px]"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M3.27 8.42a1.076 1.076 0 0 1 1.587-.13L12 14.832l7.143-6.544a1.076 1.076 0 0 1 1.586.13 1.26 1.26 0 0 1-.122 1.696L12 18l-8.607-7.885A1.26 1.26 0 0 1 3.27 8.42Z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-full mt-[88px] flex flex-col items-center justify-center">
                      <svg
                        viewBox="0 0 154 104"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-[104px] w-[154px]"
                      >
                        <g clip-path="url(#ImgEmptyPostPublished_svg__a)">
                          <rect
                            x="66.99"
                            y="12.34"
                            width="48"
                            height="48"
                            rx="6"
                            transform="rotate(-14.897 66.99 12.34)"
                            fill="#EDEDED"
                          ></rect>
                          <rect
                            x="106.234"
                            y="33.541"
                            width="48"
                            height="48"
                            rx="6"
                            transform="rotate(19.995 106.234 33.541)"
                            fill="#C1B6FF"
                          ></rect>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M132.471 56c-2.147.1-3.034 1.232-2.535 3.732.501 1.5 2.583 1.675 3.501 1 2.024-1.488 1.5-4.5-.966-4.732Zm-28.243 13.991c.631-.451 3.302-2.039 6.037-3.325 1.365-.642 2.698-1.186 3.77-1.477.539-.146.966-.216 1.274-.22a.971.971 0 0 1 .323.033c.935.848 1.494 2.433 1.805 4.018.151.766.234 1.474.284 1.997l.041.465a13.197 13.197 0 0 0 .038.391c.003.027.012.09.029.158.007.026.03.114.08.215a1.002 1.002 0 0 0 .898.554h.217l.198-.09c1.224-.558 2.28-1.073 3.237-1.54 1.321-.643 2.453-1.195 3.582-1.645 1.733-.69 3.318-1.071 5.258-1.016v.018c-.019.483-.174 1.212-.43 2.073-.508 1.702-1.317 3.606-1.751 4.422a1 1 0 0 0 1.766.94c.502-.945 1.36-2.975 1.901-4.79.268-.898.483-1.824.512-2.567.014-.36-.009-.795-.181-1.183a1.515 1.515 0 0 0-.469-.604 1.436 1.436 0 0 0-.786-.286c-2.505-.152-4.494.313-6.559 1.135-1.175.468-2.434 1.08-3.831 1.76a188.7 188.7 0 0 1-1.815.874 21.337 21.337 0 0 0-.256-1.667c-.324-1.646-.983-3.832-2.461-5.146-.492-.437-1.137-.526-1.656-.519-.546.007-1.156.122-1.772.29-1.239.337-2.695.937-4.098 1.597-2.801 1.317-5.586 2.964-6.348 3.508a1 1 0 0 0 1.163 1.627Z"
                            fill="#000"
                          ></path>
                          <path
                            d="M83.39 23.389a1 1 0 0 0 .514 1.933c3.087-.822 6.194-1.565 9.314-2.3.005.05.015.099.028.148.667 2.509 1.023 5.098 1.385 7.749l.008.061c.356 2.61.72 5.282 1.41 7.87a1 1 0 0 0 1.932-.514c-.656-2.467-1.007-5.035-1.369-7.688-.359-2.63-.729-5.343-1.433-7.992a1.003 1.003 0 0 0-.028-.088c3.528-.828 7.072-1.664 10.597-2.601a1 1 0 1 0-.514-1.933c-3.611.96-7.246 1.814-10.897 2.671l-.01.003c-3.643.855-7.301 1.714-10.937 2.68Z"
                            fill="#000"
                          ></path>
                          <rect
                            x="59.908"
                            y="26.256"
                            width="48"
                            height="48"
                            rx="6"
                            transform="rotate(103.548 59.908 26.256)"
                            fill="#F2F0FF"
                          ></rect>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M39.748 49.269a1 1 0 0 1-.659-1.252c1.459-4.699-.83-9.201-4.433-11.493-1.793-1.14-3.867-1.7-5.902-1.475-2.018.223-4.07 1.225-5.837 3.338-1.893 2.262-3.15 5.05-3.262 7.698-.111 2.598.868 5.11 3.562 7 1.804 1.265 4.912 2.05 7.806 1.787 2.891-.262 5.22-1.517 6.004-3.956a1 1 0 0 1 1.904.613c-1.136 3.529-4.446 5.037-7.727 5.335-3.28.298-6.88-.56-9.136-2.142-3.284-2.304-4.55-5.483-4.411-8.722.136-3.188 1.622-6.382 3.726-8.897 2.078-2.483 4.59-3.759 7.152-4.042 2.546-.281 5.07.425 7.194 1.775 4.228 2.69 7.042 8.068 5.27 13.774a1 1 0 0 1-1.251.659Z"
                            fill="#000"
                          ></path>
                          <path
                            d="M32.748 47.864c-1.134.339-2.652.49-4.137.732-.384.062-.716-.315-.614-.69.424-1.565.98-4.22 1.212-5.263.055-.25.26-.322.427-.128.777.903 2.588 3.535 3.344 4.645.177.26.07.614-.231.704Z"
                            fill="#000"
                          ></path>
                          <rect
                            x="30.004"
                            y="51.295"
                            width="48"
                            height="48"
                            rx="6"
                            transform="rotate(-16.873 30.004 51.295)"
                            fill="#A7EEFF"
                          ></rect>
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M63.077 58.445c-1.404-1.634-3.23-2.675-5.588-2.492-1.927.15-3.32.634-4.315 1.3a5.319 5.319 0 0 0-2.038 2.554c-.801 2.05-.6 4.736.142 7.4 1.031-.391 2.013.247 2.356 1.081a130.623 130.623 0 0 1 3.452 9.487c.243.761.019 1.81-.95 2.233-1.228.536-2.87.643-4.291.523a10.887 10.887 0 0 1-2.059-.362c-.584-.168-1.17-.408-1.608-.75-2.487-1.7-2.616-4.49-1.778-6.805.605-1.672 1.762-3.282 3.154-4.38a.997.997 0 0 1-.153-.314c-.824-2.873-1.182-6.144-.128-8.84.536-1.372 1.435-2.584 2.79-3.49 1.346-.9 3.09-1.462 5.271-1.631 3.145-.245 5.551 1.193 7.26 3.183 1.574 1.831 2.594 4.163 3.158 6.231 1.444.02 2.938.363 4.21.976 2.218 1.07 4.076 3.155 3.486 6.11-.074.55-.325 1.13-.626 1.66-.32.562-.742 1.147-1.218 1.698-.933 1.079-2.182 2.15-3.435 2.626-.988.374-1.881-.219-2.24-.933a130.602 130.602 0 0 1-4.164-9.197c-.346-.856-.07-2.034 1.004-2.45.306-.119.628-.216.96-.29-.523-1.778-1.401-3.672-2.652-5.128ZM51.827 69.15c-1.448.692-2.893 2.34-3.546 4.145-.669 1.846-.418 3.5 1.048 4.488l.037.025.034.028c.137.111.441.267.939.41.476.137 1.055.24 1.673.293 1.167.097 2.33 0 3.127-.286a128.89 128.89 0 0 0-3.313-9.103Zm19.266-3c-1.729-.833-3.914-1.001-5.433-.484a128.888 128.888 0 0 0 3.996 8.825c.77-.353 1.669-1.096 2.435-1.982a8.89 8.89 0 0 0 .992-1.379c.256-.45.364-.774.384-.95l.005-.043.01-.043c.357-1.732-.62-3.09-2.389-3.943Z"
                            fill="#000"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="ImgEmptyPostPublished_svg__a">
                            <path fill="#fff" d="M0 0h154v104H0z"></path>
                          </clipPath>
                        </defs>
                      </svg>
                      <p className="content_primary font_headline_bold_sm mt-[24px]">
                        게시 완료된 포스트가 없습니다.
                      </p>
                      <p className="content_quaternary font_body_regular_lg mt-[4px]">
                        지금 첫 포스트를 작성하고 게시해보세요.
                      </p>
                      <div className="mt-[24px]">
                        <button
                          aria-label="button"
                          className="font_button_bold_md relative flex items-center justify-center h-[32px] rounded-[16px] content_primary_inverse surface_accent hover:surface_accent_active active:surface_accent_active disabled:surface_disabled px-[16px] false disabled:content_disabled"
                          type="button"
                        >
                          포스트 작성하기
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
    </>
  );
};

export default MyPagePostContainer;
