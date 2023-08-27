// Resume.js
import React from 'react';
import './Resume.css';

const Resume = () => {

  const experience = [
    {
      title: 'Inventory Managment Tool',
      company: 'Chosen Payments',
      duration: '2018 - 2023',
      description: 'Developed web applications using PHP, Nginx, and MySQL to track and report inventory location, status, and cost',
    },
    // Add more experiences as needed
  ];

  const skills = ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS', 'Git'];

  return (
    <div className="resume">
      <section className="experience">
        <div>
          <h2>Projects</h2>
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
