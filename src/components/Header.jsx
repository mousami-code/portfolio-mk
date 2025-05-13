import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* Left Section: Logo + Navigation Links */}
        <div className={styles.leftSection}>
          <div className={styles.logo}></div>
          <div className={styles.navLinks}>
            
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>
        </div>

        {/* CTA Button */}
        <a href="#contact" className={styles.ctaButton}>
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Header;


