import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

export default function JobPosting({ company, title, description, location, type, salary, logo }) {
  return (
    <div className="bg-blue-70 rounded-lg shadow-lg p-6 mb-8 transition duration-300 ease-in-out transform hover:scale-105">
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center">
          <img src={logo || "/placeholder.svg?height=60&width=60"} alt={company} className="w-16 h-16 object-contain mr-4 rounded-lg shadow" />
          <div>
            <h3 className="text-2xl font-semibold mb-1 text-gray-800">{title}</h3>
            <h4 className="text-lg text-blue-600">{company}</h4>
          </div>
        </div>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">{type}</span>
      </div>
      <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center text-gray-600">
          <MapPin size={18} className="mr-2 text-blue-500" />
          <span>{location}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock size={18} className="mr-2 text-blue-500" />
          <span>Full Time</span>
        </div>
        <div className="flex items-center text-gray-600">
          <DollarSign size={18} className="mr-2 text-blue-500" />
          <span>{salary}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Briefcase size={18} className="mr-2 text-blue-500" />
          <span>3+ years experience</span>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md flex-grow">
          Apply Now
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-md flex-grow">
          Check Resume Match
        </button>
      </div>
    </div>
  );
}

