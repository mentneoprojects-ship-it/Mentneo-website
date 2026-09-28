import { useEffect, useState } from 'react'
import { InternalNavigation } from './App.jsx'
import './Contact.css'

const contactSections = [
  ['General Inquiries', 'Start a Conversation', 'Have an idea, project, technology requirement, or business challenge? Let\'s discuss how technology, AI, automation, and intelligent systems can help turn the idea into a practical solution.'],
  ['Technology & AI', 'AI & Technology Solutions', 'Connect with us regarding AI systems, AI agents, Voice AI, computer vision, data intelligence, automation, software platforms, and custom AI solutions.'],
  ['Business', 'Business & Enterprise', 'Discuss enterprise technology requirements, digital transformation, workflow automation, intelligent business systems, and scalable technology platforms.'],
  ['Research & Innovation', 'Research & Collaboration', 'Interested in AI research, emerging technologies, experimental systems, technology partnerships, or research collaboration? Let\'s explore the possibilities.'],
  ['Projects', 'Start Your Project', 'Share your project requirements, objectives, technology stack, timeline, and business goals. Our team can evaluate the opportunity and identify the right technology approach.'],
]

function ContactHeader() { return <div className="contact-research-header"><span className="section-label">CONTACT</span><h1>Let&apos;s Build What<br /><em>Comes Next.</em></h1><p>Connect with us to discuss AI, software, automation, data intelligence, technology research, digital transformation, or a custom technology initiative.</p></div> }
function ContactSection({ entry }) { return <article className="contact-research-item"><div className="contact-research-meta"><span>Contact</span><strong>{entry[0]}</strong></div><div className="contact-research-copy"><h2>{entry[1]}</h2><p>{entry[2]}</p></div></article> }
function ContactInfo() { return <section className="contact-info"><span className="section-label">CONTACT INFORMATION</span><div>{[['GENERAL INQUIRIES', 'hello@mentneo.com'], ['BUSINESS', 'business@company.com'], ['PARTNERSHIPS', 'partnerships@company.com']].map(([label, email]) => <div key={label}><span>{label}</span><a href={`mailto:${email}`}>{email}</a></div>)}</div></section> }
function ContactForm() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const submit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = data.get('name')?.toString().trim()
    const email = data.get('email')?.toString().trim()
    const message = data.get('message')?.toString().trim()
    if (!name || !email || !message) return setError('Please complete your name, email, and message.')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return setError('Please enter a valid email address.')
    setError('')
    setSent(true)
  }
  return <section className="contact-form-section"><span className="section-label">START A CONVERSATION</span>{sent ? <div className="contact-success"><strong>MESSAGE SENT</strong><p>Thank you for reaching out. We&apos;ll get back to you soon.</p></div> : <form onSubmit={submit} noValidate><div className="contact-form-grid"><label>Name<input name="name" required /></label><label>Email<input name="email" type="email" required /></label><label>Company<input name="company" /></label><label>Phone<input name="phone" type="tel" /></label><label className="contact-select">Project Type<select name="projectType" defaultValue=""><option value="" disabled>Select a project type</option><option>AI Systems</option><option>AI Automation</option><option>AI Agents</option><option>Voice AI</option><option>Data Intelligence</option><option>Software Development</option><option>Enterprise Solutions</option><option>Digital Transformation</option><option>Custom AI</option><option>Other</option></select></label><label className="contact-message">Message<textarea name="message" rows="6" required /></label></div>{error && <p className="contact-error" role="alert">{error}</p>}<button className="button button-primary" type="submit">Send Message <span>↗</span></button></form>}</section>
}

function ContactPage() {
  useEffect(() => {
    const companyButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Company'))
    companyButton?.classList.add('active')
    return () => companyButton?.classList.remove('active')
  }, [])
  return <main className="contact-page"><InternalNavigation /><section className="contact-shell"><ContactHeader /><div className="contact-list">{contactSections.map((entry) => <ContactSection entry={entry} key={entry[1]} />)}</div><ContactForm /><ContactInfo /></section></main>
}

export default ContactPage
