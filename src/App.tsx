import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ApplicationForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;