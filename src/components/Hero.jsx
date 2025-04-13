import React from 'react'
function Hero() {
    return (
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800">
          Hi, I'm <span className="text-purple-600">Dhyan Patel</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-6">
          I’m a Master's student at Stevens Institute of Technology, passionate about Data, AI, Machine Learning, and creating impactful projects.
        </p>
        <a
          href="/assets/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-md transition"
        >
          Download Resume
        </a>
      </section>
    );
  }
  
  export default Hero;
  