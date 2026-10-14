import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Code2, Database, Server, ShieldCheck, Zap, Layers3, Menu, ExternalLink
} from "lucide-react";
import "./styles.css";

const skills = [
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Socket.IO", "JWT", "Passport.js"], icon: Server },
  { title: "Database", items: ["PostgreSQL", "Knex.js", "Bookshelf.js", "SQL optimization", "Redis"], icon: Database },
  { title: "Cloud & Tools", items: ["AWS S3", "Docker", "Git", "Postman", "Puppeteer", "CI/CD basics"], icon: Layers3 },
  { title: "Engineering", items: ["Authentication", "Real-time systems", "API integrations", "Performance tuning"], icon: Code2 }
];

const projects = [
  {
    number: "01",
    title: "Online Examination Platform",
    type: "Backend systems · EdTech",
    description: "Backend workflows for exam scheduling, candidate assignment, exam attempts, result processing and reporting.",
    tags: ["Node.js", "Express", "PostgreSQL", "REST APIs"],
    icon: ShieldCheck
  },
  {
    number: "02",
    title: "Real-time Proctoring",
    type: "Real-time communication",
    description: "Socket-based real-time communication workflows for exam monitoring, role-based rooms and scalable student sessions.",
    tags: ["Socket.IO", "WebSockets", "Docker", "Redis concepts"],
    icon: Zap
  },
  {
    number: "03",
    title: "Reporting & Document Automation",
    type: "Automation · Data processing",
    description: "Data export and document-generation workflows involving CSV/XLSX reports, PDF generation and cloud file handling.",
    tags: ["Node.js", "Puppeteer", "AWS S3", "CSV/XLSX"],
    icon: Database
  }
];

function App() {
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Gourav home"><span className="brand-mark">G</span><span>gourav<span className="brand-dot">.</span>dev</span></a>
        <nav className="nav-links">
          <a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </nav>
        <a className="nav-cta" href="#contact">Let's talk <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> BACKEND DEVELOPER <span className="availability-divider">/</span> INDIA</div>
            <h1>Building reliable<br />systems for the <span className="gradient-text">real world.</span></h1>
            <p className="hero-intro">I'm <strong>Gourav Singh Lodhi</strong> — a backend developer focused on robust APIs, data-driven applications, and real-time systems that scale.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href="#contact"><Mail size={16} /> Get in touch</a>
            </div>
            <div className="hero-meta"><span><MapPin size={14} /> India</span><span className="meta-separator" /><span>Node.js · PostgreSQL · APIs</span></div>
          </div>
          <div className="hero-visual" aria-label="Backend developer illustration">
            <div className="orbit orbit-outer" /><div className="orbit orbit-inner" />
            <div className="code-card">
              <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>server.js</span><span className="window-status">● running</span></div>
              <div className="code-body">
                <div><span className="line-no">01</span><span className="code-purple">const</span> <span className="code-blue">developer</span> = {"{"}</div>
                <div><span className="line-no">02</span>&nbsp;&nbsp;name: <span className="code-green">'Gourav'</span>,</div>
                <div><span className="line-no">03</span>&nbsp;&nbsp;stack: [</div>
                <div><span className="line-no">04</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'Node.js'</span>,</div>
                <div><span className="line-no">05</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'PostgreSQL'</span>,</div>
                <div><span className="line-no">06</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="code-green">'REST APIs'</span></div>
                <div><span className="line-no">07</span>&nbsp;&nbsp;],</div>
                <div><span className="line-no">08</span>&nbsp;&nbsp;status: <span className="code-green">'building'</span></div>
                <div><span className="line-no">09</span>{"}"};</div>
                <div className="code-spacer" /><div><span className="line-no">10</span><span className="code-purple">export default</span> developer;</div>
              </div>
              <div className="terminal-foot"><span className="terminal-prompt">➜</span> API listening on port <b>3000</b><span className="terminal-cursor" /></div>
            </div>
            <div className="float-chip chip-api"><span className="chip-icon"><Code2 size={15} /></span><span><b>API-first</b><small>Clean architecture</small></span></div>
            <div className="float-chip chip-db"><span className="chip-icon chip-icon-blue"><Database size={15} /></span><span><b>Data focused</b><small>Reliable by design</small></span></div>
            <div className="hero-orbit-label">BUILD · SHIP · IMPROVE</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> Scroll to explore</a>
        </section>

        <section className="stats-strip section-wrap" aria-label="Focus areas">
          <div><strong>01</strong><span>Thoughtful API design</span></div><div><strong>02</strong><span>Data integrity first</span></div><div><strong>03</strong><span>Performance & reliability</span></div><div><strong>04</strong><span>Continuous improvement</span></div>
        </section>

        <section className="content-section section-wrap" id="about">
          <div className="section-kicker"><span>01</span> / ABOUT ME</div>
          <div className="about-grid">
            <div><h2>Good software is<br />built <span className="gradient-text">from the inside.</span></h2></div>
            <div className="about-copy"><p>I enjoy solving backend problems where reliability, clear data flows, and maintainable code matter. My work centers on building APIs, implementing authentication and business logic, integrating services, and improving database-backed applications.</p><p>I care about more than making something work — I aim to make it understandable, dependable, and easier to maintain.</p><div className="principles"><span><i /> Clear code</span><span><i /> Secure by default</span><span><i /> Practical solutions</span></div></div>
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-heading"><div><div className="section-kicker"><span>02</span> / TOOLKIT</div><h2>Tools I work with<span className="gradient-text">.</span></h2></div><p>A practical stack for building and shipping dependable backend products.</p></div>
          <div className="skills-grid">{skills.map((group) => { const Icon = group.icon; return <article className="skill-card" key={group.title}><div className="skill-card-head"><span className="skill-icon"><Icon size={19} /></span><span className="skill-index">STACK / 0{skills.indexOf(group) + 1}</span></div><h3>{group.title}</h3><div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div></article>; })}</div>
        </section>

        <section className="content-section section-wrap" id="projects">
          <div className="section-heading"><div><div className="section-kicker"><span>03</span> / SELECTED WORK</div><h2>Projects & systems<span className="gradient-text">.</span></h2></div><p>A snapshot of the kinds of products and backend challenges I work on.</p></div>
          <div className="project-list">{projects.map((project) => { const Icon = project.icon; return <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-icon"><Icon size={23} /></div><div className="project-main"><div className="project-type">{project.type}</div><h3>{project.title}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div><div className="project-arrow"><ArrowUpRight size={20} /></div></article>; })}</div>
          <p className="project-note">Project descriptions are intentionally high-level. Add public repository links or approved case studies before publishing confidential work.</p>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel"><div className="contact-glow" /><div className="section-kicker"><span>04</span> / CONTACT</div><h2>Have a problem<br />worth <span className="gradient-text">solving?</span></h2><p>I'm always open to discussing backend engineering, interesting products, and opportunities to build useful things.</p><a className="button button-primary contact-button" href="mailto:your.email@example.com">Say hello <ArrowUpRight size={17} /></a><div className="contact-caption">Replace the placeholder email before publishing.</div></div>
          <div className="contact-side"><div className="contact-detail"><span className="contact-detail-icon"><Mail size={17} /></span><div><small>EMAIL</small><a href="mailto:your.email@example.com">your.email@example.com</a></div><ExternalLink size={14} /></div><div className="contact-detail"><span className="contact-detail-icon"><Github size={17} /></span><div><small>GITHUB</small><a href="https://github.com/" target="_blank" rel="noreferrer">Add your GitHub profile</a></div><ExternalLink size={14} /></div><div className="contact-detail"><span className="contact-detail-icon"><Linkedin size={17} /></span><div><small>LINKEDIN</small><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">Add your LinkedIn profile</a></div><ExternalLink size={14} /></div></div>
        </section>
      </main>
      <footer className="footer section-wrap"><a className="brand" href="#home"><span className="brand-mark">G</span><span>gourav<span className="brand-dot">.</span>dev</span></a><span>Designed to build trust. Built to keep it simple.</span><a href="#home" className="back-top">Back to top ↑</a><div className="copyright">© {new Date().getFullYear()} Gourav Singh Lodhi</div></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);