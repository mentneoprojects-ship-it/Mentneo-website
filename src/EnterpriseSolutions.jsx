import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation Enterprise Solutions', 'Developing intelligent enterprise solutions that combine AI, automation, data intelligence, and advanced technology to solve complex business challenges.'],
  ['Aug 20, 2026', 'Enterprise AI & Automation', 'Researching AI-powered solutions for business operations, workflow automation, customer systems, analytics, and intelligent decision-making.'],
  ['Aug 15, 2026', 'Intelligent Enterprise Platforms', 'Developing scalable platforms that connect enterprise data, applications, AI systems, workflows, and business intelligence.'],
  ['Aug 10, 2026', 'Custom Enterprise Intelligence', 'Building domain-specific AI and intelligent systems tailored to enterprise requirements, business processes, knowledge, and operational needs.'],
  ['Aug 5, 2026', 'Future of Enterprise Technology', 'Exploring emerging AI, automation, data, cloud, intelligent systems, and digital technologies that transform modern enterprises.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function EnterpriseSolutionsPage() {
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
          <span className="section-label">ENTERPRISE SOLUTIONS</span>
          <h1>Enterprise Solutions</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>Enterprise Solutions</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/enterprise-solutions/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default EnterpriseSolutionsPage
