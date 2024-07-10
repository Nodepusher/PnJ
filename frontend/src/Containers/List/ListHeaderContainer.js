import React from 'react';
import HeaderContainer from '../Common/HeaderContainer';
import ListTitle from '../../Components/List/ListTitle';
import Category from '../../Components/List/Category';

const ListHeaderContainer = () => {
    return (
        <div className="sticky surface_primary z-20 w-full top-0">
            <HeaderContainer search login mypage />
            <div className="mx-auto max-w-main">
                <ListTitle />
                <div className="h-[18px]"></div>
                <Category />
                <div className="h-[22px]"></div>
            </div>
        </div>
    );
};

export default React.memo(ListHeaderContainer);
