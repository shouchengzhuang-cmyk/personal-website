import './App.css'

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

const projects = [
  {
    title: 'Personal Website',
    description: '我的个人网站，用于展示个人介绍、技能、项目和联系方式。',
    stack: 'React / Vite / CSS / Vercel',
    status: '已上线',
    tag: 'Portfolio',
  },
  {
    title: 'Prompt 管理器',
    description: '用于整理我常用的 AI 写作提示词，让创作和学习流程更清晰。',
    stack: 'AI Tools / Prompt Writing',
    status: '规划中',
    tag: 'AI Tools',
  },
  {
    title: 'AI 创作实验',
    description: '探索 AI 辅助写作、图像生成和网页开发，把想法快速做成作品。',
    stack: 'Writing / Image Generation / Web Development',
    status: '持续实验',
    tag: 'Experiment',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Vite',
  'Tailwind CSS',
  'Git / GitHub',
  'Vercel',
  'AI-assisted development',
]

function App() {
  return (
    <main className="site-shell">
      <nav className="navbar" aria-label="Primary navigation">
        <a className="brand" href="#home" aria-label="Go to home">
          SCZ
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
          <h1>你好，我是首承壮。</h1>
          <p className="hero-role">用 AI 和代码，把想法做成可以访问和持续迭代的小项目。</p>
          <p className="hero-intro">
            我是首承壮，一名正在学习前端开发、AI 工具使用和个人表达的大学生。我喜欢用
            AI 和代码把想法做成可以访问、展示和持续迭代的小项目，也用这个网站记录学习、项目和作品集积累。
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

        <div className="hero-panel" aria-label="个人项目工作台插画">
          <div className="workbench-header">
            <span className="panel-label">个人项目工作台</span>
            <div className="window-dots" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="code-window">
            <div className="code-line short"></div>
            <div className="code-line"></div>
            <div className="code-line medium"></div>
            <p>build idea with AI + React</p>
          </div>

          <div className="prompt-card">
            <span>Prompt</span>
            <p>把学习记录整理成一个清爽的个人网站首页。</p>
          </div>

          <div className="mini-project-card">
            <span>Project</span>
            <strong>Personal Website</strong>
            <small>已上线 · 持续迭代</small>
          </div>

          <div className="tool-tags" aria-label="使用中的工具">
            <span>React</span>
            <span>AI</span>
            <span>Vite</span>
            <span>Vercel</span>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div>
          <p className="section-kicker">About</p>
          <h2>在学习中动手，把想法一点点做出来。</h2>
        </div>
        <p>
          我是一名大学生，正在学习前端开发，也对 AI 工具、个人网站、写作和项目实践感兴趣。我希望通过持续完成小项目来积累作品集，把学习过程变成可以展示、复盘和继续迭代的作品。
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
              <div className="project-meta">
                <small>技术栈：{project.stack}</small>
                <small>项目状态：{project.status}</small>
              </div>
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
          <a href="mailto:shouchengzhuang@gmail.com">shouchengzhuang@gmail.com</a>
          <a href="https://github.com/shouchengzhuang-cmyk" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
