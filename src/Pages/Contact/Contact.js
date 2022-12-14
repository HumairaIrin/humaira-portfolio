import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { MdPhoneEnabled } from 'react-icons/md';
import { GrMail } from 'react-icons/gr';

const Contact = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-[36px] card text-white border-1 border-opacity-40 rounded-2xl w-[80%] mx-auto py-[4%]' id='contact'>
            <div className='lg:justify-self-start self-center pl-[7%]'>
                <h2 className='text-2xl self-start font-bold mb-4'>Contact Me</h2>
                <p className='flex items-center text-[13px] md:text-lg mb-3 ml-[4%]'><span><MdLocationOn size='2rem' color='white' className='mr-2' /></span>Chattogram, Bangladesh</p>
                <p className='flex items-center text-[13px] md:text-lg mb-3 ml-[4%]'><span><MdPhoneEnabled size='2rem' color='white' className='mr-2' /></span>+880 1832512969</p>
                <p className='flex items-center text-[13px] md:text-lg mb-3 ml-[4%]'><span><GrMail size='2rem' color='white' className='mr-2' /></span>humairamuntaha24@gmail.com</p>
            </div>
            <div className='p-[3%]'>
                <h2 className='text-2xl text-center font-bold'>Get In Touch</h2>
                <form action="https://formspree.io/f/xvoyelnq" method='POST'>
                    <div className=" body-font relative">
                        <div className=" px-5 mb-3 mx-auto">
                            <div className="flex flex-col text-center w-full mb-6">
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-sm">Feel free to knock me anytime.</p>
                            </div>
                            <div className="mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm ">Your Name</label>
                                            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm ">Your Email</label>
                                            <input type="text" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <div className="relative">
                                            <label htmlFor="message" className="leading-7 text-sm ">Your message for me</label>
                                            <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                        </div>
                                    </div>
                                    <div className="p-2 w-full">
                                        <button type="submit" className=" flex items-center mx-auto text-white font-medium bg-secondary border-0 py-2 px-8 focus:outline-none hover:bg-gradient-to-r from-primary to-accent rounded text-lg">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;