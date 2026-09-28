import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'
import './Insights.css'

const insights = [
  { category: 'Research', title: 'AI Research', description: 'Explore developments and ideas across artificial intelligence, machine learning, generative AI, AI systems, agents, model development, and intelligent applications.', status: 'Research', slug: 'ai-research' },
  { category: 'Technology', title: 'Technology Systems', description: 'Explore software architecture, APIs, cloud infrastructure, platforms, distributed systems, system design, and technology development.', status: 'Technology', slug: 'technology-systems' },
  { category: 'AI', title: 'AI Agents', description: 'Explore AI agents, tool usage, agent workflows, multi-step reasoning systems, agent orchestration, and business applications.', status: 'AI', slug: 'ai-agents' },
  { category: 'Automation', title: 'AI & Business Automation', description: 'Examine workflow automation, process transformation, AI automation, business operations, employee workflows, customer workflows, and system integrations.', status: 'Automation', slug: 'automation' },
  { category: 'Data', title: 'Data Intelligence', description: 'Explore data systems, analytics, business intelligence, data pipelines, predictive analytics, and decision-support systems.', status: 'Intelligence', slug: 'data-intelligence' },
  { category: 'Emerging Technology', title: 'Emerging Technologies', description: 'Research new AI technologies, software architectures, robotics, computer vision, Voice AI, advanced automation, and future computing concepts.', status: 'Future', slug: 'emerging-technologies' },
  { category: 'Research', title: 'Research Notes', description: 'Technical observations across experiments, architecture studies, AI experiments, technology evaluations, prototype learnings, and deployment learnings.', status: 'Research', slug: 'research-notes' },
  { category: 'Ideas', title: 'Technology Ideas', description: 'Explore practical ideas around AI products, software platforms, automation systems, data products, AI-powered business systems, and technology ecosystems.', status: 'Ideas', slug: 'technology-ideas' },
]
const researchCycle = ['OBSERVATION', 'QUESTION', 'RESEARCH', 'EXPERIMENT', 'ANALYSIS', 'INSIGHT', 'APPLICATION', 'NEW QUESTION']
const insightFlow = ['RESEARCH', 'EXPERIMENTATION', 'RESULTS', 'ANALYSIS', 'LEARNING', 'INSIGHT', 'APPLICATION']
const aiTopics = ['AI MODELS', 'GENERATIVE AI', 'LLMs', 'RAG', 'AI AGENTS', 'VOICE AI', 'COMPUTER VISION', 'AI AUTOMATION', 'AI SYSTEMS']
const softwareTopics = ['ARCHITECTURE', 'APIs', 'BACKEND SYSTEMS', 'FRONTEND SYSTEMS', 'CLOUD', 'DATABASES', 'SCALABILITY', 'SECURITY', 'INTEGRATION']
const businessTopics = ['BUSINESS PROCESSES', 'CUSTOMER EXPERIENCES', 'EMPLOYEE PRODUCTIVITY', 'DECISION-MAKING', 'AUTOMATION', 'DATA UTILIZATION', 'DIGITAL TRANSFORMATION']
const futureTopics = ['ADVANCED AI AGENTS', 'AUTONOMOUS WORKFLOWS', 'INTELLIGENT SYSTEMS', 'ROBOTICS', 'ADVANCED COMPUTER VISION', 'VOICE SYSTEMS', 'NEW SOFTWARE ARCHITECTURES', 'AI-POWERED PLATFORMS']

function StatusLabel({ status }) { return <span className="software-status">{status}</span> }
function InsightsHeader() { return <div className="software-research-header insights-header"><span className="section-label">INSIGHTS</span><h1>Research, Technology<br /><em>&amp; Ideas.</em></h1><p>Exploring ideas, developments, experiments and perspectives across artificial intelligence, technology, software systems, automation, data and emerging technologies.</p></div> }
function InsightItem({ entry }) { return <article className="software-research-item insight-item"><div className="software-research-meta"><span>Insights</span><strong>{entry.category}</strong></div><div className="software-research-copy"><a href={`/insights/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><StatusLabel status={entry.status} /></a></div></article> }
function ProcessFlow({ title, items }) { return <section className="insights-flow"><span className="section-label">{title}</span><div>{items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < items.length - 1 && <i>↓</i>}</div>)}</div></section> }
function TopicSection({ title, items, status }) { return <section className="insights-topics"><span className="section-label">{title}</span><div>{items.map((item) => <span key={item}>{item}</span>)}</div><StatusLabel status={status} /></section> }
function InsightDetail({ entry }) { return <section className="software-detail insights-detail"><span className="section-label">INSIGHTS / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><StatusLabel status={entry.status} /><div className="insight-detail-sections">{[['Introduction', entry.description], ['Key Idea', 'A focused perspective grounded in the selected research and technology theme.'], ['Research / Observation', 'Observations and experiments should remain clear, concise, and distinct from completed production claims.'], ['Technology', 'Relevant systems, architectures, models, data, and implementation choices are considered in context.'], ['Practical Application', 'The insight connects research to practical opportunities worth testing and validating.'], ['Conclusion', 'Keep learning visible, useful, and open to the next question.']].map(([title, text]) => <div key={title}><h2>{title}</h2><p>{text}</p></div>)}</div><a className="button button-ghost" href="/insights">Back to Insights <span>↗</span></a></section> }

function InsightsPage({ path = '/insights' }) {
  useEffect(() => { const companyButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Company')); companyButton?.classList.add('active'); return () => companyButton?.classList.remove('active') }, [])
  const entry = insights.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page insights-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Insight categories">{['All', 'AI', 'Research', 'Technology', 'Automation', 'Data', 'Software', 'Future'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><InsightsHeader />{entry ? <InsightDetail entry={entry} /> : <><div className="software-research-list" id="publications">{insights.map((entry) => <InsightItem entry={entry} key={entry.slug} />)}</div><ProcessFlow title="INSIGHTS ARCHITECTURE / RESEARCH CYCLE" items={researchCycle} /><ProcessFlow title="FROM RESEARCH TO INSIGHT / KNOWLEDGE" items={insightFlow} /><TopicSection title="ARTIFICIAL INTELLIGENCE" items={aiTopics} status="AI Research" /><TopicSection title="SOFTWARE SYSTEMS" items={softwareTopics} status="Software" /><TopicSection title="TECHNOLOGY & BUSINESS" items={businessTopics} status="Business Technology" /><TopicSection title="FUTURE TECHNOLOGY" items={futureTopics} status="Future Research" /></>}</section></main>
}

export default InsightsPage
