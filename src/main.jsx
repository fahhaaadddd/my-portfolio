import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const github = 'https://github.com/fahhaaadddd';
const repositories = 'https://github.com/fahhaaadddd?tab=repositories';
const linkedin = 'https://www.linkedin.com/in/fahad-badarudheen-2073063a2';
const projects = [
  { title: 'Investment & Business Idea Sharing Platform', description: 'An online platform where entrepreneurs share business ideas with potential investors. Users can post proposals, explore investment opportunities and connect through discussions and communication features.' },
  { title: 'Product Management System', description: 'A product management app with product insertion, retrieval and database integration, wrapped in a clean, user-friendly interface for managing data.' },
];
const skills = [['☁️', 'Cloud Computing'], ['🔐', 'Cybersecurity'], ['🐧', 'Linux'], ['🌐', 'Networking'], ['💻', 'Flutter'], ['🐘', 'PHP'], ['🗄️', 'MySQL'], ['⚙️', 'Git & GitHub']];

function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('theme') || 'system'; } catch { return 'system'; }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'system') root.removeAttribute('data-theme');
    else root.setAttribute('data-theme', theme);
    try { localStorage.setItem('theme', theme); } catch { /* Storage may be unavailable. */ }
  }, [theme]);

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('in'));
      return;
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    }), { threshold: 0.12 });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setTheme(isDark ? 'light' : 'dark');
  };

  return <>
    <nav aria-label="Main navigation"><div className="wrap nav-row">
      <a className="logo" href="#top">My Portfolio</a>
      <ul>
        {['About', 'Skills', 'Projects', 'Education', 'Certifications', 'Contact'].map((item) => <li key={item}><a href={`#${item.toLowerCase()}`}>{item}</a></li>)}
      </ul>
      <button id="theme" onClick={toggleTheme} aria-label="Toggle theme" title="Toggle light and dark theme">{theme === 'dark' ? '☀️' : '🌙'}</button>
    </div></nav>

    <main id="top">
      <div className="wrap hero">
        <div>
          <div className="tag">Hello, I'm</div>
          <h1><span>Fahad Bin Badarudheen</span></h1>
          <p className="role">MCA &nbsp;|&nbsp; Cloud Computing &nbsp;|&nbsp; Cybersecurity &nbsp;|&nbsp; Software Development</p>
          <div className="btns">
            <a className="btn primary" href="#projects">View Projects</a>
            <a className="btn" href={github} target="_blank" rel="noreferrer">GitHub</a>
            <a className="btn" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="photo"><img alt="Portrait of Fahad Bin Badarudheen" src={`${import.meta.env.BASE_URL}portrait.jpg`} /></div>
      </div>

      <section id="about" className="reveal"><div className="wrap about">
        <h2>About Me</h2>
        <p>I'm an MCA student with a Bachelor of Computer Applications background from Jamia Hamdard, driven by a strong interest in how modern systems are built, deployed and protected.</p>
        <p>I'm building a career at the intersection of cloud computing and cybersecurity, backed by hands-on software development with Flutter, PHP and MySQL.</p>
        <p>I'm a quick learner and team player who enjoys solving problems, and I'm always looking for opportunities to grow and contribute.</p>
      </div></section>

      <section id="skills" className="reveal"><div className="wrap">
        <h2>Skills</h2><div className="grid">{skills.map(([icon, name]) => <div className="card skill" key={name}><i aria-hidden="true">{icon}</i>{name}</div>)}</div>
      </div></section>

      <section id="projects" className="reveal"><div className="wrap">
        <h2>Projects</h2><div className="projects">{projects.map((project, index) => <article className="card proj" key={project.title}>
          <div className="num">{String(index + 1).padStart(2, '0')}</div><h3>{project.title}</h3><p>{project.description}</p>
          <div className="chips">{['Flutter', 'PHP', 'MySQL'].map((tech) => <span key={tech}>{tech}</span>)}</div>
          <div className="btns"><a className="btn primary" href={repositories} target="_blank" rel="noreferrer">Browse Repositories</a><a className="btn" href={github} target="_blank" rel="noreferrer">GitHub Profile</a></div>
        </article>)}</div>
      </div></section>

      <section id="education" className="reveal"><div className="wrap">
        <h2>Education</h2><div className="timeline">
          <div className="card"><h3>MCA — Cloud Computing &amp; Cybersecurity</h3><small>Pursuing</small></div>
          <div className="card"><h3>BCA — Bachelor of Computer Applications</h3><small>Jamia Hamdard (Deemed to be University), New Delhi · 2023–2026</small></div>
        </div>
      </div></section>

      <section id="certifications" className="reveal"><div className="wrap"><h2>Certifications</h2><div className="card cert">Certificates coming soon.</div></div></section>
      <section id="learning" className="reveal"><div className="wrap"><h2>Currently Learning</h2><div className="learn">{['Cloud Computing', 'Cybersecurity', 'Linux', 'Networking', 'Cloud Security'].map((item) => <span key={item}>{item}</span>)}</div></div></section>
      <section id="links" className="reveal"><div className="wrap"><div className="links">
        <a className="card" href={github} target="_blank" rel="noreferrer"><h3>GitHub</h3><small>See my code and repositories →</small></a>
        <a className="card" href={linkedin} target="_blank" rel="noreferrer"><h3>LinkedIn</h3><small>Let's connect professionally →</small></a>
      </div></div></section>
      <section id="contact" className="reveal"><div className="wrap"><h2>Contact</h2><div className="contact-list">
        <a className="btn primary" href="mailto:fahadbinbadarudheen@gmail.com">✉️ Email</a>
        <a className="btn" href={linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        <a className="btn" href={github} target="_blank" rel="noreferrer">GitHub</a>
      </div></div></section>
    </main>
    <footer>© {new Date().getFullYear()} Fahad Bin Badarudheen</footer>
  </>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
