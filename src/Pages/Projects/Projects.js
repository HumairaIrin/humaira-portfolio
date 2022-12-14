import React, { Fragment } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { BsCamera2 } from 'react-icons/bs';
import { BsServer } from 'react-icons/bs';
import shopifyFull from '../../images/project-1/shopify-full-screen.png';
import { DiGit } from 'react-icons/di';
import './Projects.css'

const Projects = () => {
    const projects = [
        {
            projectName: 'Shopify HMI',
            details: 'Second hand product selling website'
        },
        {
            projectName: 'Skilify HMI',
            details: 'It is about online learning'
        },
        {
            projectName: 'Flashy HMI',
            details: 'This website is for serve self services'
        },
    ]

    return (
        <div className='text-white py-8 w-[90%] mx-auto' id='projects'>
            <h3 className='text-3xl  font-semibold'>Projects</h3>
            <p className='text-[#ffffffbb] text-lg'>Some of projects that I have worked on.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-2 mt-3'>
                <div className='flex flex-col'>
                    <div className='h-[10vh] p-8 bg-white mb-5'>ok bye</div>
                    {/* <div className='h-[20vh] p-8 bg-white mb-[7%]'>1</div> */}
                    <div className='flex flex-col md:flex-row border-2 border-slate-200 border-opacity-30 rounded-lg'>
                        <div><img src={shopifyFull} className='sm:rounded-t-lg md:rounded-l-lg h-1/2 object-contain object-center overflow-y-auto' alt="" /></div>
                        <div className="p-4 md:w-1/2 flex flex-col">
                            <h2 className='text-2xl font-bold text-primary'>SHopify HMI</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sapiente culpa deserunt ipsa! Corporis facilis minus, quidem perferendis nam sunt nobis laudantium hic veritatis alias vero cupiditate dolor est vel asperiores tempore expedita iusto officia beatae ea harum debitis explicabo?</p>
                            <button className='flex items-center m-4 w-[30%] mx-auto btn border-2 border-opacity-50 bg-[#ffffff24] text-white hover:bg-gradient-to-r from-primary to-accent border-primary p-3'>View details <span className='ml-2 mt-1'><FaArrowRight /></span></button>
                            <hr style={{ color: '#acc396', height: '2px' }} className='my-5' />
                            <div className='flex justify-evenly mb-3'>
                                <a href=""><span className='flex items-center align-start'>live Site <BsCamera2 size='16px' color='white' className='ml-2 mt-1' /></span></a>
                                <a href=""><span className='flex items-center'>Server site <BsServer size='20px' color='white' className='ml-2' /></span></a>
                                <a href=""><span className='flex items-center'>Client site <DiGit size='1.5em' color='white' className='ml-2' /></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-between'>
                    <div className='h-[20vh] p-8 bg-white mb-[10%]'>2</div>
                    <div className='h-[20vh] p-8 bg-white mb-[10%]'>2</div>
                </div>
                {/* {
                    projects.map((project, i) =>
                        <Fragment key={i}>
                            <div className='card h-[20vh] p-12'>
                                <h4 className='text-2xl font-500'>{project.projectName}</h4>
                                <p className='text-lg'>{project.details}</p>
                            </div>
                        </Fragment>)
                } */}
            </div>
        </div>
    );
};

export default Projects;