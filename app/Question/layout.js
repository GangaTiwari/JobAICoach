import React from 'react';
import Link from'next/link'
import { UserButton } from '@clerk/nextjs'
export default function QuestionsLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex p-4 items-center justify-between bg-secondary shadow-sm">
      <Link href='/'> <div className='cursor-pointer flex p-4 items-center  cursor-pointer'><img src="/logo.svg" alt="JobAiCoach Logo" className="h-10 " />
      <h1 className='font-bold text-lg'>JobAICoach</h1></div></Link>
        <nav className="flex justify-between space-x-6 text-gray-600">
          <a href="/dashboard" className="font-medium hover:text-primary hover:font-bold">Dashboard</a>
          <a href="/Question" className="font-medium hover:text-primary hover:font-bold">Questions</a>
          <a href="/Upgrade" className="font-medium hover:text-primary hover:font-bold">Upgrade</a>
          <a href="/" className="font-medium hover:text-primary hover:font-bold">How it works?</a>
        </nav>
        <UserButton/>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto p-6">{children}</main>

      {/* Footer */}
      <footer className=" p-4 text-center text-gray-600 ">
        <p>© {new Date().getFullYear()} JobAiCoach. All rights reserved.</p>
      </footer>
    </div>
  );
}