// import React from 'react';
// import { Routes, NavLink } from 'react-router-dom';


import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <section id='home'> <Home /> </section>
        <section id='about'> <About /> </section>
        <section id='projects'> <Projects /> </section>
        <section id='services'> <Services /> </section>
        <section id='contact'> <Contact /> </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
