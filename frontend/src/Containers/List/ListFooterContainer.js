import React from "react";
import "../../style/List.css";
import "../../style/List2.css";

const ListFooterContainer = () => {
  return (
    <div className="mt-[56px] mobile:mt-[128px]">
      <footer className="surface_secondary sticky top-[100vh] mt-[48px] w-full mobile:mt-[80px]">
        <div className="mx-auto max-w-desktop-grid">
          <div className="hidden lg:block">
            <div className="pt-[40px] pb-[45px]">
              <div className="border_primary flex justify-between border-b pb-[28px]">
                <svg
                  viewBox="0 0 115 16"
                  xmlns="http://www.w3.org/2000/svg"
                  className="content_secondary h-[18px] w-[128px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M98.073 1.695a1.695 1.695 0 1 1 1.695 1.695 1.687 1.687 0 0 1-1.695-1.695Zm2.967 2.863v11.23h-2.539V4.556l2.539.002Zm-7.842 11.23h2.544V.102h-2.544v5.725h-.042a4.791 4.791 0 0 0-3.517-1.483c-2.925 0-5.214 2.332-5.214 5.828 0 3.496 2.29 5.827 5.214 5.827a4.79 4.79 0 0 0 3.517-1.483h.042v1.272Zm-3.054-2.162c-1.737 0-3.093-1.4-3.093-3.454 0-2.056 1.355-3.455 3.093-3.455 1.739 0 3.094 1.4 3.094 3.455s-1.356 3.454-3.094 3.454Zm-45.282 2.373c-3.709 0-6.167-1.867-6.336-4.978h2.925c.317 1.906 1.653 2.584 3.327 2.584 1.843 0 2.986-.847 2.986-1.927 0-1.376-1.604-1.75-3.542-2.202l-.462-.108C41.28 8.774 38.78 7.8 38.78 4.81c0-2.204 1.887-4.492 5.531-4.492 3.221 0 5.68 1.908 6.04 4.768h-2.884c-.296-1.292-1.207-2.374-3.094-2.374-1.674 0-2.839.827-2.839 1.93 0 1.49 1.468 1.83 3.482 2.298l.587.138c2.331.551 4.916 1.42 4.916 4.344 0 2.86-2.31 4.576-5.658 4.576Zm11.59-9.155v5.02c0 1.526.933 1.759 1.675 1.759.405.003.805-.091 1.166-.275v2.288c-.46.18-.948.272-1.441.276-2.14 0-3.942-1.06-3.942-4.108v-4.96h-2.328V4.556h2.33V1.32h2.543v3.236h2.843v2.288h-2.845Zm14.814 5.532h-2.739c-.516 1.113-1.329 1.377-2.516 1.377-1.441 0-2.712-.954-2.903-2.755h8.304c0-4.539-2.648-6.654-5.615-6.654-3.052 0-5.446 2.332-5.446 5.828 0 3.496 2.4 5.827 5.636 5.827 2.268 0 4.532-1.048 5.279-3.623Zm-2.67-3.328h-5.51c.277-1.415 1.42-2.437 2.756-2.437 1.335 0 2.479 1.018 2.754 2.437Zm14.135 6.74h-2.5a17.563 17.563 0 0 1-.063-1.442h-.044C79.107 15.597 77.837 16 76.564 16c-2.246 0-3.877-1.334-3.877-3.496 0-1.674 1.08-3.263 4.068-3.391 1.357-.064 3.327-.085 3.327-.085v-.571c0-1.378-1.144-2.035-2.331-2.035-1.188 0-2.097.657-2.24 1.695h-2.634c.125-2.395 2.098-3.772 4.895-3.772 2.819 0 4.854 1.76 4.854 4.408v3.39c0 2.035.02 2.946.105 3.645Zm-5.234-4.832c-1.59.085-2.183.678-2.183 1.505 0 .953.763 1.44 1.844 1.44 1.59 0 2.924-.975 2.924-2.628v-.423s-1.419.043-2.585.106Zm31.193-6.57c-3.242 0-5.742 2.522-5.742 5.807 0 3.289 2.498 5.805 5.741 5.805 3.243 0 5.744-2.521 5.744-5.805 0-3.285-2.501-5.808-5.743-5.808Zm.004 2.373c1.777 0 3.112 1.42 3.112 3.434 0 2.012-1.336 3.432-3.112 3.432s-3.111-1.419-3.111-3.432c0-2.014 1.334-3.434 3.111-3.434Z"
                  ></path>
                  <path d="M21.96 15.796h9.232A15.592 15.592 0 0 0 .059 14.55c-.011.116-.019.234-.027.351v.105c-.013.21-.022.423-.022.637v.154h9.957c0-2.987-2.228-5.412-4.978-5.412a4.755 4.755 0 0 0-3.41 1.473c1.051-1.346 2.63-2.203 4.395-2.203 3.165 0 5.725 2.75 5.725 6.142h7.562v-.154c0-5.7-4.31-10.321-9.629-10.321a9.085 9.085 0 0 0-4.62 1.266 10.976 10.976 0 0 1 16.949 9.21v-.003Z"></path>
                </svg>
                <div className="flex gap-x-[52px]">
                  <div className="content_secondary flex flex-col">
                    <h5 className="font_label_bold_xl mb-[8px]">스테디오</h5>
                    <a
                      className="false font_label_regular_lg mt-[8px]"
                      target="_blank"
                      href="/start"
                    >
                      크리에이터 시작
                    </a>
                    <a
                      className="false font_label_regular_lg mt-[8px]"
                      target="_blank"
                      href="/plans"
                    >
                      요금제
                    </a>
                    <a
                      className="false font_label_regular_lg mt-[8px]"
                      target="_blank"
                      href="https://static.steadio.co/static/docs/steadio_intro.pdf"
                    >
                      서비스 소개
                    </a>
                    <a
                      className="false font_label_regular_lg mt-[8px]"
                      target="_blank"
                      href="https://idus.notion.site/1c51157d3715410f9be9d22ddb0ce8cc"
                    >
                      공지사항
                    </a>
                  </div>
                  <div className="content_secondary flex flex-col">
                    <h5 className="font_label_bold_xl mb-[8px]">이용안내</h5>
                    <a
                      className="false font_label_regular_lg mt-[8px]"
                      target="_blank"
                      href="https://steadio.zendesk.com/hc/ko"
                    >
                      헬프센터
                    </a>
                    <a
                      className="false font_label_regular_lg mt-[8px]"
                      target="_blank"
                      href="https://idus.notion.site/d910e507a65a45499cdbee3d90dd5609"
                    >
                      크리에이터 가이드
                    </a>
                  </div>
                  <div className="content_secondary flex flex-col">
                    <h5 className="font_label_bold_xl mb-[8px]">정책</h5>
                    <a
                      className="false font_label_regular_lg mt-[8px]"
                      target="_blank"
                      href="https://steadio.zendesk.com/hc/ko/articles/6674963349145"
                    >
                      이용약관
                    </a>
                    <a
                      className="font-bold font_label_regular_lg mt-[8px]"
                      target="_blank"
                      href="https://steadio.zendesk.com/hc/ko/articles/6674965622809"
                    >
                      개인정보 처리방침
                    </a>
                    <a
                      className="false font_label_regular_lg mt-[8px]"
                      target="_blank"
                      href="https://steadio.zendesk.com/hc/ko/articles/6674994738841"
                    >
                      커뮤니티 운영방침
                    </a>
                  </div>
                  <div className="content_secondary flex flex-col">
                    <h5 className="font_label_bold_xl mb-[8px]">고객지원</h5>
                    <p className="font_label_regular_lg mt-[8px]">
                      평일 10:00~17:00 (13:00~15:00 제외)
                    </p>
                    <a
                      className="mt-[12px]"
                      target="_blank"
                      href="https://steadio.zendesk.com/hc/ko/requests/new"
                    >
                      <button
                        aria-label="button"
                        className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[8px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] w-full false disabled:content_disabled"
                        type="button"
                      >
                        스테디오에 문의
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content_quaternary mt-[20px]">
                <p>
                  <span className="font_label_bold_md ml-[12px] first:m-0">
                    회사명
                  </span>
                  <span className="font_label_regular_md ml-[8px]">
                    주식회사 백패커
                  </span>
                  <span className="font_label_bold_md ml-[12px] first:m-0">
                    주소
                  </span>
                  <span className="font_label_regular_md ml-[8px]">
                    주소 서울특별시 서초구 서초대로 398, 20층(서초동,
                    BNK디지털타워)
                  </span>
                  <span className="font_label_bold_md ml-[12px] first:m-0">
                    대표
                  </span>
                  <span className="font_label_regular_md ml-[8px]">김동환</span>
                </p>
                <p>
                  <span className="font_label_bold_md ml-[12px] first:m-0">
                    사업자등록번호
                  </span>
                  <span className="font_label_regular_md ml-[8px]">
                    107-87-83297
                  </span>
                  <span className="font_label_bold_md ml-[12px] first:m-0">
                    통신판매업 신고번호
                  </span>
                  <span className="font_label_regular_md ml-[8px]">
                    2023-서울서초-2114호
                  </span>
                  <span className="font_label_bold_md ml-[12px] first:m-0">
                    대표번호
                  </span>
                  <span className="font_label_regular_md ml-[8px]">
                    02-6080-0760
                  </span>
                  <span className="font_label_bold_md ml-[12px] first:m-0">
                    메일
                  </span>
                  <span className="font_label_regular_md ml-[8px]">
                    support_steadio@backpac.kr
                  </span>
                </p>
              </div>
              <div className="mt-[20px] flex items-center justify-between">
                <p className="content_tertiary font_label_regular_lg">
                  © 2024 Backpackr Inc.
                </p>
                <div className="flex">
                  <a
                    className="ml-[20px] first:m-0"
                    target="_blank"
                    href="https://pf.kakao.com/_Kzxamb"
                  >
                    <svg
                      viewBox="0 0 17 16"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[24px] h-[24px] content_secondary"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.5 2C4.803 2 1.833 4.306 1.833 7.128a5.026 5.026 0 0 0 3.091 4.339l-.636 2.306c-.03.06 0 .151.06.181.061.061.182.061.243 0l2.697-1.79c.394.061.788.091 1.212.091 3.667 0 6.667-2.306 6.667-5.127C15.167 4.306 12.197 2 8.5 2Z"
                      ></path>
                    </svg>
                  </a>
                  <a
                    className="ml-[20px] first:m-0"
                    target="_blank"
                    href="https://twitter.com/steadio_co"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[24px] h-[24px] content_secondary"
                    >
                      <path d="M8.66 19.333c-2.158 0-4.168-.627-5.86-1.71 1.437.094 3.972-.129 5.549-1.633-2.372-.109-3.442-1.928-3.582-2.706.202.078 1.163.171 1.706-.047-2.73-.684-3.148-3.079-3.055-3.81.512.358 1.38.482 1.721.451-2.542-1.82-1.628-4.556-1.178-5.147 1.825 2.528 4.56 3.948 7.943 4.027a3.91 3.91 0 0 1-.097-.87A3.882 3.882 0 0 1 15.683 4a3.86 3.86 0 0 1 2.834 1.235c.748-.175 1.873-.585 2.422-.94-.277.996-1.14 1.826-1.662 2.134.005.01-.004-.01 0 0 .459-.07 1.7-.308 2.19-.64-.243.559-1.158 1.488-1.909 2.009.14 6.16-4.574 11.535-10.899 11.535Z"></path>
                    </svg>
                  </a>
                  <a
                    className="ml-[20px] first:m-0"
                    target="_blank"
                    href="https://www.instagram.com/steadio.official"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[24px] h-[24px] content_secondary"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12.005 16.875c2.763 0 5.003-2.22 5.003-4.958 0-2.739-2.24-4.959-5.002-4.959-2.763 0-5.003 2.22-5.003 4.959 0 2.738 2.24 4.958 5.002 4.958Zm0-1.983c1.658 0 3.002-1.332 3.002-2.975s-1.344-2.975-3.002-2.975c-1.657 0-3.001 1.332-3.001 2.975s1.344 2.975 3.002 2.975Z"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M2 11.52c0-3.332 0-4.998.654-6.271a5.977 5.977 0 0 1 2.624-2.6C6.562 2 8.243 2 11.605 2h.8c3.363 0 5.044 0 6.328.649a5.977 5.977 0 0 1 2.624 2.6c.654 1.273.654 2.939.654 6.271v.793c0 3.333 0 4.999-.654 6.272a5.977 5.977 0 0 1-2.624 2.6c-1.284.648-2.965.648-6.327.648h-.8c-3.363 0-5.044 0-6.328-.648a5.977 5.977 0 0 1-2.624-2.6C2 17.312 2 15.645 2 12.313v-.793Zm9.605-7.537h.8c1.715 0 2.88.002 3.78.075.878.07 1.327.2 1.64.358.753.38 1.365.987 1.749 1.733.16.31.289.755.36 1.625.074.892.076 2.047.076 3.746v.793c0 1.7-.002 2.854-.075 3.747-.072.87-.202 1.314-.361 1.624a3.985 3.985 0 0 1-1.75 1.734c-.312.158-.761.287-1.638.358-.901.073-2.066.074-3.78.074h-.8c-1.715 0-2.88-.002-3.78-.075-.878-.07-1.327-.2-1.64-.357a3.985 3.985 0 0 1-1.749-1.734c-.16-.31-.29-.755-.36-1.624C4.002 15.167 4 14.012 4 12.313v-.793c0-1.699.002-2.854.075-3.746.072-.87.202-1.315.361-1.625a3.985 3.985 0 0 1 1.75-1.733c.312-.158.76-.287 1.638-.358.9-.073 2.066-.075 3.78-.075Z"
                      ></path>
                      <path d="M18.059 6.916c0 .552-.452 1-1.009 1a1.005 1.005 0 0 1-1.009-1c0-.552.452-1 1.01-1 .556 0 1.008.448 1.008 1Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:hidden">
            <div className="px-[16px] pt-[32px] pb-[24px]">
              <svg
                viewBox="0 0 115 16"
                xmlns="http://www.w3.org/2000/svg"
                className="content_secondary h-[16px] w-[114px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M98.073 1.695a1.695 1.695 0 1 1 1.695 1.695 1.687 1.687 0 0 1-1.695-1.695Zm2.967 2.863v11.23h-2.539V4.556l2.539.002Zm-7.842 11.23h2.544V.102h-2.544v5.725h-.042a4.791 4.791 0 0 0-3.517-1.483c-2.925 0-5.214 2.332-5.214 5.828 0 3.496 2.29 5.827 5.214 5.827a4.79 4.79 0 0 0 3.517-1.483h.042v1.272Zm-3.054-2.162c-1.737 0-3.093-1.4-3.093-3.454 0-2.056 1.355-3.455 3.093-3.455 1.739 0 3.094 1.4 3.094 3.455s-1.356 3.454-3.094 3.454Zm-45.282 2.373c-3.709 0-6.167-1.867-6.336-4.978h2.925c.317 1.906 1.653 2.584 3.327 2.584 1.843 0 2.986-.847 2.986-1.927 0-1.376-1.604-1.75-3.542-2.202l-.462-.108C41.28 8.774 38.78 7.8 38.78 4.81c0-2.204 1.887-4.492 5.531-4.492 3.221 0 5.68 1.908 6.04 4.768h-2.884c-.296-1.292-1.207-2.374-3.094-2.374-1.674 0-2.839.827-2.839 1.93 0 1.49 1.468 1.83 3.482 2.298l.587.138c2.331.551 4.916 1.42 4.916 4.344 0 2.86-2.31 4.576-5.658 4.576Zm11.59-9.155v5.02c0 1.526.933 1.759 1.675 1.759.405.003.805-.091 1.166-.275v2.288c-.46.18-.948.272-1.441.276-2.14 0-3.942-1.06-3.942-4.108v-4.96h-2.328V4.556h2.33V1.32h2.543v3.236h2.843v2.288h-2.845Zm14.814 5.532h-2.739c-.516 1.113-1.329 1.377-2.516 1.377-1.441 0-2.712-.954-2.903-2.755h8.304c0-4.539-2.648-6.654-5.615-6.654-3.052 0-5.446 2.332-5.446 5.828 0 3.496 2.4 5.827 5.636 5.827 2.268 0 4.532-1.048 5.279-3.623Zm-2.67-3.328h-5.51c.277-1.415 1.42-2.437 2.756-2.437 1.335 0 2.479 1.018 2.754 2.437Zm14.135 6.74h-2.5a17.563 17.563 0 0 1-.063-1.442h-.044C79.107 15.597 77.837 16 76.564 16c-2.246 0-3.877-1.334-3.877-3.496 0-1.674 1.08-3.263 4.068-3.391 1.357-.064 3.327-.085 3.327-.085v-.571c0-1.378-1.144-2.035-2.331-2.035-1.188 0-2.097.657-2.24 1.695h-2.634c.125-2.395 2.098-3.772 4.895-3.772 2.819 0 4.854 1.76 4.854 4.408v3.39c0 2.035.02 2.946.105 3.645Zm-5.234-4.832c-1.59.085-2.183.678-2.183 1.505 0 .953.763 1.44 1.844 1.44 1.59 0 2.924-.975 2.924-2.628v-.423s-1.419.043-2.585.106Zm31.193-6.57c-3.242 0-5.742 2.522-5.742 5.807 0 3.289 2.498 5.805 5.741 5.805 3.243 0 5.744-2.521 5.744-5.805 0-3.285-2.501-5.808-5.743-5.808Zm.004 2.373c1.777 0 3.112 1.42 3.112 3.434 0 2.012-1.336 3.432-3.112 3.432s-3.111-1.419-3.111-3.432c0-2.014 1.334-3.434 3.111-3.434Z"
                ></path>
                <path d="M21.96 15.796h9.232A15.592 15.592 0 0 0 .059 14.55c-.011.116-.019.234-.027.351v.105c-.013.21-.022.423-.022.637v.154h9.957c0-2.987-2.228-5.412-4.978-5.412a4.755 4.755 0 0 0-3.41 1.473c1.051-1.346 2.63-2.203 4.395-2.203 3.165 0 5.725 2.75 5.725 6.142h7.562v-.154c0-5.7-4.31-10.321-9.629-10.321a9.085 9.085 0 0 0-4.62 1.266 10.976 10.976 0 0 1 16.949 9.21v-.003Z"></path>
              </svg>
              <div className="mt-[24px] flex flex-wrap gap-x-[16px] gap-y-[12px]">
                <a
                  className="false content_tertiary font_label_regular_lg"
                  target="_blank"
                  href="/start"
                >
                  크리에이터 시작
                </a>
                <a
                  className="false content_tertiary font_label_regular_lg"
                  target="_blank"
                  href="/plans"
                >
                  요금제
                </a>
                <a
                  className="false content_tertiary font_label_regular_lg"
                  target="_blank"
                  href="https://static.steadio.co/static/docs/steadio_intro.pdf"
                >
                  서비스 소개
                </a>
                <a
                  className="false content_tertiary font_label_regular_lg"
                  target="_blank"
                  href="https://idus.notion.site/1c51157d3715410f9be9d22ddb0ce8cc"
                >
                  공지사항
                </a>
                <a
                  className="false content_tertiary font_label_regular_lg"
                  target="_blank"
                  href="https://steadio.zendesk.com/hc/ko"
                >
                  헬프센터
                </a>
                <a
                  className="false content_tertiary font_label_regular_lg"
                  target="_blank"
                  href="https://idus.notion.site/d910e507a65a45499cdbee3d90dd5609"
                >
                  크리에이터 가이드
                </a>
                <a
                  className="false content_tertiary font_label_regular_lg"
                  target="_blank"
                  href="https://steadio.zendesk.com/hc/ko/articles/6674963349145"
                >
                  이용약관
                </a>
                <a
                  className="font-bold content_tertiary font_label_regular_lg"
                  target="_blank"
                  href="https://steadio.zendesk.com/hc/ko/articles/6674965622809"
                >
                  개인정보 처리방침
                </a>
                <a
                  className="false content_tertiary font_label_regular_lg"
                  target="_blank"
                  href="https://steadio.zendesk.com/hc/ko/articles/6674994738841"
                >
                  커뮤니티 운영방침
                </a>
              </div>
              <div className="content_secondary border_primary mt-[16px] border-b pb-[16px]">
                <h5 className="font_label_bold_xl">고객지원</h5>
                <p className="font_label_regular_lg mt-[8px]">
                  평일 10:00~17:00 (13:00~15:00 제외)
                </p>
                <a
                  className="mt-[8px] block"
                  target="_blank"
                  href="https://steadio.zendesk.com/hc/ko/requests/new"
                >
                  <button
                    aria-label="button"
                    className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[8px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px] false disabled:content_disabled"
                    type="button"
                  >
                    스테디오에 문의
                  </button>
                </a>
              </div>
              <div className="content_quaternary mt-[16px] leading-none">
                <span className="font_label_bold_sm">회사명 </span>
                <span className="font_label_regular_sm">주식회사 백패커 </span>
                <span className="font_label_bold_sm">주소 </span>
                <span className="font_label_regular_sm">
                  주소 서울특별시 서초구 서초대로 398, 20층(서초동,
                  BNK디지털타워){" "}
                </span>
                <span className="font_label_bold_sm">대표 </span>
                <span className="font_label_regular_sm">김동환 </span>
                <span className="font_label_bold_sm">사업자등록번호 </span>
                <span className="font_label_regular_sm">107-87-83297 </span>
                <span className="font_label_bold_sm">통신판매업 신고번호 </span>
                <span className="font_label_regular_sm">
                  2023-서울서초-2114호{" "}
                </span>
                <span className="font_label_bold_sm">대표번호 </span>
                <span className="font_label_regular_sm">02-6080-0760 </span>
                <span className="font_label_bold_sm">메일 </span>
                <span className="font_label_regular_sm">
                  support_steadio@backpac.kr{" "}
                </span>
              </div>
              <p className="content_tertiary font_label_regular_md mt-[8px]">
                © 2024 Backpackr Inc.
              </p>
              <div className="mt-[16px] flex">
                <a
                  className="ml-[20px] first:m-0"
                  target="_blank"
                  href="https://pf.kakao.com/_Kzxamb"
                >
                  <svg
                    viewBox="0 0 17 16"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[24px] h-[24px] content_secondary"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.5 2C4.803 2 1.833 4.306 1.833 7.128a5.026 5.026 0 0 0 3.091 4.339l-.636 2.306c-.03.06 0 .151.06.181.061.061.182.061.243 0l2.697-1.79c.394.061.788.091 1.212.091 3.667 0 6.667-2.306 6.667-5.127C15.167 4.306 12.197 2 8.5 2Z"
                    ></path>
                  </svg>
                </a>
                <a
                  className="ml-[20px] first:m-0"
                  target="_blank"
                  href="https://twitter.com/steadio_co"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[24px] h-[24px] content_secondary"
                  >
                    <path d="M8.66 19.333c-2.158 0-4.168-.627-5.86-1.71 1.437.094 3.972-.129 5.549-1.633-2.372-.109-3.442-1.928-3.582-2.706.202.078 1.163.171 1.706-.047-2.73-.684-3.148-3.079-3.055-3.81.512.358 1.38.482 1.721.451-2.542-1.82-1.628-4.556-1.178-5.147 1.825 2.528 4.56 3.948 7.943 4.027a3.91 3.91 0 0 1-.097-.87A3.882 3.882 0 0 1 15.683 4a3.86 3.86 0 0 1 2.834 1.235c.748-.175 1.873-.585 2.422-.94-.277.996-1.14 1.826-1.662 2.134.005.01-.004-.01 0 0 .459-.07 1.7-.308 2.19-.64-.243.559-1.158 1.488-1.909 2.009.14 6.16-4.574 11.535-10.899 11.535Z"></path>
                  </svg>
                </a>
                <a
                  className="ml-[20px] first:m-0"
                  target="_blank"
                  href="https://www.instagram.com/steadio.official"
                >
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[24px] h-[24px] content_secondary"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.005 16.875c2.763 0 5.003-2.22 5.003-4.958 0-2.739-2.24-4.959-5.002-4.959-2.763 0-5.003 2.22-5.003 4.959 0 2.738 2.24 4.958 5.002 4.958Zm0-1.983c1.658 0 3.002-1.332 3.002-2.975s-1.344-2.975-3.002-2.975c-1.657 0-3.001 1.332-3.001 2.975s1.344 2.975 3.002 2.975Z"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2 11.52c0-3.332 0-4.998.654-6.271a5.977 5.977 0 0 1 2.624-2.6C6.562 2 8.243 2 11.605 2h.8c3.363 0 5.044 0 6.328.649a5.977 5.977 0 0 1 2.624 2.6c.654 1.273.654 2.939.654 6.271v.793c0 3.333 0 4.999-.654 6.272a5.977 5.977 0 0 1-2.624 2.6c-1.284.648-2.965.648-6.327.648h-.8c-3.363 0-5.044 0-6.328-.648a5.977 5.977 0 0 1-2.624-2.6C2 17.312 2 15.645 2 12.313v-.793Zm9.605-7.537h.8c1.715 0 2.88.002 3.78.075.878.07 1.327.2 1.64.358.753.38 1.365.987 1.749 1.733.16.31.289.755.36 1.625.074.892.076 2.047.076 3.746v.793c0 1.7-.002 2.854-.075 3.747-.072.87-.202 1.314-.361 1.624a3.985 3.985 0 0 1-1.75 1.734c-.312.158-.761.287-1.638.358-.901.073-2.066.074-3.78.074h-.8c-1.715 0-2.88-.002-3.78-.075-.878-.07-1.327-.2-1.64-.357a3.985 3.985 0 0 1-1.749-1.734c-.16-.31-.29-.755-.36-1.624C4.002 15.167 4 14.012 4 12.313v-.793c0-1.699.002-2.854.075-3.746.072-.87.202-1.315.361-1.625a3.985 3.985 0 0 1 1.75-1.733c.312-.158.76-.287 1.638-.358.9-.073 2.066-.075 3.78-.075Z"
                    ></path>
                    <path d="M18.059 6.916c0 .552-.452 1-1.009 1a1.005 1.005 0 0 1-1.009-1c0-.552.452-1 1.01-1 .556 0 1.008.448 1.008 1Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ListFooterContainer;
