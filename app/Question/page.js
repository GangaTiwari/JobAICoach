import React from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from 'lucide-react';

export default function QuestionsPage() {
  const faqs = [
    {
      question: "What is JobAiCoach?",
      answer: "JobAiCoach is an AI-powered platform designed to help you prepare for job interviews by providing personalized mock interviews, feedback, and coaching tips.",
    },
    {
      question: "How does the mock interview work?",
      answer: "You can start a mock interview by selecting a job role, answering questions recorded via your webcam, and receiving detailed feedback from our AI to improve your skills.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we prioritize your privacy. All data is encrypted, and we adhere to strict security protocols to protect your information.",
    },
    {
      question: "Can I upgrade my plan?",
      answer: "Yes, you can upgrade to Pro or Premium plans from the Upgrade page to unlock more features like unlimited mock interviews and personalized coaching.",
    },
    {
      question: "How do I get started?",
      answer: "Simply click 'Get Started' on the homepage, sign up, and follow the prompts to create your first mock interview session.",
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h1>
      <p className="text-center text-gray-600 mb-8">Find answers to common questions about using JobAiCoach.</p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Collapsible key={index} className="bg-white rounded-lg shadow-md">
            <CollapsibleTrigger className="p-4 flex justify-between items-center w-full text-left text-gray-800 font-semibold hover:bg-gray-50">
              {faq.question} <ChevronsUpDown className="h-5 w-5" />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 text-gray-600 border-t">
              {faq.answer}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </>
  );
}