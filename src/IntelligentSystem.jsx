import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation Intelligent Systems', 'Exploring advanced intelligent systems capable of reasoning, learning, understanding context, making decisions, and adapting to complex environments.'],
  ['Aug 20, 2026', 'Adaptive Intelligence & Learning', 'Researching intelligent systems that continuously learn from data, feedback, and changing environments to improve their performance.'],
  ['Aug 15, 2026', 'Autonomous Intelligent Systems', 'Developing systems capable of planning, reasoning, decision-making, problem solving, and autonomous task execution.'],
  ['Aug 10, 2026', 'Intelligent Automation', 'Researching AI-powered automation systems that can understand workflows, make decisions, coordinate tasks, and improve operational efficiency.'],
  ['Aug 5, 2026', 'Human-Centered Intelligent Systems', 'Exploring intelligent technologies designed to understand human needs, communicate naturally, assist users, and enhance decision-making.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function IntelligentSystemPage() {
  return (
    <main className="rd-lab-page">
      <InternalNavigation />
      <section className="rd-lab-shell">
        <nav className="rd-lab-categories" aria-label="Publication categories">
          {['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}
        </nav>
        <div className="rd-lab-heading">
          <span className="section-label">INTELLIGENT SYSTEM</span>
          <h1>Intelligent System</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>Intelligent System</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/intelligent-system/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default IntelligentSystemPage
