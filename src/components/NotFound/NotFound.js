import React from 'react';
import notFound from '../../Assets/images/404.png';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center my-36'>
            <img src={notFound} alt="Page Not Found" />
        </div>
    );
};

export default NotFound;