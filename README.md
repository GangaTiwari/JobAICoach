# JobAiCoach

![JobAiCoach Logo](https://via.placeholder.com/150?text=JobAiCoach+Logo) <!-- Replace with your actual logo URL -->

Welcome to **JobAiCoach**, an AI-powered platform designed to help you ace your job interviews! This application provides personalized mock interviews, detailed feedback, and coaching tips to double your chances of landing your dream job.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Personalized Mock Interviews**: Practice with AI-generated questions tailored to your job role.
- **Detailed Feedback**: Receive ratings and suggestions to improve your answers.
- **Webcam Recording**: Record your responses for self-review and AI analysis.
- **Upgrade Options**: Unlock premium features like unlimited interviews and personalized coaching.
- **User-Friendly Interface**: Intuitive design for seamless navigation and practice.

## Tech Stack
- **Frontend**: Next.js 14.2.3, React, Tailwind CSS
- **Backend**: Node.js, Drizzle ORM (for database interactions)
- **Database**: PostgreSQL (or your chosen database)
- **Other**: Lucide React (for icons), Shadcn UI (for components)

## Installation

### Prerequisites
- Node.js (v18 or later)
- npm or yarn
- PostgreSQL (or your database setup)

### Steps
 Clone the repository:
   ```bash
   git clone https://github.com/your-username/JobAiCoach.git
   cd JobAiCoach

   Install dependencies:

   npm install

   then make .env.local file
   add NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_DRIZZLE_DB_URL
export const db=drizzle(sql);
NEXT_PUBLIC_GEMINI_API_KEY
NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT
NEXT_PUBLIC_INFORMATION
NEXT_PUBLIC_QUESTION_NOTE

then do npm run dev on terminal 