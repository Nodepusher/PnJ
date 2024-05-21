import React from 'react';
import DetailCategory from '../../Components/Detail/DetailCategory';
import DetailTitle from '../../Components/Detail/DetailTitle';
import DetailWrtierInfoTop from '../../Components/Detail/DetailWrtierInfoTop';

const DetailSectionTop = () => {
    return (
        <>
            <DetailCategory />
            <div className="h-[8px]"></div>
            <DetailTitle />
            <DetailWrtierInfoTop />
        </>
    );
};

export default DetailSectionTop;
