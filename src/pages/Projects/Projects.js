import React from 'react';
import './Projects.css';
import { Github, ExternalLink, Code } from 'lucide-react';
import projectsData from '../../data/projectsData';

const Projects = () => {
  return (
    <section className="projects">
      <div className="container">
         <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <Code className="w-8 h-8" />
          <h1 className="text-4xl md:text-5xl font-bold text-center">My Projects</h1>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project) => (
            <div 
              key={project.id}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-800/50 group"
            >
              {/* Project Image */}
              <div className="w-full h-64 bg-gray-800 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-gray-600 text-6xl">📁</div>`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-base mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Github className="w-5 h-5 btn-live" />
                    GitHub
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <ExternalLink className="w-5 h-5 btn-live" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
      </div>
    </section>
  );
};

export default Projects;
