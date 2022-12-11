import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar w-4/5 mx-auto text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box bg-[#00000027] w-52">
                        <li><a href=''>Skills</a></li>
                        <li><a href=''>Projects</a></li>
                        <li><a href=''>Contact Me</a></li>
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case text-xl">HM</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href=''>Skills</a></li>
                    <li><a href=''>Projects</a></li>
                    <li><a href=''>Contact Me</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://drive.google.com/file/d/1vinL6Ju_0Z-LxnDqKTGyia8hG9w6yKcr/view?usp=share_link' target="_blank" rel="noopener noreferrer" className="btn border-2 bg-[#ffffff24] text-white">See Resume</a>
            </div>
        </div>
    );
};

export default Navbar;