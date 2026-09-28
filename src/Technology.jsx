import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'Next-Generation Technology', description: 'Exploring emerging technologies, advanced computing systems, modern software platforms, and new digital capabilities for future applications.', status: 'Research', slug: 'next-generation-technology' },
  { date: 'Aug 20, 2026', title: 'Artificial Intelligence Technologies', description: 'Researching advanced AI models, intelligent agents, multimodal systems, machine learning, reasoning, and emerging AI capabilities.', status: 'Experiment', slug: 'artificial-intelligence-technologies' },
  { date: 'Aug 15, 2026', title: 'Advanced Computing Systems', description: 'Exploring high-performance computing, distributed systems, accelerated computing, edge computing, and new computational architectures.', status: 'Prototype', slug: 'advanced-computing-systems' },
  { date: 'Aug 10, 2026', title: 'Emerging Digital Technologies', description: 'Researching new software technologies, cloud platforms, automation systems, data technologies, connected systems, and digital infrastructure.', status: 'Research', slug: 'emerging-digital-technologies' },
  { date: 'Aug 5, 2026', title: 'Technology Innovation Lab', description: 'Experimenting with new tools, frameworks, architectures, platforms, and technical concepts to discover practical opportunities for innovation.', status: 'Development', slug: 'technology-innovation-lab' },
  { date: 'Aug 1, 2026', title: 'Future of Technology', description: 'Exploring autonomous systems, advanced AI, intelligent applications, next-generation computing, digital ecosystems, and technologies that could shape future industries.', status: 'Development', slug: 'future-of-technology' },
]

function ResearchStatus({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header"><span className="section-label">TECHNOLOGY</span><h1>Innovation, Systems<br /><em>&amp; Possibilities.</em></h1><p>Exploring emerging technologies, advanced computing, software platforms, digital systems, and new technical possibilities shaping the future.</p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item"><div className="software-research-meta"><span>Technology</span><time>{entry.date}</time></div><div className="software-research-copy"><a href={`/technology/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><ResearchStatus status={entry.status} /></a></div></article> }
function ResearchList() { return <div className="software-research-list" id="publications">{researchEntries.map((entry) => <ResearchItem entry={entry} key={entry.slug} />)}</div> }
function TechnologyDetail({ entry }) { return <section className="software-detail"><span className="section-label">TECHNOLOGY / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><ResearchStatus status={entry.status} /><a className="button button-ghost" href="/technology">Back to Technology <span>↗</span></a></section> }

function TechnologyPage({ path = '/technology' }) {
  useEffect(() => {
    const companyButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Company'))
    companyButton?.classList.add('active')
    return () => companyButton?.classList.remove('active')
  }, [])
  const entry = researchEntries.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Publication categories">{['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <TechnologyDetail entry={entry} /> : <ResearchList />}</section></main>
}

export default TechnologyPage
