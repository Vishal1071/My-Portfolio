import React from 'react';
import './About.css';
import { Book, Award, Code, Download } from 'lucide-react';

const About = () => {
  const skills = [
    'React.js',
    'Node.js',
    'MongoDB',
    'Express.js',
    'JavaScript',
    'HTML/CSS',
    'AWS',
    'Git',
    'Bootstrap',
    'Tailwind CSS',
    'MySQL',
    'C',
    'Java',
    'Postman',
    'Cloudinary'
  ];

  const certificates = [
    { name: 'SCOPE', issuer: 'cambridge english', year: '2022', img:'SCOPE.jpg' },
    { name: 'AI ML', issuer: 'B.H gardi college', year: '2023', img:'AI-ML.jpg' },
    { name: 'PDC Certificate', issuer: 'saurashtra university', year: '2025', img:'PDC.jpg' },
    { name: 'course on computer concepts', issuer: 'All india computer education society', year: '2020', img:'CCC.jpg' },
  ];

  const handleDownload = () => {
    // Direct download link - convert Google Drive link to direct download
    const fileId = '1jPoSEvSPS8Loz28GESXO4ovq30_H2MNm';
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="about">
      <div className="container">
        <div className="min-h-screen bg-back-900 text-white py-16 px-4">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">About Me</h1>

            {/* Education Section */}
            <section className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <Book className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Education</h2>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-white pl-6 py-2">
                  <h3 className="text-xl font-semibold">Master of Computer Applications (MCA)</h3>
                  <p className="text-gray-300 mt-1">Gujarat Technological University (GTU)</p>
                  <p className="text-gray-400 mt-1">Ahmedabad | Pursuing</p>
                </div>

                <div className="border-l-4 border-white pl-6 py-2">
                  <h3 className="text-xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-gray-300 mt-1">Saurashtra University</p>
                  <p className="text-gray-400 mt-1">Rajkot | Completed</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="mb-20">
              <div className="flex items-center gap-3 mb-8">
                <Code className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Skills</h2>
              </div>

              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-white text-gray-900 rounded-full text-sm font-medium hover:bg-gray-200 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Download CV Button */}
            <section className="mb-20 flex justify-center">

              <button
                onClick={handleDownload}
                className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download CV
              </button>
            </section>



            {/* Certificates Section */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <Award className="w-8 h-8" />
                <h2 className="text-3xl font-bold">Certificates</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="border-2 border-gray-700 bg-gray-800 p-6 hover:border-white transition-all duration-300"
                  >
                    <img src={cert.img} alt={cert.name} className="mb-4 w-full h-auto" />
                    <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                    <p className="text-sm text-gray-300">{cert.issuer}</p>
                    <p className="text-sm text-gray-400 mt-1">{cert.year}</p>
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
