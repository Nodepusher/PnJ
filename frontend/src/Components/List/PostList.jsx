import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getPostData } from '../../store/postListReducer';

const PostList = ({ StProps, postData, category }) => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const moveToDetail = () => {
        nav('/detail');
    };
    const { StfirstPost = '', StUlMargin = '' } = StProps || {};
    const StImg = {
        position: 'absolute',
        height: '100%',
        width: '100%',
        inset: '0px',
        color: 'transparent',
    };

    const [page, setPage] = useState(2);
    const posts = useSelector((state) => state.postList.filteredPosts);
    const hasMore = useSelector((state) => state.postList.hasMore);

    useEffect(() =>{
        setPage(2);
    },[category]);
    const fetchData = () => {
        dispatch(getPostData(category, page));
        setPage(page + 1)
    }
    return (
        <InfiniteScroll
            dataLength={[posts.length]}
            next={fetchData}
            hasMore={hasMore}
        >

            <ul className={`col-span-full flex flex-col ${StUlMargin}`}>
                {posts.map((post, i) => (
                    <li
                        key={post.id}
                        className={`border_secondary border-t py-[20px] first:border-0 md:py-[24px] ${StfirstPost}`}
                    >
                        <div onClick={moveToDetail}>
                            <button aria-label="post card" className="block w-full text-left" type="button">
                                <div className="flex gap-x-[16px]">
                                    <div className="h-[73px] w-full break-all xl:h-auto">
                                        <h2 className="content_secondary font_title_bold_md overflow-hidden xl:font_title_bold_lg text-ellipsis-1">
                                            {post.title}
                                        </h2>
                                        <p className="content_quaternary font_label_regular_lg mt-[4px] mb-[18px] overflow-hidden xl:mt-[6px] text-ellipsis-1 xl:text-ellipsis-2">
                                            {post.content}
                                        </p>
                                    </div>
                                    <div className="relative h-[72px] w-[72px] shrink-0 rounded-[8px] md:h-[90px] md:w-[90px]">
                                        <img
                                            alt="멜빵바지를 입은 볼빵빵 아기토끼 키링뜨기 (글도안+부분영상+사진+첨부파일 추가)"
                                            sizes="(max-width: 500px) 72px, 90px"
                                            srcSet="
                                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=16&amp;q=75     16w,
                                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=32&amp;q=75     32w,
                                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=48&amp;q=75     48w,
                                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=64&amp;q=75     64w,
                                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=96&amp;q=75     96w,
                                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=128&amp;q=75   128w,
                                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=256&amp;q=75   256w,
                                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=384&amp;q=75   384w,
                                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=500&amp;q=75   500w,
                                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=768&amp;q=75   768w,
                                                    /_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=1024&amp;q=75 1024w
                                                "
                                            src="/_next/image?url=https%3A%2F%2Fsteadio.imgix.net%2Fcreator-posts%2Ff7261458-bcc0-4313-88a9-c1a86625ecee%2FcreatorPostImage%2F5d6d6e7a-cb08-483d-b1ef-b5438e71f987.jpeg%3Fauto%3Dformat%252Ccompress%26fit%3Dmax%26lossless%3Dtrue%26w%3D1240&amp;w=1024&amp;q=75"
                                            decoding="async"
                                            data-nimg="fill"
                                            className="rounded-[8px]"
                                            loading="lazy"
                                            style={StImg}
                                        />
                                        <div className="border_black_opacity absolute top-0 left-0 h-full w-full rounded-[8px] border"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-[12px] flex items-center">
                                        <div className="font_label_regular_md flex items-center gap-x-[2px]">
                                            <span className="content_secondary break-all line-clamp-1 lg:max-w-full">
                                                {post.User.name}
                                            </span>
                                            <svg
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="content_disabled h-[8px] w-[8px]"
                                            >
                                                <circle cx="12" cy="12" r="4"></circle>
                                            </svg>
                                            <span className="content_quaternary shrink-0">{(new Date(post.createdAt)).toLocaleDateString('ko-KR', { timeZone: 'Asia/Seoul' })}</span>
                                        </div>
                                    </div>
                                    <div className="mt-[3px] flex items-center">
                                        <div className="font_label_regular_md flex items-center gap-x-[4px]">
                                            <svg
                                                viewBox="0 0 20 20"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-[18px] h-[18px] content_quaternary"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M8.144 13.563v2l2.543-2h2.396a2.74 2.74 0 0 0 2.741-2.74V7.073a2.74 2.74 0 0 0-2.74-2.74h-6.01a2.74 2.74 0 0 0-2.74 2.74v4.012a2.477 2.477 0 0 0 2.477 2.477h1.333Zm-.104 3.778a.815.815 0 0 1-1.23-.702v-1.743A3.81 3.81 0 0 1 3 11.086V7.074A4.074 4.074 0 0 1 7.074 3h6.01a4.074 4.074 0 0 1 4.073 4.074v3.748a4.074 4.074 0 0 1-4.074 4.074h-1.935L8.04 17.341Z"
                                                ></path>
                                                <path d="M8.167 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0ZM10.667 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0ZM13.167 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z"></path>
                                            </svg>
                                            <span className="content_quaternary shrink-0">47</span>
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </InfiniteScroll>
    );
};

export default PostList;
