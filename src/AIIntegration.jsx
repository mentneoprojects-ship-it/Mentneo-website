import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation AI Integration', 'Researching seamless integration of AI models, intelligent agents, automation systems, enterprise applications, data platforms, and existing business technologies.'],
  ['Aug 20, 2026', 'AI & Enterprise System Integration', 'Exploring ways to integrate AI capabilities into existing enterprise applications, CRM, ERP, websites, internal platforms, and business systems.'],
  ['Aug 15, 2026', 'Intelligent API & AI Integration', 'Developing reliable integration architectures that connect AI models, APIs, databases, applications, agents, and automated workflows.'],
  ['Aug 10, 2026', 'AI Integration & Workflow Automation', 'Researching how integrated AI systems can understand workflows, communicate between applications, trigger actions, and automate end-to-end processes.'],
  ['Aug 5, 2026', 'Future of Connected AI Systems', 'Exploring interconnected AI ecosystems where models, agents, data, applications, automation, and enterprise systems work together intelligently.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function AIIntegrationPage() {
  useEffect(() => {
    const solutionButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Solutions'))
    solutionButton?.classList.add('active')
    return () => solutionButton?.classList.remove('active')
  }, [])

  return (
    <main className="rd-lab-page">
      <InternalNavigation />
      <section className="rd-lab-shell">
        <nav className="rd-lab-categories" aria-label="Publication categories">
          {['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}
        </nav>
        <div className="rd-lab-heading">
          <span className="section-label">AI INTEGRATION</span>
          <h1>AI Integration</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>AI Integration</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/ai-integration/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AIIntegrationPage
