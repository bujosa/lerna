import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <a href="mailto:davidbujosa@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            size="3x"
            className="contact-icon"
          />
          <p>davidbujosa@gmail.com</p>
        </a>
        <a href="https://github.com/bujosa" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="3x" className="contact-icon" />
          <p>bujosa</p>
        </a>
        <a
          href="https://www.linkedin.com/in/davidbujosa/"
          target="_blank"
          rel="noreferrer">
          <FontAwesomeIcon
            icon={faLinkedin}
            size="3x"
            className="contact-icon"
          />
          <p>David Bujosa</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
