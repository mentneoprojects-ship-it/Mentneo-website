import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation Intelligent Data Systems', 'Developing intelligent data systems that can collect, process, understand, analyze, and transform complex data into actionable intelligence.'],
  ['Aug 20, 2026', 'AI-Powered Data Intelligence', 'Researching intelligent systems that combine AI, machine learning, analytics, and data processing to generate meaningful insights and decisions.'],
  ['Aug 15, 2026', 'Real-Time Intelligent Data Processing', 'Exploring systems capable of processing live data, detecting patterns, generating insights, and supporting real-time decision-making.'],
  ['Aug 10, 2026', 'Intelligent Knowledge Systems', 'Developing data and knowledge systems that organize information, understand context, connect related knowledge, and make information easily accessible.'],
  ['Aug 5, 2026', 'Future Intelligent Data Architecture', 'Researching scalable data architectures, AI-ready infrastructure, knowledge systems, analytics platforms, and next-generation intelligent data technologies.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function IntelligentDataSystemsPage() {
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
          <span className="section-label">INTELLIGENT DATA SYSTEMS</span>
          <h1>Intelligent Data Systems</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>Intelligent Data Systems</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/intelligent-data-systems/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default IntelligentDataSystemsPage
