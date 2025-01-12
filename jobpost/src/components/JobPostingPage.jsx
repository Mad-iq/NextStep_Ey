import React from 'react';
import Layout from './Layout';
import SuccessStories from './SuccessStories';
import JobCategories from './JobCategories';
import JobPosting from './JobPostings';
import FeaturedCompanies from './FeaturedCompanies';
import ey from '../assets/ey.png'
import pr from '../assets/pr.png'
import gg from '../assets/gg.webp'

const jobPostings = [
  {
    id: 1,
    company: 'EY',
    title: 'Senior Auditor',
    description: 'EY is seeking a Senior Auditor to join our growing team. The ideal candidate will have 5+ years of experience in auditing and a CPA certification.',
    location: 'New York, NY',
    type: 'Full-time',
    salary: '$80,000 - $120,000',
    logo: ey
  },
  {
    id: 2,
    company: 'Providence',
    title: 'System Engineer',
    description: 'Providence is currently seeking expressions of interest from experienced Systems Engineering Consultants to work across several work packages in a fast paced and highly complex environment. ',
    location: 'Seattle, WA',
    type: 'Full-time',
    salary: '$70,000 - $90,000',
    logo: pr
  },
  {
    id: 3,
    company: 'Google',
    title: 'Technical Program Manager',
    description: 'Requires experience in partnering with engineering, product management and support teams to facilitate the design and delivery of networking/telco focused products.',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$130,000 - $180,000',
    logo: gg
  },
];

export default function JobPostingPage() {
  return (
    <Layout>
      <JobCategories />
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold mb-12 text-center text-gray-800">Latest Job Opportunities</h2>
          {jobPostings.map(job => (
            <JobPosting key={job.id} {...job} />
          ))}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              View All Jobs
            </button>
          </div>
        </div>
      </section>
      <FeaturedCompanies />
      <SuccessStories />
    </Layout>
  );
}

