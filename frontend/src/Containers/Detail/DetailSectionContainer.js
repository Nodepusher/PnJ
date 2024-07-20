import React from "react";
import { useSelector } from "react-redux";
import DetailReplyContainer from "./DetailReplyContainer";
import DetailWrtierInfo from "./DetailWrtierInfo";
import DetailSectionContent from "./DetailSectionContent";
import DetailSectionTop from "./DetailSectionTop";
import PostList from "../../Components/List/PostList";
import PostHeader from "../../Components/Detail/PostHeader";
import Spinner from "../Common/Spinner";

const DetailSectionContainer = () => {
  // Redux store에서 필요한 상태 가져오기
  const { authorPosts, categoryPosts, post } = useSelector(
    (state) => state.detail.postData
  );
  const loading = useSelector((state) => state.detail.loading);
  const error = useSelector((state) => state.detail.error);

  // 로딩 중일 때 Spinner 컴포넌트 표시
  if (loading) {
    return <Spinner />;
  }

  // 오류가 발생했을 때 오류 메시지 표시
  if (error) {
    return <div>Error: {error}</div>;
  }

  // post 데이터가 없거나 User 데이터가 없을 경우 메시지 표시
  if (!post || !post.User) {
    return <div>No data available</div>;
  }

  // post 객체와 User 객체에서 필요한 속성을 구조 분해 할당
  const { Files: files, User: { name, profile } = {}, title, tag, createdAt, category } = post;
  
  // 프로필 이미지 URL 설정
  const profileUrl = profile
    ? `/uploads/file/${profile}`
    : `/uploads/file/default_profile_image.png`;

  // 카테고리 라벨 설정
  const categoryLabel = category === "info"
    ? "정보 공유"
    : category === "study"
    ? "스터디해요"
    : "Q&A";

  // 작성자 헤더 데이터 설정
  const writerHeaderData = `${name} 님의`;

  // 스타일 속성 설정
  const StProps = {
    StfirstPost: "first:pt-[8px]",
    StUlMargin: "mt-[8px]",
  };

  return (
    <div className="py-[16px] px-[16px]">
      <main className="min-w-screen surface_primary relative mx-auto flex w-full min-w-[320px] max-w-main flex-col">
        {/* 게시물 상단 섹션 */}
        <DetailSectionTop
          category={categoryLabel}
          title={title}
          createdAt={createdAt}
          name={name}
          profile={profileUrl}
        />
        {/* 게시물 내용 섹션 */}
        <DetailSectionContent content={post.content} tags={tag} files={files} />
        {/* 작성자 정보 섹션 */}
        <DetailWrtierInfo name={name} profile={profileUrl} />
        <div className="border-t border_primary"></div>
        <div className="h-[28px]"></div>
        {/* 댓글 섹션 */}
        <DetailReplyContainer profile={profileUrl} />
        <div className="h-[28px]"></div>
        <div className="border-t border_primary"></div>
        <div className="h-[28px]"></div>
        {/* 작성자의 다른 게시물 헤더 */}
        <PostHeader props={writerHeaderData} />
        {/* 작성자의 다른 게시물 리스트 */}
        <PostList StProps={StProps} postData={authorPosts} />
        <div className="h-[48px]"></div>
        <div className="border-t border_primary"></div>
        <div className="h-[28px]"></div>
        {/* 같은 카테고리의 다른 게시물 헤더 */}
        <PostHeader props={categoryLabel} />
        {/* 같은 카테고리의 다른 게시물 리스트 */}
        <PostList StProps={StProps} postData={categoryPosts} />
      </main>
    </div>
  );
};

export default DetailSectionContainer;
