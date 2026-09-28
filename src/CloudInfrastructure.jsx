import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'Next-Generation Cloud Infrastructure', description: 'Researching scalable cloud architectures designed for AI systems, enterprise applications, distributed services, data platforms, and intelligent digital ecosystems.', status: 'Research', slug: 'next-generation-cloud-infrastructure' },
  { date: 'Aug 20, 2026', title: 'AI-Ready Cloud Infrastructure', description: 'Developing cloud environments optimized for AI models, intelligent agents, machine learning workloads, data processing, inference, and intelligent applications.', status: 'Experiment', slug: 'ai-ready-cloud-infrastructure' },
  { date: 'Aug 15, 2026', title: 'Scalable Cloud Computing', description: 'Researching elastic computing, distributed workloads, containerized applications, serverless systems, and high-performance cloud environments.', status: 'Prototype', slug: 'scalable-cloud-computing' },
  { date: 'Aug 10, 2026', title: 'Cloud Data Infrastructure', description: 'Exploring cloud databases, data lakes, data pipelines, storage systems, analytics platforms, vector databases, and AI-ready data infrastructure.', status: 'Research', slug: 'cloud-data-infrastructure' },
  { date: 'Aug 5, 2026', title: 'Secure & Resilient Cloud Systems', description: 'Developing secure cloud architectures with identity management, access control, monitoring, fault tolerance, disaster recovery, and high availability.', status: 'Development', slug: 'secure-resilient-cloud-systems' },
  { date: 'Aug 1, 2026', title: 'Future of Intelligent Cloud Infrastructure', description: 'Exploring autonomous infrastructure, intelligent resource management, AI-powered operations, distributed intelligence, edge computing, and next-generation cloud technologies.', status: 'Development', slug: 'future-intelligent-cloud-infrastructure' },
]

function ResearchStatus({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header"><span className="section-label">CLOUD INFRASTRUCTURE</span><h1>Engineering Intelligent<br /><em>Cloud Foundations.</em></h1><p>Researching scalable, secure, resilient, and intelligent cloud infrastructure for AI systems, software platforms, data services, APIs, enterprise applications, and next-generation digital technologies.</p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item"><div className="software-research-meta"><span>Cloud Infrastructure</span><time>{entry.date}</time></div><div className="software-research-copy"><a href={`/cloud-infrastructure/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><ResearchStatus status={entry.status} /></a></div></article> }
function ResearchList() { return <div className="software-research-list" id="publications">{researchEntries.map((entry) => <ResearchItem entry={entry} key={entry.slug} />)}</div> }
function CloudDetail({ entry }) { return <section className="software-detail"><span className="section-label">CLOUD INFRASTRUCTURE / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><ResearchStatus status={entry.status} /><a className="button button-ghost" href="/cloud-infrastructure">Back to Cloud Infrastructure <span>↗</span></a></section> }

function CloudInfrastructurePage({ path = '/cloud-infrastructure' }) {
  useEffect(() => {
    const capabilitiesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Capabilities'))
    capabilitiesButton?.classList.add('active')
    return () => capabilitiesButton?.classList.remove('active')
  }, [])
  const entry = researchEntries.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Publication categories">{['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <CloudDetail entry={entry} /> : <ResearchList />}</section></main>
}

export default CloudInfrastructurePage
