import PostList from "../../Components/List/PostList";
import SortPost from "../../Components/List/SortPost";

const ListContentContainer = ({
  category,
  setDropdownState,
  dropdownState,
}) => {
  return (
    <div className="mx-auto min-h-screen max-w-main">
      <SortPost
        setDropdownState={setDropdownState}
        dropdownState={dropdownState}
      />
      <div className="px-[16px] md:px-0">
        <ul className="col-span-full flex flex-col">
          <PostList
            category={category}
            dropdownState={dropdownState}
          />
        </ul>
      </div>
    </div>
  );
};

export default ListContentContainer;
