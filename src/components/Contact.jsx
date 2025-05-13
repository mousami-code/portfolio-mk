import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.heading}>
        <h2>Let's Connect</h2>
        <p>Innovative minds, creative conversations.</p>
      </div>

      <div className={styles.contactGrid}>
        <div>
          <span>Email:</span>
          <a href="mailto:mousamikalidindi01@gmail.com">mousamikalidindi01@gmail.com</a>
        </div>
        <div>
          <span>Phone:</span>
          <a href="tel:+19409771702">940-977-1702</a>
        </div>
        <div>
          <span>GitHub:</span>
          <a href="https://github.com/mousami-code" target="_blank" rel="noreferrer">mousami-code</a>
        </div>
        <div>
          <span>LinkedIn:</span>
          <a href="https://www.linkedin.com/in/mousamikalidindi/" target="_blank" rel="noreferrer">
            mousamikalidindi
          </a>
        </div>
        <div>
          <span>LeetCode:</span>
          <a href="https://leetcode.com/mousami123" target="_blank" rel="noreferrer">mousami123</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
