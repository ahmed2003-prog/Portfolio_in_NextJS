import styles from '../styles/Home.module.css';
import '../../public/lib/fontawsome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Index() {
  const [background, setBackground] = useState('/images/wp.jpg');
  const [showIcons, setShowIcons] = useState(false);

  useEffect(() => {
    setShowIcons(true);
  }, []);

  return (
    <div>
      <section
        className={styles.container}
        style={{ backgroundImage: `url(${background})` }}
      >
        <a
          href="/images/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          Download Profile
        </a>

        <main className={styles.main}>
          <h1 className={styles.title}>AHMED NADEEM</h1>
        </main>

        <div className={styles.navigationButtons}>
          <Link href="/projects" className={styles.navButton}>
            My Projects
          </Link>
          <a href="/work" className={styles.navButton}>
            Work Experience
          </a>
          <a href="#contact" className={styles.navButton}>
            Certifications and Licenses
          </a>
        </div>


        {showIcons && (
          <div className={styles.socialLinks}>
            <a
              href="https://www.linkedin.com/in/ahmed-nadeem-579897282/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} className={styles.icon} />
            </a>
            <a
              href="https://github.com/ahmed2003-prog?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={['fab', 'github']} className={styles.icon} />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~014f6bf201362dd321?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
            >
              <FontAwesomeIcon icon={['fab', 'upwork']} className={styles.icon} />
            </a>
            <a
              href="https://wa.me/923336162633"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FontAwesomeIcon icon={['fab', 'whatsapp']} className={styles.icon} />
            </a>
          </div>
        )}

        <div className={styles.contactInfo}>
          <div className={styles.contactEmail}>
            Email: <a href="mailto:ahmedprog2003@gmail.com">Ahmed Nadeem</a>
          </div>
          <div className={styles.contactNumber}>
            Contact: <a href="tel:+923336162633">Phone Number</a>
          </div>
        </div>
      </section>
    </div>
  );
}
