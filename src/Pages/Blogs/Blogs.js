import React from 'react';

const Blogs = () => {
    return (
        <section className='mb-24 text-white w-[90%] md:w-4/5 mx-auto' id='blogs'>
            <h4 className='text-3xl font-semibold mb-12 flex'>Blogs</h4>
            <div className='grid grid-cols-2'>
                <div className='p-[20%] flex border-2 rounded-lg border-slate-400 border-opacity-30'>
                    <h1 className='text-[30px] opacity-40 md:text-5xl font-semibold text-center items-center'>Coming Soon</h1>
                </div>
            </div>
        </section>
    );
};

export default Blogs;