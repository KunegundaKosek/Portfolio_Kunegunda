import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import classes from './Header.module.scss';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetPosition = element.offsetTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`${classes.header} ${isScrolled ? classes.scrolled : ''}`}>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <a href="#" className={classes.logo}>
            Kunegunda Kosek
          </a>

          <nav className={classes.desktopNav}>
            <button onClick={() => scrollToSection('technologies')} className={classes.navLink}>
              Technologies
            </button>
            <button onClick={() => scrollToSection('projects')} className={classes.navLink}>
              Projects
            </button>
            <button onClick={() => scrollToSection('certificates')} className={classes.navLink}>
              Certificates
            </button>
          </nav>

          <button 
            className={classes.mobileButton}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className={classes.mobileMenu}>
            <button onClick={() => scrollToSection('technologies')} className={classes.mobileLink}>
              Technologies
            </button>
            <button onClick={() => scrollToSection('projects')} className={classes.mobileLink}>
              Projects
            </button>
            <button onClick={() => scrollToSection('certificates')} className={classes.mobileLink}>
              Certificates
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
