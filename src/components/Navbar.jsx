import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ credits }) => (
  <header className="dashboard-header">
    <div className="header-content">
      <NavLink to="/" className="logo-section" aria-label="MaziVidhya student portal home">
        <span className="logo-icon" aria-hidden="true">MV</span>
        <span className="logo-text">MaziVidhya</span>
      </NavLink>
      <nav className="main-nav" aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        <a href="https://nmu.ac.in/en-us/Student-Corner/Examination/Question-Bank" target="_blank" rel="noopener noreferrer">Question bank</a>
        <a href="https://nmu.ac.in/en-us/Student-Corner/Examination/Previous-Exam-Question-Paper" target="_blank" rel="noopener noreferrer">Previous papers</a>
        <NavLink to="/upload" className="highlight-nav">Share notes</NavLink>
        <NavLink to="/profile" className="profile-btn">Profile <span className="credit-count">{credits} pts</span></NavLink>
      </nav>
    </div>
  </header>
);

export default Navbar;
