import React from 'react';
import img1 from '../../Assets/images/dell-1.jpg';

const Home = () => {
    return (
        <div>
            <div className='sm:grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20 mx-12'>
                <div className='my-3'>
                    <h1 className='text-2xl sm:text-5xl'>Hope its Your next Choicse</h1>
                    <h1 className='text-2xl sm:text-5xl text-blue-400 my-1'>Dell - Inspiron 15 3593</h1>
                    <p className='text-xl text-gray-600 my-3'>DELL Inspiron 3593 39.6 cm (15.6") Intel® Core™ i7, Core™ i5 8 GB DDR4-SDRAM 256 GB SSD Wi-Fi 5 (802.11ac) Windows 10 Pro Black. Intel® Turbo Boost Technology 2.01 accelerates processor and graphics performance by increasing the operating frequency when operating below specification limits</p>
                    <div className='flex justify-center items-center'>
                        <button className='bg-blue-400 py-2 px-3 rounded font-medium hover:text-white hover:font-semibold'>See Feachers</button>

                    </div>
                </div>
                <div className='w-3/4 h-5/6 mx-auto shadow-lg p-8 object-cover'>
                    <img src={img1} alt="laptop" className='w-full h-full' />
                </div>
            </div>
        </div>
    );
};

export default Home;