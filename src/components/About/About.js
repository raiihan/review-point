import React from 'react';

const About = () => {
    return (
        <div className='h-screen'>
            <h2 className="text-4xl text-center my-5">This is About page</h2>
            <div className='sm:flex gap-3  my-28'>
                <div className='shadow bg-slate-200 p-5 text-center ml-8 rounded'>
                    <h1 className='text-4xl mb-5'>Terms & Conditions Generator</h1>
                    <p className='text-xl'>Easily create a Terms & Conditions for
                        your website -- without having to learn legal jargon.</p>
                </div>
                <div className='shadow bg-slate-200 p-5 text-center mr-8 rounded'>
                    <h1 className='text-4xl text-center'>Privacy Policy Generator</h1>
                    <p className='text-xl'>Having a Privacy Policy is an easy way to protect
                        both your store and your customers.</p>
                </div>
            </div>
        </div>
    );
};

export default About;