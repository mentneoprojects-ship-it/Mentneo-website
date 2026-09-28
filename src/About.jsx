import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './About.css'

const sections = [
  { category: 'Company', title: 'Artificial Intelligence Research & Development', description: 'Mentneo is an artificial intelligence research and development company focused on building advanced intelligent systems and technologies.', status: 'Company', slug: 'company' },
  { category: 'Research', title: 'AI Research & Development', description: 'Our work spans AI research, model development, intelligent systems, scalable technology platforms, experimentation, and real-world deployment.', status: 'Research & Development', slug: 'research' },
  { category: 'Platforms', title: 'Advanced Intelligent Systems', description: 'Focus on developing advanced intelligent systems and technologies designed to support real-world applications and scalable deployment.', status: 'Technology', slug: 'technology' },
  { category: 'R&D', title: 'Continuous Research & Experimentation', description: 'We are committed to advancing AI through continuous research, experimentation, model development, technology development, and real-world deployment.', status: 'Innovation', slug: 'innovation' },
  { category: 'Platforms', title: 'Scalable AI Platforms', description: 'Build scalable platforms designed to support advanced AI technologies and real-world deployment.', status: 'Platform Development', slug: 'platforms' },
  { category: 'Deployment', title: 'From Research to Reality', description: 'Connect research and experimentation with practical, real-world technology deployment.', status: 'Deployment', slug: 'deployment' },
]
const focus = [['AI Research', 'Research into artificial intelligence and advanced intelligent technologies.'], ['Model Development', 'Development and experimentation around AI models and intelligent systems.'], ['Intelligent Systems', 'Building advanced intelligent systems for practical applications.'], ['Scalable Platforms', 'Creating scalable technology platforms designed for real-world deployment.'], ['Continuous Innovation', 'Advancing AI through continuous research and experimentation.']]
const journey = ['AI RESEARCH', 'MODEL DEVELOPMENT', 'INTELLIGENT SYSTEMS', 'SCALABLE PLATFORMS', 'REAL-WORLD DEPLOYMENT', 'CONTINUOUS R&D']
const workflow = ['RESEARCH', 'EXPERIMENTATION', 'MODEL DEVELOPMENT', 'SYSTEM DEVELOPMENT', 'SCALABLE PLATFORM', 'REAL-WORLD DEPLOYMENT', 'CONTINUOUS IMPROVEMENT']

function StatusLabel({ status }) { return <span className="software-status">{status}</span> }
function AboutHeader() { return <div className="about-header"><span className="section-label">ABOUT</span><h1>Artificial Intelligence<br /><em>Research &amp; Development.</em></h1><p>Mentneo is an artificial intelligence research and development company focused on building advanced intelligent systems and technologies.<br /><br />Our work spans AI research, model development, and the creation of scalable platforms designed to push the boundaries of innovation.<br /><br />We are committed to advancing AI through continuous research, experimentation, and real-world deployment.</p></div> }
function AboutSection({ entry }) { return <article className="about-item"><div className="about-meta"><span>About</span><strong>{entry.category}</strong></div><div className="about-copy"><a href={`/about/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><StatusLabel status={entry.status} /></a></div></article> }
function CompanyInfo() { return <section className="company-info"><span className="section-label">COMPANY INFORMATION</span><div>{[['Company', 'Mentneo'], ['Industry', 'Research Services'], ['Company Size', '11–50 employees'], ['Headquarters', 'Hyderabad, Hyderabad'], ['Founded', '2025'], ['Specialties', 'AI Research / Artificial Intelligence / Research & Development / Model Development / Intelligent Systems / Scalable Platforms / Technology Innovation']].map(([label, value]) => <div key={label}><span>{label}</span><p>{value}</p></div>)}<div><span>Website</span><a href="https://mentneo.com" target="_blank" rel="noopener noreferrer">mentneo.com</a></div><div><span>Phone</span><a href="tel:9182146476">+91 82146 476</a></div><div><span>LinkedIn</span><span>Not configured</span></div></div></section> }
function GridSection({ title, items }) { return <section className="about-grid-section"><span className="section-label">{title}</span><div>{items.map(([heading, text]) => <div key={heading}><h2>{heading}</h2><p>{text}</p></div>)}</div></section> }
function Timeline({ title, items }) { return <section className="about-flow"><span className="section-label">{title}</span><div>{items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < items.length - 1 && <i>↓</i>}</div>)}</div></section> }
function AboutDetail({ entry }) { return <section className="about-detail"><span className="section-label">ABOUT / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><StatusLabel status={entry.status} /><a className="button button-ghost" href="/about">Back to About <span>↗</span></a></section> }

function AboutPage({ path = '/about' }) {
  useEffect(() => {
    const companyButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Company'))
    companyButton?.classList.add('active')
    return () => companyButton?.classList.remove('active')
  }, [])
  const entry = sections.find((item) => item.slug === path.split('/')[2])
  return <main className="about-page"><InternalNavigation /><section className="about-shell"><AboutHeader />{entry ? <AboutDetail entry={entry} /> : <><div className="about-list">{sections.map((entry) => <AboutSection entry={entry} key={entry.slug} />)}</div><GridSection title="CORE FOCUS" items={focus} /><Timeline title="COMPANY JOURNEY" items={['FOUNDED — 2025', ...journey]} /><Timeline title="RESEARCH TO DEPLOYMENT" items={workflow} /><CompanyInfo /><section className="about-contact"><span className="section-label">MENTNEO</span><h2>Artificial Intelligence<br /><em>Research &amp; Development</em></h2><div><span>Website</span><a href="https://mentneo.com" target="_blank" rel="noopener noreferrer">mentneo.com</a><span>Phone</span><a href="tel:9182146476">+91 82146 476</a><span>Industry</span><strong>Research Services</strong><span>Company Size</span><strong>11–50 employees</strong><span>Headquarters</span><strong>Hyderabad, Hyderabad</strong><span>Founded</span><strong>2025</strong></div></section></>}</section></main>
}

export default AboutPage
