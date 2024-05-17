import React, { useState, useEffect } from "react";

const MyPagePostHeader = ({ post, sort, setSort }) => {
  const [comboVisible, setComboVisible] = useState(false);

  return (
    <>
      <div className="surface_primary sticky top-0 z-10">
        <header className="flex items-center justify-between pt-[40px]">
          <h1 className="content_primary font_headline_bold_lg">포스트</h1>
          <PostButton />
        </header>
        <div className="mt-[26px]">
          <ul className="border_black_opacity flex h-[36px] gap-x-[20px] border-b">
            <li className="relative">
              <div className="flex">
                <p className="font_label_bold_xl">게시완료</p>
                <div className="ml-[8px] rounded-[25px] px-[8px] py-[2px] surface_tertiary">
                  <p className="font_label_bold_sm"> {post.length}</p>
                </div>
              </div>
              <div className="surface_primary_inverse absolute -bottom-[1.5px] h-[2px] w-full"></div>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="col-span-full">
          <div className="flex items-center justify-between py-[12px]">
            <div></div>
            <ComboBoxButton
              sort={sort}
              setSort={setSort}
              comboVisible={comboVisible}
              setComboVisible={setComboVisible}
            />
          </div>
        </div>
      </div>
    </>
  );
};
const ComboBoxButton = ({ sort, setSort, comboVisible, setComboVisible }) => {
  return (
    <>
      <div className="flex gap-x-[12px]">
        <div className="relative">
          <button
            aria-label="filter"
            className="surface_primary h-[32px] border px-[16px] py-[8px] border_black_opacity flex max-w-[164px] items-center rounded-[16px] outline-none"
            type="button"
            onClick={() => setComboVisible(!comboVisible)}
          >
            <span className="overflow-hidden content_secondary font_label_medium_lg text-ellipsis whitespace-nowrap">
              {sort}
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
          {comboVisible && (
            <ComboBox setSort={setSort} setComboVisible={setComboVisible} />
          )}
        </div>
      </div>
    </>
  );
};
const ComboBox = ({ setSort, setComboVisible }) => {
  return (
    <>
      <div class="absolute top-[42px] right-0 z-10 w-[248px]">
        <ul class="rounded-[8px] p-[8px] surface_primary shadow-menu false">
          <li class="undefined" data-option-value="publishedAt" tabindex="-1">
            <button
              aria-label="dropdown option"
              class="surface_primary content_primary font_label_regular_lg w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-[8px] py-[12px] px-[20px] text-left hover:surface_tertiary"
              data-option-value="publishedAt"
              type="button"
              onClick={() => {
                setSort("최신순");
                setComboVisible(false);
              }}
            >
              최신순
            </button>
          </li>
          <li class="undefined" data-option-value="likes" tabindex="-1">
            <button
              aria-label="dropdown option"
              class="surface_primary content_primary font_label_regular_lg w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-[8px] py-[12px] px-[20px] text-left hover:surface_tertiary"
              data-option-value="likes"
              type="button"
              onClick={() => {
                setSort("오래된순");
                setComboVisible(false);
              }}
            >
              오래된순
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};
const PostButton = () => {
  return (
    <>
      <div>
        <div className="flex gap-[16px]">
          <button
            aria-label="button"
            className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[16px] false disabled:content_disabled"
            type="button"
          >
            작성
          </button>
        </div>
      </div>
    </>
  );
};
export default MyPagePostHeader;
