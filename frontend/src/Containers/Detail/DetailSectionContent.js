import React from "react";
import { TuiViewer } from "../../Modules/ToastUI";
import AttachFile from "../../Components/Detail/AttachedFile";

const DetailSectionContent = ({ content, tags, files }) => {
  return (
    <div className="border_secondary mt-[24px] border-t pt-[32px]">
      <div>
        <div className="steadio-post steadio-post-detail copy-disabled">
          <TuiViewer content={content} />
        </div>
        <div className="h-[32px]"></div>
      </div>
      {tags && tags.length > 0 && (
        <div className="flex w-full flex-wrap">
          {tags.map((tag, i) => (
            <li
              key={i}
              className="h-[30px] mb-[12px] mr-[6px] flex items-center rounded-[4px] bg-[#FAFAFB] pl-[8px] pr-[8px]"
            >
              <span className="content_primary font_body_regular_md mr-[6px] text-[#666667]">
                #{tag}
              </span>
            </li>
          ))}
        </div>
      )}
      <AttachFile files={files} />
    </div>
  );
};

export default DetailSectionContent;
