import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation AI Automation', 'Exploring intelligent automation systems that use AI to automate complex workflows, decisions, business processes, and repetitive tasks.'],
  ['Aug 20, 2026', 'Intelligent Workflow Automation', 'Researching AI-powered workflows that can understand processes, make decisions, execute tasks, and continuously improve operations.'],
  ['Aug 15, 2026', 'Autonomous Business Automation', 'Developing AI systems capable of automating customer support, sales, operations, finance, HR, analytics, and other business processes.'],
  ['Aug 10, 2026', 'AI-Powered Process Intelligence', 'Exploring intelligent systems that analyze business processes, identify inefficiencies, recommend improvements, and automate execution.'],
  ['Aug 5, 2026', 'Autonomous Enterprise Systems', 'Researching AI-driven enterprise automation, intelligent agents, workflow orchestration, decision systems, and scalable automation infrastructure.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function AIAutomationPage() {
  return (
    <main className="rd-lab-page">
      <InternalNavigation />
      <section className="rd-lab-shell">
        <nav className="rd-lab-categories" aria-label="Publication categories">
          {['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}
        </nav>
        <div className="rd-lab-heading">
          <span className="section-label">AI AUTOMATION</span>
          <h1>AI Automation</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>AI Automation</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/ai-automation/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AIAutomationPage
