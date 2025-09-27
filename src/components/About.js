import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              TEAM ARNAL is a versatile group of full-stack developers and technology 
              professionals adept at navigating the ever-evolving world of technology. 
              We specialize in creating robust, scalable solutions that meet the unique 
              needs of our clients.
            </p>
            <p>
              Our team combines technical expertise with creative problem-solving to 
              deliver projects that exceed expectations. We believe in the power of 
              collaboration and continuous learning to stay ahead in the fast-paced 
              tech industry.
            </p>
            <div className="skills">
              <h3>Our Approach</h3>
              <div className="skills-grid">
                <span className="skill-tag">Collaborative</span>
                <span className="skill-tag">Innovative</span>
                <span className="skill-tag">Agile</span>
                <span className="skill-tag">Quality-Focused</span>
                <span className="skill-tag">Client-Centric</span>
                <span className="skill-tag">Scalable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


