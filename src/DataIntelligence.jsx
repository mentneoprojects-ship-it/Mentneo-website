import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'Next-Generation Data Intelligence', description: 'Researching advanced data intelligence systems that transform raw data into meaningful insights, predictions, decisions, and automated actions.', status: 'Research', slug: 'next-generation-data-intelligence' },
  { date: 'Aug 20, 2026', title: 'AI-Powered Data Analytics', description: 'Exploring AI-powered analytics, pattern discovery, predictive intelligence, anomaly detection, and intelligent interpretation of complex datasets.', status: 'Experiment', slug: 'ai-powered-data-analytics' },
  { date: 'Aug 15, 2026', title: 'Real-Time Data Intelligence', description: 'Developing systems capable of processing live data streams, identifying patterns, generating insights, and supporting real-time decision-making.', status: 'Prototype', slug: 'real-time-data-intelligence' },
  { date: 'Aug 10, 2026', title: 'Intelligent Data Platforms', description: 'Researching scalable data platforms that connect databases, analytics, AI models, knowledge systems, APIs, and business applications.', status: 'Research', slug: 'intelligent-data-platforms' },
  { date: 'Aug 5, 2026', title: 'Predictive Data Intelligence', description: 'Exploring predictive analytics, forecasting, machine learning, behavioral intelligence, risk analysis, and data-driven decision systems.', status: 'Development', slug: 'predictive-data-intelligence' },
  { date: 'Aug 1, 2026', title: 'Future of Data Intelligence', description: 'Researching emerging technologies for knowledge discovery, intelligent analytics, autonomous data systems, AI-driven insights, and next-generation data platforms.', status: 'Development', slug: 'future-data-intelligence' },
]

function ResearchStatus({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header"><span className="section-label">DATA INTELLIGENCE</span><h1>Intelligent Data<br /><em>&amp; Insights.</em></h1><p>Researching intelligent ways to collect, process, understand, analyze, and transform complex data into meaningful insights and decisions.</p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item"><div className="software-research-meta"><span>Data Intelligence</span><time>{entry.date}</time></div><div className="software-research-copy"><a href={`/data-intelligence/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><ResearchStatus status={entry.status} /></a></div></article> }
function ResearchList() { return <div className="software-research-list" id="publications">{researchEntries.map((entry) => <ResearchItem entry={entry} key={entry.slug} />)}</div> }
function DataDetail({ entry }) { return <section className="software-detail"><span className="section-label">DATA INTELLIGENCE / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><ResearchStatus status={entry.status} /><a className="button button-ghost" href="/data-intelligence">Back to Data Intelligence <span>↗</span></a></section> }

function DataIntelligencePage({ path = '/data-intelligence' }) {
  useEffect(() => {
    const capabilitiesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Capabilities'))
    capabilitiesButton?.classList.add('active')
    return () => capabilitiesButton?.classList.remove('active')
  }, [])
  const entry = researchEntries.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Publication categories">{['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <DataDetail entry={entry} /> : <ResearchList />}</section></main>
}

export default DataIntelligencePage
