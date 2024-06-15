import React, { useCallback, useEffect, useRef, useState } from "react";
import DropdownList from "../../Components/List/DropdownList";
import { useDispatch, useSelector } from "react-redux";

import { updatePostData, deleteFileData } from "../../store/postWriteReducer";
import ToastMsg from "../../utils/ToastMsg";
import AsideRadioBtn from "../../Components/Write/AsideRadioBtn";
import AsideInputTag from "../../Components/Write/AsideInputTag";
import AsideCategory from "../../Components/Write/AsideCategory";

const WriteAsideContainer = ({
  setModalOn,
  selectedFiles,
  setSelectedFiles,
}) => {
  const dispatch = useDispatch();
  const { isEdit, inputData, file } = useSelector((state) => state.write);
  const [deleteFile, setDeleteFile] = useState([]);
  console.log("deleteFile", deleteFile);
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownState, setDropdownState] = useState(null);
  const [tagList, setTagList] = useState([]);
  const [inputTag, setInputTag] = useState("");
  const [onTimer, setOnTimer] = useState(false);
  const [msg, setMsg] = useState("");
  const dropdownRef = useRef();
  const inputFileRef = useRef();
  const category = inputData.category;

  const handleMenuClick = (selected) => {
    setDropdownState(selected);
  };

  const handleChange = (e) => {
    const text = e.target.value;
    if (text.length <= 20) {
      setInputTag(text);
    } else {
      setOnTimer(true);
      setMsg("태그는 최대 20자까지 입력할 수 있습니다.");
    }
  };

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter" && inputTag.trim() !== "") {
        if (tagList.length >= 5) {
          setOnTimer(true);
          setMsg("태그는 최대 5개까지 생성할 수 있습니다.");
          return;
        }
        setTagList([...tagList, inputTag.trim()]);
        setInputTag("");
      }
    },
    [inputTag, tagList]
  );

  const onClickDelete = (index, type) => {
    if (type === "tag") {
      setTagList([...tagList.filter((_, i) => i !== index)]);
    } else if (type === "file") {
      console.log(index);
      let fileToDelete;
      if (selectedFiles[index].id) {
        fileToDelete = selectedFiles[index];
        setDeleteFile([...deleteFile, fileToDelete]);
      }
      setSelectedFiles(selectedFiles.filter((_, i) => index !== i));
    }
  };

  const handleClickOutside = (e) => {
    if (!dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const selectFile = useCallback((e) => {
    e.preventDefault();
    const files = e.target.files;
    const fileArray = Array.from(files);
    setSelectedFiles((selectedFiles) => [...selectedFiles, ...fileArray]);
    e.target.value = "";
  }, []);

  useEffect(() => {
    console.log(selectedFiles);
  }, [selectedFiles]);

  useEffect(() => {
    if (isEdit) {
      setTagList(inputData.tag);
      // setDropdownState(inputData.category);
      setDropdownState(
        category === "info"
          ? "정보 공유"
          : category === "study"
          ? "스터디 해요"
          : "Q&A"
      );
      setTagList(inputData.tag);
      console.log("length", file.length);
      setSelectedFiles(file);
    } else {
      setTagList([]);
      setDropdownState(null);
      setTagList([]);
      setSelectedFiles([]);
    }
  }, [isEdit]);

  console.log(inputData);
  useEffect(
    (e) => {
      if (isOpen) {
        document.addEventListener("click", handleClickOutside);
      }

      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    },
    [isOpen]
  );

  useEffect(() => {
    dispatch(deleteFileData(deleteFile));
  }, [deleteFile, dispatch]);
  useEffect(() => {
    dispatch(
      updatePostData({
        tag: tagList,
      })
    );
  }, [dispatch, tagList]);

  return (
    <section className="aside col-span-5 col-start-11 ml-[15px]">
      <section className="border_primary flex flex-col rounded-[12px] border">
        <AsideMenuTitle text={"카테고리"} />
        <AsideCategory
          dropdownState={dropdownState}
          dropdownRef={dropdownRef}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleMenuClick={handleMenuClick}
        />
        <AsideMenuTitle text={"공개 범위"} />
        <AsideRadioBtn />
        <AsideMenuTitle text={"태그"} />
        <AsideInputTag
          inputTag={inputTag}
          setInputTag={setInputTag}
          handleChange={handleChange}
          handleKeyDown={handleKeyDown}
        />
        <AsideTagList tagList={tagList} onClickDelete={onClickDelete} />
        <AsideMenuTitle
          text={"파일 첨부"}
          isFile={true}
          setModalOn={setModalOn}
          selectFile={selectFile}
          inputFileRef={inputFileRef}
          selectedFiles={selectedFiles}
        />
        <div className="px-[20px]">
          {true ? (
            <ExistAttachFile
              selectedFiles={selectedFiles}
              onClickDelete={onClickDelete}
            />
          ) : (
            <div className="flex h-[88px] items-center justify-center">
              <span className="content_disabled font_body_regular_md">
                첨부된 파일이 없습니다.
              </span>
            </div>
          )}
        </div>
        {onTimer && (
          <ToastMsg text={msg} onTimer={onTimer} setOnTimer={setOnTimer} />
        )}
      </section>
    </section>
  );
};

const AsideMenuTitle = ({
  text,
  isFile,
  setModalOn,
  selectFile,
  inputFileRef,
}) => {
  return (
    <div className="surface_secondary border_primary flex h-[54px] items-center justify-between border-y px-[16px] first:rounded-t-[12px] first:border-t-0">
      <div className="flex items-center">
        <strong className="content_primary font_label_bold_xl">{text}</strong>
        {isFile && (
          <button
            aria-label="post guide button"
            className="ml-[4px]"
            type="button"
            onClick={() => {
              setModalOn(true);
            }}
          >
            <svg
              viewBox="0 0 25 25"
              xmlns="http://www.w3.org/2000/svg"
              className="content_quaternary h-[18px] w-[18px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.008 20.041a8 8 0 1 0 .067-16 8 8 0 0 0-.067 16Zm-.008 2c5.523.023 10.018-4.435 10.041-9.958.023-5.523-4.435-10.019-9.958-10.041C6.56 2.019 2.064 6.477 2.04 12 2.02 17.523 6.477 22.018 12 22.041Z"
              ></path>
              <path d="M11.984 13.372c-.528-.002-.974-.436-.888-.957.116-.702.408-1.305 1.088-1.753.574-.387 1.011-.768 1.02-1.363-.004-.594-.45-.993-1.01-.988-.283-.005-.552.1-.75.295-.348.343-.712.793-1.2.79-.655-.002-1.214-.559-.978-1.17.46-1.19 1.614-1.739 2.948-1.733 1.886.007 3.242.97 3.241 2.706-.011 1.156-.593 1.857-1.467 2.4-.388.236-.67.511-.843.852-.24.47-.633.923-1.16.92ZM12.02 17.492a1.5 1.5 0 1 0 .013-3 1.5 1.5 0 0 0-.012 3Z"></path>
            </svg>
          </button>
        )}
      </div>
      {isFile && (
        <>
          <input
            type="file"
            onChange={selectFile}
            style={{ display: "none" }}
            ref={inputFileRef}
            multiple
          />
          <button
            aria-label="button"
            type="submit"
            onClick={() => inputFileRef.current.click()}
            className="font_button_bold_md relative flex items-center justify-center  h-[32px] rounded-[16px] content_secondary surface_primary border border-solid border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid px-[15px]  false disabled:content_disabled"
          >
            업로드
          </button>
        </>
      )}
    </div>
  );
};

const AsideTagList = React.memo(({ tagList, onClickDelete }) => {
  return (
    <ul className="mb-[12px] flex flex-wrap px-[16px]">
      {tagList.map((tag, i) => (
        <li
          key={i}
          className="h-[30px] mb-[12px] mr-[6px] flex items-center rounded-[4px] bg-[#FAFAFB] pl-[8px] pr-[8px]"
        >
          <span className="content_primary font_body_regular_md mr-[6px] text-[#666667]">
            {tag}
          </span>
          <button
            aria-label="close button"
            type="button"
            onClick={() => {
              onClickDelete(i, "tag");
            }}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="content_tertiary h-[16px] w-[16px]"
            >
              <path d="M5.707 5.707a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 1 0 1.414 1.414l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414-1.414l-4.95-4.95 4.95-4.95a1 1 0 1 0-1.414-1.414l-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0Z"></path>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
});

const ExistAttachFile = ({ selectedFiles, onClickDelete, isEdit }) => {
  return (
    <ul class="py-[36px]">
      {selectedFiles.map((file, i) => (
        <li key={i} class="mt-[24px] flex items-center first:mt-0">
          <div class="surface_secondary border_black_opacity flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-[4px] border">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="content_disabled h-[24px] w-[24px]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.6 4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V8.961a2 2 0 0 0-.751-1.561l-3.702-2.962A2 2 0 0 0 13.898 4H6.6Zm11 15.2h-11a.2.2 0 0 1-.2-.2V6c0-.11.09-.2.2-.2h7V8a1 1 0 0 0 1 1h3.2v10a.2.2 0 0 1-.2.2Z"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.1 12a.9.9 0 0 1 .9-.9h6a.9.9 0 1 1 0 1.8H9a.9.9 0 0 1-.9-.9ZM8.1 15a.9.9 0 0 1 .9-.9h6a.9.9 0 1 1 0 1.8H9a.9.9 0 0 1-.9-.9Z"
              ></path>
            </svg>
          </div>
          <p class="content_primary font_label_regular_md ml-[16px] grow break-all line-clamp-2">
            {/* {!file.name ? file.name : file.filename} */}
            {file.fileName ? file.fileName : file.name}
          </p>
          <button
            aria-label="file delete button"
            class="ml-[16px] block shrink-0"
            data-file-id="ca73150b-1049-4d4e-b643-20fb135ee4e3"
            type="button"
            onClick={() => {
              onClickDelete(i, "file");
            }}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              class="h-[24px] w-[24px] fill-gray_100"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm3.636-13.636a.9.9 0 0 1 0 1.272L13.273 12l2.363 2.364a.9.9 0 1 1-1.273 1.272L12 13.273l-2.364 2.363a.9.9 0 0 1-1.273-1.272L10.727 12 8.363 9.636a.9.9 0 0 1 1.273-1.272L12 10.727l2.363-2.363a.9.9 0 0 1 1.273 0Z"
              ></path>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(WriteAsideContainer);
