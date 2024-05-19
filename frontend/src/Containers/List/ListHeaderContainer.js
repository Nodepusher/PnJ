import React from 'react';
import Logo from '../../Components/List/Logo';
import HeaderAction from './HeaderActionContainer';
import Category from '../../Components/List/Category';
import '../../style/List.css';
import '../../style/List2.css';
import ListTitle from '../../Components/List/ListTitle';

const ListHeaderContainer = ({ postdata }) => {
    const style = {
        display: 'flex',
        padding: '0px 32px 0px 32px',
        height: '58px',
        justifyContent: 'space-between',
        alignItems: 'center',
    };

    return (
        <div className="sticky surface_primary z-20 w-full top-0">
            <nav className="sticky" style={style}>
                <Logo />
                <HeaderAction />
            </nav>
            <div className="mx-auto max-w-main">
                <ListTitle />
                <div className="h-[18px]"></div>
                <Category />
                <div className="h-[22px]"></div>
            </div>
        </div>
    );
};

export default ListHeaderContainer;
