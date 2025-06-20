import React from 'react';


export default function UpgradePage() {
  const plans = [
    {
      name: 'Basic',
      price: '$9.99/month',
      features: ['10 mock interviews/month', 'Basic AI feedback', 'Email support','No Video Analysis'],
    },
    {
      name: 'Pro',
      price: '$19.99/month',
      features: ['30 mock interviews/month', 'Advanced AI feedback', 'Priority email support', 'Video analysis'],
    },
    {
      name: 'Premium',
      price: '$29.99/month',
      features: ['Unlimited mock interviews', 'Expert AI feedback', '24/7 priority support', 'Personalized coaching'],
    },
  ];

  return (
    <>
   
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Choose Your Plan</h2>
      <p className="text-center text-gray-600 mb-8">Upgrade to unlock more features and supercharge your interview prep!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{plan.name}</h3>
            <p className="text-2xl font-bold text-purple-600 mb-4">{plan.price}</p>
            <ul className="text-gray-600 space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-purple-600 text-white py-2 rounded-full hover:bg-purple-700 transition">
              Will be Available Soon
            </button>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}