import React, { Fragment } from 'react';

const Skills = () => {
    const skills = [
        'CSS', 'HTML', 'TailwindCSS', 'Bootstrap', 'DaisyUI', 'JavaScript',
        'ReactJS', 'ExpressJS', 'MongoDB', 'NodeJS'
    ]

    return (
        <div className='w-4/5 mx-auto text-white py-8 flex flex-col md:flex-row justify-around'>
            <h4 className='text-2xl font-semibold mb-3 content-start'>My Skills</h4>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-2'>
                {
                    skills.map((skill, i) => <Fragment
                        key={i}>
                        <div className='border-2 border-opacity-40 text-xl border-white bg-transparent p-4 rounded-lg'>{skill}</div>
                    </Fragment>)
                }
            </div>
        </div>
    );
};

export default Skills;