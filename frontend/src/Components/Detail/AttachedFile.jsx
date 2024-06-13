import React from "react";

const AttachFile = () => {
  return (
    <>
      <div className="md:w-[380px]">
        <div className="height_12px"></div>
        <ul className="flex flex-col gap-y-[8px]">
          <li className="border_primary flex h-[76px] items-center justify-between rounded-[8px] border p-[12px] pr-[24px]">
            <div className="flex items-center gap-x-[12px]">
              <div className="surface_tertiary flex h-[40px] w-[40px] items-center justify-center rounded-[8px]">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="content_quaternary h-[24px] w-[24px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.6 4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8.961a2 2 0 0 0-.751-1.561l-3.702-2.962A2 2 0 0 0 13.898 4H6.6Zm11 15.2h-11a.2.2 0 0 1-.2-.2V6c0-.11.09-.2.2-.2h7V8a1 1 0 0 0 1 1h3.2v10a.2.2 0 0 1-.2.2Z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.1 12a.9.9 0 0 1 .9-.9h6a.9.9 0 1 1 0 1.8H9a.9.9 0 0 1-.9-.9ZM8.1 15a.9.9 0 0 1 .9-.9h6a.9.9 0 1 1 0 1.8H9a.9.9 0 0 1-.9-.9Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col pr-[20px]">
                <p className="content_secondary font_label_regular_md break-all">
                  2.png
                </p>
                <span className="content_disabled font_label_regular_sm">
                  1.1MB
                </span>
              </div>
            </div>
            <button>
              <svg
                viewBox="0 0 16 18"
                xmlns="http://www.w3.org/2000/svg"
                className="content_accent_active h-[17px] w-[16px]"
              >
                <path d="M2 12a1 1 0 1 0-2 0v6h16v-6a1 1 0 1 0-2 0v4H2v-4Z"></path>
                <path d="M8 12.9 3.293 8.193a1 1 0 0 1 1.414-1.415L7 9.071V1.586a1 1 0 1 1 2 0V9.07l2.293-2.293a1 1 0 1 1 1.414 1.415L8 12.9Z"></path>
              </svg>
            </button>
          </li>
          <li className="border_primary flex h-[76px] items-center justify-between rounded-[8px] border p-[12px] pr-[24px]">
            <div className="flex items-center gap-x-[12px]">
              <div className="surface_tertiary flex h-[40px] w-[40px] items-center justify-center rounded-[8px]">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="content_quaternary h-[24px] w-[24px]"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.6 4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8.961a2 2 0 0 0-.751-1.561l-3.702-2.962A2 2 0 0 0 13.898 4H6.6Zm11 15.2h-11a.2.2 0 0 1-.2-.2V6c0-.11.09-.2.2-.2h7V8a1 1 0 0 0 1 1h3.2v10a.2.2 0 0 1-.2.2Z"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.1 12a.9.9 0 0 1 .9-.9h6a.9.9 0 1 1 0 1.8H9a.9.9 0 0 1-.9-.9ZM8.1 15a.9.9 0 0 1 .9-.9h6a.9.9 0 1 1 0 1.8H9a.9.9 0 0 1-.9-.9Z"
                  ></path>
                </svg>
              </div>
              <div className="flex flex-col pr-[20px]">
                <p className="content_secondary font_label_regular_md break-all">
                  2.png
                </p>
                <span className="content_disabled font_label_regular_sm">
                  1.1MB
                </span>
              </div>
            </div>
            <button>
              <svg
                viewBox="0 0 16 18"
                xmlns="http://www.w3.org/2000/svg"
                className="content_accent_active h-[17px] w-[16px]"
              >
                <path d="M2 12a1 1 0 1 0-2 0v6h16v-6a1 1 0 1 0-2 0v4H2v-4Z"></path>
                <path d="M8 12.9 3.293 8.193a1 1 0 0 1 1.414-1.415L7 9.071V1.586a1 1 0 1 1 2 0V9.07l2.293-2.293a1 1 0 1 1 1.414 1.415L8 12.9Z"></path>
              </svg>
            </button>
          </li>
        </ul>
        <div className="height_52px"></div>
      </div>
      <div className="h-[20px]"></div>
    </>
  );
};

export default AttachFile;
