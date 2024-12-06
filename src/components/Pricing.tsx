import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '299',
    description: 'Perfect for small businesses',
    features: [
      '1 AI Agent of your choice',
      '1,000 customer interactions/month',
      'Basic customization',
      'Email support',
      'Basic analytics',
    ],
  },
  {
    name: 'Growth',
    price: '799',
    popular: true,
    description: 'For growing businesses',
    features: [
      '3 AI Agents of your choice',
      'Unlimited interactions',
      'Advanced customization',
      'Priority support 24/7',
      'Advanced analytics',
      'Multi-language support',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations',
    features: [
      'Unlimited AI Agents',
      'Custom agent development',
      'Dedicated success manager',
      'SLA guarantees',
      'White-label solution',
      'Custom integrations',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-medium">
              Simple Pricing
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Choose Your AI Team
          </h2>
          <p className="text-xl text-gray-400">
            Select the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? 'bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20'
                  : 'bg-gray-800/50 border border-gray-700'
              }`}
            >
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">{plan.price === 'Custom' ? '' : '$'}{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-gray-400">/month</span>
                  )}
                </div>
                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold mb-8 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                      : 'bg-gray-700 text-white hover:bg-gray-600'
                  } transition-all duration-200`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-300">
                    <Check className="h-5 w-5 mr-3 text-purple-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}