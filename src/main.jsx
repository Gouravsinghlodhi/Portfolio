import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Database,
  Server,
  ShieldCheck,
  Zap,
  Layers3,
  ExternalLink,
  Terminal,
  Cpu,
  Copy,
  Check,
  Play,
  Activity,
  Lock,
  FileText,
  BookOpen,
  Menu,
  X,
  Sparkles
} from "lucide-react";
import "./styles.css";

const GITHUB_USERNAME = "Gouravsinghlodhi";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;
const DEFAULT_EMAIL = "gouravsinghlodhi7@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/gourav-singh-lodhi/";

const projectsData = [
  {
    id: "lib-mgmt",
    number: "01",
    title: "Library Management & Automated Book Tracking API",
    category: "APIs & Databases",
    description:
      "A production-ready RESTful service with automated ISBN book data enrichment, QR code cataloging, and automated background cron tasks for overdue notices.",
    highlights: [
      "Auto-sync book metadata directly via ISBN APIs and generate tracking QR codes",
      "Robust relational migrations & seed architecture using Knex.js and Bookshelf ORM with PostgreSQL",
      "Automated scheduled cron jobs for penalty calculations and transactional notification emails",
      "Full unit & integration test suite powered by Jest and Supertest"
    ],
    tags: ["Node.js", "Express.js", "PostgreSQL", "Knex.js", "Bookshelf.js", "Passport-JWT", "Node-Cron", "Jest"],
    icon: BookOpen,
    githubUrl: "https://github.com/Gouravsinghlodhi/machine_test"
  },
  {
    id: "exam-platform",
    number: "02",
    title: "Online Examination & Auto-Grading Engine",
    category: "Backend Systems",
    description:
      "High-concurrency backend engine for managing exam scheduling, candidate attempt synchronization, tamper-evident scoring, and auto-evaluation pipelines.",
    highlights: [
      "ACID transactions to guarantee zero data loss during simultaneous high-volume exam submissions",
      "Optimized database locking preventing race conditions during synchronized countdown timers",
      "Multi-tier role authorization for Candidates, Evaluators, and Super Administrators"
    ],
    tags: ["Node.js", "Express", "PostgreSQL", "Knex.js", "Redis", "REST APIs", "JWT"],
    icon: ShieldCheck,
    githubUrl: GITHUB_PROFILE_URL
  },
  {
    id: "proctoring",
    number: "03",
    title: "Real-Time Proctoring & Telemetry Gateway",
    category: "Real-Time",
    description:
      "Low-latency bi-directional WebSocket infrastructure for live candidate monitoring, multi-room invigilator broadcasts, and instant telemetry alerts.",
    highlights: [
      "Isolated room multiplexing accommodating hundreds of concurrent student sessions",
      "Real-time heartbeat ping/pong mechanism to flag tab-switching or network drops under 50ms",
      "Scalable event-driven message distribution ready for Redis Pub/Sub integration"
    ],
    tags: ["Socket.IO", "WebSockets", "Node.js", "Redis Pub/Sub", "Docker", "Event-Driven"],
    icon: Zap,
    githubUrl: GITHUB_PROFILE_URL
  },
  {
    id: "doc-automation",
    number: "04",
    title: "Asynchronous Document & Analytics Pipeline",
    category: "Automation",
    description:
      "High-throughput asynchronous reporting engine generating pixel-perfect PDF certifications and multi-sheet XLSX exports streamed directly to cloud storage.",
    highlights: [
      "Headless Chromium memory optimization preventing leaks during mass batch certificate generation",
      "Stream-based CSV/XLSX pipeline processing 10,000+ data rows with minimal RAM overhead",
      "Expiring time-limited secure AWS S3 pre-signed URLs for safe document delivery"
    ],
    tags: ["Node.js", "Puppeteer", "AWS S3", "ExcelJS", "Stream APIs", "Background Workers"],
    icon: FileText,
    githubUrl: GITHUB_PROFILE_URL
  },
  {
    id: "auth-service",
    number: "05",
    title: "Enterprise RBAC & Identity Microservice",
    category: "APIs & Databases",
    description:
      "Stateless authentication service featuring dual-token JWT lifecycle, Redis token revocation blacklisting, Bcrypt password hashing, and granular RBAC policies.",
    highlights: [
      "Short-lived access tokens paired with cryptographically secure refresh token rotation",
      "Instant token revocation and session blacklisting via distributed Redis cache",
      "Strict input validation and sanitization using Joi middleware against OWASP vectors"
    ],
    tags: ["Node.js", "Express", "Passport.js", "Redis", "Bcrypt", "Joi", "PostgreSQL"],
    icon: Lock,
    githubUrl: GITHUB_PROFILE_URL
  },
  {
    id: "portfolio-app",
    number: "06",
    title: "Developer Portfolio & CI/CD Platform",
    category: "Backend Systems",
    description:
      "Modern, responsive developer portfolio engineered with Vite and React 18, backed by GitHub CI/CD automation for zero-downtime global edge deployments.",
    highlights: [
      "Interactive backend API simulator demonstrating live payload modeling and status codes",
      "Production asset bundling under 170KB with optimal cache-control headers",
      "Automated GitHub version control workflow with instant CDN synchronization"
    ],
    tags: ["React 18", "Vite", "JavaScript", "GitHub CI/CD", "Edge CDN"],
    icon: Terminal,
    githubUrl: "https://github.com/Gouravsinghlodhi/Portfolio"
  }
];

const skillsCategories = [
  {
    title: "Core Backend",
    icon: Server,
    skills: ["Node.js", "Express.js", "RESTful Architecture", "Socket.IO", "WebSockets", "Microservices", "Event-Driven Systems"]
  },
  {
    title: "Databases & Caching",
    icon: Database,
    skills: ["PostgreSQL", "Knex.js (Query Builder)", "Bookshelf ORM", "Redis Caching", "SQL Query Tuning", "Schema Design & Migrations"]
  },
  {
    title: "Auth, Security & Testing",
    icon: ShieldCheck,
    skills: ["JWT Authentication", "Passport.js", "Bcrypt Hashing", "Role-Based Access (RBAC)", "Joi Validation", "Jest", "Supertest"]
  },
  {
    title: "Cloud, Tools & Automation",
    icon: Layers3,
    skills: ["AWS S3", "Docker", "Git & GitHub", "Postman", "Puppeteer (PDF/Scraping)", "Node-Cron", "CI/CD Pipelines", "Linux / Bash"]
  }
];

const mockApiEndpoints = [
  {
    method: "GET",
    path: "/api/v1/health",
    latency: "14ms",
    response: {
      status: "healthy",
      uptime: "99.98%",
      server: {
        nodeVersion: "v20.x",
        environment: "production",
        memoryUsage: "48.2 MB"
      },
      database: {
        provider: "PostgreSQL 16",
        poolStatus: "connected",
        activeConnections: 4
      },
      cache: {
        redis: "connected",
        hitRate: "94.6%"
      }
    }
  },
  {
    method: "POST",
    path: "/api/v1/books/isbn-lookup",
    latency: "32ms",
    response: {
      success: true,
      data: {
        isbn: "978-0132350884",
        title: "Clean Code: A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
        category: "Software Engineering",
        qrTrackingCode: "QR_LODHI_9780132350884",
        status: "available_in_catalog",
        checkedOutCopies: 2,
        totalCopies: 10
      }
    }
  },
  {
    method: "POST",
    path: "/api/v1/proctor/telemetry",
    latency: "21ms",
    response: {
      eventReceived: true,
      sessionId: "sess_exam_90842",
      candidateId: "cand_gourav_01",
      anomalyScore: 0.02,
      flags: [],
      proctorAlert: false,
      timestamp: new Date().toISOString()
    }
  },
  {
    method: "GET",
    path: "/api/v1/reports/export/pdf",
    latency: "45ms",
    response: {
      task: "generate_exam_summary_report",
      status: "completed",
      recordsProcessed: 1420,
      downloadUrl: "https://s3.ap-south-1.amazonaws.com/reports/exam_2026.pdf?expires=3600",
      expiresIn: "60 minutes"
    }
  }
];

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedEndpointIndex, setSelectedEndpointIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filterCategories = ["All", "Backend Systems", "APIs & Databases", "Real-Time", "Automation"];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(DEFAULT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const selectedEndpoint = mockApiEndpoints[selectedEndpointIndex];

  return (
    <div className="site-shell">
      {/* Background ambient lighting glows */}
      <div className="ambient-glow ambient-one" />
      <div className="ambient-glow ambient-two" />
      <div className="ambient-glow ambient-three" />

      {/* Navigation Topbar */}
      <header className="topbar">
        <div className="section-wrap topbar-inner">
          <a className="brand" href="#home" aria-label="Gourav Singh Lodhi Home">
            <span className="brand-mark">G</span>
            <span>
              gourav<span className="brand-dot">.</span>dev
            </span>
          </a>

          <nav className={`nav-links ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#simulator" onClick={() => setMobileMenuOpen(false)}>Live API</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <a className="nav-cta" href="#contact">
              Let's talk <ArrowUpRight size={15} />
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="section-wrap hero" id="home">
          <div className="hero-copy">
            <div className="badge-status">
              <span className="pulse-dot" />
              AVAILABLE FOR BACKEND ROLES & COLLABORATIONS
            </div>

            <h1>
              Engineering robust <br />
              <span className="gradient-text">backend systems</span> that scale.
            </h1>

            <p className="hero-intro">
              I'm <strong>Gourav Singh Lodhi</strong> — a backend developer specializing in
              high-performance RESTful APIs, relational databases (PostgreSQL/Knex), real-time
              communication (Socket.IO), and secure, maintainable cloud architectures.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#projects">
                View My Projects <ArrowDownRight size={17} />
              </a>
              <a className="button-secondary" href={GITHUB_PROFILE_URL} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub Profile
              </a>
            </div>

            <div className="hero-badges">
              <span><MapPin size={14} /> India</span>
              <span className="hero-badges-sep" />
              <span>Node.js · PostgreSQL · Sockets · Docker</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot-red" />
                  <span className="dot-yellow" />
                  <span className="dot-green" />
                </div>
                <span className="terminal-title">system-runtime.js</span>
                <span className="terminal-status-badge">
                  <Activity size={12} /> online
                </span>
              </div>

              <div className="terminal-code">
                <div className="code-line">
                  <span className="ln">01</span>
                  <span><span className="c-kw">const</span> <span className="c-var">engineer</span> = &#123;</span>
                </div>
                <div className="code-line">
                  <span className="ln">02</span>
                  <span>&nbsp;&nbsp;name: <span className="c-str">'Gourav Singh Lodhi'</span>,</span>
                </div>
                <div className="code-line">
                  <span className="ln">03</span>
                  <span>&nbsp;&nbsp;focus: <span className="c-str">'APIs, Databases, Real-Time'</span>,</span>
                </div>
                <div className="code-line">
                  <span className="ln">04</span>
                  <span>&nbsp;&nbsp;stack: [<span className="c-str">'Node.js'</span>, <span className="c-str">'PostgreSQL'</span>, <span className="c-str">'Redis'</span>],</span>
                </div>
                <div className="code-line">
                  <span className="ln">05</span>
                  <span>&nbsp;&nbsp;practices: [<span className="c-str">'ACID'</span>, <span className="c-str">'Clean Code'</span>, <span className="c-str">'Jest TDD'</span>]</span>
                </div>
                <div className="code-line">
                  <span className="ln">06</span>
                  <span>&#125;;</span>
                </div>
                <div className="code-line">
                  <span className="ln">07</span>
                  <span><span className="c-kw">await</span> server.<span className="c-var">listen</span>(<span className="c-str">8080</span>);</span>
                </div>
              </div>

              <div className="terminal-footer">
                <span style={{ color: "#34d399", marginRight: "8px" }}>➜</span>
                <span>Production API listening on port <b>8080</b></span>
                <span className="cursor-blink" />
              </div>
            </div>

            {/* Floating Info Chips */}
            <div className="floating-stat-card float-top">
              <div className="float-icon icon-purple">
                <Database size={18} />
              </div>
              <div>
                <span className="float-label">Database Optimization</span>
                <span className="float-val">ACID & Zero Data Loss</span>
              </div>
            </div>

            <div className="floating-stat-card float-bottom">
              <div className="float-icon icon-blue">
                <Zap size={18} />
              </div>
              <div>
                <span className="float-label">Event-Driven Latency</span>
                <span className="float-val">&lt; 50ms Real-Time Sync</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <section className="section-wrap stats-strip" aria-label="Key backend engineering metrics">
          <div className="stat-item">
            <span className="stat-num">100%</span>
            <div className="stat-text">
              <h4>Test-Driven Reliability</h4>
              <p>Jest & Supertest automated suites</p>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-num">&lt;50ms</span>
            <div className="stat-text">
              <h4>Real-Time WebSocket</h4>
              <p>Low-latency telemetry streaming</p>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-num">ACID</span>
            <div className="stat-text">
              <h4>Data Integrity First</h4>
              <p>PostgreSQL schema migrations</p>
            </div>
          </div>
          <div className="stat-item">
            <span className="stat-num">REST</span>
            <div className="stat-text">
              <h4>Clean API Design</h4>
              <p>Defensive validation with Joi</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="section-wrap content-section" id="projects">
          <div className="section-kicker">
            <Code2 size={15} /> 01 / FEATURED PROJECTS & SYSTEMS
          </div>

          <div className="section-heading-row">
            <div>
              <h2>Production-Grade Projects<span className="gradient-text">.</span></h2>
            </div>
            <p className="section-subtext">
              Explore concrete systems I've built, featuring real-world database architectures,
              real-time monitoring, and automated background jobs.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="project-filters">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards Grid */}
          <div className="projects-grid">
            {filteredProjects.map((project) => {
              const Icon = project.icon;
              return (
                <article className="project-card-new" key={project.id}>
                  <div className="project-card-head">
                    <div className="project-icon-box">
                      <Icon size={22} />
                    </div>
                    <span className="project-cat-badge">{project.category}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="project-card-desc">{project.description}</p>

                  <ul className="project-highlights">
                    {project.highlights.map((item, idx) => (
                      <li key={idx}>
                        <span className="highlight-bullet">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span className="tech-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-links">
                    <a
                      className="project-link-btn"
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Github size={15} /> Source Code
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Interactive Backend Live API Playground */}
        <section className="section-wrap content-section" id="simulator">
          <div className="section-kicker">
            <Terminal size={15} /> 02 / INTERACTIVE API SIMULATOR
          </div>

          <div className="section-heading-row">
            <div>
              <h2>Test My Backend Endpoints<span className="gradient-text">.</span></h2>
            </div>
            <p className="section-subtext">
              Click any route below to simulate live API requests and preview JSON payload responses,
              database health metrics, and response times.
            </p>
          </div>

          <div className="api-playground-box">
            <div className="playground-header">
              <div className="playground-title">
                <Cpu size={16} color="#a855f7" />
                <span>REST API Gateway Simulator</span>
              </div>
              <span className="playground-tag">● Live Mock Engine</span>
            </div>

            <div className="playground-body">
              <div className="endpoint-selector">
                <span style={{ fontSize: "11px", color: "#64748b", fontFamily: "var(--font-mono)", padding: "0 6px 6px" }}>
                  SELECT ENDPOINT
                </span>
                {mockApiEndpoints.map((ep, idx) => (
                  <button
                    key={ep.path}
                    className={`endpoint-btn ${selectedEndpointIndex === idx ? "active" : ""}`}
                    onClick={() => setSelectedEndpointIndex(idx)}
                  >
                    <div>
                      <span className={`ep-method ${ep.method.toLowerCase()}`}>{ep.method}</span>
                      <span className="ep-path">{ep.path}</span>
                    </div>
                  </button>
                ))}
              </div>

              <div className="playground-view">
                <div className="view-request-bar">
                  <span className={`ep-method ${selectedEndpoint.method.toLowerCase()}`}>
                    {selectedEndpoint.method}
                  </span>
                  <span style={{ color: "#e2e8f0" }}>{selectedEndpoint.path}</span>
                  <div className="view-meta">
                    <span className="status-badge-ok">200 OK</span>
                    <span>Latency: {selectedEndpoint.latency}</span>
                  </div>
                </div>

                <pre className="json-response-box">
                  {JSON.stringify(selectedEndpoint.response, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </section>

        {/* Skills & Architecture Section */}
        <section className="section-wrap content-section" id="skills">
          <div className="section-kicker">
            <Layers3 size={15} /> 03 / TECHNICAL TOOLKIT
          </div>

          <div className="section-heading-row">
            <div>
              <h2>Skills & Technologies<span className="gradient-text">.</span></h2>
            </div>
            <p className="section-subtext">
              A carefully honed stack designed to build dependable, maintainable, and scalable backend applications.
            </p>
          </div>

          <div className="skills-grid-new">
            {skillsCategories.map((group) => {
              const Icon = group.icon;
              return (
                <div className="skill-category-card" key={group.title}>
                  <div className="skill-cat-head">
                    <div className="skill-cat-icon">
                      <Icon size={20} />
                    </div>
                    <h3>{group.title}</h3>
                  </div>

                  <div className="skills-pill-cloud">
                    {group.skills.map((s) => (
                      <span className="skill-pill" key={s}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Architecture Tenets */}
          <div className="principles-grid">
            <div className="principle-card">
              <span className="principle-num">TENET / 01</span>
              <h4>Data Integrity & ACID</h4>
              <p>Ensuring consistency, robust relational schemas, and transaction rollbacks for zero business data loss.</p>
            </div>
            <div className="principle-card">
              <span className="principle-num">TENET / 02</span>
              <h4>Defensive Security</h4>
              <p>Multi-layered JWT verification, input sanitization via Joi, password salting, and strict rate-limiting.</p>
            </div>
            <div className="principle-card">
              <span className="principle-num">TENET / 03</span>
              <h4>Event-Driven Scalability</h4>
              <p>Decoupling heavy compute tasks via asynchronous background workers and non-blocking streaming I/O.</p>
            </div>
            <div className="principle-card">
              <span className="principle-num">TENET / 04</span>
              <h4>Maintainable Codebase</h4>
              <p>Clean architectural boundaries, modular route controllers, and automated integration testing with Jest.</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-wrap" id="contact">
          <div className="contact-section">
            <div className="contact-glow-overlay" />

            <div className="contact-left">
              <div className="section-kicker">
                <Mail size={15} /> 04 / GET IN TOUCH
              </div>
              <h2>
                Let's build something <br />
                <span className="gradient-text">extraordinary.</span>
              </h2>
              <p>
                Whether you have an open backend developer position, a contract system to architect,
                or want to discuss Node.js and PostgreSQL performance — my inbox is always open.
              </p>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a className="button-primary" href={`mailto:${DEFAULT_EMAIL}`}>
                  Send Email <ArrowUpRight size={17} />
                </a>
                <button className="button-secondary" onClick={handleCopyEmail}>
                  {copiedEmail ? <Check size={16} color="#34d399" /> : <Copy size={16} />}
                  {copiedEmail ? "Email Copied!" : "Copy Email Address"}
                </button>
              </div>
            </div>

            <div className="contact-links-list">
              <div className="contact-item-card">
                <div className="contact-item-icon">
                  <Mail size={18} />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">DIRECT EMAIL</span>
                  <a className="contact-item-val" href={`mailto:${DEFAULT_EMAIL}`}>
                    {DEFAULT_EMAIL}
                  </a>
                </div>
                <button className="copy-btn" onClick={handleCopyEmail} title="Copy email address">
                  {copiedEmail ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                </button>
              </div>

              <div className="contact-item-card">
                <div className="contact-item-icon">
                  <Github size={18} />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">GITHUB REPOSITORIES</span>
                  <a
                    className="contact-item-val"
                    href={GITHUB_PROFILE_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/{GITHUB_USERNAME}
                  </a>
                </div>
                <a
                  className="copy-btn"
                  href={GITHUB_PROFILE_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open GitHub Profile"
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              <div className="contact-item-card">
                <div className="contact-item-icon">
                  <Linkedin size={18} />
                </div>
                <div className="contact-item-text">
                  <span className="contact-item-label">LINKEDIN PROFILE</span>
                  <a
                    className="contact-item-val"
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/gourav-singh-lodhi
                  </a>
                </div>
                <a
                  className="copy-btn"
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open LinkedIn Profile"
                >
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a className="brand" href="#home">
            <span className="brand-mark">G</span>
            <span>gourav.dev</span>
          </a>

          <div className="footer-copy">
            Designed & Engineered by <strong>Gourav Singh Lodhi</strong> — Backend Developer
          </div>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);