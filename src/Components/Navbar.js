import React from 'react';
import { Icon } from '@iconify/react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between border-b-2 mx-5 px-10 mt-12'>
            <div className='flex items-center'><span><Icon icon="fa-regular:window-restore" /></span><div><span>E</span><span> - Shop</span></div></div>
            <div className='flex items-center'><a href="/">Men</a><a href="/">Woman</a><a href="/">Kids</a></div>
            <div className='flex items-center'><span><Icon icon="ant-design:search-outlined" /></span><span><Icon icon="ant-design:shopping-cart-outlined" /></span><span><Icon icon="bi:person" /></span></div>
        </div>
    );
};

export default Navbar;