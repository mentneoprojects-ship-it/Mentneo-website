import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'
import './RealEstate.css'

const sections = [
  ['AI', 'AI-Powered Customer Support', '24/7 digital property assistant for enquiries, information, and customer support.', 'AI', 'ai-powered-customer-support'],
  ['Voice AI', 'AI Voice Agents', 'Automated voice communication for enquiries, follow-ups, scheduling, and service operations.', 'AI', 'ai-voice-agents'],
  ['CRM', 'CRM & Lead Management', 'Central record for enquiries, customers, sales stages, activities, and complete lead management.', 'Core System', 'crm-lead-management'],
  ['Communication', 'WhatsApp Automation', 'Structured customer communication, updates, follow-ups, and workflow automation through WhatsApp.', 'Automation', 'whatsapp-automation'],
  ['Sales', 'Sales & Marketing Automation', 'Automated lead capture, assignment, follow-up, campaign support, and site visits.', 'Automation', 'sales-marketing-automation'],
  ['Onboarding', 'Customer Onboarding', 'Connected document, verification, communication, and onboarding workflows for customers.', 'Workflow', 'customer-onboarding'],
  ['Operations', 'Employee & Task Management', 'Task assignment, team coordination, operational tracking, and department-level execution.', 'Operations', 'employee-task-management'],
  ['Analytics', 'Business Analytics', 'Management visibility across sales, marketing, inventory, revenue, and business performance.', 'Intelligence', 'business-analytics'],
  ['AI', 'AI Project / Plot Recommendation', 'Intelligent recommendations based on project, plot, customer requirements, and available information.', 'AI', 'ai-project-plot-recommendation'],
  ['Applications', 'Website & Mobile Applications', 'Digital experiences connecting customers, enquiries, communication, and operational services.', 'Platform', 'website-mobile-applications'],
  ['Engineering', 'Custom Software Development', 'Purpose-built software shaped around business workflows, requirements, and technology needs.', 'Development', 'custom-software-development'],
  ['Analytics', 'Data Analytics & Business Intelligence', 'Data processing, reporting, dashboards, and intelligence for informed business decisions.', 'Intelligence', 'data-analytics-business-intelligence'],
  ['AI', 'AI Across Departments', 'Applying AI capabilities across customer support, sales, operations, finance, HR, and management.', 'AI', 'ai-across-departments'],
  ['Discovery', 'Existing Process Analysis', 'Study of current processes, systems, bottlenecks, integrations, and opportunities for improvement.', 'Research', 'existing-process-analysis'],
  ['Research', 'Future AI & Technology', 'Continuous exploration of emerging AI, automation, data, software, and digital technology.', 'R&D', 'future-ai-technology'],
  ['Governance', 'Security & Governance', 'Security, access control, privacy, governance, monitoring, and responsible technology practices.', 'Foundation', 'security-governance'],
  ['Integration', 'Integration Requirements', 'Connections between CRM, communication, applications, data, automation, and external services.', 'Architecture', 'integration-requirements'],
  ['Infrastructure', 'Additional Technology', 'Cloud, servers, databases, APIs, storage, monitoring, and supporting technology foundations.', 'Foundation', 'additional-technology'],
  ['Architecture', 'Recommended Solution Stack', 'A considered technology stack aligned to the required applications, integrations, data, and AI services.', 'Architecture', 'recommended-solution-stack'],
  ['Roadmap', 'Phase-Wise Roadmap', 'A phased path from analysis and foundations through implementation, deployment, and improvement.', 'Implementation', 'phase-wise-roadmap'],
  ['Architecture', 'Complete End-to-End Architecture', 'A connected ecosystem from customer contact through CRM, automation, support, data, analytics, and decisions.', 'System', 'complete-end-to-end-architecture'],
  ['Management', 'Management Architecture', 'Connected visibility across departments, operations, performance, risks, and business decisions.', 'Management', 'management-architecture'],
  ['Impact', 'Overall Business Impact', 'A unified technology ecosystem designed to improve responsiveness, efficiency, visibility, and scalability.', 'Outcome', 'overall-business-impact'],
  ['Recommendation', 'Final Recommendation', 'Proceed with verified requirements, phased implementation, secure integrations, and continuous improvement.', 'Direction', 'final-recommendation'],
]

const architecture = ['CUSTOMERS', 'WEBSITE / WHATSAPP / PHONE', 'API / INTEGRATION LAYER', 'AI CUSTOMER ASSISTANT', 'LEAD CAPTURE / CRM', 'SALES AUTOMATION', 'AI VOICE AGENT', 'WHATSAPP', 'SITE VISIT', 'PROJECT / PLOT RECOMMENDATION', 'PLOT INVENTORY', 'BOOKING', 'DOCUMENT WORKFLOW', 'PAYMENT / REGISTRATION', 'CUSTOMER SUPPORT', 'CENTRAL BUSINESS DATA', 'ANALYTICS & BI', 'ADMIN DASHBOARD', 'MANAGEMENT DECISIONS', 'FUTURE AI / R&D']

function ResearchStatus({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header real-estate-header"><span className="section-label">REAL ESTATE</span><h1>Technology<br /><em>Transformation.</em></h1><p>A connected technology ecosystem for real-estate marketing, enquiries, CRM, communication, sales follow-up, site visits, plot inventory, booking, documents, customer support, analytics and management.<a className="master-document-link" href="/Real_Estate_Technology_AI_Automation_Master_Documentation%20(1)(2).docx" target="_blank" rel="noopener noreferrer">VIEW MASTER DOCUMENT <span>→</span></a></p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item real-estate-item"><div className="software-research-meta"><span>Real Estate</span><strong>{entry[0]}</strong></div><div className="software-research-copy"><a href={`/real-estate/${entry[4]}`}><h2>{entry[1]}</h2><p>{entry[2]}</p><ResearchStatus status={entry[3]} /></a></div></article> }
function ResearchList() { return <div className="software-research-list" id="publications">{sections.map((entry) => <ResearchItem entry={entry} key={entry[4]} />)}</div> }
function Architecture() { return <section className="real-estate-architecture"><span className="section-label">END-TO-END ARCHITECTURE</span><div>{architecture.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < architecture.length - 1 && <i>↓</i>}</div>)}</div></section> }
function Detail({ entry }) { return <section className="software-detail real-estate-detail"><span className="section-label">REAL ESTATE / {entry[3]}</span><h1>{entry[1]}</h1><p>{entry[2]}</p><ResearchStatus status={entry[3]} /><a className="button button-ghost" href="/real-estate">Back to Real Estate <span>↗</span></a></section> }

function RealEstatePage({ path = '/real-estate' }) {
  useEffect(() => {
    const industriesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Industries'))
    industriesButton?.classList.add('active')
    return () => industriesButton?.classList.remove('active')
  }, [])
  const entry = sections.find((item) => item[4] === path.split('/')[2])
  return <main className="rd-lab-page software-page real-estate-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Real Estate sections">{['All', 'AI', 'Automation', 'CRM', 'Analytics'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <Detail entry={entry} /> : <><ResearchList /><Architecture /></>}</section></main>
}

export default RealEstatePage
