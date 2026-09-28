import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'Next-Generation System Architecture', description: 'Researching scalable architectures designed for modern applications, AI systems, distributed services, enterprise platforms, and intelligent digital ecosystems.', status: 'Research', slug: 'next-generation-system-architecture' },
  { date: 'Aug 20, 2026', title: 'Intelligent Architecture Design', description: 'Exploring architectures that connect AI models, intelligent agents, APIs, data systems, applications, automation, and business services.', status: 'Experiment', slug: 'intelligent-architecture-design' },
  { date: 'Aug 15, 2026', title: 'Scalable Distributed Architecture', description: 'Researching distributed systems, microservices, service-oriented architectures, event-driven systems, and resilient infrastructure for large-scale applications.', status: 'Prototype', slug: 'scalable-distributed-architecture' },
  { date: 'Aug 10, 2026', title: 'AI-Native System Architecture', description: 'Developing architectures designed specifically for AI applications, intelligent agents, model services, vector systems, knowledge systems, and AI-powered workflows.', status: 'Research', slug: 'ai-native-system-architecture' },
  { date: 'Aug 5, 2026', title: 'Secure & Resilient Systems', description: 'Exploring security, authentication, authorization, fault tolerance, observability, disaster recovery, reliability, and resilient system design.', status: 'Development', slug: 'secure-resilient-systems' },
  { date: 'Aug 1, 2026', title: 'Future of System Architecture', description: 'Researching autonomous systems, intelligent infrastructure, distributed intelligence, event-driven platforms, cloud-native architectures, and next-generation digital systems.', status: 'Development', slug: 'future-system-architecture' },
]

function ResearchStatus({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header"><span className="section-label">SYSTEM ARCHITECTURE</span><h1>Engineering Intelligent<br /><em>Digital Foundations.</em></h1><p>Researching scalable, secure, resilient, and intelligent system architectures that connect applications, APIs, AI, data, infrastructure, and enterprise technologies.</p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item"><div className="software-research-meta"><span>System Architecture</span><time>{entry.date}</time></div><div className="software-research-copy"><a href={`/system-architecture/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><ResearchStatus status={entry.status} /></a></div></article> }
function ResearchList() { return <div className="software-research-list" id="publications">{researchEntries.map((entry) => <ResearchItem entry={entry} key={entry.slug} />)}</div> }
function ArchitectureDetail({ entry }) { return <section className="software-detail"><span className="section-label">SYSTEM ARCHITECTURE / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><ResearchStatus status={entry.status} /><a className="button button-ghost" href="/system-architecture">Back to System Architecture <span>↗</span></a></section> }

function SystemArchitecturePage({ path = '/system-architecture' }) {
  useEffect(() => {
    const capabilitiesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Capabilities'))
    capabilitiesButton?.classList.add('active')
    return () => capabilitiesButton?.classList.remove('active')
  }, [])
  const entry = researchEntries.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Publication categories">{['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <ArchitectureDetail entry={entry} /> : <ResearchList />}</section></main>
}

export default SystemArchitecturePage
