import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'Next-Generation Technology Research', description: 'Exploring emerging technologies, new methodologies, advanced systems, and experimental ideas that can shape future digital capabilities.', status: 'Research', slug: 'next-generation-technology-research' },
  { date: 'Aug 20, 2026', title: 'Artificial Intelligence Research', description: 'Investigating advanced AI models, reasoning, learning, intelligent agents, multimodal systems, automation, and emerging machine intelligence.', status: 'Experiment', slug: 'artificial-intelligence-research' },
  { date: 'Aug 15, 2026', title: 'Emerging Technology Experiments', description: 'Experimenting with new technologies, architectures, tools, platforms, and concepts to identify practical opportunities for innovation.', status: 'Prototype', slug: 'emerging-technology-experiments' },
  { date: 'Aug 10, 2026', title: 'Intelligent Systems Research', description: 'Exploring advanced software, data, AI, automation, knowledge, and decision systems designed to solve complex real-world problems.', status: 'Research', slug: 'intelligent-systems-research' },
  { date: 'Aug 5, 2026', title: 'Future Technology Exploration', description: 'Researching emerging computing, AI, software, cloud, data, automation, and digital technologies that could define future systems.', status: 'Development', slug: 'future-technology-exploration' },
  { date: 'Aug 1, 2026', title: 'Experimental Innovation Lab', description: 'Exploring unconventional ideas, prototypes, technologies, architectures, and experimental approaches through continuous research and testing.', status: 'Development', slug: 'experimental-innovation-lab' },
]

function ResearchStatus({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header"><span className="section-label">RESEARCH</span><h1>Ideas, Experiments<br /><em>&amp; Discovery.</em></h1><p>Exploring new technologies, intelligent systems, emerging ideas, experiments, and discoveries that shape the future of digital innovation.</p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item"><div className="software-research-meta"><span>Research</span><time>{entry.date}</time></div><div className="software-research-copy"><a href={`/research/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><ResearchStatus status={entry.status} /></a></div></article> }
function ResearchList() { return <div className="software-research-list" id="publications">{researchEntries.map((entry) => <ResearchItem entry={entry} key={entry.slug} />)}</div> }
function ResearchDetail({ entry }) { return <section className="software-detail"><span className="section-label">RESEARCH / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><ResearchStatus status={entry.status} /><a className="button button-ghost" href="/research">Back to Research <span>↗</span></a></section> }

function ResearchPage({ path = '/research' }) {
  useEffect(() => {
    const researchButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim() === 'AI RESEARCH' || button.textContent.trim() === 'Research')
    researchButton?.classList.add('active')
    return () => researchButton?.classList.remove('active')
  }, [])
  const entry = researchEntries.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Publication categories">{['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <ResearchDetail entry={entry} /> : <ResearchList />}</section></main>
}

export default ResearchPage
