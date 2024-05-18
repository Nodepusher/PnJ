const EditInfo = () => {
    return (
      <>
        <div className="surface_primary sticky top-0 z-10">
          <div className="border_black_opacity col-span-full border-b pt-[41px] pb-[26px]">
            <div className="flex justify-between">
              <h3 className="content_primary font_headline_bold_lg">
                내 스튜디오
              </h3>
              <div className="flex">
                <div className="ml-[12px] w-[88px]">
                  <button
                    aria-label="button"
                    className="font_button_bold_md relative flex items-center justify-center h-[40px] rounded-[20px] content_primary_inverse surface_primary_inverse hover:surface_primary_inverse_active active:surface_primary_inverse_active disabled:surface_disabled px-[16px] w-full false disabled:content_disabled"
                    type="button"
                  >
                    수정
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default EditInfo;