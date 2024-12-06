import React from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src="https://web.chatxbots.com/images/logo.png" alt="Logo" className="h-10" />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-secondary hover:text-primary transition-colors">Solutions</a>
            <a href="#agents" className="text-secondary hover:text-primary transition-colors">AI Agents</a>
            <a href="#pricing" className="text-secondary hover:text-primary transition-colors">Pricing</a>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-all duration-200">
              Get Your Agent
            </button>
          </div>

          <button 
            className="md:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="#solutions" className="block text-secondary hover:text-primary transition-colors">Solutions</a>
            <a href="#agents" className="block text-secondary hover:text-primary transition-colors">AI Agents</a>
            <a href="#pricing" className="block text-secondary hover:text-primary transition-colors">Pricing</a>
            <button className="w-full bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-dark transition-all duration-200">
              Get Your Agent
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}