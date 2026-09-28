import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'
import './AIAgents.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'The Rise of Autonomous AI Agents', description: 'Researching AI agents capable of understanding goals, creating plans, reasoning through problems, using tools, and completing multi-step tasks autonomously.', status: 'Research', slug: 'autonomous-ai-agents' },
  { date: 'Aug 20, 2026', title: 'Agentic Reasoning & Planning', description: 'Exploring how AI agents can break complex objectives into smaller tasks, reason through alternatives, create execution plans, and adapt their strategies.', status: 'Experiment', slug: 'agentic-reasoning' },
  { date: 'Aug 15, 2026', title: 'Multi-Agent Intelligence', description: 'Researching collaborative AI agents that communicate, delegate tasks, share knowledge, coordinate actions, and solve complex problems collectively.', status: 'Research', slug: 'multi-agent-intelligence' },
  { date: 'Aug 10, 2026', title: 'Tool-Using Autonomous Agents', description: 'Developing AI agents that can interact with APIs, databases, software applications, search systems, knowledge bases, and external tools to complete real-world tasks.', status: 'Prototype', slug: 'tool-using-agents' },
  { date: 'Aug 5, 2026', title: 'Memory & Context-Aware Agents', description: 'Exploring short-term memory, long-term memory, contextual understanding, user preferences, knowledge retrieval, and adaptive agent behavior.', status: 'Development', slug: 'memory-context-agents' },
  { date: 'Aug 1, 2026', title: 'AI Agents for Enterprise', description: 'Researching autonomous agents for customer support, sales, operations, finance, HR, analytics, workflow automation, and enterprise decision-making.', status: 'Development', slug: 'ai-agents-for-enterprise' },
]

function ResearchHeader() {
  return <div className="agents-research-header"><span className="section-label">AI AGENTS</span><h1>Autonomous Intelligence<br /><em>in Action.</em></h1><p>A research and development space exploring intelligent agents capable of reasoning, planning, using tools, learning from context, and executing complex tasks.</p></div>
}

function ResearchStatus({ status }) { return <span className="agents-status">{status}</span> }

function ResearchItem({ entry }) {
  return <article className="agents-research-item"><div className="agents-research-meta"><span>AI Agents</span><time>{entry.date}</time></div><div className="agents-research-copy"><a href={`/ai-agents/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><ResearchStatus status={entry.status} /></a></div></article>
}

function ResearchList() { return <div className="agents-research-list" id="publications">{researchEntries.map((entry) => <ResearchItem entry={entry} key={entry.slug} />)}</div> }

function AgentDetail({ entry }) {
  return <section className="agents-detail"><span className="section-label">AI AGENTS / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><ResearchStatus status={entry.status} /><a className="button button-ghost" href="/ai-agents">Back to AI Agents <span>↗</span></a></section>
}

function AIAgentsPage({ path = '/ai-agents' }) {
  const slug = path.split('/')[2]
  const entry = researchEntries.find((item) => item.slug === slug)
  return <main className="rd-lab-page agents-page"><InternalNavigation /><section className="agents-shell"><nav className="rd-lab-categories" aria-label="Publication categories">{['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <AgentDetail entry={entry} /> : <ResearchList />}</section></main>
}

export default AIAgentsPage
