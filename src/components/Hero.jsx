import React from 'react';
import './Hero.css';

const Hero = () => (
  <section className="hero-section" aria-labelledby="hero-title">
    <div className="hero-content">
      <p className="hero-kicker">Kavayitri Bahinabai Chaudhari North Maharashtra University</p>
      <h1 className="hero-title" id="hero-title">Your next exam starts with good preparation.</h1>
      <p className="hero-subtitle">Find official question banks and past papers, all in one student-friendly place.</p>
      <div className="hero-actions">
        <a className="hero-primary-link" href="#study-materials">Find question papers <span aria-hidden="true">↓</span></a>
        <a className="hero-secondary-link" href="https://nmu.ac.in/en-us/Student-Corner" target="_blank" rel="noopener noreferrer">Visit official Student Corner <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div className="hero-ornament" aria-hidden="true">अध्ययन · अभ्यास · यश</div>
  </section>
);

export default Hero;
