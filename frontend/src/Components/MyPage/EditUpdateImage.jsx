
const EditUpdateImage = () => {
    return (
      <>
        <div className="flex flex-col">
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
        </div>
      </>
    );
  };

  export default EditUpdateImage;