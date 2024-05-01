import React from 'react';
import NavBar from './NavBar';
const About = () => {
  return (
    <>
    <NavBar/>
    <div style={styles.container}>
      <h2 style={styles.heading}>About Banking and Finance Management System</h2>
      <p style={styles.paragraph}>
        Our Banking and Finance Management System is designed to provide users with comprehensive tools for managing their finances effectively. Whether you're an individual or a business, our platform offers features such as account management, transaction tracking, budgeting, and financial reporting.
      </p>
      <p style={styles.paragraph}>
        With our secure and user-friendly interface, you can easily monitor your accounts, analyze your spending habits, set financial goals, and make informed decisions about your money. Our goal is to empower our users to take control of their finances and achieve their financial objectives.
      </p>
    </div>
    </>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
};

export default About;
