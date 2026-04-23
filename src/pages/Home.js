import React from 'react';
import profileImg from '../assets/profile.png';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* ==================== HERO ==================== */}
      <section className="hero">
        <div className="hero-bg-orbs">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-text fade-in">
            <p className="hero-greeting">Hello, I'm</p>
            <h1 className="hero-name">Tanneru Youna<br /><span className="hero-name-accent">Chowdary</span></h1>
            <p className="hero-tagline">
              B.Tech CSE Student &bull; Machine Learning Enthusiast &bull; Full Stack Developer
            </p>
            <div className="hero-cta">
              <a href="mailto:younachowdary@gmail.com" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Get in Touch
              </a>
              <a href="#about" className="btn btn-outline">
                Know More
              </a>
              <a href={process.env.PUBLIC_URL + "/Youna_Resume.pdf"} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Resume
              </a>
            </div>
          </div>
          <div className="hero-image fade-in fade-in-delay-2">
            <div className="hero-image-wrapper">
              <img src={profileImg} alt="Tanneru Youna Chowdary" />
              <div className="hero-image-glow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== ABOUT ME ==================== */}
      <section className="section" id="about">
        <div className="container">
          <h2 className="section-title fade-in">About Me</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">A glimpse into who I am</p>
          <div className="about-content fade-in fade-in-delay-2">
            <div className="about-card">
              <p>
                I'm <strong>Tanneru Youna Chowdary</strong>, a passionate Computer Science Engineering student
                at <strong>Mahindra École Centrale (Mahindra University)</strong>, currently in my 3rd year of an
                integrated B.Tech program. With a strong foundation in programming and a keen interest in
                Machine Learning and Full Stack Development, I love building solutions that make a difference.
              </p>
              <p>
                I'm currently sharpening my skills through the <strong>NxtWave CCBP 4.0 Academy</strong>,
                working on real-world projects using Python, Data Structures, and Full Stack technologies.
                Beyond coding, I enjoy video editing, content creation, and contributing to social causes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== EDUCATION ==================== */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title fade-in">Education</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">My academic journey</p>
          <div className="timeline fade-in fade-in-delay-2">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">Aug 2023 – Ongoing</span>
                <h3>B.Tech (Integrated) CSE</h3>
                <p className="timeline-org">Mahindra École Centrale, Mahindra University</p>
                <p className="timeline-detail">CGPA: 6.3/10 (till 5th semester)</p>
                <p className="timeline-courses">Relevant Coursework: OOP, Computer Networks, Software Engineering, AI, Machine Learning</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">June 2021 – May 2023</span>
                <h3>Intermediate</h3>
                <p className="timeline-org">Sri Chaitanya College, Hyderabad</p>
                <p className="timeline-detail">Percentage: 89.5%</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <span className="timeline-date">May 2020 – June 2021</span>
                <h3>10th Grade (SSC)</h3>
                <p className="timeline-org">Geetanjali Olympiad School, Hyderabad</p>
                <p className="timeline-detail">Percentage: 100%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== RESEARCH INTERESTS ==================== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title fade-in">Research Interests</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">Areas I'm passionate about exploring</p>
          <div className="interests-grid fade-in fade-in-delay-2">
            <div className="interest-card">
              <div className="interest-icon">🤖</div>
              <h3>Machine Learning</h3>
              <p>Exploring classification models, NLP, and feature engineering techniques for real-world data problems.</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">🧠</div>
              <h3>Artificial Intelligence</h3>
              <p>Studying intelligent systems and their applications in healthcare, automation, and decision-making.</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">🌐</div>
              <h3>Full Stack Development</h3>
              <p>Building end-to-end web applications with modern frameworks and RESTful APIs.</p>
            </div>
            <div className="interest-card">
              <div className="interest-icon">📊</div>
              <h3>Natural Language Processing</h3>
              <p>Text classification, sentiment analysis, and building NLP pipelines with TF-IDF and ML models.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SKILLS ==================== */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title fade-in">Skills</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">Technologies & tools I work with</p>
          <div className="skills-container fade-in fade-in-delay-2">
            <div className="skill-category">
              <h3>Languages & Frameworks</h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">TypeScript</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">HTML</span>
                <span className="skill-tag">CSS</span>
                <span className="skill-tag">Express.js</span>
                <span className="skill-tag">React</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>ML & Data Science</h3>
              <div className="skill-tags">
                <span className="skill-tag">Machine Learning</span>
                <span className="skill-tag">NLP</span>
                <span className="skill-tag">TF-IDF</span>
                <span className="skill-tag">Logistic Regression</span>
                <span className="skill-tag">SVM</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Tools & Platforms</h3>
              <div className="skill-tags">
                <span className="skill-tag">GitHub</span>
                <span className="skill-tag">VS Code</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">DaVinci Resolve</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PERSONAL DETAILS ==================== */}
      <section className="section">
        <div className="container">
          <h2 className="section-title fade-in">Personal Details</h2>
          <p className="section-subtitle fade-in fade-in-delay-1">A bit more about me</p>
          <div className="details-grid fade-in fade-in-delay-2">
            <div className="detail-card">
              <div className="detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                  <circle cx="12" cy="7" r="4"/>
                </svg>
              </div>
              <div className="detail-info">
                <span className="detail-label">Full Name</span>
                <span className="detail-value">Tanneru Youna Chowdary</span>
              </div>
            </div>
            <div className="detail-card">
              <div className="detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div className="detail-info">
                <span className="detail-label">Phone</span>
                <span className="detail-value">+91 7416552940</span>
              </div>
            </div>
            <div className="detail-card">
              <div className="detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="detail-info">
                <span className="detail-label">Personal Email</span>
                <span className="detail-value">younachowdary@gmail.com</span>
              </div>
            </div>
            <div className="detail-card">
              <div className="detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div className="detail-info">
                <span className="detail-label">College Email</span>
                <span className="detail-value">se23umcs060@mahindrauniversity.edu.in</span>
              </div>
            </div>
            <div className="detail-card">
              <div className="detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div className="detail-info">
                <span className="detail-label">Location</span>
                <span className="detail-value">Hyderabad, India</span>
              </div>
            </div>
            <div className="detail-card">
              <div className="detail-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <div className="detail-info">
                <span className="detail-label">Interests</span>
                <span className="detail-value">Video Editing, Content Creation, Badminton</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
