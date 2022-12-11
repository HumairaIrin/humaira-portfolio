import React from 'react';

const Contact = () => {
    return (
        <div className='card text-white border-1 border-opacity-40 rounded-2xl w-[80%] mx-auto mt-3 py-[4%]'>
            <div>
                <h2 className='text-2xl text-center font-bold text-[#f5b7ea]'>Get In Touch</h2>
                <form action="https://formspree.io/f/xvoyelnq" method='POST'>
                    <section className=" body-font relative">
                        <div className="container px-5 my-3 mx-auto">
                            <div className="flex flex-col text-center w-full mb-6">
                                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Feel free to knock me anytime.</p>
                            </div>
                            <div className="lg:w-1/2 md:w-2/3 mx-auto">
                                <div className="flex flex-wrap -m-2">
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="name" className="leading-7 text-sm ">Name</label>
                                            <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                        </div>
                                    </div>
                                    <div className="p-2 w-1/2">
                                        <div className="relative">
                                            <label htmlFor="email" className="leading-7 text-sm ">Contact No</label>
                                            <input type="text" id="email" name="number" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
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
                                        <button type="submit" className=" flex mx-auto text-white bg-[#9e378b] border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>
            </div>
        </div>
    );
};

export default Contact;