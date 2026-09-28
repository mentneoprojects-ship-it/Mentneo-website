import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation Software Systems', 'Researching advanced software architectures, intelligent applications, scalable platforms, and high-performance systems for next-generation digital environments.'],
  ['Aug 20, 2026', 'Intelligent Software Architecture', 'Exploring modular, scalable, secure, and intelligent software architectures designed to support AI, automation, data, and enterprise applications.'],
  ['Aug 15, 2026', 'AI-Powered Software Systems', 'Developing software platforms that integrate AI models, intelligent agents, automation, analytics, and real-time decision-making.'],
  ['Aug 10, 2026', 'Scalable Distributed Systems', 'Researching reliable distributed software systems capable of supporting large-scale applications, services, data processing, and intelligent workloads.'],
  ['Aug 5, 2026', 'Future Software Engineering', 'Exploring AI-assisted development, autonomous software systems, intelligent applications, modern architectures, and next-generation software engineering.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function SoftwareSystemsPage() {
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
          <span className="section-label">SOFTWARE SYSTEMS</span>
          <h1>Software Systems</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>Software Systems</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/software-systems/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default SoftwareSystemsPage
