import React from 'react';
import SearchButton from '../../Components/List/SearchButton';
import LoginButton from '../../Components/List/LoginButton';
import EditButton from '../../Components/List/EditButton';

const HeaderAction = () => {
    const style = {
        display: 'flex',
        columnGap: '16px',
    };
    return (
        <div style={style}>
            <SearchButton></SearchButton>
            <LoginButton></LoginButton>
            <EditButton></EditButton>
        </div>
    );
};

export default HeaderAction;
