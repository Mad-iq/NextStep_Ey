import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import hdr from '../assets/hdr.jpg';
import logo from '../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 shadow-lg mb-0.5">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* <h1 className="text-2xl font-bold">Job Board</h1> */}
          <div className="flex items-center space-x-3  pr-4">
              <img src={logo} alt="Logo" 
              width={100}
              height={30}
              className="rounded"
            />
              <h1 className="text-2xl font-bold">Job Board</h1>
         </div>
          <nav className="flex items-center space-x-6">
            <a href="#" className="hover:text-blue-200 transition-colors duration-200">Home</a>
            <a href="#" className="hover:text-blue-200 transition-colors duration-200">Features</a>
            <a href="#" className="hover:text-blue-200 transition-colors duration-200">Contact</a>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors duration-200 shadow-md">
              Upgrade to Premium
            </button>
          </nav>
        </div>
      </header>

<section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        {/* Left Column: Image */}
        <div className="md:w-1/2 flex justify-center mb-5 md:mb-0">
          <img
            src={hdr}
            alt="Discover Careers"
            className="w-2/5 md:w-5/6 rounded-lg"
          />
        </div>

        {/* Right Column: Text and Buttons */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Discover Your Next Career Move
          </motion.h2>
          <motion.p
            className="text-xl mb-8 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Connect with top employers and find opportunities that match your
            skills and aspirations.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row justify-center md:justify-start items-center space-y-4 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative w-full md:w-auto">
              <input
                type="text"
                placeholder="Search jobs..."
                className="pl-10 pr-4 py-3 w-full md:w-80 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full transition-colors duration-200 shadow-lg">
              Find Jobs
            </button>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
}

