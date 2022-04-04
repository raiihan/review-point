import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import ReviewDetail from '../ReviewDetail/ReviewDetail';
import img1 from '../../Assets/images/dell-1.jpg';
import img2 from '../../Assets/images/dell-2.jpg';
import './Home.css';

const Home = () => {
    const [reviews] = useReviews();
    const [flipImg, setFlipImg] = useState(false);
    const navigate = useNavigate();
    return (
        <div>
            <div className='sm:grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mt-20 mx-12'>
                <div className='my-3 info-container'>
                    <h1 className='text-2xl sm:text-5xl'>Hope its Your next Choice</h1>
                    <h1 className='text-2xl sm:text-5xl text-blue-400 my-1'>Dell - Inspiron 15 3593</h1>
                    <p className='text-lg sm:text-xl text-gray-600 my-3'>DELL Inspiron 3593 39.6 cm (15.6") Intel® Core™ i7, Core™ i5 8 GB DDR4-SDRAM 256 GB SSD Wi-Fi 5 (802.11ac) Windows 10 Pro Black. Intel® Turbo Boost Technology 2.01 accelerates processor and graphics performance by increasing the operating frequency when operating below specification limits</p>
                    <div className='flex justify-center items-center'>
                        <button className='bg-blue-400 py-2 px-3 rounded font-medium hover:text-white hover:font-semibold hover:bg-blue-600'>See Feachers</button>
                    </div>
                </div>
                <div className='w-3/4 h-5/6 mx-auto shadow-lg p-8 object-cover img-container'
                    onMouseEnter={() => setFlipImg(true)}
                    onMouseLeave={() => setFlipImg(false)}
                >
                    <img src={flipImg ? img2 : img1} alt="laptop" className='w-full h-full' />
                </div>
            </div>
            <h4 className='text-2xl sm:text-4xl text-center my-16 text-blue-500'>Customers Review ({reviews.length})</h4>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mx-12'>
                {
                    reviews.slice(0, 3).map(review => <ReviewDetail
                        key={review._id}
                        review={review}
                    />)
                }
            </div>
            <div className='flex justify-center my-5' onClick={() => navigate('/reviews')}>
                <button className='bg-blue-400 py-2 px-3 rounded font-medium hover:text-white hover:font-semibold hover:bg-blue-600 '>See All Review</button>
            </div>
        </div>
    );
};

export default Home;