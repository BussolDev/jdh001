// Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {
  const personalInfo = {
    name: 'John Doe',
    title: 'Full Stack Developer',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    address: '123 Main Street, City, Country',
  };

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Example',
      year: '2020',
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
    <div className="resume">
      <header className="header">
        <h1>{personalInfo.name}</h1>
        <p>{personalInfo.title}</p>
      </header>
      
      <section className="contact">
        <div>
          <h2>Contact</h2>
          <p>Email: {personalInfo.email}</p>
          <p>Phone: {personalInfo.phone}</p>
          <p>Address: {personalInfo.address}</p>
        </div>
      </section>
      
      <section className="education">
        <div>
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree}</h3>
              <p>{edu.school}</p>
              <p>{edu.year}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="experience">
        <div>
          <h2>Experience</h2>
          {experience.map((exp, index) => (
            <div key={index}>
              <h3>{exp.title}</h3>
              <p>{exp.company}</p>
              <p>{exp.duration}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="skills">
        <div>
          <h2>Skills</h2>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
