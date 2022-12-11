import React, { Fragment } from 'react';

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
        <div className='text-white py-8 w-[90%] mx-auto'>
            <h3 className='text-3xl  font-semibold'>Projects</h3>
            <p className='text-[#ffffffbb] text-lg'>Some of projects that I have worked on.</p>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mt-3'>
                {
                    projects.map((project, i) =>
                        <Fragment key={i}>
                            <div className='card h-[20vh] p-12'>
                                <h4 className='text-2xl font-500'>{project.projectName}</h4>
                                <p className='text-lg'>{project.details}</p>
                            </div>
                        </Fragment>)
                }
            </div>
        </div>
    );
};

export default Projects;