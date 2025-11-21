import React from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
import './Home.css';

const Home = () => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section className="home">
      <div className="container">
        <div ref={ref} className={`home-content fade-in ${isVisible ? 'visible' : ''}`}>
          <img 
            src="img.png" 
            alt="Profile" 
            className="profile-img" 
          />
          <h1>Vishal sonagara</h1>
          <p className="subtitle">Web Developer</p>
          <p className="description">
            Passionate about creating modern, responsive web applications using cutting-edge technologies. 
            Specializing in React.js, Node.js, and full-stack development with a focus on clean code and user experience.
          </p>
          <div className="social-links">
            <a href="https://github.com/Vishal1071" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://instagram.com/Veeshal_45" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/vishal-sonagara-0b2427365" target="_blank" rel="noopener noreferrer" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
          <div className="cta-buttons">
            <a href="/projects" className="btn btn-primary">View Projects</a>
            <a href="/about" className="btn btn-secondary">About Me</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
