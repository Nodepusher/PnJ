import React from 'react';
import Logo from '../../Components/List/Logo';
import HeaderAction from './HeaderAction';
import Category from '../../Components/List/Category';
import '../../style/List.css';
import '../../style/List2.css';

const ListHeader = () => {
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
                <Logo></Logo>
                <HeaderAction></HeaderAction>
            </nav>
            <Category></Category>
        </div>
    );
};

export default ListHeader;
