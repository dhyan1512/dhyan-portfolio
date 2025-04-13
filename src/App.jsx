import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main id="home" className="pt-20">
        <Hero />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </>
  );
}

export default App;
