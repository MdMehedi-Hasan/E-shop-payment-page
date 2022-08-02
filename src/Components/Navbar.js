import React from 'react';
import { Icon } from '@iconify/react';

const Navbar = () => {
    return (
        <div className='flex items-center justify-between border-b-2 mx-5 px-5 h-20'>
            <div className='flex items-center'><span className='text-2xl'><Icon icon="fa-regular:window-restore" /></span><div className='text-xl'><span className='text-orange-400 pl-5'>E</span><span>-Shop</span></div></div>
            <div className='flex items-center'><a href="/">Men</a><a href="/" className='px-16'>Woman</a><a href="/">Kids</a></div>
            <div className='flex items-center'><span className='text-xl'><Icon icon="ant-design:search-outlined" /></span><span className='px-5 text-xl'><Icon icon="ant-design:shopping-cart-outlined" /></span><span className='text-xl'><Icon icon="bi:person" /></span></div>
        </div>
    );
};

export default Navbar;