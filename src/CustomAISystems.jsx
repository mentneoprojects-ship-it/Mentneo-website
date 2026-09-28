import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation Custom AI Systems', 'Developing purpose-built AI systems designed around specific business requirements, workflows, data, processes, and intelligent automation needs.'],
  ['Aug 20, 2026', 'Domain-Specific AI Intelligence', 'Researching specialized AI systems trained and configured for specific industries, business domains, operational requirements, and knowledge environments.'],
  ['Aug 15, 2026', 'Enterprise Custom AI Platforms', 'Developing scalable AI platforms tailored for enterprise applications, internal operations, customer systems, analytics, automation, and decision-making.'],
  ['Aug 10, 2026', 'Custom AI Agents & Automation', 'Building specialized AI agents that understand business context, execute workflows, use tools, and automate complex multi-step tasks.'],
  ['Aug 5, 2026', 'Future of Custom AI', 'Exploring personalized AI architectures, private AI systems, domain intelligence, custom models, intelligent applications, and next-generation enterprise AI.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function CustomAISystemsPage() {
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
          <span className="section-label">CUSTOM AI SYSTEMS</span>
          <h1>Custom AI Systems</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>Custom AI Systems</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/custom-ai-systems/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default CustomAISystemsPage
