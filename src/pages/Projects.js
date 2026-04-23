import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Revenue Recovery System',
    description:
      'Developed an Admin module to manage customer data, pending dues, and recovery tracking. Built using Java and Object-Oriented Programming principles as part of an academic project at Mahindra University.',
    tech: ['Java', 'OOP', 'Data Management'],
    period: 'Nov 2025 – Dec 2025',
    type: 'Academic Project',
    github: 'https://github.com/youna0/Revenue-Recovery-Project',
    highlights: [
      'Admin dashboard for customer management',
      'Pending dues & recovery tracking system',
      'Object-Oriented architecture with modular design',
    ],
    icon: '💰',
  },
  {
    id: 2,
    title: 'Expense Tracker API',
    description:
      'Built a TypeScript & Express.js API for tracking income, expenses, budgets, and recurring transactions with financial reports and data visualisation. Features RESTful endpoints for complete financial management.',
    tech: ['TypeScript', 'Express.js', 'REST API', 'Data Visualization'],
    period: 'Oct 2025 – Dec 2025',
    type: 'Academic Project',
    github: 'https://github.com/youna0/Expense-API-Tracker',
    highlights: [
      'RESTful API with full CRUD operations',
      'Budget management & recurring transactions',
      'Financial report generation & visualization',
    ],
    icon: '📊',
  },
  {
    id: 3,
    title: 'MindMate AI Chatbot',
    description:
      'An AI Therapist chatbot with mood tracking and self-care planner. Provides conversational mental health support with personalized recommendations and emotional well-being insights.',
    tech: ['JavaScript', 'AI', 'Chatbot', 'Mood Tracking'],
    period: '2025',
    type: 'Personal Project',
    github: 'https://github.com/youna0/MindMate_AI_Chatbot',
    highlights: [
      'AI-powered therapeutic conversations',
      'Mood tracking & emotional insights',
      'Self-care planner with personalized recommendations',
    ],
    icon: '🧠',
  },
];

const Projects = () => {
  return (
    <div className="projects-page">
      <section className="projects-hero">
        <div className="container">
          <h1 className="section-title fade-in">My Projects</h1>
          <p className="section-subtitle fade-in fade-in-delay-1">
            A showcase of my academic work and personal explorations
          </p>
        </div>
      </section>

      <section className="projects-section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card fade-in fade-in-delay-${index + 1}`}
              >
                <div className="project-card-header">
                  <span className="project-icon">{project.icon}</span>
                  <span className="project-type">{project.type}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <span className="project-period">{project.period}</span>
                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  <h4 className="highlights-label">Key Features</h4>
                  <ul className="highlights-list">
                    {project.highlights.map((h, i) => (
                      <li key={i}>
                        <span className="highlight-dot"></span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-footer">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View on GitHub
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-arrow"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="7" y1="17" x2="17" y2="7"/>
                      <polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
