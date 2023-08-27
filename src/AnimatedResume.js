// AnimatedResume.js
import React from 'react';
import './AnimatedResume.css';

const AnimatedResume = () => {
  const personalInfo = {
    name: 'Joshua D. Henderson',
    title: 'Sr. Solutions Architect / Fintech',
    email: 'josh@bussol.net',
    phone: '303-803-6504',
    address: 'CA / CO / TX',
  };

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'Texas Tech University',
      year: '2009',
    },
  ];

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Tech Company A',
      duration: '2020 - Present',
      description: 'Developed web applications using React, Node.js, and MongoDB...',
    },
    // Add more experiences as needed
  ];

  const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Git'];

  return (
    <div className="animated-resume">
      <header className="header">
        <h1 className="animated-heading">{personalInfo.name}</h1>
        <p className="animated-subtitle">{personalInfo.title}</p>
      </header>
      
      <section className="contact">
        <div className="animated-section">
          <h2 className="section-title">Contact</h2>
          <p>Email: {personalInfo.email}</p>
          <p>Phone: {personalInfo.phone}</p>
        </div>
      </section>
      
      {/* ... Other sections ... */}
      
    </div>
  );
};

export default AnimatedResume;
