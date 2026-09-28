import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'
import './ProfessionalServices.css'

const services = [
  { date: 'Aug 26, 2026', title: 'Technology Consulting', description: 'Understanding business requirements, existing systems, operational challenges and technology opportunities to define practical technology strategies.', status: 'Consulting', slug: 'technology-consulting' },
  { date: 'Aug 20, 2026', title: 'AI Strategy & Implementation', description: 'Designing and implementing AI capabilities including AI assistants, AI agents, Voice AI, intelligent workflows, recommendations and AI-powered business systems.', status: 'AI', slug: 'ai-strategy' },
  { date: 'Aug 15, 2026', title: 'Software Development', description: 'Building custom software platforms, web applications, mobile applications, APIs, backend systems and business-specific technology products.', status: 'Development', slug: 'software-development' },
  { date: 'Aug 10, 2026', title: 'Business Automation', description: 'Analyzing existing workflows and transforming repetitive manual processes into automated systems using software, APIs, AI and workflow orchestration.', status: 'Automation', slug: 'business-automation' },
  { date: 'Aug 5, 2026', title: 'Data & Analytics', description: 'Designing data pipelines, analytics systems, business intelligence, dashboards and reporting capabilities that support informed business decisions.', status: 'Intelligence', slug: 'data-analytics' },
  { date: 'Aug 1, 2026', title: 'Digital Transformation', description: 'Connecting people, processes, technology, data, software and automation into scalable digital business ecosystems.', status: 'Transformation', slug: 'digital-transformation' },
]
const serviceAreas = [['Technology Consulting', 'Business and technology assessment, strategy and implementation planning.'], ['AI Consulting', 'AI opportunity analysis, architecture, implementation and deployment.'], ['Software Development', 'Custom applications, platforms, APIs and backend systems.'], ['Automation Consulting', 'Workflow analysis, process automation and integration.'], ['Data & Analytics', 'Data systems, analytics, BI and decision-support solutions.'], ['Cloud & Infrastructure', 'Cloud architecture, deployment, monitoring, scalability and infrastructure planning.'], ['API & Integration', 'Connecting internal applications, SaaS platforms, APIs, communication systems and third-party services.'], ['Digital Transformation', 'Modernizing business processes through connected software, data, AI and automation.']]
const process = ['BUSINESS REQUIREMENT', 'DISCOVERY', 'PROCESS ANALYSIS', 'TECHNOLOGY ASSESSMENT', 'SOLUTION ARCHITECTURE', 'PROTOTYPE / PROOF OF CONCEPT', 'DEVELOPMENT', 'AI / AUTOMATION / INTEGRATION', 'TESTING', 'DEPLOYMENT', 'MONITORING', 'CONTINUOUS IMPROVEMENT']
const automationFlow = ['BUSINESS PROCESS', 'PROCESS ANALYSIS', 'AUTOMATION OPPORTUNITY', 'WORKFLOW DESIGN', 'API / SOFTWARE / AI', 'AUTOMATION', 'MONITORING']
const dataFlow = ['BUSINESS DATA', 'DATA PROCESSING', 'CENTRAL DATA LAYER', 'ANALYTICS / BI', 'INSIGHTS', 'BUSINESS DECISIONS']
const integrationFlow = ['APPLICATION', 'API LAYER', 'INTEGRATION LAYER', 'EXTERNAL SERVICES', 'BUSINESS SYSTEMS']
const transformationFlow = ['PEOPLE', 'PROCESSES', 'SOFTWARE', 'DATA', 'AI', 'AUTOMATION', 'INTEGRATIONS', 'CONNECTED DIGITAL BUSINESS']

function StatusLabel({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header professional-header"><span className="section-label">PROFESSIONAL SERVICES</span><h1>Technology, Strategy<br /><em>&amp; Execution.</em></h1><p>Delivering technology strategy, software development, AI implementation, automation, data systems, integration and digital transformation services designed around real business requirements.</p></div> }
function ServiceItem({ entry }) { return <article className="software-research-item professional-item"><div className="software-research-meta"><span>Professional Services</span><time>{entry.date}</time></div><div className="software-research-copy"><a href={`/professional-services/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><StatusLabel status={entry.status} /></a></div></article> }
function ServiceList() { return <div className="software-research-list">{services.map((entry) => <ServiceItem entry={entry} key={entry.slug} />)}</div> }
function ArchitectureBlock({ title, items }) { return <section className="professional-block"><span className="section-label">{title}</span><div>{items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < items.length - 1 && <i>↓</i>}</div>)}</div></section> }
function Areas() { return <section className="professional-areas"><span className="section-label">SERVICE AREAS</span><div>{serviceAreas.map(([title, text]) => <div key={title}><h2>{title}</h2><p>{text}</p></div>)}</div></section> }
function Detail({ entry }) { return <section className="software-detail professional-detail"><span className="section-label">PROFESSIONAL SERVICES / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><StatusLabel status={entry.status} /><a className="button button-ghost" href="/professional-services">Back to Professional Services <span>↗</span></a></section> }

function ProfessionalServicesPage({ path = '/professional-services' }) {
  useEffect(() => {
    const industriesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Industries'))
    industriesButton?.classList.add('active')
    return () => industriesButton?.classList.remove('active')
  }, [])
  const detail = services.find((entry) => entry.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page professional-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Professional Services sections">{['All', 'Consulting', 'AI', 'Development', 'Automation', 'Data'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#services" key={category}>{category}</a>)}</nav><ResearchHeader />{detail ? <Detail entry={detail} /> : <><div id="services"><ServiceList /></div><Areas /><ArchitectureBlock title="END-TO-END SERVICE PROCESS / DELIVERY FRAMEWORK" items={process} /><ArchitectureBlock title="WORKFLOW & BUSINESS AUTOMATION" items={automationFlow} /><ArchitectureBlock title="DATA INTELLIGENCE & ANALYTICS" items={dataFlow} /><ArchitectureBlock title="API & SYSTEM INTEGRATION" items={integrationFlow} /><ArchitectureBlock title="CONNECTED BUSINESS TRANSFORMATION" items={transformationFlow} /></>}</section></main>
}

export default ProfessionalServicesPage
