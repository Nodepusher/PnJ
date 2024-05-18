
const EditUpdatePhone = ({ content, type, value, readOnly }) => {
    return (
      <>
        <div>
          <p className="content_primary font_label_bold_md mb-[8px]">{content}</p>
          <label className="relative flex overflow-hidden rounded-[8px] border-solid border-[1px] border_black_opacity surface_primary disabled:content_disabled">
            <input
              className="h-[48px] w-full px-[20px] outline-none font_body_regular_md content_primary placeholder:content_disabled disabled:surface_tertiary disabled:border_black_opacity"
              type={type}
              value={value}
              readOnly={readOnly}
            />
            <button
              className="border_black_opacity hover:surface_tertiary hover:border_secondary active:surface_tertiary active:border_secondary disabled:surface_primary disabled:border_black_opacity disabled:border disabled:border-solid disabled:content_disabled"
              type="button"
              style={{ width: "15%" }}
            >
              <div
                className="content_accent font_button_bold_md"
                style={{ margin: "16px" }}
              >
                변경
              </div>
            </button>
          </label>
        </div>
      </>
    );
  };

  export default EditUpdatePhone;