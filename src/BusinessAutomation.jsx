import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation Business Automation', 'Exploring intelligent automation systems that transform business processes, workflows, operations, and repetitive tasks using AI and advanced technologies.'],
  ['Aug 20, 2026', 'Intelligent Workflow Automation', 'Researching AI-powered workflows that understand business processes, make decisions, execute tasks, and continuously improve operations.'],
  ['Aug 15, 2026', 'AI-Powered Business Operations', 'Developing intelligent systems for automating sales, customer support, finance, HR, operations, analytics, and other business functions.'],
  ['Aug 10, 2026', 'Autonomous Business Processes', 'Exploring autonomous systems that can coordinate workflows, execute multi-step tasks, communicate between systems, and reduce manual operations.'],
  ['Aug 5, 2026', 'Future of Intelligent Business', 'Researching emerging AI technologies that enable businesses to become more intelligent, automated, efficient, scalable, and data-driven.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function BusinessAutomationPage() {
  return (
    <main className="rd-lab-page">
      <InternalNavigation />
      <section className="rd-lab-shell">
        <nav className="rd-lab-categories" aria-label="Publication categories">
          {['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}
        </nav>
        <div className="rd-lab-heading">
          <span className="section-label">BUSINESS AUTOMATION</span>
          <h1>Business Automation</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>Business Automation</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/business-automation/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default BusinessAutomationPage
