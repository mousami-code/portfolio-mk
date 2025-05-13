import React, { useState } from 'react';
import styles from './Project.module.css';

const projects = [
  {
    title: 'AI Assistant',
    description: 'Integrated OpenAI GPT with React for dynamic Q&A and document summarization.',
    frontColor: '#2f2f2f', // dark charcoal gray
    backColor: '#1a1a1a',  // deep blackish gray
  },
  {
    title: 'Cloud DevOps Dashboard',
    description: 'Built a CI/CD monitoring dashboard using AWS CloudWatch, Docker, and React.',
    frontColor: '#3a3a3a', // graphite gray
    backColor: '#262626',  // steel gray
  },
  {
    title: 'SSO Identity Manager',
    description: 'Custom MSAL.js and Azure B2C integration for secure authentication flow.',
    frontColor: '#4b4b4b', // medium gray
    backColor: '#2e2e2e',  // charcoal gray
  },
  {
    title: 'AI Workflow Automation',
    description: 'Designed a GenAI-powered pipeline to auto-classify tickets in ITSM tools.',
    frontColor: '#5a5a5a', // ash gray
    backColor: '#1f1f1f',  // near-black
  },
  {
    title: 'Smart Student Dashboard',
    description: 'Interactive dashboard using Chart.js + React to visualize learning progress.',
    frontColor: '#6e6e6e', // slate gray
    backColor: '#2a2a2a',  // dim gray
  },
];




const Projects = () => {
  const [showMore, setShowMore] = useState(false);

  const visibleProjects = showMore ? projects : projects.slice(0, 3);

  return (
    <section className={styles.projectSection}>
      <div className={styles.heading}>
        <h2>Projects</h2>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>

      <div className={styles.projectRow}>
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className={styles.flipCard}
            style={{ '--front-color': project.frontColor, '--back-color': project.backColor }}
          >
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h3>{project.title}</h3>
              </div>
              <div className={styles.flipCardBack}>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showMore && (
        <div className={styles.showMoreButton}>
          <button onClick={() => setShowMore(true)}>&gt;</button>
        </div>
      )}

<div className={styles.hireSection}>
  <h2>Why Hire Me?</h2>
  <p>
    As a passionate and adaptable Software Developer with a diverse set of technical skills, I bring a
    unique combination of experience and abilities to the table. I excel in front-end and back-end
    development, cloud technologies, and DevOps practices, and have extensive experience integrating
    GenAI and AI-powered solutions.
  </p>

  <div className={styles.cardsGrid}>
    <div className={styles.hireCard}>
      <span className={styles.icon}>⚙️</span>
      <h4>Full-Stack Expertise</h4>
      <p>React, Node.js, AWS, Azure, Python and more — hands-on across the stack.</p>
    </div>
    <div className={styles.hireCard}>
      <span className={styles.icon}>🤝</span>
      <h4>Team Collaboration</h4>
      <p>Clear communicator and team player in Agile, cross-functional environments.</p>
    </div>
    <div className={styles.hireCard}>
      <span className={styles.icon}>⚡</span>
      <h4>Fast Learner</h4>
      <p>Quick to adapt to new tech, tools, and fast-paced problem-solving scenarios.</p>
    </div>
    <div className={styles.hireCard}>
      <span className={styles.icon}>☁️</span>
      <h4>Cloud-Native Delivery</h4>
      <p>CI/CD pipelines, cloud infra, and scalable GenAI workflows.</p>
    </div>
    <div className={styles.hireCard}>
      <span className={styles.icon}>✅</span>
      <h4>Reliable & Agile</h4>
      <p>Thrives in iterative workflows, delivering quality work on schedule.</p>
    </div>
  </div>
</div>

    </section>
  );
};

export default Projects;
