import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'
import './RD.css'

const stages = [
  { category: 'Research', title: 'AI Research', description: 'Researching artificial intelligence, AI models, intelligent systems, AI agents, generative AI, machine learning, and emerging AI technologies.', status: 'Research', slug: 'research' },
  { category: 'Experimentation', title: 'Experimental Technology', description: 'Exploring new technologies, frameworks, AI models, system architectures, automation approaches, data technologies, and emerging technologies.', status: 'Experiment', slug: 'experimentation' },
  { category: 'Prototyping', title: 'Prototype Development', description: 'Turning research concepts into working prototypes through a path from research to concept, prototype, experiment, and result.', status: 'Prototype', slug: 'prototype-development' },
  { category: 'Architecture', title: 'System Architecture Research', description: 'Researching architectures for AI systems, agent systems, SaaS platforms, APIs, data systems, automation, cloud infrastructure, and intelligent applications.', status: 'Architecture', slug: 'system-architecture' },
  { category: 'Development', title: 'Technology Development', description: 'Building validated concepts into practical AI systems, software, platforms, APIs, automation workflows, data systems, and intelligent applications.', status: 'Development', slug: 'technology-development' },
  { category: 'Validation', title: 'Technology Validation', description: 'Evaluating accuracy, performance, reliability, scalability, usability, operational impact, and real-world applicability.', status: 'Validation', slug: 'technology-validation' },
  { category: 'Innovation', title: 'Future Technology', description: 'Exploring future opportunities in AI, intelligent agents, automation, computer vision, Voice AI, LLMs, RAG, data intelligence, robotics, and advanced software systems.', status: 'Future R&D', slug: 'future-technology' },
]
const process = ['RESEARCH', 'QUESTION', 'HYPOTHESIS', 'EXPERIMENT', 'RESULT', 'ANALYSIS', 'PROTOTYPE', 'VALIDATION', 'SYSTEM', 'DEPLOYMENT', 'FEEDBACK', 'NEW RESEARCH']

function StatusLabel({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header rd-header"><span className="section-label">R &amp; D</span><h1>Research &amp;<br /><em>Development.</em></h1><p>Exploring new ideas, technologies, models, architectures and intelligent systems through continuous research, experimentation, prototyping and real-world validation.</p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item rd-item"><div className="software-research-meta"><span>R &amp; D</span><strong>{entry.category}</strong></div><div className="software-research-copy"><a href={`/r-and-d/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><StatusLabel status={entry.status} /></a></div></article> }
function ProcessFlow() { return <section className="rd-process"><span className="section-label">CORE R&amp;D PROCESS</span><div>{process.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < process.length - 1 && <i>↓</i>}</div>)}</div></section> }
function Detail({ entry }) { return <section className="software-detail rd-detail"><span className="section-label">R &amp; D / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><StatusLabel status={entry.status} /><a className="button button-ghost" href="/r-and-d">Back to R &amp; D <span>↗</span></a></section> }

function RDPage({ path = '/r-and-d' }) {
  useEffect(() => { const companyButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Company')); companyButton?.classList.add('active'); return () => companyButton?.classList.remove('active') }, [])
  const entry = stages.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page rd-page"><InternalNavigation /><section className="software-shell"><ResearchHeader />{entry ? <Detail entry={entry} /> : <><div className="software-research-list">{stages.map((item) => <ResearchItem entry={item} key={item.slug} />)}</div><ProcessFlow /></>}</section></main>
}

export default RDPage
