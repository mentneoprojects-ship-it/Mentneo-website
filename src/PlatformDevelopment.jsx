import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'Next-Generation Platform Architecture', description: 'Researching scalable platform architectures designed to support intelligent applications, AI systems, automation, enterprise services, and large-scale digital ecosystems.', status: 'Research', slug: 'next-generation-platform-architecture' },
  { date: 'Aug 20, 2026', title: 'AI-Powered Digital Platforms', description: 'Developing platforms that integrate AI models, intelligent agents, automation, analytics, APIs, and data systems into unified digital environments.', status: 'Experiment', slug: 'ai-powered-digital-platforms' },
  { date: 'Aug 15, 2026', title: 'Scalable Enterprise Platforms', description: 'Researching reliable enterprise platforms capable of supporting large-scale applications, users, workflows, data processing, and intelligent business operations.', status: 'Prototype', slug: 'scalable-enterprise-platforms' },
  { date: 'Aug 10, 2026', title: 'Intelligent Platform Infrastructure', description: 'Exploring platform infrastructure for AI services, APIs, databases, automation engines, authentication, analytics, and distributed applications.', status: 'Research', slug: 'intelligent-platform-infrastructure' },
  { date: 'Aug 5, 2026', title: 'Modular Platform Engineering', description: 'Developing modular platform architectures that allow applications, services, AI systems, and business capabilities to evolve independently while remaining connected.', status: 'Development', slug: 'modular-platform-engineering' },
  { date: 'Aug 1, 2026', title: 'Future Digital Platforms', description: 'Exploring next-generation platforms combining AI, software, automation, data intelligence, cloud technologies, and intelligent user experiences.', status: 'Development', slug: 'future-digital-platforms' },
]

function ResearchStatus({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header"><span className="section-label">PLATFORM DEVELOPMENT</span><h1>Engineering Scalable<br /><em>Digital Platforms.</em></h1><p>Researching and developing scalable platforms that combine modern software architecture, AI, automation, data intelligence, APIs, cloud infrastructure, and intelligent digital experiences.</p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item"><div className="software-research-meta"><span>Platform Development</span><time>{entry.date}</time></div><div className="software-research-copy"><a href={`/platform-development/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><ResearchStatus status={entry.status} /></a></div></article> }
function ResearchList() { return <div className="software-research-list" id="publications">{researchEntries.map((entry) => <ResearchItem entry={entry} key={entry.slug} />)}</div> }
function PlatformDetail({ entry }) { return <section className="software-detail"><span className="section-label">PLATFORM DEVELOPMENT / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><ResearchStatus status={entry.status} /><a className="button button-ghost" href="/platform-development">Back to Platform Development <span>↗</span></a></section> }

function PlatformDevelopmentPage({ path = '/platform-development' }) {
  useEffect(() => {
    const capabilitiesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Capabilities'))
    capabilitiesButton?.classList.add('active')
    return () => capabilitiesButton?.classList.remove('active')
  }, [])
  const entry = researchEntries.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Publication categories">{['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <PlatformDetail entry={entry} /> : <ResearchList />}</section></main>
}

export default PlatformDevelopmentPage
