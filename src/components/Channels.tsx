import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';

export function Channels() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary mb-4">
            Available Communication Channels
          </h2>
          <p className="text-gray-600 text-lg">
            Connect with your customers through their preferred channels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-xl border-2 border-primary hover:border-primary-dark transition-colors duration-300">
            <div className="flex items-center mb-4">
              <MessageSquare className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-secondary">WhatsApp Integration</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Engage with customers on WhatsApp, the world's most popular messaging platform. Our AI agents handle conversations naturally and efficiently.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                24/7 automated responses
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Rich media support
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Multi-language support
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-xl border-2 border-primary hover:border-primary-dark transition-colors duration-300">
            <div className="flex items-center mb-4">
              <Phone className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-semibold text-secondary">Phone Integration</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Provide seamless customer support through traditional phone lines. Our AI agents handle calls professionally and efficiently.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Natural voice interactions
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Call routing & management
              </li>
              <li className="flex items-center text-gray-600">
                <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                Voicemail transcription
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}