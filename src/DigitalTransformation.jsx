import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation Digital Transformation', 'Exploring AI, automation, intelligent systems, cloud technologies, data platforms, and modern software solutions that transform businesses and digital operations.'],
  ['Aug 20, 2026', 'AI-Powered Digital Transformation', 'Researching how artificial intelligence can modernize business processes, customer experiences, operations, analytics, and decision-making.'],
  ['Aug 15, 2026', 'Intelligent Enterprise Transformation', 'Developing connected enterprise systems that combine AI, data, automation, software, and intelligent workflows.'],
  ['Aug 10, 2026', 'Digital Process Innovation', 'Exploring modern digital processes, intelligent automation, cloud platforms, software systems, and technology-driven operational improvements.'],
  ['Aug 5, 2026', 'Future of Digital Transformation', 'Researching emerging technologies and intelligent solutions that enable organizations to become more automated, connected, scalable, and data-driven.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function DigitalTransformationPage() {
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
          <span className="section-label">DIGITAL TRANSFORMATION</span>
          <h1>Digital Transformation</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>Digital Transformation</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/digital-transformation/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default DigitalTransformationPage
