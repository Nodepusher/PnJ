import React from 'react';

const DetailFooterContainer = () => {
    return (
        <footer className="sticky bottom-0 z-[2]">
            <div className="border-secondary surface_primary flex w-full items-center justify-center border-t-[1px] p-[16px] shadow-[0px_-2px_20px_rgba(0,0,0,0.08)]">
                <div className="flex w-[720px] justify-between">
                    <div className="flex items-center">
                        <div className="flex items-center gap-[10px]">
                            <button
                                aria-label="like button"
                                className="flex items-center gap-[4px]"
                                type="button"
                                value="c4f104ee-78ea-43bf-a136-ee23c4fa900b"
                            >
                                <svg
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="content_quaternary h-[20px] w-[20px]"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M10 5.406 8.616 4.141c-1.383-1.266-3.682-.982-4.941.422-1.581 1.687-1.582 4.543.092 6.328l5.535 5.487a.988.988 0 0 0 1.396 0l5.535-5.487c1.674-1.785 1.674-4.64.092-6.328-1.259-1.404-3.558-1.688-4.941-.422L10 5.406Zm2.284-.281L10 7.214l-2.284-2.09c-.75-.685-2.203-.615-3.049.329l-.01.01-.01.011c-1.079 1.152-1.117 3.198.077 4.49L10 15.191l5.276-5.229c1.194-1.291 1.156-3.336.076-4.489l-.01-.01-.01-.011c-.846-.944-2.299-1.014-3.048-.328Z"
                                    ></path>
                                </svg>
                                <span className="content_quaternary font_label_regular_sm">좋아요 수 데이터</span>
                            </button>
                            <button
                                aria-label="comment button"
                                className="flex items-center gap-[4px]"
                                type="button"
                                value="c4f104ee-78ea-43bf-a136-ee23c4fa900b"
                            >
                                <svg
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="content_quaternary h-[20px] w-[20px]"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M8.144 13.563v2l2.543-2h2.396a2.74 2.74 0 0 0 2.741-2.74V7.073a2.74 2.74 0 0 0-2.74-2.74h-6.01a2.74 2.74 0 0 0-2.74 2.74v4.012a2.477 2.477 0 0 0 2.477 2.477h1.333Zm-.104 3.778a.815.815 0 0 1-1.23-.702v-1.743A3.81 3.81 0 0 1 3 11.086V7.074A4.074 4.074 0 0 1 7.074 3h6.01a4.074 4.074 0 0 1 4.073 4.074v3.748a4.074 4.074 0 0 1-4.074 4.074h-1.935L8.04 17.341Z"
                                    ></path>
                                    <path d="M8.167 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0ZM10.667 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0ZM13.167 9a.667.667 0 1 1-1.334 0 .667.667 0 0 1 1.334 0Z"></path>
                                </svg>
                                <span className="content_quaternary font_label_regular_sm">댓글 수 데이터</span>
                            </button>
                        </div>
                        <div className="flex items-center">
                            <svg
                                viewBox="0 0 16 12"
                                xmlns="http://www.w3.org/2000/svg"
                                className="content_quaternary ml-[10px] mr-[6px] h-[18px] w-[18px]"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M14.603 6c-.504-.632-1.347-1.59-2.407-2.436C10.92 2.546 9.468 1.8 8.001 1.8s-2.92.746-4.195 1.764C2.746 4.41 1.903 5.368 1.399 6c.504.632 1.347 1.59 2.407 2.435C5.082 9.454 6.534 10.2 8 10.2s2.92-.746 4.195-1.765C13.256 7.59 14.1 6.632 14.603 6Zm1.204.405a.666.666 0 0 0 0-.81C14.86 4.338 11.723.6 8.002.6 4.278.6 1.142 4.34.194 5.594a.666.666 0 0 0 0 .811C1.142 7.661 4.278 11.4 8.001 11.4c3.723 0 6.859-3.74 7.806-4.995Z"
                                ></path>
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M10.896 5.925a2.925 2.925 0 1 1-5.85 0 2.925 2.925 0 0 1 5.85 0ZM7.97 7.65a1.725 1.725 0 1 0 0-3.45 1.725 1.725 0 0 0 0 3.45Z"
                                ></path>
                            </svg>
                            <span className="content_quaternary shrink-0 text-[12px]">조회수 데이터</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <a
                            className="cursor-pointer"
                            href="/creator/imhandzoo/posts/aa0da229-47ae-4d08-8149-0f02b9520d45"
                        >
                            <svg
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="content_secondary h-[24px] w-[24px]"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="m5.325 9.45 8.858-5.03c2.082-1.183 4.773.266 4.773 2.749V17.23c0 2.482-2.69 3.931-4.773 2.749l-8.858-5.032c-2.14-1.216-2.14-4.281 0-5.497Zm.89 1.566a1.356 1.356 0 0 0 0 2.367l8.857 5.031c.926.527 2.084-.131 2.084-1.183V7.169c0-1.053-1.158-1.71-2.084-1.184l-8.858 5.03Z"
                                ></path>
                            </svg>
                        </a>
                        <a href="/creator/imhandzoo/posts?category=294">
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="content_secondary h-[24px] w-[24px]"
                            >
                                <path d="M6.3 5.8a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0ZM6.3 11.8a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0ZM6.3 17.8a1.8 1.8 0 1 1-3.6 0 1.8 1.8 0 0 1 3.6 0ZM8.7 5.8a1.2 1.2 0 0 1 1.2-1.2h10.6a1.2 1.2 0 0 1 0 2.4H9.9a1.2 1.2 0 0 1-1.2-1.2ZM8.7 11.8a1.2 1.2 0 0 1 1.2-1.2h10.6a1.2 1.2 0 0 1 0 2.4H9.9a1.2 1.2 0 0 1-1.2-1.2ZM8.7 17.8a1.2 1.2 0 0 1 1.2-1.2h10.6a1.2 1.2 0 0 1 0 2.4H9.9a1.2 1.2 0 0 1-1.2-1.2Z"></path>
                            </svg>
                        </a>
                        <a
                            className="cursor-pointer"
                            href="/creator/imhandzoo/posts/adab2927-46a9-476d-9bfe-80fe845bf6e3"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="content_secondary h-[24px] w-[24px]"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="m18.595 14.948-8.858 5.03c-2.082 1.184-4.773-.266-4.773-2.748V7.168c0-2.483 2.69-3.932 4.773-2.75l8.858 5.032c2.14 1.216 2.14 4.282 0 5.498Zm-.89-1.565a1.356 1.356 0 0 0 0-2.368l-8.857-5.03c-.926-.527-2.084.13-2.084 1.183V17.23c0 1.052 1.158 1.71 2.084 1.184l8.858-5.031Z"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default DetailFooterContainer;
