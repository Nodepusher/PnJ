import React from "react";

const DetailWrtierInfo = ({ name, profile }) => {
  const StImg = {
    position: "absolute",
    height: "100%",
    width: "100%",
    inset: "0px",
    objectFit: "cover",
    objectPosition: "center center",
    color: "transparent",
  };

  return (
    <section className="border_secondary relative flex flex-col flex-wrap items-center gap-[12px] border-t-[1px] py-[32px]">
      <div>
        <button className="border_black_opacity relative box-border h-[60px] w-[60px] overflow-hidden rounded-full border-[0.8px] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.1)]">
          <img
            alt="프로필 이미지"
            sizes="100vw"
            src={profile}
            decoding="async"
            data-nimg="fill"
            loading="lazy"
            style={StImg}
          />
        </button>
      </div>
      <div>
        <div className="flex flex-col gap-[4px] px-[40px]">
          <button className="font_title_bold_lg text-center">{name}</button>
          <p className="content_quaternary font_label_regular_md break-all text-center md:w-[404px]">
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailWrtierInfo;
