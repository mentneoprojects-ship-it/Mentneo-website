import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation AI Systems', 'Researching advanced artificial intelligence systems that combine reasoning, learning, perception, decision-making, automation, and intelligent interaction.'],
  ['Aug 20, 2026', 'Intelligent Autonomous Systems', 'Exploring AI systems capable of understanding objectives, planning actions, using tools, adapting to environments, and completing complex tasks autonomously.'],
  ['Aug 15, 2026', 'Multimodal AI Systems', 'Researching intelligent systems that can understand and process text, images, audio, video, documents, and other forms of information.'],
  ['Aug 10, 2026', 'Adaptive & Learning Systems', 'Developing AI systems that continuously learn from data, feedback, context, and changing environments to improve their capabilities.'],
  ['Aug 5, 2026', 'Future Intelligent Systems', 'Exploring emerging AI architectures, intelligent agents, autonomous systems, advanced reasoning, and next-generation machine intelligence.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function AISystemsPage() {
  useEffect(() => {
    const capabilitiesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Capabilities'))
    capabilitiesButton?.classList.add('active')
    return () => capabilitiesButton?.classList.remove('active')
  }, [])

  return (
    <main className="rd-lab-page">
      <InternalNavigation />
      <section className="rd-lab-shell">
        <nav className="rd-lab-categories" aria-label="Publication categories">
          {['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}
        </nav>
        <div className="rd-lab-heading">
          <span className="section-label">AI SYSTEMS</span>
          <h1>AI Systems</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>AI Systems</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/ai-systems/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AISystemsPage
