import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'Next-Generation Automation', description: 'Researching advanced automation systems capable of executing workflows, coordinating tasks, integrating applications, and reducing manual operations.', status: 'Research', slug: 'next-generation-automation' },
  { date: 'Aug 20, 2026', title: 'AI-Powered Automation', description: 'Exploring AI-driven automation that combines reasoning, decision-making, intelligent agents, APIs, data, and business processes.', status: 'Experiment', slug: 'ai-powered-automation' },
  { date: 'Aug 15, 2026', title: 'Intelligent Workflow Automation', description: 'Developing systems that understand business workflows, identify tasks, trigger actions, coordinate processes, and continuously optimize execution.', status: 'Prototype', slug: 'intelligent-workflow-automation' },
  { date: 'Aug 10, 2026', title: 'Autonomous Process Automation', description: 'Researching autonomous systems capable of planning multi-step operations, using tools, interacting with applications, and completing tasks with minimal human intervention.', status: 'Research', slug: 'autonomous-process-automation' },
  { date: 'Aug 5, 2026', title: 'Enterprise Automation', description: 'Exploring automation across customer support, sales, finance, HR, operations, analytics, document processing, and enterprise workflows.', status: 'Development', slug: 'enterprise-automation' },
  { date: 'Aug 1, 2026', title: 'Future of Intelligent Automation', description: 'Researching autonomous workflows, AI agents, robotic process automation, intelligent orchestration, adaptive systems, and next-generation business automation.', status: 'Development', slug: 'future-intelligent-automation' },
]

function ResearchStatus({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header"><span className="section-label">AUTOMATION</span><h1>Intelligent Automation<br /><em>&amp; Execution.</em></h1><p>Researching advanced automation systems that transform repetitive processes, workflows, operations, and business tasks into intelligent, efficient, and scalable execution.</p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item"><div className="software-research-meta"><span>Automation</span><time>{entry.date}</time></div><div className="software-research-copy"><a href={`/automation/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><ResearchStatus status={entry.status} /></a></div></article> }
function ResearchList() { return <div className="software-research-list" id="publications">{researchEntries.map((entry) => <ResearchItem entry={entry} key={entry.slug} />)}</div> }
function AutomationDetail({ entry }) { return <section className="software-detail"><span className="section-label">AUTOMATION / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><ResearchStatus status={entry.status} /><a className="button button-ghost" href="/automation">Back to Automation <span>↗</span></a></section> }

function AutomationPage({ path = '/automation' }) {
  useEffect(() => {
    const capabilitiesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Capabilities'))
    capabilitiesButton?.classList.add('active')
    return () => capabilitiesButton?.classList.remove('active')
  }, [])
  const entry = researchEntries.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Publication categories">{['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <AutomationDetail entry={entry} /> : <ResearchList />}</section></main>
}

export default AutomationPage
