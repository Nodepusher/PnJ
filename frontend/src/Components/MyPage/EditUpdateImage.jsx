import React from "react";
import tempImage from "../../Assets/images/temp.png";

const EditUpdateImage = ({ uploadImage, setUploadImage, profile }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="relative mr-[32px] flex h-[96px] min-w-[96px] items-center justify-center">
          {uploadImage ? (
            <img
              alt="프로필 이미지"
              sizes="100vw"
              src={uploadImage}
              decoding="async"
              data-nimg="fill"
              className="rounded-full profile_image"
              loading="lazy"
            />
          ) : (
            <img
              alt="프로필 이미지"
              sizes="100vw"
              src={profile}
              decoding="async"
              data-nimg="fill"
              className="rounded-full profile_image h-full absolute"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default EditUpdateImage;
