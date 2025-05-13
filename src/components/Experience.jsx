import React from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  return (
    <div className={`${styles.experienceSection}`}>
      {/* Heading */}
      <div className={`${styles.heading}`}>
        <h2>Experience & Education</h2>
      </div>

      {/* Floating Circles */}
      <div className={`${styles.blob1}`}></div>
      <div className={`${styles.blob2}`}></div>

      {/* Timeline */}
      <div className={`${styles.timeline}`}>
        {/* Gitam University */}
        <div className={`${styles.timelineItem}`}>
          <div className={`${styles.timelineCircle}`}></div>
          <div className={`${styles.timelineContent}`}>
            <h3>Gitam University, Visakhapatnam, India <span className="year">-Jun 2018 - Jun 2022</span></h3>
            <p>Completed B.Tech in Computer Science & Engineering, learning key programming and development skills.</p>
          </div>
        </div>

        {/* DRDO */}
        <div className={`${styles.timelineItem}`}>
          <div className={`${styles.timelineCircle}`}></div>
          <div className={`${styles.timelineContent}`}>
            <h3>Defence Research and Development Organisation (DRDO) <span className="year">-Jun 2021 - Jun 2022</span></h3>
            <p>Contributed to data analysis and visualization, improving research efficiency by 25% in neurological studies.</p>
          </div>
        </div>

        {/* University of North Texas */}
        <div className={`${styles.timelineItem}`}>
          <div className={`${styles.timelineCircle}`}></div>
          <div className={`${styles.timelineContent}`}>
            <h3>University of North Texas, Texas <span className="year">-Aug 2022 - May 2024</span></h3>
            <p>Pursued an M.S. in Information Technology, focusing on cloud technologies, full-stack development, and data visualization.</p>
          </div>
        </div>

        {/* International Software Systems Internship */}
        <div className={`${styles.timelineItem}`}>
          <div className={`${styles.timelineCircle}`}></div>
          <div className={`${styles.timelineContent}`}>
            <h3>International Software Systems, Maryland <span className="year">-Jan 2023 - May 2024</span></h3>
            <p>Assisted in backend/frontend development, optimizing system features and enhancing workflow efficiency by 15%.</p>
          </div>
        </div>

        {/* International Software Systems Full-Time */}
        <div className={`${styles.timelineItem}`}>
          <div className={`${styles.timelineCircle}`}></div>
          <div className={`${styles.timelineContent}`}>
            <h3>International Software Systems, Maryland <span className="year">-May 2024 - Nov 2024</span></h3>
            <p>Lead backend development, improved system reliability by 30%, and implemented CI/CD pipelines.</p>
          </div>
        </div>

        {/* Lobaki */}
        <div className={`${styles.timelineItem}`}>
          <div className={`${styles.timelineCircle}`}></div>
          <div className={`${styles.timelineContent}`}>
            <h3>Lobaki, Mississippi <span className="year">-Nov 2024 - Present</span></h3>
            <p>Developed and optimized front-end for Teacher Web Portal using React.js, boosting engagement by 30%.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
