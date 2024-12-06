import React from 'react';
import { Store, ShoppingCart, Calendar, Headphones, Utensils, Building2 } from 'lucide-react';

const agents = [
  {
    icon: <Utensils className="h-8 w-8" />,
    title: 'Restaurant Agent',
    description: 'Handle reservations, take orders, and manage customer inquiries 24/7. Increase table turnover and customer satisfaction.',
    benefits: ['24/7 reservation management', 'Automated order taking', 'Menu recommendations', 'Customer support']
  },
  {
    icon: <ShoppingCart className="h-8 w-8" />,
    title: 'E-commerce Agent',
    description: 'Boost sales with personalized product recommendations and instant customer support. Never miss a sale opportunity.',
    benefits: ['Product recommendations', 'Cart recovery', 'Order tracking', 'Inventory updates']
  },
  {
    icon: <Calendar className="h-8 w-8" />,
    title: 'Appointment Agent',
    description: 'Streamline scheduling for healthcare, beauty, and professional services. Reduce no-shows and maximize bookings.',
    benefits: ['Automated scheduling', 'Reminder system', 'Calendar management', 'Client communication']
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    title: 'Customer Service Agent',
    description: 'Provide instant support and resolve customer issues automatically. Scale your support team effortlessly.',
    benefits: ['24/7 support coverage', 'Multi-language support', 'Ticket management', 'FAQ automation']
  },
  {
    icon: <Store className="h-8 w-8" />,
    title: 'Retail Agent',
    description: 'Enhance in-store and online shopping experiences with personalized assistance and inventory management.',
    benefits: ['Inventory tracking', 'Price checks', 'Store navigation', 'Loyalty programs']
  },
  {
    icon: <Building2 className="h-8 w-8" />,
    title: 'Real Estate Agent',
    description: 'Automate property inquiries, schedule viewings, and provide instant property information to potential buyers.',
    benefits: ['Property matching', 'Viewing scheduling', 'Document handling', 'Market analysis']
  }
];

export function AgentShowcase() {
  return (
    <section id="agents" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-medium">
              Specialized AI Agents
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            The Perfect Agent for Your Business
          </h2>
          <p className="text-xl text-gray-400">
            Choose from our selection of industry-specific AI agents
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  {agent.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {agent.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {agent.description}
              </p>
              <ul className="space-y-2">
                {agent.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-gray-500 text-sm flex items-center">
                    <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></div>
                    {benefit}
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