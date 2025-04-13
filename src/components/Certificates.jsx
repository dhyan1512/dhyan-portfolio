import React from 'react';

const certificates = [
  {
    title: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera',
    link: 'https://coursera.org/verify/google-data-analytics',
  },
  {
    title: 'Machine Learning by Stanford University',
    issuer: 'Coursera',
    link: 'https://coursera.org/verify/machine-learning-stanford',
  },
  {
    title: 'Advanced SQL for Data Scientists',
    issuer: 'DataCamp',
    link: 'https://datacamp.com/certificate/sql-ds',
  },
];

function Certificates() {
  return (
    <section id="certificates" className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Certificates</h2>

        <ul className="space-y-6">
          {certificates.map((cert, index) => (
            <li
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-purple-700">{cert.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-600 underline hover:text-purple-800"
              >
                View Certificate
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Certificates;
