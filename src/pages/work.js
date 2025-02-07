import React from 'react';
import styles from '../styles/Work.module.css';
import ClientOnlyIcon from '../components/ClientOnlyIcon'
import { motion } from 'framer-motion';
import Link from 'next/link';

const workExperience = [
  {
    company: 'Arbisoft Ltd.',
    role: 'Full Stack Developer Intern',
    duration: 'Jul 2024 - Sep 2024',
    description:
      'Developed user-friendly web interfaces using React.js, ensuring responsive design and accessibility. Collaborated with cross-functional teams to deliver projects ahead of deadlines.',
    skills: ['React.js', 'Python', 'Django', 'DRF', 'SQLite'],
  },
  {
    company: 'Mindstorm Studios',
    role: 'Game Development Intern',
    duration: 'Jun 2024 - Aug 2024',
    description:
      'This experience has been incredible, and I\'ve gained valuable skills in game design, development, and the intricacies of creating engaging 2D games.',
    skills: ['Unity', 'C#', 'Game Design', 'Level Design'],
  },
];

const Work = () => {
  return (
    <div className={styles.container}>
        <div className={styles.navigationButtons}>
          <Link href="/" passHref>
            <button className={styles.navHomeButton}>
              Home
            </button>
          </Link>
        </div>
      <motion.h1
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Work Experience
      </motion.h1>

      <motion.div
        className={styles.experienceList}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {workExperience.map((work, index) => (
          <motion.div
            key={index}
            className={styles.experienceCard}
            whileHover={{ scale: 1.05 }}
          >
            <h2>{work.company}</h2>
            <h3>{work.role}</h3>
            <p className={styles.duration}>{work.duration}</p>
            <p>{work.description}</p>
            <div className={styles.skills}>
              {work.skills.map((skill, i) => (
                <span key={i} className={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Work;
