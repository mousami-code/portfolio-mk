import React from 'react';
import styles from './AboutMe.module.css';
import profileImg from '../assets/profile.jpg';
import { motion } from 'framer-motion';

const roles = [
  "Full Stack Developer",
  "Gen AI Analyst",
  "IAM Engineer",
  "Cloud Engineer",
  
];

const skills = [
  { name: "Node.js, Django, Java", proficiency: 90 },
  { name: "AWS, Azure", proficiency: 80 },
  { name: "MSAL, Auth0", proficiency: 75 },
  { name: "ReactJs, Tailwindcss, Vue.js, TypeScript, HTML, CSS", proficiency: 100 },
  { name: "Machine Learning, ChatGPT integrations, OpenAI", proficiency: 70 },
  { name: "API, GitHub, Linux, Jira, Documentation", proficiency: 70 }
];

const AboutMe = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.aboutSection} id="about">
      {/* Floating Colorful Circles */}
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>

      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={profileImg} alt="Mousami Kalidindi" className={styles.profileImg} />
        </div>

        <div className={styles.content}>
          <motion.h1
            className={styles.role}
            key={index}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {roles[index]}
          </motion.h1>

          <p className={styles.description}>
            Hi! I'm <strong>Mousami Kalidindi</strong>, a passionate engineer with experience in full-stack development, identity access management, and cloud solutions. I build scalable applications and craft secure architectures using modern tools and frameworks. Let’s build something impactful.
          </p>

          {/* Skills Proficiency Section */}
          <div className={styles.skills}>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Technologies & Proficiencies:
            </motion.h2>
            <div className={styles.skillList}>
              {skills.map((skill) => (
                <div key={skill.name} className={styles.skillItem}>
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    {skill.name} - <strong>{skill.proficiency}%</strong>
                  </motion.p>
                  <div className={styles.skillBar}>
                    <div
                      className={styles.skillFill}
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
