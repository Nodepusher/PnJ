import React from "react";


const DropdownList = ({ onClick, propsClassName, props  }) => {
  const handleItemClick = (e) => {
    onClick(e.target.innerText);
  };
  return (
    <div className={propsClassName}>
      <ul className="rounded-[8px] p-[8px] surface_primary shadow-menu">
        {props.map((prop, i) => (
          <li key={prop.content} data-option-value={prop.dataOptionValue} tabIndex="-1">
            <button
              aria-label="dropdown option"
              className="surface_primary content_primary font_label_regular_lg w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-[8px] py-[12px] px-[20px] text-left hover:surface_tertiary"
              data-option-value={prop.dataOptionValue}
              type="button"
              onClick={handleItemClick}
            >
              {prop.content}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DropdownList);
