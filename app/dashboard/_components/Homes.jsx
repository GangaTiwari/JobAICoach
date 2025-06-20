"use client"
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const Homes = () => {
  const fullText = "Your Personal AI Interview Coach";
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (charIndex < fullText.length) {
        setDisplayText((prev) => prev + fullText[charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        // Reset to start the loop
        setTimeout(() => {
          setDisplayText('');
          setCharIndex(0);
        }, 5000); // Pause for 1 second before restarting
      }
    }, 100); // Typing speed (adjust as needed)

    return () => clearTimeout(timer);
  }, [charIndex, fullText]);

  return (
    <div className="flex flex-col items-center justify-center bg-white m-5 p-6">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4 text-center animate-fade-in hover:text-gray-1000 transition-all cursor-pointer scroll-smooth">
        {displayText}
        <span className="animate-blink">|</span>
      </h1>
      <p className="text-center text-gray-600 mb-8 max-w-lg leading-relaxed animate-slide-up">
        Double your chances of landing that dream job with our cutting-edge AI-powered interview preparation.
      </p>
      <div className="flex space-x-6 mb-12">
        <Link href='/sign-up'>
          <Button className="bg-purple-600 text-white hover:bg-purple-700 px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition">
            Get Started →
          </Button>
        </Link>
        <Link href='https://www.linkedin.com/in/ganga-tiwari-638aa1290'>
          <Button variant="outline" className="text-gray-600 border-gray-300 hover:border-purple-600 hover:text-purple-600 px-6 py-3 rounded-full shadow-md transition">
            Watch Creator
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Homes;