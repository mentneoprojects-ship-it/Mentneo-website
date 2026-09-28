import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation Workflow Intelligence', 'Researching intelligent systems that understand business workflows, identify patterns, make decisions, and optimize complex processes.'],
  ['Aug 20, 2026', 'Intelligent Workflow Analysis', 'Exploring AI-powered analysis of business processes, workflow dependencies, bottlenecks, inefficiencies, and opportunities for automation.'],
  ['Aug 15, 2026', 'AI-Powered Workflow Optimization', 'Developing intelligent systems that continuously analyze workflows and recommend or execute improvements for greater efficiency.'],
  ['Aug 10, 2026', 'Autonomous Workflow Orchestration', 'Researching AI systems capable of coordinating tasks, applications, agents, data, and business processes across complex workflows.'],
  ['Aug 5, 2026', 'Future of Intelligent Workflows', 'Exploring AI-driven process intelligence, autonomous operations, workflow automation, decision intelligence, and adaptive business systems.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function WorkflowIntelligencePage() {
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
          <span className="section-label">WORKFLOW INTELLIGENCE</span>
          <h1>Workflow Intelligence</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>Workflow Intelligence</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/workflow-intelligence/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default WorkflowIntelligencePage
