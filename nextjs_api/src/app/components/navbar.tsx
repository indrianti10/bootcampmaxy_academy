import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-xl mb-3">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                        <h1 className=' text-teal-400 font-semibold text-3xl'>Next.js</h1>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                        <a href="/" className=" text-rose-500 hover:text-rose-800 px-3 py-2 rounded-md text-base font-semibold ">Home</a>
                                <a href="/about" className=" text-rose-500 hover:text-rose-800 px-3 py-2 rounded-md text-base font-semibold ">About</a>
                                <a href="/contact" className=" text-rose-500 hover:text-rose-800 px-3 py-2 rounded-md text-base font-semibold ">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

