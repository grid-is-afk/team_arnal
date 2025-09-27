import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">TEAM ARNAL</span>
          </h1>
          <div className="hero-badge">
            <span>INNOVATION • EXCELLENCE • COLLABORATION</span>
          </div>
          <p className="hero-description">
            A dynamic group of skilled professionals dedicated to delivering innovative solutions 
            and exceptional results. We specialize in cutting-edge technology and are committed 
            to continuous learning and growth in the ever-evolving world of tech.
          </p>
          
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Dedication</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Innovation</div>
            </div>
          </div>

          <div className="hero-cta">
            <button className="cta-button primary" onClick={() => document.getElementById('members').scrollIntoView({ behavior: 'smooth' })}>
              Meet Our Team
            </button>
            <button className="cta-button secondary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
          </div>

          <div className="hero-features">
            <div className="feature-item">
              <div className="feature-icon">🚀</div>
              <span>AI Development</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">⚡</div>
              <span>System Architecture</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <span>Creative Design</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💻</div>
              <span>Full-Stack Development</span>
            </div>
          </div>

          <div className="expertise-section">
            <h3 className="expertise-title">Our Expertise</h3>
            <div className="expertise-tags">
              <div className="expertise-tag">n8n</div>
              <div className="expertise-tag">Retell</div>
              <div className="expertise-tag">C++</div>
              <div className="expertise-tag">Unity</div>
              <div className="expertise-tag">Vercel</div>
              <div className="expertise-tag">JSON</div>
              <div className="expertise-tag">PostgreSQL</div>
              <div className="expertise-tag">DigitalOcean</div>
              <div className="expertise-tag">React.js</div>
              <div className="expertise-tag">Node.js</div>
              <div className="expertise-tag">Python</div>
              <div className="expertise-tag">JavaScript</div>
              <div className="expertise-tag">TypeScript</div>
              <div className="expertise-tag">MongoDB</div>
              <div className="expertise-tag">Docker</div>
              <div className="expertise-tag">AWS</div>
              <div className="expertise-tag">Git</div>
              <div className="expertise-tag">REST APIs</div>
              <div className="expertise-tag">GraphQL</div>
              <div className="expertise-tag">Redis</div>
              <div className="expertise-tag">Express.js</div>
              <div className="expertise-tag">Next.js</div>
              <div className="expertise-tag">Tailwind CSS</div>
              <div className="expertise-tag">Figma</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
