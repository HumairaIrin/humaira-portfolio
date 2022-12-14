import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className="navbar px-[5%] mx-auto text-white mb-8 sticky top-0 z-50 backdrop-blur-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box bg-black w-52">
                        <li>
                            <Link to='skills' className='hover:text-white text-primary ' smooth={true} duration={500}>Skills</Link>
                        </li>
                        <li>
                            <Link to='projects' className='hover:text-white text-primary' smooth={true} duration={500}>Projects</Link>
                        </li>
                        <li>
                            <Link to='contact' className='hover:text-white text-primary' smooth={true} duration={500}>Contact Me</Link>
                        </li>
                        <li>
                            <Link to='about' className='hover:text-white text-primary md:z-100' smooth={true} duration={500}>About Me</Link>
                        </li>
                        <li>
                            <Link to='blogs' className='hover:text-white text-primary md:z-100' smooth={true} duration={500}>Blogs</Link>
                        </li>
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl z-100">HM</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">
                    <li>
                        <Link to='skills' className='hover:text-white text-primary md:z-100' smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li>
                        <Link to='projects' className='hover:text-white text-primary md:z-100' smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li>
                        <Link to='contact' className='hover:text-white text-primary md:z-100' smooth={true} duration={500}>Contact Me</Link>
                    </li>
                    <li>
                        <Link to='about' className='hover:text-white text-primary md:z-100' smooth={true} duration={500}>About Me</Link>
                    </li>
                    <li>
                        <Link to='blogs' className='hover:text-white text-primary md:z-100' smooth={true} duration={500}>Blogs</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://drive.google.com/file/d/1vinL6Ju_0Z-LxnDqKTGyia8hG9w6yKcr/view?usp=share_link' target="_blank" rel="noopener noreferrer" className="btn border-2 bg-[#ffffff24] md:z-100 text-white hover:bg-gradient-to-r from-primary to-accent border-primary">See Resume</a>
            </div>
        </div>
    );
};

export default Navbar;