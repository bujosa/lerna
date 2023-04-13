import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faPaypal,
} from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <footer className="bg-dark py-5">
      <div className="container px-4 px-lg-5">
        <div className="row gx-4 gx-lg-5 justify-content-center">
          <div className="col-lg-8 col-xl-6 text-center">
            <hr className="divider" />
            <p className="text-muted mb-5 text-light">
              Ready to start your next project with me? <br></br>Send me an
              email and I will get back to you as soon as possible!
            </p>
          </div>
        </div>
        <center>
          <div className="social-media-icons mt-1">
            <a
              className="btn btn-light btn-social mx-3"
              href="mailto:davidbujosa@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
            <a
              className="btn btn-light btn-social mx-3"
              href="https://github.com/bujosa">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            <a
              className="btn btn-light btn-social mx-3"
              href="https://www.linkedin.com/in/davidbujosa/">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a
              className="btn btn-light btn-social mx-3"
              href="tel:1-829-266-6009">
              <FontAwesomeIcon icon={faPhone} size="lg" />
            </a>
            <a
              className="btn btn-light btn-social mx-3"
              href="https://www.paypal.com/paypalme/davidbujosa">
              <FontAwesomeIcon icon={faPaypal} size="lg" />
            </a>
          </div>
        </center>
      </div>
    </footer>
  );
}

export default Contact;
