import React from 'react';
import './Services.css';
import { Briefcase } from 'lucide-react';
import servicesData from '../../data/servicesData';

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="min-h-screen bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <Briefcase className="w-8 h-8" />
          <h1 className="text-4xl md:text-5xl font-bold text-center">Services</h1>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 hover:border-gray-500 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-700/50 group hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <i className={`${service.icon} text-4xl text-black`}></i>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-4 text-center group-hover:text-gray-300 transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed text-center">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
      </div>
    </section>
  );
};

export default Services;
