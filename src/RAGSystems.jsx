import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'

const publications = [
  ['Aug 26, 2026', 'Next-Generation Retrieval-Augmented Generation', 'Researching advanced RAG systems that combine powerful retrieval, contextual understanding, and language models to provide accurate and reliable AI responses.'],
  ['Aug 20, 2026', 'Advanced Knowledge Retrieval', 'Exploring intelligent retrieval techniques, semantic search, vector databases, document understanding, and context-aware information retrieval.'],
  ['Aug 15, 2026', 'Enterprise RAG Systems', 'Developing scalable RAG architectures for enterprise knowledge bases, internal documents, customer support, analytics, and business intelligence.'],
  ['Aug 10, 2026', 'Multimodal RAG', 'Researching RAG systems capable of retrieving and understanding information across text, images, documents, audio, and other data formats.'],
  ['Aug 5, 2026', 'Reliable & Context-Aware AI', 'Exploring techniques for improving retrieval quality, reducing hallucinations, grounding AI responses, and delivering trustworthy information.'],
]

const slugify = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

function RAGSystemsPage() {
  return (
    <main className="rd-lab-page">
      <InternalNavigation />
      <section className="rd-lab-shell">
        <nav className="rd-lab-categories" aria-label="Publication categories">
          {['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}
        </nav>
        <div className="rd-lab-heading">
          <span className="section-label">RAG SYSTEMS</span>
          <h1>RAG Systems</h1>
        </div>
        <div className="rd-lab-list" id="publications">
          {publications.map(([date, title, description]) => (
            <article className="rd-lab-item" key={title}>
              <div className="rd-lab-meta"><span>RAG Systems</span><time>{date}</time></div>
              <div className="rd-lab-copy"><a href={`/rag-systems/${slugify(title)}`}><h2>{title}</h2><p>{description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default RAGSystemsPage
