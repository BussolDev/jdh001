// ExpandableResume.js
import React, { useState } from 'react';
import './ExpandableResume.css';

const ExpandableResume = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionIndex) => {
    if (expandedSection === sectionIndex) {
      setExpandedSection(null);
    } else {
      setExpandedSection(sectionIndex);
    }
  };

  const experience = [
    {
      title: 'Solutions Architect',
      company: 'Aurora Payments',
      date: 'Jul 2018 - Present (5 years 2 months)',
      description: [
        'Work with multiple external and internal teams to define, design, develop, implement, and support technical solutions.',
        'Perform extensive research to find or create the best technical solutions among all possible options.',
        'Describe software aspects to project stakeholders in a non-technical way.',
        'Provide specifications and documentation for solution development and delivery.',
        'Support and manage development teams throughout the software development life-cycle.',
        'Document solutions and processes for training, sales, and support.',
      ],
    },
    {
      title: 'Solutions Architect',
      company: 'Chosen Payments, an Aurora Company',
      date: 'Jul 2018 - Present (5 years 2 months)',
      description: [
        'Work with multiple external and internal teams to define, design, develop, implement, and support technical solutions.',
        'Perform extensive research to find or create the best technical solutions among all possible options.',
        'Describe software aspects to project stakeholders in a non-technical way.',
        'Provide specifications and documentation for solution development and delivery.',
        'Support and manage development teams throughout the software development life-cycle.',
        'Document solutions and processes for training, sales, and support.',
      ],
    },
    {
      title: 'Senior Solutions Consultant / Integration and Certification Specialist',
      company: 'North American Bancard',
      date: 'Aug 2014 - Jul 2018 (4 years)',
      description: [
        'Managed multiple customers and ensured successful completion of quality products and solution implementations.',
        'Set and managed customer expectations, executed project plans, and provided status reports.',
        'Participated in the refinement and implementation of internal processes based on client feedback.',
        'Managed the acquisition and review of required Client data.',
      ],
    },
    {
      title: 'Software Configuration Manager',
      company: 'North American Bancard',
      date: 'Jan 2015 - Jan 2017 (2 years 1 month)',
      description: [
        'Managed configuration identification, control, status accounting, and auditing.',
        'Managed build processes and configuration management tools.',
        'Ensured adherence to the organization\'s development process.',
        'Facilitated team interactions related to the process.',
        'Maintained a high level of commitment to customer satisfaction.',
      ],
    },
    {
      title: 'QA Engineer',
      company: 'North American Bancard',
      date: 'Aug 2014 - Aug 2016 (2 years 1 month)',
      description: [
        'Developed and implemented test cases, scenarios, and outlines within an agile team.',
        'Created detailed test plans and test cases, estimated, prioritized, planned, and coordinated testing activities.',
        'Designed, developed, and executed automation scripts using open source tools.',
        'Identified, recorded, documented, and tracked bugs.',
        'Performed thorough regression testing when bugs were resolved.',
      ],
    },
  ];

  return (
    <div className="expandable-resume">
      <header className="header">
        <h1 className="animated-heading">Experience</h1>
      </header>

      {experience.map((exp, index) => (
        <section
          key={index}
          className={`expandable-section ${expandedSection === index ? 'expanded' : ''}`}
          onClick={() => toggleSection(index)}
        >
          <h2 className="section-title">
            {exp.title} at {exp.company} ({exp.date})
          </h2>
          <div className="section-content">
            <ul>
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
    </div>
  );
};

export default ExpandableResume;
