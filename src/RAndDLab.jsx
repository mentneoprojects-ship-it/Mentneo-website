import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Advanced Research & Development Laboratory', 'Exploring next-generation AI, intelligent systems, advanced technologies, automation, and innovative digital solutions.'],
  ['Aug 20, 2026', 'AI Innovation & Technology Development', 'Researching and developing advanced artificial intelligence systems, machine learning technologies, intelligent automation, and future-ready solutions.'],
  ['Aug 15, 2026', 'Next-Generation Product Research', 'Developing innovative technology products through research, experimentation, testing, and continuous improvement.'],
  ['Aug 10, 2026', 'Intelligent Automation Research', 'Exploring AI-powered automation, intelligent workflows, autonomous systems, and advanced decision-making technologies.'],
  ['Aug 5, 2026', 'Future Technology & Innovation', 'Researching emerging technologies and developing innovative solutions for future digital transformation.'],
]

function RAndDLabPage() {
  return (
    <main className="rd-lab-page">
      <InternalNavigation />
      <section className="rd-lab-shell">
        <nav className="rd-lab-categories" aria-label="Publication categories">
          {['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}
        </nav>
        <div className="rd-lab-heading">
          <span className="section-label">R&amp;D LAB</span>
          <h1>Research &amp; Development Laboratory</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={date}>
              <div className="rd-lab-meta"><span>R&amp;D LAB</span><time>{date}</time></div>
              <div className="rd-lab-copy"><h2>{title}</h2><p>{description}</p></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default RAndDLabPage
