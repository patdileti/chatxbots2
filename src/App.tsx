import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AgentShowcase } from './components/AgentShowcase';
import { Channels } from './components/Channels';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <AgentShowcase />
        <Channels />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;