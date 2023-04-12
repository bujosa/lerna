import React, { useState } from 'react';
import './WorkHistory.css';

const WorkHistory = () => {
  const [highlighted, setHighlighted] = useState(Array(2).fill(false));

  const handleMouseEnter = (index) => {
    const newHighlighted = [...highlighted];
    newHighlighted[index] = true;
    setHighlighted(newHighlighted);
  };

  const handleMouseLeave = (index) => {
    const newHighlighted = [...highlighted];
    newHighlighted[index] = false;
    setHighlighted(newHighlighted);
  };

  return (
    <div className="work-history-container">
      <h2 className="work-history-title">Timeline</h2>
      <div className="timeline">
        <div
          className={`work-experience ${highlighted[1] ? 'highlighted' : ''}`}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}>
          <div className="work-date">2023 - present</div>
          <div className="work-details">
            <h3 className="company-name">Karvi</h3>
            <div className="company-description">
              <div>
                <p>A platform for buying and selling vehicles.</p>
                <p>
                  Developed and maintained the backend of the platform using
                  NestJS, MongoDB, and Python.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`work-experience ${highlighted[0] ? 'highlighted' : ''}`}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}>
          <div className="work-date">2020 - 2023</div>
          <div className="work-details">
            <h3 className="company-name">Curbo Technologies</h3>
            <div className="company-description">
              <div>
                <p>
                  A platform for buying and selling vehicles.{' '}
                  <a
                    href="https://curbo.com/"
                    target="_blank"
                    rel="noopener noreferrer">
                    (curbo.com)
                  </a>
                </p>
                <p>
                  Developed and maintained the backend of the platform using
                  NestJS, MongoDB, and GCP. The architecture of the platform is
                  microservice-based and is deployed on GCP. I also maintained
                  and structure the database of the platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkHistory;
