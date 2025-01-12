import React from 'react';
import { Code, Briefcase, BarChartIcon as ChartBar, Stethoscope, GraduationCap, ShoppingBag } from 'lucide-react';

const categories = [
  { name: "Technology", icon: Code },
  { name: "Business", icon: Briefcase },
  { name: "Finance", icon: ChartBar },
  { name: "Healthcare", icon: Stethoscope },
  { name: "Education", icon: GraduationCap },
  { name: "Retail", icon: ShoppingBag },
];

export default function JobCategories() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Job Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer">
              <category.icon size={40} className="text-blue-600 mb-4" />
              <h3 className="font-semibold text-center">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

