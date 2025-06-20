import React from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';


const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-white p-4">
      <h1 className="text-3xl font-bold mb-6">How it Works?</h1>
      <p className="text-center mb-8 text-gray-600">Give mock interview in just 3 simple easy step</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="mb-4">
            <svg className="w-8 h-8 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Write prompt for your form</h3>
          <p className="text-gray-500">Describe the job role you're targeting, including key skills, experience, and any specific challenges you want to prepare for, to customize your mock interview..</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="mb-4">
            <svg className="w-8 h-8 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Edit Your form</h3>
          <p className="text-gray-500">Review and update your job role details, refining skills or adding specific questions you’d like to practice, to perfect your mock interview setup.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <div className="mb-4">
            <svg className="w-8 h-8 mx-auto text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M9 16h6m-7-4h5m-5 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">Share & Start Accepting Responses</h3>
          <p className="text-gray-500">Create a shareable link to send your form to friends or mentors, and start receiving their feedback to enhance your interview performance</p>
        </div>
      </div>
      <Link href='/dashboard'>
      <Button className="mt-8 bg-pink-500 text-white hover:bg-pink-600">Get Started Today</Button>
      </Link>

       <footer className=" p-4 w-screen text-center text-gray-600 mt-5 ">
        © {new Date().getFullYear()} JobAICoac. All rights reserved.
      </footer>
    </div>
  );
};

export default HowItWorks;