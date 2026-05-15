import './App.css'

const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

const projects = [
  {
    title: 'Prompt Vault',
    description: '一个用于整理常用 AI 提示词的工具想法，帮助我沉淀写作、学习和项目实践中的 prompt。',
    tags: ['AI Tools', 'Prompt Writing'],
    status: '开发中',
  },
  {
    title: 'Personal Website',
    description: '当前这个个人主页，用来展示我的介绍、技能、项目和联系方式，也记录自己的学习过程。',
    tags: ['React', 'Vite', 'Vercel'],
    status: '已上线',
  },
  {
    title: 'Learning Experiments',
    description: '课程实验、前端练习和 AI 辅助创作记录，把零散学习逐步整理成可复盘的小作品。',
    tags: ['HTML', 'CSS', 'JavaScript'],
    status: '学习中',
  },
  {
    title: '今天吃什么',
    description: '一个帮我快速决定吃什么的移动端小工具。按时间自动切换早餐、正餐和夜宵，用上划/下划刷推荐。',
    tags: ['React', 'Vite', 'Mobile-first', 'LocalStorage'],
    status: '已上线',
    liveUrl: 'https://what-to-eat-six.vercel.app/',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Vite',
  'Git / GitHub',
  'Vercel',
  'AI-assisted coding',
  'Personal knowledge management',
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
          <p className="hero-role">
            我在学习前端开发、AI 工具和个人知识管理，也在用项目记录自己的成长。
          </p>
          <p className="hero-intro">
            我喜欢把想法做成可以访问、展示和持续迭代的小工具或网页。这个网站是我的个人主页，也会慢慢成为我的作品集和学习记录。
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
            <div>
              <span className="panel-label">个人项目工作台</span>
              <strong>Personal Site</strong>
            </div>
            <div className="window-dots" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="workbench-grid">
            <div className="code-window">
              <div className="code-window-top">
                <span>React / Vite</span>
                <small>live</small>
              </div>
              <div className="code-line short"></div>
              <div className="code-line"></div>
              <div className="code-line medium"></div>
              <p>build ideas into small, usable pages</p>
            </div>

            <div className="mini-project-card">
              <span>Notes / Projects</span>
              <strong>学习记录</strong>
              <small>前端练习、AI 工具、课程实验</small>
            </div>
          </div>

          <div className="prompt-card">
            <span>AI-assisted coding</span>
            <p>把灵感、笔记和项目想法整理成可以持续迭代的个人主页。</p>
          </div>

          <div className="tool-tags" aria-label="使用中的工具">
            <span>React</span>
            <span>Vite</span>
            <span>AI-assisted coding</span>
            <span>Notes</span>
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div>
          <p className="section-kicker">About</p>
          <h2>从小项目开始，认真记录自己的学习轨迹。</h2>
        </div>
        <p>
          我是首承壮，一名大学生，正在学习前端开发和 AI 辅助创作。相比只停留在想法里，我更喜欢把一个小需求做成能打开、能展示、能继续修改的网页或工具。这个网站会作为我的个人作品集和成长记录，持续收纳我做过的项目、学到的技能和新的尝试。
        </p>
      </section>

      <section className="section" id="projects">
        <div className="section-heading">
          <p className="section-kicker">Projects</p>
          <h2>还在成长中的项目和学习实验。</h2>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span>{project.status}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <small key={tag}>{tag}</small>
                ))}
              </div>
              {project.liveUrl && (
                <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                  在线预览
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="section skills-section" id="skills">
        <div className="section-heading">
          <p className="section-kicker">Skills</p>
          <h2>我目前正在练习和使用的工具。</h2>
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
          <h2>如果你想交流项目、学习或 AI 工具，可以通过邮箱联系我。</h2>
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
