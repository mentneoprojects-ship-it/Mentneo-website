import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'Next-Generation API Architecture', description: 'Researching scalable API architectures designed for high-performance applications, AI systems, enterprise platforms, automation, and distributed digital services.', status: 'Research', slug: 'next-generation-api-architecture' },
  { date: 'Aug 20, 2026', title: 'Intelligent API Systems', description: 'Developing APIs that connect AI models, intelligent agents, databases, applications, automation workflows, and enterprise services.', status: 'Experiment', slug: 'intelligent-api-systems' },
  { date: 'Aug 15, 2026', title: 'High-Performance API Engineering', description: 'Researching low-latency, reliable, secure, and scalable API systems capable of supporting high-volume applications and real-time services.', status: 'Prototype', slug: 'high-performance-api-engineering' },
  { date: 'Aug 10, 2026', title: 'AI & API Integration', description: 'Exploring API architectures that connect AI models, agents, tools, external services, data platforms, and intelligent workflows.', status: 'Research', slug: 'ai-api-integration' },
  { date: 'Aug 5, 2026', title: 'Secure API Infrastructure', description: 'Developing secure authentication, authorization, rate limiting, monitoring, validation, and access-control systems for modern APIs.', status: 'Development', slug: 'secure-api-infrastructure' },
  { date: 'Aug 1, 2026', title: 'Future of API Engineering', description: 'Exploring intelligent APIs, autonomous services, event-driven architectures, real-time communication, microservices, and next-generation integration systems.', status: 'Development', slug: 'future-api-engineering' },
]

function ResearchStatus({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header"><span className="section-label">API ENGINEERING</span><h1>Engineering Connected<br /><em>Digital Systems.</em></h1><p>Researching and developing scalable APIs, service architectures, integrations, data interfaces, intelligent services, and reliable communication layers for modern digital platforms.</p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item"><div className="software-research-meta"><span>API Engineering</span><time>{entry.date}</time></div><div className="software-research-copy"><a href={`/api-engineering/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><ResearchStatus status={entry.status} /></a></div></article> }
function ResearchList() { return <div className="software-research-list" id="publications">{researchEntries.map((entry) => <ResearchItem entry={entry} key={entry.slug} />)}</div> }
function APIDetail({ entry }) { return <section className="software-detail"><span className="section-label">API ENGINEERING / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><ResearchStatus status={entry.status} /><a className="button button-ghost" href="/api-engineering">Back to API Engineering <span>↗</span></a></section> }

function APIEngineeringPage({ path = '/api-engineering' }) {
  useEffect(() => {
    const capabilitiesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Capabilities'))
    capabilitiesButton?.classList.add('active')
    return () => capabilitiesButton?.classList.remove('active')
  }, [])
  const entry = researchEntries.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Publication categories">{['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <APIDetail entry={entry} /> : <ResearchList />}</section></main>
}

export default APIEngineeringPage
