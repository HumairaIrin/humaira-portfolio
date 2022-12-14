import React from 'react';
import { Link } from 'react-scroll';

const About = () => {
    return (
        <section className='mb-24 text-white md:w-[70%] mx-auto' id='about'>
            <h4 className='text-3xl font-semibold mb-5 self-center '>About Me</h4>
            <div className='flex card p-6'>
                <p className='self-start text-sm md:text-lg'>I am Humaira,20 years old and I have completed my intermediate level last year.I just learned basic HTML and CSS in college.I got to know about a web development course then where i learned JavaScript, reactJS and also the backend tools like mongoDB, Express.
                    <br />
                    I really love to work on new projects.Mordern UI designs really attracts me the most.Searching about different sort of animation then implementing them on projects I really enjoy doing these things.
                    <br />
                    In my free time I love to draw random things or just play music to refresh my mind.Sometimes I pass my free time to explore new ideas about development.I appreciate to do this to keep myself in track all time.
                </p>
                <Link to='contact' smooth={true} duration={500}><button className="btn border-2 bg-[#ffffff24] md:z-100 text-white hover:bg-gradient-to-r from-primary to-accent border-primary mt-3">Get In Touch</button></Link>
            </div>
        </section>
    );
};

export default About;