import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation Computer Vision', 'Researching advanced computer vision systems capable of understanding images, video, objects, environments, and complex visual information.'],
  ['Aug 20, 2026', 'Visual Intelligence & Understanding', 'Exploring advanced image understanding, object recognition, visual reasoning, scene understanding, and intelligent visual analysis.'],
  ['Aug 15, 2026', 'AI Vision Systems', 'Developing intelligent vision systems for real-time analysis, detection, classification, tracking, and automated decision-making.'],
  ['Aug 10, 2026', 'Multimodal Vision Intelligence', 'Researching AI systems that combine visual information with language, audio, documents, and other data to understand complex real-world contexts.'],
  ['Aug 5, 2026', 'Future of Visual AI', 'Exploring emerging computer vision technologies, visual reasoning, autonomous perception, 3D understanding, and intelligent visual systems.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function ComputerVisionPage() {
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
          <span className="section-label">COMPUTER VISION</span>
          <h1>Computer Vision</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>Computer Vision</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/computer-vision/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default ComputerVisionPage
