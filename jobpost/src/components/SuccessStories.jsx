import React from 'react';
import { Star } from 'lucide-react';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.webp'
import p3 from '../assets/p3.webp'

const stories = [
  {
    name: "Aritra Banerjee",
    role: "Software Engineer",
    company: "TechCorp",
    story: "I found my dream job through Premium Job Board! The AI-powered matching system was spot on.",
    image: p1
  },
  {
    name: "Riya Sharma",
    role: "Marketing Manager",
    company: "InnovateLLC",
    story: "The resume checker helped me improve my application, leading to multiple job offers!",
    image: p2
  },
  {
    name: "Alina Riaz",
    role: "Financial Analyst",
    company: "DataDynamics",
    story: "I got hired within a week of applying! The job recommendations were perfectly tailored to my skills.",
    image: p3
  }
];

export default function SuccessStories() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition-shadow duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full mr-4 object-cover" />
                <div>
                  <h3 className="font-bold text-lg text-gray-800">{story.name}</h3>
                  <p className="text-gray-600">{story.role}</p>
                  <p className="text-blue-600">{story.company}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4 italic">"{story.story}"</p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
            Share Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
}

