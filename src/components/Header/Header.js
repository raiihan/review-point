import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav>
            <div className='w-6 h-6 sm:hidden' onClick={() => setOpen(!open)}>
                {open ? <XIcon /> : <MenuIcon />}
            </div>
            <div className={`bg-white shadow-xl text-blue-500 text-center w-full overflow-hidden sm:flex  sm:h-20 justify-between items-center px-28 sm:static absolute ${open ? 'top-6' : 'top-[-220px]'}`}>

                <div>
                    <Link to={'/'}><p className='font-mono w-full text-xl sm:text-2xl font-semibold italic hover:text-blue-700'>Reviews-Point</p></Link>
                </div>
                <div className='uppercase text-center  sm:flex justify-end'>

                    <CustomLink className='ml-3 block font-medium hover:font-semibold hover:text-blue-700' to="/">Home</CustomLink>
                    <CustomLink className='ml-3 block font-medium hover:font-semibold hover:text-blue-700' to="/reviews">Reviews</CustomLink>
                    <CustomLink className='ml-3 block font-medium hover:font-semibold hover:text-blue-700' to={'/dashboard'}>Dashboard</CustomLink>
                    <CustomLink className='ml-3 block font-medium hover:font-semibold hover:text-blue-700' to={'/blogs'}>Blogs</CustomLink>
                    <CustomLink className='ml-3 block font-medium hover:font-semibold hover:text-blue-700' to={'/about'}>About</CustomLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;