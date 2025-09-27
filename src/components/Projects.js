import React from 'react';
import './Projects.css';

const handleDownload = (downloadFile, downloadName) => {
  const link = document.createElement('a');
  link.href = downloadFile;
  link.download = downloadName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Projects = () => {
      const projects = [
        {
          title: "LEAD GENERATION WORKFLOW",
          subtitle: "Google Maps Email Scraper",
          description: "Automated n8n workflow that scrapes business emails from Google Maps based on custom queries. Features intelligent filtering, duplicate removal, and Google Sheets integration for lead management.",
          image: "/553429057_1170363528244722_77337338452954765_n.png",
          technologies: ["n8n", "Google Maps API", "Google Sheets", "Email Scraping", "Automation", "Lead Generation"],
          features: ["Automated email scraping", "Google Maps integration", "Duplicate filtering", "Google Sheets export", "Custom query support"],
          downloadFile: "/new-leads-workflow.json",
          downloadName: "new-leads-workflow.json"
        },
        {
          title: "VID-GENERATOR",
          subtitle: "N8N Video Automation",
          description: "Advanced n8n workflow automation for automated video generation with intelligent content processing, API integrations, and streamlined production pipeline.",
          image: "/Screenshot 2025-09-26 233453.png",
          technologies: ["n8n", "Node.js", "APIs", "Automation", "Video Processing", "Workflow"],
          features: ["Automated video generation", "API integrations", "Workflow automation", "Content processing"],
          downloadFile: "/vid-generator-workflow.json",
          downloadName: "vid-generator-n8n-workflow.json"
        },
    {
      title: "PEERLY",
      subtitle: "English Learning Web App",
      description: "Peer-to-peer English learning platform with real-time speech recognition, featuring Family Guy character dialogs and AI-powered pronunciation feedback.",
      image: "/Screenshot 2025-09-27 012419.png",
      technologies: ["Node.js", "Socket.IO", "Web Speech API", "JavaScript", "CSS3", "HTML5"],
      github: "https://github.com/grid-is-afk/peerly.git",
      features: ["Real-time P2P connection", "Speech recognition", "Movie scene dialogs", "Progress tracking"]
    },
    {
      title: "TEAM ARNAL's",
      subtitle: "Enterprise Solutions Platform",
      description: "Comprehensive enterprise platform for business management with advanced features and scalable architecture.",
      image: "https://via.placeholder.com/400x300/4A90E2/FFFFFF?text=Enterprise+Platform",
      technologies: ["React.js", "Node.js", "PostgreSQL", "AWS", "Docker"],
      features: ["Business management", "Scalable architecture", "Advanced features"]
    },
    {
      title: "TEAM ARNAL's",
      subtitle: "AI-Powered Analytics Dashboard",
      description: "Advanced analytics dashboard with machine learning capabilities and real-time data visualization.",
      image: "https://via.placeholder.com/400x300/7ED321/FFFFFF?text=Analytics+Dashboard",
      technologies: ["Python", "React.js", "MongoDB", "TensorFlow", "D3.js"],
      features: ["Machine learning", "Real-time analytics", "Data visualization"]
    },
    {
      title: "TEAM ARNAL's",
      subtitle: "Cloud Infrastructure Management",
      description: "Scalable cloud infrastructure management system with automated deployment and monitoring.",
      image: "https://via.placeholder.com/400x300/F5A623/FFFFFF?text=Cloud+Management",
      technologies: ["AWS", "Docker", "Kubernetes", "Terraform", "Python"],
      features: ["Automated deployment", "Cloud monitoring", "Infrastructure scaling"]
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => project.downloadFile && handleDownload(project.downloadFile, project.downloadName)}>
              <div className="project-image">
                <img src={project.image} alt={project.subtitle} />
                {project.github && (
                  <div className="project-overlay">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                      <span>View on GitHub</span>
                    </a>
                  </div>
                )}
                {project.downloadFile && (
                  <div className="project-overlay">
                    <div className="download-link">
                      <span>Click to Download Workflow</span>
                    </div>
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">
                  {project.title} <br />
                  {project.subtitle}
                </h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul className="features-list">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


