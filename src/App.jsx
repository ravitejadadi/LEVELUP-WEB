import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Metrics from './components/Metrics';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background-dark min-h-screen selection:bg-primary-brand/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Metrics />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
