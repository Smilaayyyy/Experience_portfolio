// src/Experience.js

import React from 'react';
import './App.css';

const Experience = () => {
  const experiences = [
    {
      role: 'Project Intern',
      company: 'Tata Motors Ltd.',
      duration: '05/2023 – 08/2023',
      location: 'Mumbai',
      whatIDid: [
        'Collaborated with cross-functional teams (engineering, design, and business) to implement new features aimed at enhancing user experience and product efficiency.',
        'Managed a project for pop-up plugin integration, focusing on user feedback and product usability to drive design decisions.',
        'Conducted data analysis to identify user behavior patterns and insights, which informed feature prioritization and design adjustments.',
        'Designed low-level system architectures, including API specifications and database schemas, ensuring robust solutions aligned with product requirements.',
        'Developed RESTful API endpoints using Node.js, Express, and MongoDB, optimizing data flow between client and server to enhance product performance.',
        'Implemented metrics tracking to monitor product usage and user engagement, providing actionable insights for future enhancements.',
      ],
      whatILearned: [
        'Gained hands-on experience in product analytics and the importance of user-centered design in product development.',
        'Developed a keen sense of product vision and strategy by analyzing user feedback and data to make informed design decisions.',
        'Recognized the significance of low-level system architecture in ensuring robust and scalable solutions.',
        'Appreciated the value of teamwork, collaborating with cross-functional teams to achieve project goals effectively.',
        'Learned the power of documentation in facilitating clear communication and ensuring alignment across all teams.'
      ],
      keySkills: [
        'Full Stack(MERN)', 'User-Centered Design', 
  'Node.js', 'RESTful APIs', 'Cross-Functional Collaboration', 'UML',
  'SQL', 'Python (Pandas, NumPy)', 'Data Visualization (Tableau, Power BI)', 
  'User Feedback Analysis', 'Wireframing and Prototyping (Figma)', 
  'Retention Analysis', 'Machine Learning Basics', 
  'Backend Development', 'Database Management (MongoDB, SQL)', 
   'Integration of Third-Party APIs', 
   'Effective Communication'
      ],
    },
    {
      role: 'Virtual Developer Intern',
      company: 'Salesforce',
      duration: '04/2023 – 07/2023',
      location: 'Remote',
      whatIDid: [
        'Developed and implemented Salesforce applications with a primary focus on automating workflows and enhancing relationship management through Salesforce features.',
        'Leveraged Apex, Visualforce, SOQL, and Lightning Web Components to streamline processes and improve user engagement.',
        'Utilized Salesforce built-in tools for process automation, including Flow and Process Builder, to create efficient solutions that reduced manual tasks and improved system consistency.',
        'Enhanced user workflows by identifying bottlenecks and recommending design improvements',
      ],
      whatILearned: [
        'Completing various Salesforce badges provided hands-on experience with Relationship & Process Automation, enhancing my understanding of how to efficiently manage business logic and data flow within the Salesforce ecosystem.',
        'Learned the importance of automated workflows in improving productivity and consistency within product development processes.',
        'I became adept at configuring security, setting up organizational structures, and building user interfaces with LWC, significantly improving both user experience and operational efficiency.',
      ],
      keySkills: [
        'Salesforce Development',
        'Apex, Testing & Debugging',
        'Process Automation',
        'Visualforce',
        'Relationship Management',
        'Lightning Web Components (LWC) & API',
        'User Experience Design',
        'Workflow Automation',
        'Developer Super Set'
      ],
    },
    {
      role: 'Machine Learning Research Intern',
      company: 'Woo Song University',
      duration: '05/2022 – 09/2022',
      location: 'Daejeon',
      whatIDid: [
        'Conducted research applying deep learning algorithms (CNN, LSTM, GAN) in 5G and Smart Grid technology, focusing on the intersection of technology and user needs.',
        'Led a research group in conducting experiments and drafting research papers, ensuring timely completion of all tasks.',
        'Collaborated with fellow researchers to analyze results and refine methodologies, enhancing the overall quality of research outputs'
      ],
      whatILearned: [
        'Gained in-depth knowledge of how 5G networks operate, including their architecture and protocols, which significantly enhance data transmission speeds and reliability.',
        'Explored the application of deep learning technologies in optimizing network performance and managing resources efficiently, paving the way for advanced communication solutions.',
        'Understood the implications of these technologies for future developments in smart grid systems and other innovative applications, highlighting the transformative potential of AI in telecommunications.'
      ],
      keySkills: [
        'Generative Adversarial Networks (GAN)',
        'Long Short-Term Memory Networks (LSTM)',
        'Data Analysis',
        'Research Methodologies',
        'Hyperparameter Tuning',
        'Communication Technology',
        'Reinforcement Learning(RL)',
        'Analytical Thinking',
      ],
    },
  ];

  return (
    <div className="experience-container">
      <h1>Work Experience</h1>
      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div className="experience-card" key={index}>
            <h2>{exp.role} at {exp.company}</h2>
            <p><strong>Duration:</strong> {exp.duration} | <strong>Location:</strong> {exp.location}</p>

            <h3>What I Did:</h3>
            <ul>
              {exp.whatIDid.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>

            <h3>What I Learned:</h3>
            <ul>
              {exp.whatILearned.map((learning, index) => (
                <li key={index}>{learning}</li>
              ))}
            </ul>

            <h3>Key Skills:</h3>
            <ul>
              {exp.keySkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
