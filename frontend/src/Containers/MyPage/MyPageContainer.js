import React from "react";
import SideBar from "../../Components/MyPage/SideBar";
import MyPageEdit from "../../Components/MyPage/MyPageEdit";
import MyPagePost from "../../Components/MyPage/MyPagePost";
import {usePage} from "../../Context/MyPageContext"
const MyPageContainer = () => {
  const {page, updatePageInfo} = usePage();
  return (
    <>
        <div className="flex h-screen flex-col">
          <div className="flex h-full overflow-hidden">
            <SideBar />
            {console.log(page)}
            {page.myPost && <MyPagePost />}
            {page.myInfo && <MyPageEdit />}
          </div>
        </div>
    </>
  );
};

export default MyPageContainer;
