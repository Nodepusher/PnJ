import React from "react";
import DetailCategory from "../../Components/Detail/DetailCategory";
import DetailTitle from "../../Components/Detail/DetailTitle";
import DetailWrtierInfoTop from "../../Components/Detail/DetailWrtierInfoTop";

const DetailSectionTop = ({ category, name, createdAt, title, profile }) => {
  return (
    <>
      <DetailCategory category={category} />
      <div className="h-[8px]"></div>
      <DetailTitle title={title} />
      <DetailWrtierInfoTop
        name={name}
        createdAt={createdAt}
        profile={profile}
      />
    </>
  );
};

export default DetailSectionTop;
