import React from 'react';

const projects = [
  {
    title: 'Forex Algo Trading Terminal',
    description: 'AI-powered tool for backtesting Forex strategies. Built using Python, Pandas, and Plotly.',
    github: 'https://github.com/yourusername/forex-algo',
    live: '#',
  },
  {
    title: 'YOLOv8 Garbage Detector',
    description: 'Used YOLOv8 to classify and detect garbage categories on Indian streets using area-based detection.',
    github: 'https://github.com/yourusername/garbage-detection',
    live: '#',
  },
  {
    title: 'Resume Parser with NLP',
    description: 'React + Python project that extracts and summarizes key info from resumes using spaCy + Transformers.',
    github: 'https://github.com/yourusername/resume-parser',
    live: '#',
  },
];

function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">My Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{project.description}</p>
              <div className="flex space-x-4 justify-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm hover:bg-purple-700"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
