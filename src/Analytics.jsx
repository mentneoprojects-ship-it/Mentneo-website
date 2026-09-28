import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'Next-Generation Analytics', description: 'Researching advanced analytical systems that transform large and complex datasets into actionable insights, patterns, predictions, and decisions.', status: 'Research', slug: 'next-generation-analytics' },
  { date: 'Aug 20, 2026', title: 'AI-Powered Analytics', description: 'Exploring AI-driven analytics, automated insights, anomaly detection, pattern recognition, predictive intelligence, and intelligent data interpretation.', status: 'Experiment', slug: 'ai-powered-analytics' },
  { date: 'Aug 15, 2026', title: 'Real-Time Analytics', description: 'Developing systems capable of processing live data streams and generating immediate insights for monitoring, optimization, and decision-making.', status: 'Prototype', slug: 'real-time-analytics' },
  { date: 'Aug 10, 2026', title: 'Predictive Analytics', description: 'Researching forecasting, machine learning models, behavioral analysis, risk prediction, trend discovery, and future-state intelligence.', status: 'Research', slug: 'predictive-analytics' },
  { date: 'Aug 5, 2026', title: 'Business Intelligence & Analytics', description: 'Exploring intelligent reporting, business metrics, performance analysis, operational intelligence, decision support, and data-driven business strategy.', status: 'Development', slug: 'business-intelligence-analytics' },
  { date: 'Aug 1, 2026', title: 'Future of Intelligent Analytics', description: 'Researching autonomous analytics, natural-language data exploration, AI-generated insights, adaptive models, and next-generation analytical systems.', status: 'Development', slug: 'future-intelligent-analytics' },
]

function ResearchStatus({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header"><span className="section-label">ANALYTICS</span><h1>Data, Insights<br /><em>&amp; Intelligence.</em></h1><p>Researching advanced analytics systems that transform complex data into meaningful insights, predictions, patterns, and informed decisions.</p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item"><div className="software-research-meta"><span>Analytics</span><time>{entry.date}</time></div><div className="software-research-copy"><a href={`/analytics/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><ResearchStatus status={entry.status} /></a></div></article> }
function ResearchList() { return <div className="software-research-list" id="publications">{researchEntries.map((entry) => <ResearchItem entry={entry} key={entry.slug} />)}</div> }
function AnalyticsDetail({ entry }) { return <section className="software-detail"><span className="section-label">ANALYTICS / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><ResearchStatus status={entry.status} /><a className="button button-ghost" href="/analytics">Back to Analytics <span>↗</span></a></section> }

function AnalyticsPage({ path = '/analytics' }) {
  useEffect(() => {
    const capabilitiesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Capabilities'))
    capabilitiesButton?.classList.add('active')
    return () => capabilitiesButton?.classList.remove('active')
  }, [])
  const entry = researchEntries.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Publication categories">{['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <AnalyticsDetail entry={entry} /> : <ResearchList />}</section></main>
}

export default AnalyticsPage
