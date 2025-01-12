import React from 'react';
import { motion } from 'framer-motion';
import at from '../assets/at.png';
import fp from '../assets/fp.png'
import tw from '../assets/tw.jpg';
import ae from '../assets/ae.webp';
import jio from '../assets/jio.png';
import pf from '../assets/pf.png';

const companies = [
  { name: 'Jio', logo: jio, employees: '10,000+', industry: 'Telecommunications' },
  { name: 'ThoughtWorks', logo: tw, employees: '5,000+', industry: 'Innovation' },
  { name: 'Fareportal', logo: fp , employees: '8,000+', industry: 'E-commerce' },
  { name: 'Pfizer', logo: pf, employees: '3,000+', industry: 'Pharmaceutical & Life Sciences' },
  { name: 'American Express', logo: ae, employees: '6,000+', industry: 'Financial Services' },
  { name: 'Atlassian', logo: at, employees: '2,000+', industry: 'Software' },
];

export default function FeaturedCompanies() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img src={company.logo} alt={company.name} className="w-16 h-16 object-contain mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{company.name}</h3>
                    <p className="text-sm text-gray-600">{company.industry}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{company.employees} employees</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors duration-300">
                    View Jobs
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Explore All Companies
          </button>
        </div>
      </div>
    </section>
  );
}
