
import { useState } from 'react';
import {
  Menu,
  X,
  ArrowUpRight,
  Download,
  Mail,
  Phone,
  MapPin,
  Code2,
  Monitor,
  Database,
  Network,
  ShieldCheck,
  BriefcaseBusiness,
  GraduationCap,
  ExternalLink
} from 'lucide-react';

import './App.css';

const skills = [
  { name: 'HTML, CSS & JavaScript', level: 'Web Development', icon: Code2 },
  { name: 'React & PHP', level: 'Application Development', icon: Monitor },
  { name: 'MySQL & Database Management', level: 'Database Systems', icon: Database },
  { name: 'LAN, IP Addressing & Networking', level: 'Computer Networks', icon: Network },
  { name: 'CCTV Installation & Configuration', level: 'IT Infrastructure', icon: ShieldCheck },
  { name: 'Computer Maintenance & Support', level: 'Technical Support', icon: BriefcaseBusiness },
];

const projects = [
  {
    number: '01',
    title: 'Web-Based Telemedicine Platform',
    category: 'Healthcare Technology',
    description:
      'A web-based healthcare platform designed to connect patients and doctors through appointment management, video consultations, messaging and medical records.',
    technologies: 'PHP · MySQL · JavaScript · WebRTC',
    image: '/projects/telemedicine.jpg',
    github: '',
    demo: ''
  },
  {
    number: '02',
    title: 'Loan Management System',
    category: 'Business Application',
    description:
      'A system concept for managing borrower information, loan applications, repayment records and financial reporting.',
    technologies: 'PHP · MySQL · HTML · CSS',
    image: '/projects/loan-system.jpg',
    github: '',
    demo: ''
  },
  {
    number: '03',
    title: 'Networking & IT Support',
    category: 'IT Infrastructure',
    description:
      'Practical experience in network configuration, LAN setup, IP addressing, structured cabling, CCTV installation and computer troubleshooting.',
    technologies: 'Networking · CCTV · Hardware · Troubleshooting',
    image: '/projects/networking.jpg',
    github: '',
    demo: ''
  }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navigation = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Experience', '#experience'],
    ['Contact', '#contact']
  ];

  return (
    <>
      {/* NAVIGATION */}
      <header className="navbar">
        <a className="logo" href="#home" onClick={closeMenu}>
          EM<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navigation.map(([name, link]) => (
            <a key={name} href={link} onClick={closeMenu}>
              {name}
            </a>
          ))}

          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's Talk <ArrowUpRight size={16} />
          </a>
        </nav>
      </header>

      <main>

        {/* HERO SECTION */}
        <section id="home" className="hero section">
          <div className="hero-content">

            <div className="availability">
              <span className="status-dot"></span>
              OPEN TO OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M</p>

            <h1>
              EVANSON<br />
              <span>MACHARIA.</span>
            </h1>

            <h2>IT Professional | Web Developer | IT Support</h2>

            <p className="hero-description">
              I build practical technology solutions, develop web
              applications and help businesses solve IT challenges.
              Passionate about technology, innovation and continuous learning.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="btn btn-primary">
                Explore My Work <ArrowUpRight size={18} />
              </a>

              <a href="/cv.pdf" download className="btn btn-outline">
                Download CV <Download size={18} />
              </a>
            </div>

            <div className="hero-location">
              <MapPin size={16} /> Murang'a, Kenya
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-frame">
              <img
                src="/profile.jpg"
                alt="Evanson Macharia"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />

              <div className="profile-placeholder">
                <span>EM</span>
                <small>YOUR PROFESSIONAL PHOTO</small>
              </div>
            </div>

            <div className="floating-card">
              <Code2 size={22} />
              <div>
                <strong>Technology</strong>
                <small>Building digital solutions</small>
              </div>
            </div>

            <div className="circle-decoration"></div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section about-section">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About <span>Me</span></h2>
          </div>

          <div className="about-grid">
            <div>
              <p className="about-lead">
                Technology enthusiast with a passion for solving
                real-world problems through technology.
              </p>

              <p className="muted">
                I have an academic background in Business Information
                Technology from Murang'a University of Technology and
                practical experience in IT support, networking,
                CCTV installation and web-based application development.
              </p>

              <p className="muted">
                I enjoy learning new technologies, working on innovative
                projects and developing reliable solutions that improve
                how people and organisations work.
              </p>
            </div>

            <div className="about-details">
              <div>
                <span>Education</span>
                <strong>BBIT</strong>
              </div>

              <div>
                <span>Institution</span>
                <strong>Murang'a University of Technology</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>Murang'a, Kenya</strong>
              </div>

              <div>
                <span>Interests</span>
                <strong>Development · Networking · IT Support</strong>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>Technical <span>Skills</span></h2>
            <p className="muted">
              Technologies and practical capabilities I have worked with.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon;

              return (
                <div className="skill-card" key={skill.name}>
                  <Icon size={27} />
                  <h3>{skill.name}</h3>
                  <p>{skill.level}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <p className="eyebrow">MY SELECTED WORK</p>
            <h2>Featured <span>Projects</span></h2>

            <p className="muted">
              A selection of academic and practical work demonstrating my abilities.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>

                <div className="project-image">
                  <img
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  <span>{project.number}</span>
                </div>

                <div className="project-info">
                  <p className="project-category">
                    {project.category}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="muted">
                    {project.description}
                  </p>

                  <p className="technologies">
                    {project.technologies}
                  </p>

                  <div className="project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Code2 size={17} /> Source Code
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo <ExternalLink size={16} />
                      </a>
                    )}

                    {!project.github && !project.demo && (
                      <span className="project-status">
                        Project showcase
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section">
          <div className="section-heading">
            <p className="eyebrow">MY JOURNEY</p>
            <h2>Education & <span>Experience</span></h2>
          </div>

          <div className="timeline">

            <article className="timeline-item">
              <div className="timeline-icon">
                <GraduationCap />
              </div>

              <div>
                <p className="timeline-date">2022 – 2026</p>

                <h3>Murang'a University of Technology</h3>

                <p className="accent-text">
                  Bachelor of Business Information Technology
                </p>

                <p className="muted">
                  Academic training in information technology,
                  business systems and software development.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-icon">
                <BriefcaseBusiness />
              </div>

              <div>
                <p className="timeline-date">3 Months</p>

                <h3>Apollo Comptronic Company</h3>

                <p className="accent-text">IT Attachment</p>

                <p className="muted">
                  Assisted with computer maintenance, network troubleshooting,
                  LAN configuration, IP addressing, structured cabling
                  and CCTV installation.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-icon">
                <BriefcaseBusiness />
              </div>

              <div>
                <p className="timeline-date">3 Months</p>

                <h3>Nokras Sagana</h3>

                <p className="accent-text">Construction Record Keeper</p>

                <p className="muted">
                  Supported record keeping and documentation
                  within the construction environment.
                </p>
              </div>
            </article>

          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="section services-section">
          <div className="section-heading">
            <p className="eyebrow">HOW I CAN HELP</p>
            <h2>My <span>Services</span></h2>
          </div>

          <div className="services-grid">

            <div className="service-card">
              <Code2 />
              <h3>Web Development</h3>
              <p>
                Building responsive websites and practical web applications.
              </p>
            </div>

            <div className="service-card">
              <Monitor />
              <h3>IT Support</h3>
              <p>
                Computer setup, software installation and troubleshooting.
              </p>
            </div>

            <div className="service-card">
              <Network />
              <h3>Networking & CCTV</h3>
              <p>
                Basic LAN configuration, cabling and CCTV setup.
              </p>
            </div>

            <div className="service-card">
              <BriefcaseBusiness />
              <h3>Digital Services</h3>
              <p>
                CV preparation, document formatting and poster design.
              </p>
            </div>

          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section contact-section">
          <div className="contact-panel">

            <p className="eyebrow">
              HAVE A PROJECT OR OPPORTUNITY?
            </p>

            <h2>
              Let's Build Something <span>Great.</span>
            </h2>

            <p className="muted">
              I'm open to suitable IT opportunities, collaborations
              and projects. Get in touch.
            </p>

            <a
              href="mailto:machariamakumi@gmail.com?subject=Portfolio%20Enquiry"
              className="btn btn-primary"
            >
              <Mail size={18} /> Email Me
            </a>

            <div className="contact-details">
              <div>
                <MapPin /> Murang'a, Kenya
              </div>

              <div>
                <Phone /> 0796070507
              </div>

              <div>
                <Mail /> machariamakumi@gmail.com
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GH
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="mailto:machariamakumi@gmail.com"
                aria-label="Email"
              >
                <Mail />
              </a>
            </div>

          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <a className="logo" href="#home">
          EM<span>.</span>
        </a>

        <p>
          © {new Date().getFullYear()} Evanson Macharia. All rights reserved.
        </p>

        <a href="#home" className="back-top">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}

export default App;
