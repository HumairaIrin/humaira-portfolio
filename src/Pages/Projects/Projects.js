import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { BsCamera2 } from 'react-icons/bs';
import { BsServer } from 'react-icons/bs';
import shopifyBanner from '../../images/shopify/shopify-banner.png';
import skilifyBanner from '../../images/skilify/skilify-1.png';
import eduBanner from '../../images/edu/edu-hmi-1.png';
import { DiGit } from 'react-icons/di';

const Projects = () => {

    return (
        <section className='mb-24'>
            <div className='text-white py-8 w-[90%] mx-auto' id='projects'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-14 mt-3'>
                    <div className='flex flex-col'>
                        <div className=' p-4 mb-[10%]'>
                            <h3 className='text-3xl flex font-semibold'>Projects</h3>
                            <p className='text-[#ffffffbb] flex text-lg'>Some of projects that I have worked on.</p>
                        </div>
                        <div className='flex flex-col border-2 border-slate-200 border-opacity-30 rounded-lg'>
                            <div className=''>
                                <img src={shopifyBanner} className=' object-cover rounded-t-lg' alt="" />
                            </div>
                            <div className="p-4 flex flex-col">
                                <h2 className='text-2xl font-bold text-primary'>SHopify HMI</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sapiente culpa deserunt ipsa! Corporis facilis minus, quidem perferendis nam sunt nobis laudantium hic veritatis alias vero cupiditate dolor est vel asperiores tempore expedita iusto officia beatae ea harum debitis explicabo?</p>
                                <button className='flex items-center m-4 w-[40%] mx-auto btn border-2 border-opacity-50 bg-[#ffffff24] text-white hover:bg-gradient-to-r from-primary to-accent border-primary p-3'>View details <span className='ml-2 mt-1'><FaArrowRight /></span></button>
                                <hr style={{ color: '#acc396', height: '2px' }} className='my-5' />
                                <div className='flex justify-evenly mb-3'>
                                    <a href="https://shopify-hmi.web.app" target="_blank" rel="noopener noreferrer"><span className='flex items-center align-start hover:text-teal-500'>live Site <BsCamera2 size='16px' color='white' className='ml-2 mt-1' /></span></a>
                                    <a href="https://github.com/HumairaIrin/shopify-hmi-server" target="_blank" rel="noopener noreferrer"><span className='flex items-center hover:text-teal-500'>Server site <BsServer size='20px' color='white' className='ml-2' /></span></a>
                                    <a href="https://github.com/HumairaIrin/shopify-hmi-client" target="_blank" rel="noopener noreferrer"><span className='flex items-center hover:text-teal-500'>Client site <DiGit size='1.5em' color='white' className='ml-2' /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-between'>
                        {/* <div className='h-[20vh] p-8 bg-white mb-[10%]'>2</div> */}
                        <div className='flex flex-col border-2 border-slate-200 border-opacity-30 rounded-lg mb-[10%]'>
                            <div className=''>
                                <img src={skilifyBanner} className=' object-cover rounded-t-lg' alt="" />
                            </div>
                            <div className="p-4 flex flex-col">
                                <h2 className='text-2xl font-bold text-primary'>Skilify HMI</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sapiente culpa deserunt ipsa! Corporis facilis minus, quidem perferendis nam sunt nobis laudantium hic veritatis alias vero cupiditate dolor est vel asperiores tempore expedita iusto officia beatae ea harum debitis explicabo?</p>
                                <button className='flex items-center m-4 w-[40%] mx-auto btn border-2 border-opacity-50 bg-[#ffffff24] text-white hover:bg-gradient-to-r from-primary to-accent border-primary p-3'>View details <span className='ml-2 mt-1'><FaArrowRight /></span></button>
                                <hr style={{ color: '#acc396', height: '2px' }} className='my-5' />
                                <div className='flex justify-evenly mb-3'>
                                    <a href="https://skilify-hmi.web.app" target="_blank" rel="noopener noreferrer"><span className='flex items-center align-start hover:text-teal-500'>live Site <BsCamera2 size='16px' color='white' className='ml-2 mt-1' /></span></a>
                                    <a href="https://github.com/HumairaIrin/skilify-hmi-server" target="_blank" rel="noopener noreferrer"><span className='flex items-center hover:text-teal-500'>Server site <BsServer size='20px' color='white' className='ml-2' /></span></a>
                                    <a href="https://github.com/HumairaIrin/skilify-hmi-client" target="_blank" rel="noopener noreferrer"><span className='flex items-center hover:text-teal-500'>Client site <DiGit size='1.5em' color='white' className='ml-2' /></span></a>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col border-2 border-slate-200 border-opacity-30 rounded-lg'>
                            <div className=''>
                                <img src={eduBanner} className=' object-cover rounded-t-lg' alt="" />
                            </div>
                            <div className="p-4 flex flex-col">
                                <h2 className='text-2xl font-bold text-primary'>Edu HMI</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sapiente culpa deserunt ipsa! Corporis facilis minus, quidem perferendis nam sunt nobis laudantium hic veritatis alias vero cupiditate dolor est vel asperiores tempore expedita iusto officia beatae ea harum debitis explicabo?</p>
                                <button className='flex items-center m-4 w-[40%] mx-auto btn border-2 border-opacity-50 bg-[#ffffff24] text-white hover:bg-gradient-to-r from-primary to-accent border-primary p-3'>View details <span className='ml-2 mt-1'><FaArrowRight /></span></button>
                                <hr style={{ color: '#acc396', height: '2px' }} className='my-5' />
                                <div className='flex justify-evenly mb-3'>
                                    <a href="https://eduhmi.netlify.app/" target="_blank" rel="noopener noreferrer"><span className='flex items-center align-start hover:text-teal-500'>live Site <BsCamera2 size='16px' color='white' className='ml-2 mt-1' /></span></a>
                                    <span target="_blank" rel="noopener noreferrer"><span className='flex items-center text-[10px] text-slate-100 line-through'>no backend work</span></span>
                                    <a href="https://github.com/HumairaIrin/Edu-HMI" target="_blank" rel="noopener noreferrer"><span className='flex items-center hover:text-teal-500'>Client site <DiGit size='1.5em' color='white' className='ml-2' /></span></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;