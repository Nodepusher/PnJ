import React from 'react';
import DetailCategory from '../../Components/Detail/DetailCategory';
import DetailTitle from '../../Components/Detail/DetailTitle';
import DetailWrtierInfoTop from '../../Components/Detail/DetailWrtierInfoTop';

const DetailSectionTop = () => {
    return (
        <>
            <DetailCategory></DetailCategory>
            <div className="h-[8px]"></div>
            <DetailTitle></DetailTitle>
            <DetailWrtierInfoTop></DetailWrtierInfoTop>
        </>
    );
};

export default DetailSectionTop;
