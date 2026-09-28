import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'
import './Finance.css'

const sections = [
  ['AI', 'AI-Powered Customer Support', 'Faster and more consistent customer support through an AI-powered business assistant for FAQs, product information, enquiry capture, application guidance, service guidance, and human handover.', 'AI', 'ai-powered-customer-support'],
  ['Voice AI', 'AI Voice Agents', 'Inbound enquiry handling, outbound lead follow-ups, confirmations, reminders, document follow-ups, callback scheduling, qualification, escalation, and CRM call-outcome updates.', 'AI', 'ai-voice-agents'],
  ['CRM', 'CRM & Complete Lead Management', 'A centralized system for website, campaign, and WhatsApp leads, customer profiles, assignment, sales pipeline, reminders, activity history, call outcomes, reporting, and role-based access.', 'Core System', 'crm-complete-lead-management'],
  ['Communication', 'WhatsApp & Communication Automation', 'Automated acknowledgements, lead follow-up, application and document reminders, appointment notifications, customer updates, campaign communication, templates, and human handover.', 'Automation', 'whatsapp-communication-automation'],
  ['Sales', 'Sales & Marketing Automation', 'Campaign lead capture, distribution, qualification, follow-up sequences, pipeline tracking, re-engagement, campaign analytics, conversion analytics, and sales-team reminders.', 'Automation', 'sales-marketing-automation'],
  ['Onboarding', 'Customer Onboarding & Document Workflows', 'Digital forms, document upload and collection, application status, missing-document reminders, employee tasks, approval and review workflows, verification, audit trail, and role-based access.', 'Workflow', 'customer-onboarding-document-workflows'],
  ['Operations', 'Internal Employee & Task Management', 'Employee tasks, work allocation, pending-task reminders, department workflows, approvals, escalations, productivity dashboards, activity tracking, and internal notifications.', 'Operations', 'internal-employee-task-management'],
  ['Analytics', 'Business Analytics & Management Dashboards', 'Lead and enquiry analytics, sales pipeline, conversion, employee and branch comparison, campaign performance, engagement, application and onboarding status, KPIs, and business insights.', 'Intelligence', 'business-analytics-management-dashboards'],
  ['AI', 'AI-Based Scheme / Service Recommendation', 'Configured business rules and available customer information can identify potentially relevant financial products or services, with human escalation and professional oversight.', 'AI', 'ai-based-scheme-service-recommendation'],
  ['Digital', 'Website & Mobile Applications', 'Customer and employee applications with enquiry, lead capture, information, login, profiles, tracking, uploads, notifications, CRM, communication, and analytics integrations.', 'Platform', 'website-mobile-applications'],
  ['Software', 'Custom Software Development & R&D', 'Business-specific software, workflow applications, integrations, AI implementation, automation, analytics, business intelligence, prototypes, product development, and future research.', 'R&D', 'custom-software-development-r-and-d'],
  ['Customer Journey', 'Complete Finance Customer Journey', 'Customer discovery through digital campaign, website, assistant, enquiry, CRM, assignment, voice or staff interaction, guidance, onboarding, documents, review, notifications, dashboards, analytics, and future engagement.', 'System', 'complete-finance-customer-journey'],
  ['Case Study', 'Example Finance Customer Journey', 'The documented Ravi example follows campaign discovery, website assistant, approved general information, CRM lead creation, assignment, voice or callback, WhatsApp next steps, documents, employee review, status tracking, and management metrics.', 'Case Study', 'example-finance-customer-journey'],
  ['Security', 'Security, Privacy & Financial Safety', 'Authentication, access control, role-based permissions, audit logging, retention, protection, secure integrations, and consent controls within approved rules and professional oversight.', 'Safety', 'security-privacy-financial-safety'],
  ['Future', 'Future Finance Technology', 'Advanced customer service, multilingual assistants, voice support, lead scoring, retention analytics, sales forecasting, document intelligence, OCR, personalized communication, dashboards, knowledge management, integrations, analytics, and R&D.', 'Future R&D', 'future-finance-technology'],
]
const customerJourney = ['CUSTOMER', 'WEBSITE / CAMPAIGN / BRANCH / REFERRAL', 'ENQUIRY', 'AI ASSISTANT', 'CRM', 'LEAD ASSIGNMENT', 'AI VOICE AGENT / STAFF', 'PRODUCT / SERVICE GUIDANCE', 'DIGITAL ONBOARDING', 'DOCUMENTS', 'EMPLOYEE REVIEW', 'AUTOMATED NOTIFICATIONS', 'MANAGEMENT DASHBOARD', 'AI / ANALYTICS', 'FUTURE ENGAGEMENT']

function StatusLabel({ status }) { return <span className="software-status">{status}</span> }
function FinanceHeader() { return <div className="software-research-header finance-header"><span className="section-label">FINANCE</span><h1>Technology, AI<br /><em>&amp; R&amp;D.</em></h1><p>Technology-driven systems for modern financial businesses, connecting customer engagement, lead management, sales, service delivery, document workflows, communication, analytics and business decision-making.<a className="master-document-link" href="/Mentneo_Finance_Technology_AI_RnD_Proposal%20(1).docx" target="_blank" rel="noopener noreferrer">VIEW MASTER DOCUMENT <span>→</span></a></p></div> }
function FinanceItem({ entry }) { return <article className="software-research-item finance-item"><div className="software-research-meta"><span>Finance</span><strong>{entry[0]}</strong></div><div className="software-research-copy"><a href={`/finance/${entry[4]}`}><h2>{entry[1]}</h2><p>{entry[2]}</p><StatusLabel status={entry[3]} /></a></div></article> }
function FinanceList() { return <div className="software-research-list">{sections.map((entry) => <FinanceItem entry={entry} key={entry[4]} />)}</div> }
function ArchitectureBlock({ items }) { return <section className="finance-architecture"><span className="section-label">COMPLETE CUSTOMER JOURNEY</span><div>{items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < items.length - 1 && <i>↓</i>}</div>)}</div></section> }
function FinanceDetail({ entry }) { return <section className="software-detail finance-detail"><span className="section-label">FINANCE / {entry[3]}</span><h1>{entry[1]}</h1><p>{entry[2]}</p><StatusLabel status={entry[3]} /><a className="button button-ghost" href="/finance">Back to Finance <span>↗</span></a></section> }

function FinancePage({ path = '/finance' }) {
  useEffect(() => {
    const industriesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Industries'))
    industriesButton?.classList.add('active')
    return () => industriesButton?.classList.remove('active')
  }, [])
  const entry = sections.find((item) => item[4] === path.split('/')[2])
  return <main className="rd-lab-page software-page finance-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Finance sections">{['All', 'AI', 'Automation', 'CRM', 'Analytics'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><FinanceHeader />{entry ? <FinanceDetail entry={entry} /> : <><div id="publications"><FinanceList /></div><ArchitectureBlock items={customerJourney} /></>}</section></main>
}

export default FinancePage
