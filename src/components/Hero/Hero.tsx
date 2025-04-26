import React from 'react';
import { Code, GitBranch, Sparkles } from 'lucide-react';
import styles from './Hero.module.scss';
import Image from '../../assets/images/Image.jpg';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.textSection}>
            <h1>
              Frontend <span>Developer</span>
            </h1>
            <p>
              Crafting beautiful, responsive web experiences with modern technologies. Specialized
              in creating user-friendly interfaces that deliver exceptional user experiences.
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.primary} onClick={scrollToProjects}>
                Zobacz projekty
              </button>
              <button className={styles.secondary}>Kontakt</button>
            </div>
          </div>

          <div className={styles.imageSection}>
            <div className={styles.imageWrapper}>
              <div className={styles.pulseCircle}></div>
              <div className={`${styles.iconBox} ${styles.topLeft}`}>
                <Code size={32} className={styles.iconColorBlue} />
              </div>
              <div className={`${styles.iconBox} ${styles.bottomLeft}`}>
                <GitBranch size={32} className={styles.iconColorIndigo} />
              </div>
              <div className={`${styles.iconBox} ${styles.topRight}`}>
                <Sparkles size={32} className={styles.iconColorPurple} />
              </div>
              <div className={styles.centerCircle}>
                <img src={Image} alt="author" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
