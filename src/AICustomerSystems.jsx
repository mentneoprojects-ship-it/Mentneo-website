import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation AI Customer Systems', 'Developing intelligent customer systems that understand customer needs, provide personalized assistance, automate interactions, and deliver seamless customer experiences.'],
  ['Aug 20, 2026', 'Intelligent Customer Support', 'Researching AI-powered customer support systems capable of understanding conversations, resolving requests, finding information, and assisting customers in real time.'],
  ['Aug 15, 2026', 'AI Customer Experience Intelligence', 'Exploring intelligent systems that analyze customer behavior, preferences, feedback, and interactions to create personalized experiences.'],
  ['Aug 10, 2026', 'Autonomous Customer Service', 'Developing AI systems that can independently handle customer inquiries, workflows, follow-ups, escalations, and service operations.'],
  ['Aug 5, 2026', 'Future of AI Customer Interaction', 'Researching conversational AI, voice agents, intelligent assistants, personalization, predictive customer intelligence, and autonomous customer systems.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function AICustomerSystemsPage() {
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
          <span className="section-label">AI CUSTOMER SYSTEMS</span>
          <h1>AI Customer Systems</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>AI Customer Systems</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/ai-customer-systems/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default AICustomerSystemsPage
