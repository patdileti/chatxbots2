import React from 'react';
import { Code, Cpu, Zap, Shield, Cloud, Users } from 'lucide-react';

const features = [
  {
    icon: <Code className="h-8 w-8" />,
    title: 'Advanced Code Generation',
    description: 'Generate production-ready code in seconds with our state-of-the-art AI models. Save weeks of development time.'
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: 'Intelligent APIs',
    description: 'Access powerful AI capabilities through simple API calls. No machine learning expertise required.'
  },
  {
    icon: <Zap className="h-8 w-8" />,
    title: 'Lightning Fast',
    description: 'Get responses in milliseconds with our optimized infrastructure. Built for scale and performance.'
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption and security measures to protect your data and intellectual property.'
  },
  {
    icon: <Cloud className="h-8 w-8" />,
    title: 'Seamless Integration',
    description: 'Integrate with your existing tools and workflows in minutes. Works with all major platforms.'
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: 'Team Collaboration',
    description: 'Built for teams. Share resources, manage access, and collaborate effectively.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-medium">
              Supercharge Your Development
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything You Need to Build AI-Powered Apps
          </h2>
          <p className="text-xl text-gray-400">
            Powerful features designed for modern development teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-xl border border-gray-800 bg-gray-900/50 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-3 rounded-lg inline-block mb-4">
                <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}