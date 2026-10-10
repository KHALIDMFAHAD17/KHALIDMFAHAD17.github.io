import { useEffect, useState } from "react";
import {
  profile,
  skills,
  projects,
  labs,
  certifications,
  education,
} from "./data.js";

const NAV = [
  ["about", "About"],
  ["skills", "Skills"],
  ["projects", "Projects"],
  ["labs", "Labs"],
  ["certs", "Certifications"],
  ["education", "Education"],
  ["contact", "Contact"],
];

function useTypewriter(words, speed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? speed / 2 : speed;
    if (!deleting && text === word) delay = pause;

    const t = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setIndex((i) => i + 1);
      } else {
        setText(
          deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)
        );
      }
    }, delay);
    return () => clearTimeout(t);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

function Reveal({ children, className = "" }) {
  const [ref, setRef] = useState(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    if (!ref) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(ref);
    return () => obs.disconnect();
  }, [ref]);
  return (
    <div ref={setRef} className={`reveal ${shown ? "in" : ""} ${className}`}>
      {children}
    </div>
  );
}

function SectionTitle({ index, children }) {
  return (
    <h2 className="section-title">
      <span className="mono accent">{index}</span> {children}
    </h2>
  );
}

function Header({ active }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a className="logo mono" href="#top" aria-label="Back to top">
        <span className="accent">&gt;</span> kmf<span className="blink">_</span>
      </a>
      <button
        className="menu-btn"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav className={`nav ${open ? "open" : ""}`}>
        {NAV.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={active === id ? "active" : ""}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  const role = useTypewriter(profile.roles);
  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <p className="mono accent hero-kicker">$ whoami</p>
        <h1>{profile.name}</h1>
        <p className="hero-role mono">
          {role}
          <span className="blink">|</span>
        </p>
        <p className="hero-sub">
          MCA graduate (2025) in Cybersecurity and Ethical Hacking, looking for an
          entry-level role in VAPT, Application Security or Security Operations.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            View projects
          </a>
          <a className="btn" href="#contact">
            Get in touch
          </a>
          <a className="btn ghost" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
        <ul className="hero-meta mono">
          <li>{profile.location}</li>
          <li>Open to entry-level roles</li>
        </ul>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionTitle index="01.">About me</SectionTitle>
        <Reveal>
          <div className="about-grid">
            <p className="about-text">{profile.summary}</p>
            <div className="terminal" aria-hidden="true">
              <div className="terminal-bar">
                <i /> <i /> <i />
              </div>
              <pre className="mono">
{`$ cat focus.txt
> VAPT
> Application Security
> Security Operations (SOC)

$ cat labs.txt
> DVWA: SQLi, XSS, CMDi, LFI
> OverTheWire Bandit (Linux)

$ cat built.txt
> Blockchain identity system`}
              </pre>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <SectionTitle index="02.">Technical skills</SectionTitle>
        <div className="skills-grid">
          {skills.map((group) => (
            <Reveal key={group.title} className="card">
              <h3>{group.title}</h3>
              <ul className="chips">
                {group.items.map((item) => (
                  <li key={item} className="chip mono">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle index="03.">Projects</SectionTitle>
        <div className="projects-grid">
          {projects.map((p) => (
            <Reveal key={p.name} className={`card project ${p.featured ? "featured" : ""}`}>
              {p.featured && <span className="badge mono">Featured</span>}
              <h3>{p.name}</h3>
              <ul className="tags mono">
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <ul className="points">
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Labs() {
  return (
    <section id="labs" className="section alt">
      <div className="container">
        <SectionTitle index="04.">Hands-on cybersecurity labs</SectionTitle>
        <div className="labs-grid">
          {labs.map((l) => (
            <Reveal key={l.name} className="card lab">
              <p className="mono accent lab-focus">{l.focus}</p>
              <h3>{l.name}</h3>
              <ul className="points">
                {l.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certs() {
  return (
    <section id="certs" className="section">
      <div className="container">
        <SectionTitle index="05.">Certifications</SectionTitle>
        <div className="certs-grid">
          {certifications.map((c) => (
            <Reveal key={c.name} className="card cert">
              <h3>{c.name}</h3>
              <p className="mono muted">{c.issuer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="section alt">
      <div className="container">
        <SectionTitle index="06.">Education</SectionTitle>
        <Reveal className="card edu">
          <p className="mono accent">{education.year}</p>
          <h3>{education.degree}</h3>
          <p className="edu-spec">{education.specialization}</p>
          <p className="muted">{education.school}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact">
        <SectionTitle index="07.">Get in touch</SectionTitle>
        <Reveal>
          <p className="contact-text">
            I'm looking for an entry-level role in VAPT, Application Security or
            Security Operations. If you have an opening or just want to talk
            security, my inbox is open.
          </p>
          <a className="btn primary big" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <ul className="contact-links mono">
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </li>
            <li>{profile.location}</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export default function App() {
  const active = useActiveSection(["about", "skills", "projects", "labs", "certs", "education", "contact"]);
  return (
    <>
      <Header active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Labs />
        <Certs />
        <Education />
        <Contact />
      </main>
      <footer className="footer mono">
        <p>
          &copy; {new Date().getFullYear()} {profile.name}. Built with React.
        </p>
      </footer>
    </>
  );
}
