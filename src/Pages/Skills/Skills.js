import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { FaCss3Alt } from 'react-icons/fa';
import { TbBrandTailwind } from 'react-icons/tb';
import { FaBootstrap } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';

const Skills = () => {
    return (
        <div className='w-4/5 mx-auto mb-24 text-white flex flex-col items-center' id='skills'>
            <h4 className='text-3xl font-semibold mb-5 self-center '>My Skills <br /><span className='w-4/5 h-[1em] bg-white'></span></h4>
            <div className='grid grid-cols-3 md:grid-cols-5 gap-5 md:gap-[4rem] p-4'>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-opacity-40 bg-[#ffffff24] border-white p-4 rounded-full w-[5rem] h-[5rem] flex justify-center items-center'><FaHtml5 size='3rem' color='white' /></div>
                    <p className='text-[16px] mt-2'>HTML</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-opacity-40 bg-[#ffffff24] border-white p-4 rounded-full w-[5rem] h-[5rem] flex justify-center items-center'><FaCss3Alt size='3rem' color='white' /></div>
                    <p className='text-[16px] mt-2'>CSS</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-opacity-40 bg-[#ffffff24] border-white p-4 rounded-full w-[5rem] h-[5rem] flex justify-center items-center'><TbBrandTailwind size='3rem' color='white' /></div>
                    <p className='text-[16px] mt-2'>TailwindCSS</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-opacity-40 bg-[#ffffff24] border-white p-4 rounded-full w-[5rem] h-[5rem] flex justify-center items-center'><FaBootstrap size='3rem' color='white' /></div>
                    <p className='text-[16px] mt-2'>BootStrap</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-opacity-40 bg-[#ffffff24] border-white p-4 rounded-full w-[5rem] h-[5rem] flex justify-center items-center'><IoLogoJavascript size='3rem' color='white' /></div>
                    <p className='text-[16px] mt-2'>JavaScript</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-opacity-40 bg-[#ffffff24] border-white p-4 rounded-full w-[5rem] h-[5rem] flex justify-center items-center'><RiReactjsLine size='3rem' color='white' /></div>
                    <p className='text-[16px] mt-2'>ReactJS</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-opacity-40 bg-[#ffffff24] border-white p-4 rounded-full w-[5rem] h-[5rem] flex flex-col justify-center items-center'><span> express</span><span><IoLogoJavascript size='2rem' color='white' /></span></div>
                    <p className='text-[16px] mt-2'>ExpressJS</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-opacity-40 bg-[#ffffff24] border-white p-4 rounded-full w-[5rem] h-[5rem] flex justify-center items-center'><SiMongodb size='3rem' color='white' /></div>
                    <p className='text-[16px] mt-2'>MongoDB</p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='border-2 border-opacity-40 bg-[#ffffff24] border-white p-4 rounded-full w-[5rem] h-[5rem] flex justify-center items-center'><DiNodejs size='3rem' color='white' /></div>
                    <p className='text-[16px] mt-2'>NodeJS</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;