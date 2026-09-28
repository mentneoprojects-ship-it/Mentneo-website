import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation AI Voice Solutions', 'Developing intelligent voice solutions that understand natural conversations, provide real-time responses, automate interactions, and create human-like customer experiences.'],
  ['Aug 20, 2026', 'Intelligent Voice Agents', 'Researching AI-powered voice agents capable of understanding customer requests, answering questions, performing tasks, and handling conversations autonomously.'],
  ['Aug 15, 2026', 'Enterprise Voice Automation', 'Developing voice automation solutions for customer support, sales, appointment scheduling, service operations, and business communication.'],
  ['Aug 10, 2026', 'Real-Time Conversational Voice AI', 'Exploring low-latency speech recognition, natural language understanding, intelligent reasoning, and real-time voice responses.'],
  ['Aug 5, 2026', 'Future of Voice Intelligence', 'Researching natural voice generation, multilingual communication, contextual understanding, personalized conversations, and autonomous voice systems.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function AIVoiceSolutionsPage() {
  useEffect(() => {
    const solutionButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Solutions'))
    solutionButton?.classList.add('active')
    return () => solutionButton?.classList.remove('active')
  }, [])

  return (
    <main className="rd-lab-page">
      <InternalNavigation />
      <section className="rd-lab-shell">
        <nav className="rd-lab-categories" aria-label="Publication categories">
          {['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}
        </nav>
        <div className="rd-lab-heading">
          <span className="section-label">AI VOICE SOLUTIONS</span>
          <h1>AI Voice Solutions</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>AI Voice Solutions</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/ai-voice-solutions/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AIVoiceSolutionsPage
