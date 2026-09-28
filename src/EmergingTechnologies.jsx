import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation Artificial Intelligence', 'Exploring advanced artificial intelligence, intelligent systems, autonomous technologies, and next-generation computing capabilities.'],
  ['Aug 20, 2026', 'Autonomous Intelligent Systems', 'Researching autonomous systems capable of reasoning, learning, adapting, and performing complex real-world tasks.'],
  ['Aug 15, 2026', 'Advanced Robotics & Automation', 'Exploring robotics, intelligent automation, machine intelligence, and technologies that transform modern industries.'],
  ['Aug 10, 2026', 'Next-Generation Computing', 'Researching emerging computing architectures, advanced processors, intelligent infrastructure, and high-performance technologies.'],
  ['Aug 5, 2026', 'Future Digital Technologies', 'Exploring emerging technologies that can transform businesses, products, services, and digital experiences.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function EmergingTechnologiesPage() {
  return (
    <main className="rd-lab-page">
      <InternalNavigation />
      <section className="rd-lab-shell">
        <nav className="rd-lab-categories" aria-label="Publication categories">
          {['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}
        </nav>
        <div className="rd-lab-heading">
          <span className="section-label">EMERGING TECHNOLOGIES</span>
          <h1>Emerging Technologies</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>Emerging Technologies</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/emerging-technologies/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default EmergingTechnologiesPage
