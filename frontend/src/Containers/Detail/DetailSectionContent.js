import React from 'react';
import DetailSectionContentImg from '../../Components/Detail/DetailSectionContentImg';
import DetailSectionContentP from '../../Components/Detail/DetailSectionContentP';

const DetailSectionContent = () => {
    return (
        <div className="border_secondary mt-[24px] border-t pt-[32px]">
            <div>
                <div className="steadio-post steadio-post-detail copy-disabled">
                    <DetailSectionContentImg></DetailSectionContentImg>
                    <DetailSectionContentP></DetailSectionContentP>
                </div>
                <div className="h-[32px]"></div>
            </div>
            <div className="flex w-full flex-wrap">
                <button>
                    <li className="h-[30px] mb-[12px] mr-[6px] flex items-center rounded-[4px] bg-[#FAFAFB] pl-[8px] pr-[8px]">
                        <span className="content_primary font_body_regular_md mr-[6px] text-[#666667]">
                            #해시태그 이름
                        </span>
                    </li>
                </button>
            </div>
            <div className="h-[20px]"></div>
        </div>
    );
};

export default DetailSectionContent;
