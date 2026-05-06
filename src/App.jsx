import './App.css'

const navItems = ['Home', 'About', 'Projects', 'Contact']

const projects = [
  {
    title: '个人网站',
    description: '展示我的介绍、项目和联系方式，作为我在网上的个人主页。',
    tag: 'Portfolio',
  },
  {
    title: 'Prompt 管理器',
    description: '用于整理我常用的 AI 写作提示词，让创作和学习流程更清晰。',
    tag: 'AI Tools',
  },
  {
    title: 'AI 创作实验',
    description: '探索 AI 辅助写作、图像生成和网页开发，把想法快速做成作品。',
    tag: 'Experiment',
  },
]

const skills = ['React', 'JavaScript', 'Vite', 'AI Tools', 'Prompt Writing']

function App() {
  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Go to home">
          CZ
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
          <p className="eyebrow">大学生 / AI 工具探索者</p>
          <h1>你好，我是承壮。</h1>
          <p className="hero-role">用 AI 和代码，把想法变成真正能打开的网页。</p>
          <p className="hero-intro">
            我正在学习用 AI 和代码做自己的项目，把想法变成真正能打开、能使用的网页。
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projects">
              查看项目
            </a>
            <a className="button secondary" href="#contact">
              联系我
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Personal website highlight">
          <span className="panel-label">正在探索</span>
          <strong>React 页面、AI 工具流程，以及用项目驱动学习的方法。</strong>
          <div className="panel-stats">
            <span>03 个项目</span>
            <span>05 项技能</span>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div>
          <p className="section-kicker">About</p>
          <h2>在学习中动手，把想法一点点做出来。</h2>
        </div>
        <p>
          我是一名大学生，也是一名 AI 工具探索者。现在我正在学习用 React、Vite 和
          JavaScript 搭建网页，同时尝试把 AI 用在写作、创意整理和项目开发里。
        </p>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
          <h2>我正在整理和尝试的小项目。</h2>
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
          <h2>我目前正在练习的技术和工具。</h2>
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
          <h2>欢迎联系我。</h2>
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
