import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'Next-Generation Software Development', description: 'Researching modern development architectures, intelligent applications, scalable platforms, AI-assisted engineering, and high-performance software systems.', status: 'Research', slug: 'next-generation-software-development' },
  { date: 'Aug 20, 2026', title: 'AI-Powered Software Engineering', description: 'Exploring AI-assisted coding, intelligent development tools, automated testing, code analysis, debugging, optimization, and developer productivity.', status: 'Experiment', slug: 'ai-powered-software-engineering' },
  { date: 'Aug 15, 2026', title: 'Intelligent Application Development', description: 'Developing applications that integrate AI models, intelligent agents, automation, data intelligence, and real-time decision-making.', status: 'Prototype', slug: 'intelligent-application-development' },
  { date: 'Aug 10, 2026', title: 'Scalable Software Architecture', description: 'Researching modular, distributed, secure, maintainable, and scalable architectures for modern enterprise and intelligent applications.', status: 'Research', slug: 'scalable-software-architecture' },
  { date: 'Aug 5, 2026', title: 'Autonomous Software Systems', description: 'Exploring software systems capable of monitoring, reasoning, adapting, optimizing, and executing development and operational tasks with minimal intervention.', status: 'Development', slug: 'autonomous-software-systems' },
  { date: 'Aug 1, 2026', title: 'Future of Software Engineering', description: 'Researching autonomous development, AI coding agents, intelligent applications, next-generation frameworks, and future software engineering practices.', status: 'Development', slug: 'future-of-software-engineering' },
]

function ResearchStatus({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header"><span className="section-label">SOFTWARE DEVELOPMENT</span><h1>Engineering Digital<br /><em>Intelligence.</em></h1><p>Exploring modern software engineering, AI-powered development, scalable architectures, intelligent applications, automation, and next-generation digital products.</p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item"><div className="software-research-meta"><span>Software Development</span><time>{entry.date}</time></div><div className="software-research-copy"><a href={`/software-development/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><ResearchStatus status={entry.status} /></a></div></article> }
function ResearchList() { return <div className="software-research-list" id="publications">{researchEntries.map((entry) => <ResearchItem entry={entry} key={entry.slug} />)}</div> }
function DevelopmentDetail({ entry }) { return <section className="software-detail"><span className="section-label">SOFTWARE DEVELOPMENT / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><ResearchStatus status={entry.status} /><a className="button button-ghost" href="/software-development">Back to Software Development <span>↗</span></a></section> }

function SoftwareDevelopmentPage({ path = '/software-development' }) {
  useEffect(() => {
    const capabilitiesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Capabilities'))
    capabilitiesButton?.classList.add('active')
    return () => capabilitiesButton?.classList.remove('active')
  }, [])
  const entry = researchEntries.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Publication categories">{['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <DevelopmentDetail entry={entry} /> : <ResearchList />}</section></main>
}

export default SoftwareDevelopmentPage
