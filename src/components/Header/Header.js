import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='bg-white shadow-xl text-blue-500 text-center w-full overflow-hidden sm:flex h-40 sm:h-20 justify-between items-center px-28 '>
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
        </nav>
    );
};

export default Header;