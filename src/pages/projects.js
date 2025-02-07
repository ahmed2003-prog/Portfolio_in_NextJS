import Head from 'next/head';
import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';
import '../../public/lib/fontawsome.js';
import ClientOnlyIcon from '../components/ClientOnlyIcon';
import Image from 'next/image';
import { useState } from 'react';
import projects from '../../data/projects';
import Link from 'next/link';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.container}>
        <Head>
          <title>Projects | My Portfolio</title>
          <meta name="description" content="A showcase of my projects." />
        </Head>

        <main className={styles.main}>
          <main className={styles.main1}>
            <h1 className={styles.title}>MY PROJECTS</h1>
          </main>

          <div className={styles.imageContainer}>
            <Image
              src={projects[currentIndex].image_url}
              alt={projects[currentIndex].title}
              width={800}
              height={400}
              className={styles.projectImage}
            />
            <div className={styles.overlay}>
              <h3 style={{ fontSize: '2em', color: 'wheat' }}>{projects[currentIndex].title}</h3>
              <p>{projects[currentIndex].description}</p>
              {/* Render skills with individual styling */}
              <div className={styles.skills}>
                {projects[currentIndex].skills.map((skill, i) => (
                  <span key={i} className={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>
              <a
                href={projects[currentIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                View <span style={{ textDecoration: 'underline', color: 'wheat', fontSize: '1.1em' }}>Project</span>
              </a>
            </div>
          </div>

          <div className={styles.navigationButtons}>
            <button onClick={handlePrev} className={styles.navPrevButton}>Previous</button>
            <Link href="/" passHref>
              <button className={styles.navHomeButton}>
                <ClientOnlyIcon icon={['fas', 'house']} />
              </button>
            </Link>
            <button onClick={handleNext} className={styles.navNextButton}>Next</button>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
