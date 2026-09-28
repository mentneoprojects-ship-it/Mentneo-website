import { useEffect } from 'react'
import { InternalNavigation } from './App.jsx'
import './RAndDLab.css'
import './VoiceAI.css'

const researchEntries = [
  { date: 'Aug 26, 2026', title: 'Next-Generation Voice Intelligence', description: 'Exploring advanced voice systems capable of understanding natural speech, context, intent, emotion, and complex conversations.', status: 'Research', slug: 'next-generation-voice-intelligence' },
  { date: 'Aug 20, 2026', title: 'Real-Time Conversational AI', description: 'Researching low-latency voice interactions, real-time reasoning, contextual understanding, natural responses, and continuous conversations.', status: 'Experiment', slug: 'real-time-conversational-ai' },
  { date: 'Aug 15, 2026', title: 'Autonomous AI Voice Agents', description: 'Developing intelligent voice agents capable of answering questions, performing tasks, accessing tools, handling workflows, and communicating autonomously.', status: 'Prototype', slug: 'autonomous-ai-voice-agents' },
  { date: 'Aug 10, 2026', title: 'Natural Speech & Voice Understanding', description: 'Exploring speech recognition, language understanding, speaker context, intent detection, multilingual communication, and conversational intelligence.', status: 'Research', slug: 'natural-speech-understanding' },
  { date: 'Aug 5, 2026', title: 'Human-Like Voice Generation', description: 'Researching natural speech synthesis, expressive voices, conversational tone, emotional context, pronunciation, and personalized AI communication.', status: 'Development', slug: 'human-like-voice-generation' },
  { date: 'Aug 1, 2026', title: 'Enterprise Voice Intelligence', description: 'Developing Voice AI solutions for customer support, sales, appointment scheduling, service operations, business communication, and enterprise automation.', status: 'Development', slug: 'enterprise-voice-intelligence' },
]

function ResearchStatus({ status }) { return <span className="voice-status">{status}</span> }
function ResearchHeader() { return <div className="voice-research-header"><span className="section-label">VOICE AI</span><h1>Conversational<br /><em>Intelligence.</em></h1><p>Researching intelligent voice systems that understand, reason, communicate, and interact naturally with people in real time.</p></div> }
function ResearchItem({ entry }) { return <article className="voice-research-item"><div className="voice-research-meta"><span>Voice AI</span><time>{entry.date}</time></div><div className="voice-research-copy"><a href={`/voice-ai/${entry.slug}`}><h2>{entry.title}</h2><p>{entry.description}</p><ResearchStatus status={entry.status} /></a></div></article> }
function ResearchList() { return <div className="voice-research-list" id="publications">{researchEntries.map((entry) => <ResearchItem entry={entry} key={entry.slug} />)}</div> }
function VoiceDetail({ entry }) { return <section className="voice-detail"><span className="section-label">VOICE AI / {entry.status}</span><h1>{entry.title}</h1><p>{entry.description}</p><ResearchStatus status={entry.status} /><a className="button button-ghost" href="/voice-ai">Back to Voice AI <span>↗</span></a></section> }

function VoiceAIPage({ path = '/voice-ai' }) {
  useEffect(() => {
    const capabilitiesButton = [...document.querySelectorAll('.site-header .nav-item')].find((button) => button.textContent.trim().startsWith('Capabilities'))
    capabilitiesButton?.classList.add('active')
    return () => capabilitiesButton?.classList.remove('active')
  }, [])
  const entry = researchEntries.find((item) => item.slug === path.split('/')[2])
  return <main className="rd-lab-page voice-page"><InternalNavigation /><section className="voice-shell"><nav className="rd-lab-categories" aria-label="Publication categories">{['All', 'Publication', 'Conclusion', 'Milestone', 'Release'].map((category, index) => <a className={index === 0 ? 'active' : ''} href="#publications" key={category}>{category}</a>)}</nav><ResearchHeader />{entry ? <VoiceDetail entry={entry} /> : <ResearchList />}</section></main>
}

export default VoiceAIPage
