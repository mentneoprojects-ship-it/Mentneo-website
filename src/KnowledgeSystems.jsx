import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'Next-Generation Knowledge Systems', description: 'Researching advanced systems that organize structured and unstructured information into connected, searchable, contextual knowledge.', status: 'Research', slug: 'next-generation-knowledge-systems' },
  { date: 'Aug 20, 2026', title: 'AI-Powered Knowledge Intelligence', description: 'Exploring AI systems that understand documents, information, relationships, context, and organizational knowledge to generate meaningful answers and insights.', status: 'Experiment', slug: 'ai-powered-knowledge-intelligence' },
  { date: 'Aug 15, 2026', title: 'Enterprise Knowledge Systems', description: 'Developing centralized knowledge environments that connect business documents, databases, processes, applications, people, and organizational information.', status: 'Prototype', slug: 'enterprise-knowledge-systems' },
  { date: 'Aug 10, 2026', title: 'Context-Aware Knowledge Retrieval', description: 'Researching intelligent retrieval systems capable of finding relevant information based on context, meaning, intent, relationships, and user requirements.', status: 'Research', slug: 'context-aware-knowledge-retrieval' },
  { date: 'Aug 5, 2026', title: 'Knowledge Graphs & Connected Intelligence', description: 'Exploring knowledge graphs, semantic relationships, entity connections, ontologies, and structured knowledge representations for intelligent systems.', status: 'Development', slug: 'knowledge-graphs-connected-intelligence' },
  { date: 'Aug 1, 2026', title: 'Future of Intelligent Knowledge', description: 'Researching autonomous knowledge discovery, semantic intelligence, AI memory, contextual reasoning, organizational knowledge, and next-generation information systems.', status: 'Development', slug: 'future-intelligent-knowledge' },
]

function ResearchStatus({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header"><span className="section-label">KNOWLEDGE SYSTEMS</span><h1>Intelligent Knowledge<br /><em>&amp; Information.</em></h1><p>Researching systems that organize, connect, understand, retrieve, and reason over complex information and knowledge.</p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item"><div className="software-research-meta"><span>Knowledge Systems</span><time>{entry.date}</time></div><div className="software-research-copy"><a href={`/knowledge-systems/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><ResearchStatus status={entry.status} /></a></div></article> }
function ResearchList() { return <div className="software-research-list" id="publications">{researchEntries.map((entry) => <ResearchItem entry={entry} key={entry.slug} />)}</div> }
function KnowledgeDetail({ entry }) { return <section className="software-detail"><span className="section-label">KNOWLEDGE SYSTEMS / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><ResearchStatus status={entry.status} /><a className="button button-ghost" href="/knowledge-systems">Back to Knowledge Systems <span>↗</span></a></section> }

function KnowledgeSystemsPage({ path = '/knowledge-systems' }) {
  useEffect(() => {
    const capabilitiesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Capabilities'))
    capabilitiesButton?.classList.add('active')
    return () => capabilitiesButton?.classList.remove('active')
  }, [])
  const entry = researchEntries.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Publication categories">{['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <KnowledgeDetail entry={entry} /> : <ResearchList />}</section></main>
}

export default KnowledgeSystemsPage
