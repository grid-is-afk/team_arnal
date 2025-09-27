import React from 'react';
import './Members.css';

const Members = () => {
  const members = [
    {
      name: 'John Nathaniel "Nathan" Geraldez',
      role: 'PROJECT MANAGER / AI LEAD DEV',
      description: 'Leading project coordination and AI development initiatives with strategic vision and technical expertise.',
      image: null
    },
    {
      name: 'Rommel Vincent "Mel" Monterde',
      role: 'SYSTEM ARCHITECT',
      description: 'Designing robust system architectures and ensuring scalable, efficient solutions for complex technical challenges.',
      image: '/1748092830209 (1) 1.png'
    },
    {
      name: 'Loreto "Jhong" Sanchez Jr.',
      role: 'LEAD BACKEND SOFTWARE ENGR',
      description: 'Building powerful backend systems and managing server-side development with precision and innovation.',
      image: null
    },
    {
      name: 'Adrian "Drian" Election',
      role: 'LEAD FRONTEND SOFTWARE ENGR',
      description: 'Creating exceptional user experiences through cutting-edge frontend development and modern design principles.',
      image: '/adrian.jpg'
    },
    {
      name: 'Anjo Ryan "Jo" Piencenaves',
      role: 'FRONTEND SOFTWARE ENGR / GRAPHICS DESIGNER / GAME MODEL DESIGNER',
      description: 'Combining technical expertise with creative vision in frontend development, graphics design, and game modeling.',
      image: null
    }
  ];

  return (
    <section id="members" className="members">
      <div className="container">
        <h2 className="section-title">OUR TEAM</h2>
        <div className="members-grid">
          {members.map((member, index) => (
            <div key={index} className="member-card">
              {member.image && (
                <div className="member-image">
                  <img src={member.image} alt={member.name} />
                </div>
              )}
              <div className="member-header">
                <h3 className="member-name">{member.name}</h3>
                <div className="member-role">{member.role}</div>
              </div>
              <p className="member-description">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Members;



