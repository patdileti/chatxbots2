import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-secondary">
            Boost Your Sales with <span className="text-primary">Specialized AI Agents</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Transform your business with AI agents designed specifically for your industry. Available on WhatsApp and Phone.
            Our specialized agents help you increase sales and deliver exceptional customer service 24/7.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-lg hover:bg-primary-dark transition-all duration-200 flex items-center justify-center gap-2 font-medium">
              Find Your Perfect Agent <ArrowRight className="h-5 w-5" />
            </button>
            <button className="w-full sm:w-auto border-2 border-primary text-primary px-8 py-4 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 flex items-center justify-center gap-2 font-medium">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}