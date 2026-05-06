import './App.css'

const navItems = ['Home', 'About', 'Projects', 'Contact']

const projects = [
  {
    title: 'AI Study Planner',
    description: 'A small tool concept for turning weekly goals into practical study tasks.',
    tag: 'Productivity',
  },
  {
    title: 'Personal Portfolio',
    description: 'This website, built as a clean home base for projects, notes, and experiments.',
    tag: 'Frontend',
  },
  {
    title: 'Prompt Lab',
    description: 'A collection of prompt patterns for learning, writing, and building with AI tools.',
    tag: 'AI',
  },
]

const skills = ['React', 'JavaScript', 'AI Tools', 'Prompt Writing']

function App() {
  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Go to home">
          SC
        </a>
        <div className="nav-links">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      <section className="hero-section" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Student Developer</p>
          <h1>Hi, I&apos;m Shichen.</h1>
          <p className="hero-role">Building personal projects with AI, code, and curiosity.</p>
          <p className="hero-intro">
            I am learning to turn ideas into useful digital products, one small project at a
            time.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              View Projects
            </a>
            <a className="button secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Personal website highlight">
          <span className="panel-label">Now exploring</span>
          <strong>React interfaces, AI workflows, and better ways to learn by building.</strong>
          <div className="panel-stats">
            <span>03 Projects</span>
            <span>04 Skills</span>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div>
          <p className="section-kicker">About</p>
          <h2>Learning in public, building with intention.</h2>
        </div>
        <p>
          I am a university student exploring how AI tools and code can help me create my own
          projects. This site is a simple place to show what I am learning, what I am building,
          and how my ideas are becoming real products.
        </p>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
          <h2>Small builds with real practice behind them.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span>{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2>Tools I am practicing right now.</h2>
        </div>
        <div className="skill-list">
          {skills.map((skill) => (
            <span className="skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div>
          <p className="section-kicker">Contact</p>
          <h2>Let&apos;s connect.</h2>
        </div>
        <div className="contact-links">
          <a href="mailto:your.email@example.com">your.email@example.com</a>
          <a href="https://github.com/your-username" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
