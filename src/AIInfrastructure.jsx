import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation AI Infrastructure', 'Researching scalable infrastructure for advanced AI systems, models, agents, data platforms, computing, and intelligent applications.'],
  ['Aug 20, 2026', 'AI Computing & Accelerated Systems', 'Exploring high-performance computing, GPU infrastructure, AI accelerators, distributed computing, and efficient model execution.'],
  ['Aug 15, 2026', 'Scalable AI Platforms', 'Developing reliable and scalable platforms for deploying AI models, agents, automation systems, and enterprise intelligence.'],
  ['Aug 10, 2026', 'AI Data Infrastructure', 'Researching data pipelines, vector databases, knowledge systems, storage, retrieval infrastructure, and data processing for AI applications.'],
  ['Aug 5, 2026', 'Future AI Infrastructure', 'Exploring emerging infrastructure technologies for large-scale AI, autonomous systems, intelligent applications, and next-generation computing.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function AIInfrastructurePage() {
  return (
    <main className="rd-lab-page">
      <InternalNavigation />
      <section className="rd-lab-shell">
        <nav className="rd-lab-categories" aria-label="Publication categories">
          {['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}
        </nav>
        <div className="rd-lab-heading">
          <span className="section-label">AI INFRASTRUCTURE</span>
          <h1>AI Infrastructure</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>AI Infrastructure</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/ai-infrastructure/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AIInfrastructurePage
