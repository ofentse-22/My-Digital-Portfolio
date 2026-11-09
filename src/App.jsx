import { useEffect, useState } from "react";

const github = "https://github.com/ofentse-22";

const navigation = [
  ["About", "about"],
  ["Education", "education"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Contact", "contact"],
];

const projects = [
  {
    name: "Ecommerce-Shoe-Store",
    language: "JavaScript",
    description:
      "A full-stack shoe store with a responsive storefront and a Node.js/Express backend.",
    icon: "bag",
  },
  {
    name: "Task-Tracker-DevOps",
    language: "JavaScript",
    description:
      "A full-stack task management app with CI/CD pipelines, deployed on Render.",
    icon: "arrows",
  },
  {
    name: "Task-Mate",
    language: "JavaScript",
    description:
      "A React task manager with priority tracking, due dates, and live progress visualization.",
    icon: "check",
  },
  {
    name: "Attendance-System",
    language: "JavaScript",
    description:
      "A Node.js/Express student attendance API with scheduled Cron jobs and validation.",
    icon: "calendar",
  },
  {
    name: "Banking-System",
    language: "Python",
    description:
      "A CLI banking app with login, account transfers, and JSON-based data storage.",
    icon: "bank",
  },
  {
    name: "CSharp-Unit-Testing-Calculator",
    language: "C#",
    description:
      ".NET 8 calculator built with a test-driven workflow and MSTest.",
    icon: "code",
  },
  {
    name: "Password-Generator",
    language: "Python",
    description:
      "A command-line tool that generates secure, randomised passwords.",
    icon: "key",
  },
  {
    name: "ITCA-Python-Debugging-Lab-Student",
    language: "Python",
    description: "A collection of practical Python debugging lab exercises.",
    icon: "bug",
  },
  {
    name: "Python-Scripts",
    language: "Python",
    description: "A growing collection of Python scripts and mini-projects.",
    icon: "terminal",
  },
  {
    name: "My-Steakhouse",
    language: "HTML",
    description:
      "A responsive steakhouse website layout built with CSS Flexbox and Grid.",
    icon: "layout",
  },
];

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C#", "HTML", "CSS"],
  },
  {
    title: "Frameworks & tools",
    skills: ["React", "Node.js / Express", ".NET", "MSTest"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["Microsoft Azure", "CI/CD pipelines", "Azure DevOps concepts"],
  },
  {
    title: "Practices",
    skills: [
      "Git & GitHub",
      "Problem-solving",
      "Debugging",
      "Unit testing",
      "REST APIs",
    ],
  },
];

const certifications = [
  {
    title: "Microsoft AZ-400",
    detail: "Designing and Implementing Microsoft DevOps Solutions",
    meta: "Passed · Score 709 · July 2026",
    mark: "MS",
  },
  {
    title: "AI Fluency: Final Assessment",
    detail: "Masterskill",
    meta: "Completed · 30 April 2026",
    mark: "AI",
  },
  {
    title: "Microsoft Digital Literacy",
    detail: "Full certificate · Masterskill",
    meta: "February 2026",
    mark: "DL",
    topics:
      "Access information · Collaborate digitally · Communicate online · Create digital content · Participate safely · Work with computers",
  },
  {
    title: "Simple coding",
    detail: "OpenLearn · The Open University",
    meta: "Course completed",
    mark: "OU",
  },
  {
    title: "An introduction to software development",
    detail: "OpenLearn · The Open University",
    meta: "Course completed",
    mark: "OU",
  },
];

function ArrowIcon({ diagonal = false }) {
  return diagonal ? (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M4 12 12 4M5 4h7v7" />
    </svg>
  ) : (
    <svg aria-hidden="true" viewBox="0 0 16 16" fill="none">
      <path d="M2.5 8h10m-4-4 4 4-4 4" />
    </svg>
  );
}

function GithubIcon({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.08c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.23-1.65-1.23-1.65-1.01-.7.08-.69.08-.69 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.47-.28-5.06-1.24-5.06-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.34.75 1.02.75 2.06v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

function ProjectMark({ icon }) {
  const paths = {
    bag: <><path d="M4 6.5h16l-1 13H5l-1-13Z" /><path d="M9 7V5a3 3 0 0 1 6 0v2" /></>,
    arrows: <><path d="M7 7h10l-2.5-2.5M17 17H7l2.5 2.5" /><path d="M17 7v3M7 14v3" /></>,
    check: <><path d="m5 12 4 4L19 6" /><path d="M20 12v7H4V5h10" /></>,
    calendar: <><rect x="3.5" y="5" width="17" height="15" rx="2" /><path d="M7 3v4m10-4v4M4 9h16m-12 4h2m3 0h2m-7 3h2" /></>,
    bank: <><path d="m3 9 9-5 9 5M4 10h16M5 19h14M3 21h18M7 10v9m5-9v9m5-9v9" /></>,
    code: <><path d="m8 7-5 5 5 5m8-10 5 5-5 5m-2-12-4 14" /></>,
    key: <><circle cx="8" cy="12" r="4" /><path d="m11 15 7 6 2-2-2-2 2-2-4-4m-7 1h.01" /></>,
    bug: <><path d="M8 8h8v8a4 4 0 0 1-8 0V8Zm-2-3 2 2m10-2-2 2M5 11H3m18 0h-2M5 17H3m18 0h-2M12 4v4m-4 4h8m-8 4h8" /></>,
    terminal: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="m7 9 3 3-3 3m6 0h4" /></>,
    layout: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>,
  };

  return (
    <span className="project-mark" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">{paths[icon]}</svg>
    </span>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <nav className="nav-shell" aria-label="Main navigation">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">OS</span>
            <span>Ofentse Seroalo</span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <div
            id="primary-navigation"
            className={`nav-links${menuOpen ? " is-open" : ""}`}
          >
            {navigation.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? "is-active" : ""}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
            <a
              className="nav-github"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
              GitHub
              <ArrowIcon diagonal />
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> Currently learning &amp; building</div>
            <p className="hero-intro">Hello, I’m</p>
            <h1>Ofentse <span>Sabadimo</span><br />Seroalo<span className="name-period">.</span></h1>
            <p className="hero-role">Systems Development Student <span>·</span> Junior Software &amp; IT Professional</p>
            <p className="hero-description">
              I turn curiosity into useful software. Building practical projects,
              learning every day, and growing into the world of technology.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                View projects <ArrowIcon />
              </a>
              <a className="button button-secondary" href="#contact">Contact me</a>
              <a
                className="hero-github"
                href={github}
                target="_blank"
                rel="noreferrer"
                aria-label="Visit Ofentse's GitHub profile"
              >
                <GithubIcon />
              </a>
            </div>
            <div className="hero-location">
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="M16 8.3c0 4.2-6 9.2-6 9.2S4 12.5 4 8.3a6 6 0 1 1 12 0Z" />
                <circle cx="10" cy="8" r="2" />
              </svg>
              Potchefstroom, South Africa
            </div>
          </div>
          <div className="hero-visual" aria-label="Developer profile illustration">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="visual-glow" />
            <div className="visual-card">
              <div className="visual-card-top">
                <span /><span /><span />
                <span className="visual-file">about-me.js</span>
              </div>
              <div className="visual-code">
                <p><span className="code-muted">01</span> <span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</p>
                <p><span className="code-muted">02</span> &nbsp; name: <span className="code-green">"Ofentse"</span>,</p>
                <p><span className="code-muted">03</span> &nbsp; focus: <span className="code-green">"building"</span>,</p>
                <p><span className="code-muted">04</span> &nbsp; mindset: <span className="code-green">"always learning"</span></p>
                <p><span className="code-muted">05</span> {"}"}</p>
                <p className="code-comment"><span className="code-muted">06</span> // good things take iteration</p>
              </div>
              <div className="visual-card-bottom">
                <span className="code-live-dot" /> available for what’s next
              </div>
            </div>
            <div className="floating-chip chip-python"><span>Py</span> Python</div>
            <div className="floating-chip chip-cloud"><span>☁</span> Azure</div>
            <div className="visual-caption"><span>01</span> &nbsp; curious by nature, developer by practice</div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span /> Scroll to explore
          </a>
        </section>

        <section className="section-wrap content-section about-section" id="about">
          <div className="section-heading">
            <p className="section-kicker">A little about me</p>
            <h2>Learning by <span>making.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p className="about-lead">
                I am a second-year Systems Development student at ITCA
                Potchefstroom, working towards a National Certificate in
                Information Technology: System Development (NQF Level 5).
              </p>
              <p>
                I am interested in software development, Python, Microsoft Azure,
                DevOps, cybersecurity, and artificial intelligence. I enjoy
                taking what I learn in class and applying it to practical
                projects — then improving those projects as I learn more.
              </p>
              <p>
                My goal is to keep growing as a developer and contribute to
                technology that solves real problems.
              </p>
              <a className="text-link" href="#projects">Take a look at what I am building <ArrowIcon /></a>
            </div>
            <div className="about-aside">
              <div className="about-number">
                <span className="number-value">02</span>
                <span className="number-label">year of study</span>
              </div>
              <div className="aside-divider" />
              <div className="about-fact">
                <span className="fact-icon">↗</span>
                <div><strong>Always building</strong><span>Learning through hands-on projects</span></div>
              </div>
              <div className="about-fact">
                <span className="fact-icon">◎</span>
                <div><strong>Based in South Africa</strong><span>Potchefstroom, North West</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section education-section" id="education">
          <div className="section-heading">
            <p className="section-kicker">The learning journey</p>
            <h2>Education &amp; <span>certifications.</span></h2>
          </div>
          <div className="education-grid">
            <div className="education-column">
              <h3 className="column-heading"><span className="heading-icon">01</span> Education</h3>
              <div className="timeline">
                <article className="timeline-item">
                  <span className="timeline-dot" />
                  <div className="timeline-meta"><span>2025 — Present</span><span className="current-pill">In progress</span></div>
                  <h4>National Certificate in Information Technology: System Development</h4>
                  <p>ITCA Potchefstroom</p>
                  <span className="qualification-tag">NQF Level 5 <i /> Second year</span>
                </article>
                <article className="timeline-item">
                  <span className="timeline-dot muted-dot" />
                  <div className="timeline-meta"><span>Completed</span></div>
                  <h4>National Senior Certificate</h4>
                  <p>Matric · NQF Level 4</p>
                </article>
              </div>
            </div>
            <div className="certifications-column">
              <h3 className="column-heading"><span className="heading-icon">02</span> Certifications &amp; courses</h3>
              <div className="cert-list">
                {certifications.map((cert) => (
                  <article className="cert-item" key={cert.title}>
                    <span className="cert-mark">{cert.mark}</span>
                    <div className="cert-copy">
                      <h4>{cert.title}</h4>
                      <p>{cert.detail}</p>
                      <span className="cert-meta">{cert.meta}</span>
                      {cert.topics && <span className="cert-topics">{cert.topics}</span>}
                    </div>
                    <span className="cert-check" aria-label="Completed">✓</span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap content-section skills-section" id="skills">
          <div className="section-heading">
            <p className="section-kicker">My toolkit</p>
            <h2>Skills I’m <span>growing.</span></h2>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-top"><span>0{index + 1}</span><span className="skill-card-mark">✳</span></div>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.skills.map((skill) => <span key={skill}>{skill}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap content-section">
            <div className="projects-heading">
              <div className="section-heading">
                <p className="section-kicker">Selected work</p>
                <h2>Projects with <span>purpose.</span></h2>
              </div>
              <a className="text-link all-projects-link" href={github} target="_blank" rel="noreferrer">
                More on GitHub <ArrowIcon diagonal />
              </a>
            </div>
            <p className="projects-intro">A mix of coursework, experiments, and practical builds — each one a chance to learn something new.</p>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <a
                  className="project-card"
                  href={`${github}/${project.name}`}
                  key={project.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="project-card-top">
                    <ProjectMark icon={project.icon} />
                    <span className="project-index">0{index + 1}</span>
                    <span className="project-open"><ArrowIcon diagonal /></span>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project-card-bottom">
                    <span className="language-dot" />{project.language}
                    <span className="project-view">View project <ArrowIcon /></span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-main">
              <p className="section-kicker">Have a project in mind?</p>
              <h2>Let’s build<br /><span>something good.</span></h2>
              <p className="contact-description">
                I’m always open to connecting, learning from others, and
                exploring new opportunities in software and IT.
              </p>
              <a className="button button-primary contact-button" href="mailto:ofentseseroalo@gmail.com">
                Say hello <ArrowIcon />
              </a>
            </div>
            <div className="contact-details">
              <a className="contact-row" href="mailto:ofentseseroalo@gmail.com">
                <span className="contact-icon">@</span>
                <span><small>Email</small><strong>ofentseseroalo@gmail.com</strong></span>
                <ArrowIcon diagonal />
              </a>
              <a className="contact-row" href="tel:+27670216138">
                <span className="contact-icon">↗</span>
                <span><small>Phone</small><strong>067 021 6138</strong></span>
                <ArrowIcon diagonal />
              </a>
              <div className="contact-row">
                <span className="contact-icon">⌖</span>
                <span><small>Location</small><strong>Potchefstroom, South Africa</strong></span>
              </div>
              <a className="contact-row" href={github} target="_blank" rel="noreferrer">
                <span className="contact-icon"><GithubIcon /></span>
                <span><small>GitHub</small><strong>github.com/ofentse-22</strong></span>
                <ArrowIcon diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-wrap footer-inner">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark">OS</span>
            <span>Ofentse Seroalo</span>
          </a>
          <p>Designed with curiosity. Built to keep learning.</p>
          <a href="#home" className="back-to-top">Back to top ↑</a>
          <span className="footer-copy">© {new Date().getFullYear()} Ofentse Sabadimo Seroalo</span>
        </div>
      </footer>
    </>
  );
}

export default App;
