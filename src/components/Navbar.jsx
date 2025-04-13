import React from 'react'
function Navbar() {
    return (
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-purple-600">Dhyan Patel</h1>
          <div className="space-x-6 text-sm font-medium text-gray-700">
            <a href="#home" className="hover:text-purple-600">Home</a>
            <a href="#projects" className="hover:text-purple-600">Projects</a>
            <a href="#certificates" className="hover:text-purple-600">Certificates</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  