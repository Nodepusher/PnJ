import React from "react";
import SortPost from "../../Components/List/SortPost";
import Spinner from "../Common/Spinner";

const PostList = React.lazy(() =>
  import("../../Components/List/PostList")
);

const ListContentContainer = ({
  category,
  setDropdownState,
  dropdownState,
  loading
}) => {
  return (
    <div className="mx-auto min-h-screen max-w-main">
      <SortPost
        setDropdownState={setDropdownState}
        dropdownState={dropdownState}
      />
      <div className="px-[16px] md:px-0">
        <ul className="col-span-full flex flex-col">
          {loading ? (
            <Spinner />
          ) : (
            <React.Suspense fallback={<Spinner />}>
              <PostList category={category} dropdownState={dropdownState} />
            </React.Suspense>
          )}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(ListContentContainer);
