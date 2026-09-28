import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation Large Language Models', 'Researching advanced language models with improved reasoning, knowledge understanding, context processing, and intelligent problem-solving capabilities.'],
  ['Aug 20, 2026', 'Advanced Model Reasoning', 'Exploring improved reasoning, planning, inference, mathematical problem solving, and complex task capabilities in large language models.'],
  ['Aug 15, 2026', 'Multimodal Language Models', 'Researching models capable of understanding and generating text, images, audio, video, and other forms of information.'],
  ['Aug 10, 2026', 'Efficient & Scalable Language Models', 'Developing efficient language models with improved performance, lower computational requirements, scalability, and reliability.'],
  ['Aug 5, 2026', 'Future of Large Language Models', 'Exploring emerging architectures, training methods, model capabilities, safety, alignment, and future applications of LLM technology.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function LLMsPage() {
  return (
    <main className="rd-lab-page">
      <InternalNavigation />
      <section className="rd-lab-shell">
        <nav className="rd-lab-categories" aria-label="Publication categories">
          {['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}
        </nav>
        <div className="rd-lab-heading">
          <span className="section-label">LLMs</span>
          <h1>Large Language Models</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>LLMs</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/llms/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default LLMsPage
