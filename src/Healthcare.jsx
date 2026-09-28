import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './SoftwareDevelopment.css'
import './Healthcare.css'

const healthcareEntries = [
  ['Connectivity', 'Hospital Connectivity', 'A connected digital model designed to improve the relationship between hospitals, doctors and patients.', 'Research', 'hospital-connectivity'],
  ['Digital Access', 'QR-Based Direct OP Creation', 'Patients can scan a hospital QR code, enter basic information, select a department or doctor, and receive an OP or appointment confirmation. Digital OP and manual OP support elderly and non-digital users.', 'Prototype', 'qr-based-direct-op-creation'],
  ['AI', 'AI Patient Monitoring Agent', 'An AI agent can support medicine reminders, follow-up notifications, check-ins, and patient engagement according to the doctor\'s care plan. It does not replace medical advice or clinical decisions.', 'AI Research', 'ai-patient-monitoring-agent'],
  ['Communication', 'Dedicated Hospital Healthcare Number', 'A dedicated hospital connection can collect information, support categorization, route patients to departments or specialists, and maintain continuity of care.', 'Development', 'dedicated-hospital-healthcare-number'],
  ['AI Analysis', 'AI-Assisted Health Information Analysis', 'Available information such as age, symptoms, and previous healthcare context can assist categorization and routing. Diagnosis and treatment remain with qualified professionals.', 'Research', 'ai-assisted-health-information-analysis'],
  ['Personalization', 'Personalized Health Predictions', 'General insights based on available age, height, weight, gender, and activity information, including BMI, activity targets, healthy ranges, and lifestyle guidance.', 'AI Research', 'personalized-health-predictions'],
  ['Patient Journey', 'Complete Patient Journey', 'A documented path from hospital discovery and registration through consultation, treatment, follow-up, hospital connection, routing, and general health insights.', 'System', 'complete-patient-journey'],
  ['Case Study', 'Akshara Hospital — Patient Journey', 'The documented example demonstrates QR OP creation, manual registration, medicine and follow-up reminders, hospital connection, routing, and general health insights.', 'Case Study', 'akshara-hospital-patient-journey'],
  ['Hospital', 'Hospital Benefits', 'Improved patient experience, reduced registration workload, better follow-up, continuous connection, better routing, retention, and digital transformation with manual support.', 'Impact', 'hospital-benefits'],
  ['Architecture', 'Proposed System Architecture', 'A connected architecture linking patient interfaces, hospital operations, an AI agent layer, structured analysis, specialist routing, general health insights, and consent.', 'Architecture', 'proposed-system-architecture'],
  ['Privacy', 'Privacy, Consent & Medical Safety', 'Privacy, security, patient consent, access control, audit, retention, and authorized access keep AI supportive of professionals rather than a replacement for clinical decisions.', 'Safety', 'privacy-consent-medical-safety'],
  ['Future', 'Future Healthcare Technology', 'Online appointments, queue tracking, digital prescriptions, reports, follow-up workflows, patient and hospital dashboards, multilingual and voice assistance, device integration, and clinically validated alerts.', 'Future R&D', 'future-healthcare-technology'],
]

const patientFlow = ['HOSPITAL DISCOVERY', 'QR OP / MANUAL REGISTRATION', 'DOCTOR CONSULTATION', 'PRESCRIPTION & TREATMENT', 'AI MEDICINE / FOLLOW-UP REMINDERS', 'DEDICATED HOSPITAL CONNECTION', 'AI-ASSISTED INFORMATION ANALYSIS', 'DEPARTMENT / SPECIALIST RECOMMENDATION', 'PERSONALIZED GENERAL HEALTH INSIGHTS']
const architecture = ['PATIENT INTERFACE / QR / WEB / MOBILE / COMMUNICATION', 'HOSPITAL INTERFACE / OP / APPOINTMENT / FOLLOW-UP', 'AI AGENT LAYER / REMINDERS / PATIENT INTERACTION / ROUTING', 'HEALTHCARE ANALYSIS / STRUCTURED INFORMATION ANALYSIS', 'HOSPITAL RECOMMENDATION / DEPARTMENT / SPECIALIST ROUTING', 'HEALTH INSIGHTS / GENERAL PERSONALIZED GUIDANCE', 'SECURITY & CONSENT / AUTHENTICATION / ACCESS / PRIVACY']

function StatusLabel({ status }) { return <span className="software-status">{status}</span> }
function ResearchHeader() { return <div className="software-research-header healthcare-header"><span className="section-label">HEALTHCARE</span><h1>Connected Healthcare<br /><em>&amp; AI.</em></h1><p>Technology-driven healthcare systems connecting hospitals, doctors and patients through digital access, AI-assisted patient support, communication, follow-up and personalized health insights.<a className="master-document-link" href="/Mentneo_Hospital_Connectivity_AI_Healthcare_Proposal%20(1)%20(1).docx" target="_blank" rel="noopener noreferrer">VIEW MASTER DOCUMENT <span>→</span></a></p></div> }
function ResearchItem({ entry }) { return <article className="software-research-item healthcare-item"><div className="software-research-meta"><span>Healthcare</span><strong>{entry[0]}</strong></div><div className="software-research-copy"><a href={`/healthcare/${entry[4]}`}><h2>{entry[1]}</h2><p>{entry[2]}</p><StatusLabel status={entry[3]} /></a></div></article> }
function ResearchList() { return <div className="software-research-list">{healthcareEntries.map((entry) => <ResearchItem entry={entry} key={entry[4]} />)}</div> }
function FlowBlock({ title, items }) { return <section className="healthcare-flow"><span className="section-label">{title}</span><div>{items.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item}</strong>{index < items.length - 1 && <i>↓</i>}</div>)}</div></section> }
function HealthcareDetail({ entry }) { return <section className="software-detail healthcare-detail"><span className="section-label">HEALTHCARE / {entry[3]}</span><h1>{entry[1]}</h1><p>{entry[2]}</p><StatusLabel status={entry[3]} /><a className="button button-ghost" href="/healthcare">Back to Healthcare <span>↗</span></a></section> }

function HealthcarePage({ path = '/healthcare' }) {
  useEffect(() => {
    const industriesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Industries'))
    industriesButton?.classList.add('active')
    return () => industriesButton?.classList.remove('active')
  }, [])
  const entry = healthcareEntries.find((item) => item[4] === path.split('/')[2])
  return <main className="rd-lab-page software-page healthcare-page"><InternalNavigation /><section className="software-shell"><nav className="rd-lab-categories" aria-label="Healthcare sections">{['All', 'AI', 'Connectivity', 'Automation', 'Analytics'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <HealthcareDetail entry={entry} /> : <><div id="publications"><ResearchList /></div><FlowBlock title="PATIENT JOURNEY" items={patientFlow} /><FlowBlock title="PROPOSED SYSTEM ARCHITECTURE" items={architecture} /></>}</section></main>
}

export default HealthcarePage
