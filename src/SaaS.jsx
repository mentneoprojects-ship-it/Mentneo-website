import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'
import './SaaS.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'SaaS Platform Architecture', description: 'Designing scalable SaaS platforms with secure application layers, APIs, databases, authentication, integrations and cloud infrastructure.', status: 'Research', slug: 'platform-architecture' },
  { date: 'Aug 20, 2026', title: 'Multi-Tenant SaaS Systems', description: 'Exploring multi-tenant application architecture, tenant isolation, user management, permissions, configuration and scalable infrastructure.', status: 'Prototype', slug: 'multi-tenant-systems' },
  { date: 'Aug 15, 2026', title: 'AI-Powered SaaS', description: 'Integrating AI capabilities into SaaS products including AI assistants, automation, recommendations, analytics and intelligent workflows.', status: 'Experiment', slug: 'ai-powered-saas' },
  { date: 'Aug 10, 2026', title: 'SaaS Automation', description: 'Building workflow-driven SaaS systems that automate repetitive business processes, notifications, approvals, tasks and operational workflows.', status: 'Development', slug: 'saas-automation' },
  { date: 'Aug 5, 2026', title: 'SaaS Data & Analytics', description: 'Creating centralized data systems with analytics, reporting, dashboards, business intelligence and actionable product insights.', status: 'Development', slug: 'data-analytics' },
  { date: 'Aug 1, 2026', title: 'Enterprise SaaS Platforms', description: 'Exploring scalable SaaS platforms for enterprise users with advanced access control, integrations, security, monitoring and extensible architecture.', status: 'Research', slug: 'enterprise-saas' },
]
const architecture = ['USERS', 'WEB / MOBILE APPLICATION', 'AUTHENTICATION', 'SAAS APPLICATION LAYER', 'API LAYER', 'BUSINESS LOGIC', 'DATABASE', 'AI / AUTOMATION', 'INTEGRATIONS', 'ANALYTICS', 'CLOUD INFRASTRUCTURE']
const capabilities = [['Product Development', 'Software products designed around specific customer and business requirements.'], ['Cloud Architecture', 'Scalable cloud infrastructure supporting SaaS applications and services.'], ['API Engineering', 'Secure APIs connecting applications, services, data and third-party systems.'], ['Authentication & Access', 'User authentication, roles, permissions and tenant-level access control.'], ['Workflow Automation', 'Automated processes, notifications, approvals, tasks and business workflows.'], ['AI Integration', 'AI assistants, recommendations, automation and AI-powered product features.'], ['Analytics', 'Product usage, business metrics, operational analytics and management insights.'], ['Integrations', 'Third-party APIs, communication services, payments, CRM, ERP and other business systems.']]
const lifecycle = ['PROBLEM', 'RESEARCH', 'PRODUCT DEFINITION', 'UX / UI', 'ARCHITECTURE', 'DEVELOPMENT', 'API & DATABASE', 'AI / AUTOMATION', 'TESTING', 'DEPLOYMENT', 'MONITORING', 'CONTINUOUS IMPROVEMENT']

function StatusLabel({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header saas-header"><span className="section-label">SAAS</span><h1>Software as a<br /><em>Service.</em></h1><p>Designing scalable software platforms that deliver applications, workflows, automation, data, AI capabilities and business services through modern cloud-based systems.</p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item saas-item"><div className="software-research-meta"><span>SaaS</span><time>{entry.date}</time></div><div className="software-research-copy"><a href={`/saas/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><StatusLabel status={entry.status} /></a></div></article> }
function ArchitectureBlock({ title, items }) { return <section className="saas-block"><span className="section-label">{title}</span><div>{items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < items.length - 1 && <i>↓</i>}</div>)}</div></section> }
function CapabilityBlock() { return <section className="saas-capabilities"><span className="section-label">SAAS CAPABILITIES</span><div>{capabilities.map(([title, text]) => <div key={title}><h2>{title}</h2><p>{text}</p></div>)}</div></section> }
function SaaSDetail({ entry }) { return <section className="software-detail saas-detail"><span className="section-label">SAAS / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><StatusLabel status={entry.status} /><a className="button button-ghost" href="/saas">Back to SaaS <span>↗</span></a></section> }

function SaaSPage({ path = '/saas' }) {
  useEffect(() => {
    const industriesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Industries'))
    industriesButton?.classList.add('active')
    return () => industriesButton?.classList.remove('active')
  }, [])
  const entry = researchEntries.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page software-page saas-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="SaaS sections">{['All', 'Architecture', 'AI', 'Automation', 'Analytics'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <SaaSDetail entry={entry} /> : <><div className="software-research-list" id="publications">{researchEntries.map((item) => <ResearchItem entry={item} key={item.slug} />)}</div><ArchitectureBlock title="SAAS SYSTEM ARCHITECTURE" items={architecture} /><CapabilityBlock /><ArchitectureBlock title="SAAS PRODUCT LIFECYCLE / PRODUCT DEVELOPMENT" items={lifecycle} /></>}</section></main>
}

export default SaaSPage
