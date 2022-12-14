import React from 'react';
import './MainBanner.css';

const MainBanner = () => {
    return (
        <section className='mb-24'>
            <div className='flex flex-col items-center w-[90%] p-4 md:p-20 md:w-4/5 mx-auto card mt-3'>
                <div>
                    <h5 className='text-[#f5b7ea] text-lg'>Hey,there !! <span className='text-lg mr-2 text-white'>Myself</span></h5>
                    <h2 className='text-[30px] md:text-4xl font-bold text-white mt-2'>  Humaira Muntaha</h2>
                    <p className='text-[#ffffffbb] md:w-[70%] mx-auto justify-center text-[17px] mt-2'>I am a web developer.Who loves to upgrade her skill by exploring new technologies.</p>
                </div>
            </div>
        </section>
    );
};

export default MainBanner;