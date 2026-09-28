import { useEffect, useMemo, useState } from 'react'
import './App.css'
import CareersPage from './Careers.jsx'
import AdminPage from './Admin.jsx'
import RAndDLabPage from './RAndDLab.jsx'
import EmergingTechnologiesPage from './EmergingTechnologies.jsx'
import AIAgentsPage from './AIAgents.jsx'
import VoiceAIPage from './VoiceAI.jsx'
import IntelligentSystemPage from './IntelligentSystem.jsx'
import LLMsPage from './LLMs.jsx'
import RAGSystemsPage from './RAGSystems.jsx'
import AIAutomationPage from './AIAutomation.jsx'
import ComputerVisionPage from './ComputerVision.jsx'
import DataIntelligencePage from './DataIntelligence.jsx'
import AIInfrastructurePage from './AIInfrastructure.jsx'
import BusinessAutomationPage from './BusinessAutomation.jsx'
import AICustomerSystemsPage from './AICustomerSystems.jsx'
import AIVoiceSolutionsPage from './AIVoiceSolutions.jsx'
import IntelligentDataSystemsPage from './IntelligentDataSystems.jsx'
import CustomAISystemsPage from './CustomAISystems.jsx'
import EnterpriseSolutionsPage from './EnterpriseSolutions.jsx'
import WorkflowIntelligencePage from './WorkflowIntelligence.jsx'
import AIIntegrationPage from './AIIntegration.jsx'
import SoftwareSystemsPage from './SoftwareSystems.jsx'
import DigitalTransformationPage from './DigitalTransformation.jsx'
import AISystemsPage from './AISystems.jsx'
import SoftwareDevelopmentPage from './SoftwareDevelopment.jsx'
import PlatformDevelopmentPage from './PlatformDevelopment.jsx'
import APIEngineeringPage from './APIEngineering.jsx'
import SystemArchitecturePage from './SystemArchitecture.jsx'
import CloudInfrastructurePage from './CloudInfrastructure.jsx'
import KnowledgeSystemsPage from './KnowledgeSystems.jsx'
import AnalyticsPage from './Analytics.jsx'
import AutomationPage from './Automation.jsx'
import ResearchPage from './Research.jsx'
import TechnologyPage from './Technology.jsx'
import CaseStudiesPage from './CaseStudies.jsx'
import RealEstatePage from './RealEstate.jsx'
import HealthcarePage from './Healthcare.jsx'
import FinancePage from './Finance.jsx'
import SaaSPage from './SaaS.jsx'
import ProfessionalServicesPage from './ProfessionalServices.jsx'
import LogisticsPage from './Logistics.jsx'
import EducationPage from './Education.jsx'
import ContactPage from './Contact.jsx'
import AboutPage from './About.jsx'
import OurApproachPage from './OurApproach.jsx'
import RDPage from './RD.jsx'
import InsightsPage from './Insights.jsx'

const capabilities = [
  ['01', 'AI Research & Development', 'Research, experimentation, prototyping, model evaluation, AI architecture, and applied AI development.'],
  ['02', 'Custom AI Systems', 'AI systems shaped around your workflows, data, requirements, and operational goals.'],
  ['03', 'AI Agents & Voice Systems', 'Conversational agents, voice systems, customer support, sales, and workflow agents.'],
  ['04', 'Business Automation', 'Automate repetitive processes, operations, reporting, and internal workflows.'],
  ['05', 'Software & Platforms', 'Custom web applications, enterprise platforms, dashboards, APIs, and internal tools.'],
  ['06', 'Data & Intelligence', 'Data pipelines, analytics, intelligent search, knowledge systems, and decision support.'],
  ['07', 'AI Integration', 'Connect AI to CRM, ERP, websites, communication platforms, and existing software.'],
  ['08', 'Deployment & Infrastructure', 'Production cloud infrastructure, APIs, databases, monitoring, security, and scale.'],
  ['09', 'Continuous R&D', 'Keep researching and improving deployed systems as technology and requirements evolve.'],
]
const capabilityVisuals = [
  ['MODEL', 'DATA', 'EVALUATION', 'EXPERIMENT', 'RESEARCH', 'ARCHITECTURE', 'SYSTEM'],
  ['USER', 'AI', 'LOGIC', 'DATA', 'SYSTEM', 'DEPLOYMENT'],
  ['VOICE', 'AGENT', 'TOOLS', 'MEMORY', 'ACTION', 'SYSTEM'],
  ['TRIGGER', 'WORKFLOW', 'AI', 'DECISION', 'ACTION', 'MONITOR'],
  ['UI', 'API', 'BACKEND', 'DATABASE', 'INFRASTRUCTURE', 'PLATFORM'],
  ['DATA', 'PIPELINE', 'KNOWLEDGE', 'SEARCH', 'INSIGHT', 'INTELLIGENCE'],
  ['CRM', 'ERP', 'API', 'AI', 'WORKFLOW', 'SYSTEM'],
  ['BUILD', 'TEST', 'DEPLOY', 'MONITOR', 'SCALE', 'PRODUCTION'],
  ['RESEARCH', 'EVALUATE', 'IMPROVE', 'RELEASE', 'RESEARCH', 'EVOLVE'],
]
const problems = [['Manual process', 'Intelligent automation'], ['High support load', 'AI customer interaction'], ['Repetitive calls', 'AI voice agents'], ['Scattered business data', 'Knowledge systems'], ['Legacy software', 'Modernization & integration'], ['Complex workflow', 'Custom AI system'], ['New technology needed', 'Research to production'], ['AI for existing software', 'AI integration']]
const steps = [['01', 'Discover', 'Understand the business, workflow, users, data, and constraints.'], ['02', 'Research', 'Study technologies, architectures, models, APIs, datasets, and approaches.'], ['03', 'Architect', 'Design the technical architecture and solution strategy.'], ['04', 'Build', 'Develop the models, agents, applications, automation, APIs, and infrastructure.'], ['05', 'Integrate', 'Connect the solution with existing software, databases, and business workflows.'], ['06', 'Deploy', 'Move the solution into a production environment.'], ['07', 'Improve', 'Monitor performance, analyze feedback, optimize, and continue R&D.']]
const challenges = [['Manual Operations', 'Repetitive processes consume time and resources.'], ['Fragmented Data', 'Important information exists across disconnected systems.'], ['Customer Operations', 'Sales and support require constant manual interaction.'], ['Legacy Systems', 'Existing technology limits new capabilities.'], ['Complex Workflows', 'Business processes are difficult to automate.'], ['AI Adoption', 'Businesses want AI but need to know what to build.']]
const buildItems = [['AI Research & Development', 'Experiments, prototypes, evaluation, and applied AI architecture.'], ['Custom AI Systems', 'Intelligent systems designed around your workflows and data.'], ['AI Agents', 'Conversational, workflow, sales, and support agents.'], ['Voice AI', 'Voice systems for customer interaction and operations.'], ['Business Automation', 'Automation for repetitive processes, reporting, and operations.'], ['Software Engineering', 'Web apps, platforms, APIs, dashboards, and internal tools.'], ['Data Intelligence', 'Pipelines, search, knowledge systems, and decision support.'], ['AI Integration', 'AI connected to CRM, ERP, communication, and existing software.'], ['Deployment & Infrastructure', 'Cloud, APIs, databases, monitoring, security, and scale.']]
const reasons = [['Research first', 'We investigate before selecting technology.'], ['Business specific', 'Solutions are designed around real workflows.'], ['Engineering driven', 'Research becomes working technology.'], ['Production focused', 'Systems are built for deployment.'], ['Integration ready', 'Technology works with existing systems.'], ['Long-term R&D', 'We continuously improve deployed systems.']]
const engagements = [['R&D Partnership', 'Continuous technology research and development.', 'Build with Mentneo'], ['Custom Solution', 'A specific business problem requiring a custom AI or software system.', 'Discuss your problem'], ['Implementation & Deployment', 'Engineering, integration, and production deployment.', 'Start implementation']]
const labTopics = [['LLMs', 'Language models, evaluation, and practical reasoning systems.'], ['AI Agents', 'Autonomous workflows, tool use, orchestration, and task execution.'], ['Voice AI', 'Natural voice interfaces for customer and operational systems.'], ['RAG', 'Grounded knowledge systems built around trusted business data.'], ['Computer Vision', 'Systems that interpret images, documents, and physical environments.'], ['Automation', 'Reliable intelligent workflows that reduce repetitive work.'], ['Data Intelligence', 'Search, analytics, and decision support across connected data.'], ['Infrastructure', 'The production foundations that keep intelligent systems useful.']]
const menuData = {
  Research: { label: 'Explore research', primary: ['AI Research', 'R&D Lab', 'Emerging Technologies', 'AI Agents', 'Voice AI', 'Intelligent Systems'], secondary: ['LLMs', 'RAG Systems', 'AI Automation', 'Computer Vision', 'Data Intelligence', 'AI Infrastructure'], cta: 'Explore Mentneo R&D' },
  Solutions: { label: 'Solutions', primary: ['Business Automation', 'AI Customer Systems', 'AI Voice Solutions', 'Intelligent Data Systems', 'Custom AI Systems'], secondary: ['Enterprise Solutions', 'Workflow Intelligence', 'AI Integration', 'Software Systems', 'Digital Transformation'], cta: 'Tell us your business problem' },
  Capabilities: { label: 'Capabilities', columns: [['AI', 'AI Research', 'Research', 'AI Systems', 'AI Agents', 'Voice AI', 'Computer Vision'], ['Engineering', 'Software Development', 'Platform Development', 'API Engineering', 'System Architecture', 'Cloud Infrastructure'], ['Intelligence', 'Data Intelligence', 'Knowledge Systems', 'Analytics', 'Automation', 'AI Integration']], cta: 'Explore all capabilities' },
  Industries: { label: 'Industries', primary: ['Real Estate', 'Healthcare', 'Finance', 'Retail', 'Manufacturing'], secondary: ['Technology', 'SaaS', 'Professional Services', 'Logistics', 'Education'], cta: 'Explore industries' },
  Company: { label: 'Explore Mentneo', primary: ['About', 'Our Approach', 'R&D', 'Projects', 'Insights', 'Careers'], secondary: ['Research', 'Technology', 'Case Studies', 'Contact'], cta: 'Start an R&D conversation' },
}

const aiResearchItems = [
  { category: 'AI Research', date: 'Aug 26, 2026', title: 'Next-Generation Artificial Intelligence Research', description: 'Exploring advanced AI models, intelligent systems, reasoning, learning, automation, autonomous intelligence, and emerging artificial intelligence technologies.' },
  { category: 'AI Research', date: 'Aug 20, 2026', title: 'Advanced AI Reasoning', description: 'Researching reasoning, planning, problem solving, inference, decision-making, and complex intelligence capabilities in modern AI systems.' },
  { category: 'AI Research', date: 'Aug 15, 2026', title: 'Autonomous Intelligence', description: 'Exploring AI systems capable of understanding objectives, planning actions, using tools, learning from feedback, and completing complex tasks.' },
  { category: 'AI Research', date: 'Aug 10, 2026', title: 'Multimodal Artificial Intelligence', description: 'Researching AI systems that understand and generate text, images, audio, video, documents, and other forms of information.' },
  { category: 'AI Research', date: 'Aug 5, 2026', title: 'Future of Artificial Intelligence', description: 'Exploring emerging AI architectures, intelligent agents, advanced reasoning, AI safety, automation, and next-generation intelligent systems.' },
]
const slugifyResearch = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const routeContent = {
  '/research': ['01 / RESEARCH', 'We research', 'what’s next.', 'Mentneo explores emerging AI technologies and translates useful research into practical systems.', ['LLMs', 'RAG', 'AI Agents', 'Voice AI', 'Computer Vision', 'Multimodal AI', 'AI Automation', 'Data Intelligence', 'AI Infrastructure']],
  '/ai-research': ['01 / RESEARCH', 'We research', 'what’s next.', 'Mentneo explores emerging AI technologies and translates useful research into practical systems.', ['LLMs', 'RAG', 'AI Agents', 'Voice AI', 'Computer Vision', 'Multimodal AI', 'AI Automation', 'Data Intelligence', 'AI Infrastructure']],
  '/solutions': ['02 / SOLUTIONS', 'Technology built', 'around your problem.', 'We investigate the business context first, then design the technology approach that belongs inside it.', ['AI Systems', 'Automation', 'AI Agents', 'Voice AI', 'Business Intelligence', 'Software Platforms', 'Data Systems', 'Integrations']],
  '/capabilities': ['03 / CAPABILITIES', 'What we', 'can build.', 'A research-led capability system for complex business and technology problems.', capabilities.map(([, title]) => title)],
  '/industries': ['04 / INDUSTRIES', 'Technology for', 'real business.', 'Different industries require different systems, workflows, data, and deployment strategies.', ['Real Estate', 'Healthcare', 'Finance', 'Retail', 'Manufacturing', 'Logistics', 'Education', 'Technology', 'SaaS', 'Enterprise']],
  '/company': ['05 / COMPANY', 'We build', 'technology for the real world.', 'Mentneo is an AI research and development company focused on turning complex business problems into intelligent, production-ready technology.', ['Research first', 'Build with purpose', 'Engineer for real use', 'Deploy properly', 'Keep improving']],
  '/research/lab': ['MENTNEO R&D LAB / ACTIVE', 'Researching', 'what comes next.', 'A living index of the technologies we are exploring and the systems they can make possible.', labTopics.map(([topic]) => topic)],
  '/projects': ['08 / SELECTED WORK', 'Research into', 'deployment.', 'We measure our work by what gets implemented and deployed, not just what gets demonstrated.', ['Verified project archive', 'Problem', 'Research', 'Build', 'Implementation', 'Deployment']],
  '/contact': ['09 / CONTACT', 'Have a problem', 'worth solving?', 'Tell us what you are trying to solve and our R&D team will evaluate the right technology approach.', []],
  '/careers': ['10 / CAREERS', 'Build what', 'comes next.', 'Join a research and engineering culture focused on useful technology for the real world.', []],
}

export function InternalNavigation() {
  const [menu, setMenu] = useState(null)
  const [search, setSearch] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isLabRoute = window.location.pathname === '/r-and-d-lab'
    const isResearchRoute = isLabRoute || window.location.pathname.startsWith('/research') || window.location.pathname.startsWith('/ai-research') || window.location.pathname.startsWith('/emerging-technologies') || window.location.pathname.startsWith('/ai-agents') || window.location.pathname.startsWith('/voice-ai') || window.location.pathname.startsWith('/intelligent-system') || window.location.pathname.startsWith('/llms') || window.location.pathname.startsWith('/rag-systems') || window.location.pathname.startsWith('/ai-automation') || window.location.pathname.startsWith('/computer-vision') || window.location.pathname.startsWith('/data-intelligence') || window.location.pathname.startsWith('/ai-infrastructure')
  useEffect(() => {
    const handleResearchResourceNavigation = (event) => {
      const link = event.target.closest('a')
      const route = { LLMs: '/llms', 'RAG Systems': '/rag-systems', 'AI Automation': '/ai-automation', 'Computer Vision': '/computer-vision', 'Data Intelligence': '/data-intelligence', 'AI Infrastructure': '/ai-infrastructure', 'Enterprise Solutions': '/enterprise-solutions', 'Workflow Intelligence': '/workflow-intelligence', 'AI Integration': '/ai-integration', 'Software Systems': '/software-systems', 'Digital Transformation': '/digital-transformation', 'AI Systems': '/ai-systems', 'AI Agents': '/ai-agents', 'Voice AI': '/voice-ai', 'Software Development': '/software-development', 'Platform Development': '/platform-development', 'API Engineering': '/api-engineering', 'System Architecture': '/system-architecture', 'Cloud Infrastructure': '/cloud-infrastructure', 'Knowledge Systems': '/knowledge-systems', Analytics: '/analytics', Automation: '/automation', Research: '/research', Technology: '/technology', 'Case Studies': '/case-studies', Contact: '/contact', 'Real Estate': '/real-estate', Healthcare: '/healthcare', Finance: '/finance', SaaS: '/saas', 'Professional Services': '/professional-services', Logistics: '/logistics', Education: '/education' }[link?.textContent.trim()]
      if (!route) return
      event.preventDefault()
      window.history.pushState({}, '', route)
      window.dispatchEvent(new PopStateEvent('popstate'))
    }
    document.addEventListener('click', handleResearchResourceNavigation)
    return () => document.removeEventListener('click', handleResearchResourceNavigation)
  }, [])
  const researchRoutes = { 'AI Research': '/ai-research', 'R&D Lab': '/r-and-d-lab', 'Emerging Technologies': '/emerging-technologies', 'AI Agents': '/ai-agents', 'Voice AI': '/voice-ai', 'Intelligent Systems': '/intelligent-system', 'Intelligent System': '/intelligent-system', LLMs: '/llms', 'RAG Systems': '/rag-systems', 'AI Automation': '/ai-automation', 'Computer Vision': '/computer-vision', 'Data Intelligence': '/data-intelligence', 'AI Infrastructure': '/ai-infrastructure' }
  const menuHref = (item) => menu === 'Company' ? companyRoutes[item] : menu === 'Research' ? researchRoutes[item] || '#content' : menu === 'Solutions' ? solutionRoutes[item] || '#content' : menu === 'Capabilities' ? capabilityRoutes[item] || '#content' : '#content'
  return <><header className={menu || search || mobileOpen ? 'site-header header-active' : 'site-header'}><a className="brand" href="/"><span className="brand-mark">M</span><span>MENTNEO</span><small>AI R&D</small></a><nav className={mobileOpen ? 'nav-open' : ''}>{Object.keys(menuData).map(item => <button className={menu === item || (item === 'Research' && isResearchRoute) || (item === 'Solutions' && window.location.pathname.startsWith('/business-automation')) ? 'nav-item active' : 'nav-item'} onClick={() => { setMenu(menu === item ? null : item); setMobileOpen(false) }} key={item}>{item}<span>⌄</span></button>)}</nav><div className="header-actions"><button className="search-button" onClick={() => { setSearch(true); setMenu(null) }} aria-label="Search Mentneo">⌕</button><a className="header-cta" href="/contact">Talk to R&D <span>↗</span></a></div><button className="menu-toggle" onClick={() => { setMobileOpen(!mobileOpen); setMenu(null) }} aria-label="Toggle mobile menu" aria-expanded={mobileOpen}><span /><span /></button></header>{menu && <div className="mega-menu"><div className="mega-inner"><div className="mega-primary"><span className="mega-label">{menuData[menu].label}</span>{(menuData[menu].primary || menuData[menu].columns?.flatMap(([, ...items]) => items) || []).map(item => <a href={menuHref(item)} onClick={() => { setMenu(null); setMobileOpen(false) }} key={item}>{item}</a>)}</div><div className="mega-secondary"><span className="mega-label">Resources</span>{(menuData[menu].secondary || ['Research', 'Technology', 'Case Studies', 'Contact']).map(item => <a href="#content" onClick={() => { setMenu(null); setMobileOpen(false) }} key={item}>{item}</a>)}</div></div></div>}{search && <div className="search-overlay"><button className="search-close" onClick={() => setSearch(false)} aria-label="Close search">×</button><div><span className="mega-label">Mentneo / Search</span><h2>Search Mentneo</h2><input autoFocus placeholder="Search research, capabilities, solutions…" /></div></div>}</>
}

function AIResearchPage() {
  return (
    <main className="ai-research-page">
      <InternalNavigation />
      <section className="ai-research-shell">
        <div className="ai-research-intro">
          <span className="section-label">AI RESEARCH</span>
          <h1>Researching what comes next.</h1>
        </div>
        <div className="ai-research-list" aria-live="polite">
          {aiResearchItems.map((article) => (
            <article className="ai-research-item" key={`${article.title}-${article.date}`}>
              <div className="ai-research-meta">
                <span>{article.category}</span>
                <time>{article.date}</time>
              </div>
              <div className="ai-research-copy"><a href={`/ai-research/${slugifyResearch(article.title)}`}><h3>{article.title}</h3><p>{article.description}</p></a></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

function InternalPage({ path }) {
  const content = routeContent[path]
  const detailPath = path.startsWith('/capabilities/')
  const title = detailPath ? path.split('/').pop().replaceAll('-', ' ') : content?.[1] || 'Research into deployment.'
  const subtitle = detailPath ? 'before we build.' : content?.[2] || 'Production-ready systems.'
  const items = detailPath ? ['What we research', 'What we experiment with', 'What we build', 'How we deploy', 'Continuous R&D'] : content?.[4] || []
  return <main className="internal-page"><InternalNavigation /><section className="internal-hero"><span className="section-label">{content?.[0] || 'MENTNEO / CAPABILITY'}</span><h1>{title}<br /><em>{subtitle}</em></h1><p>{content?.[3] || 'Research, engineering, implementation, deployment, and continuous improvement for real business systems.'}</p><a className="button button-primary" href="/contact">Discuss your problem <span>↗</span></a></section>{items.length > 0 && <section className="internal-content" id="content"><div className="section-label">{detailPath ? 'CAPABILITY SYSTEM' : 'RESEARCH INDEX'}</div><div className="internal-list">{items.map((item, index) => <article key={item}><span>0{index + 1}</span><div><h2>{item}</h2><p>{detailPath ? 'Research, engineering, implementation, deployment, and continuous R&D aligned to the problem.' : `Explore the specific challenges, systems, and technology approaches within ${item.toLowerCase()}.`}</p></div><b>↗</b></article>)}</div></section>}{path === '/contact' ? <ContactPanel /> : path === '/careers' ? <CareersPanel /> : <section className="internal-callout"><span className="section-label">NEXT STEP</span><h2>Have a problem<br /><em>worth solving?</em></h2><a className="button button-primary" href="/contact">Start a conversation <span>↗</span></a></section>}<InternalFooter /></main>
}

function ContactPanel() { const [sent, setSent] = useState(false); return <section className="contact-panel"><span className="section-label">TALK TO R&D</span><h2>Tell us what<br /><em>you’re solving.</em></h2>{sent ? <div className="form-success"><strong>Your problem has been received.</strong><p>Our team will review the requirements and get back to you.</p></div> : <form onSubmit={(event) => { event.preventDefault(); setSent(true) }}><input required placeholder="Name" /><input required placeholder="Company" /><input required type="email" placeholder="Work email" /><textarea required placeholder="What are you trying to solve?" rows="4" /><button className="button button-primary" type="submit">Send to R&D <span>↗</span></button></form>}</section> }
function CareersPanel() { return <section className="internal-content careers-panel"><span className="section-label">OPEN ROLES</span><div className="project-placeholder"><strong>No open positions currently.</strong><p>Mentneo is building a research and engineering culture for the problems ahead.</p></div></section> }
function InternalFooter() { return <footer><a className="brand" href="/"><span className="brand-mark">M</span><span>MENTNEO</span></a><span>RESEARCH. BUILD. IMPLEMENT. DEPLOY.</span><nav><a href="/research">Research</a><a href="/capabilities">Capabilities</a><a href="/projects">Projects</a><a href="/contact">Contact</a></nav><small>© 2026 MENTNEO</small></footer> }
const companyRoutes = { About: '/about', 'Our Approach': '/our-approach', 'R&D': '/r-and-d', Projects: '/projects', Insights: '/insights', Careers: '/careers' }
const researchRoutes = { 'AI Research': '/ai-research', 'R&D Lab': '/r-and-d-lab', 'Emerging Technologies': '/emerging-technologies', 'AI Agents': '/ai-agents', 'Voice AI': '/voice-ai', 'Intelligent Systems': '/intelligent-system', 'Intelligent System': '/intelligent-system', LLMs: '/llms', 'RAG Systems': '/rag-systems', 'AI Automation': '/ai-automation', 'Computer Vision': '/computer-vision', 'Data Intelligence': '/data-intelligence', 'AI Infrastructure': '/ai-infrastructure' }
const solutionRoutes = { 'Business Automation': '/business-automation', 'AI Customer Systems': '/ai-customer-systems', 'AI Voice Solutions': '/ai-voice-solutions', 'Intelligent Data Systems': '/intelligent-data-systems', 'Custom AI Systems': '/custom-ai-systems', 'Enterprise Solutions': '/enterprise-solutions', 'Workflow Intelligence': '/workflow-intelligence', 'AI Integration': '/ai-integration', 'Software Systems': '/software-systems', 'Digital Transformation': '/digital-transformation' }
const capabilityRoutes = { 'AI Research': '/research', Research: '/research', 'AI Systems': '/ai-systems', 'AI Agents': '/ai-agents', 'Voice AI': '/voice-ai', 'Computer Vision': '/computer-vision', 'Software Development': '/software-development', 'Platform Development': '/platform-development', 'API Engineering': '/api-engineering', 'System Architecture': '/system-architecture', 'Cloud Infrastructure': '/cloud-infrastructure', 'Data Intelligence': '/data-intelligence', 'Knowledge Systems': '/knowledge-systems', Analytics: '/analytics', Automation: '/automation' }

function App() {
  const [activeCapability, setActiveCapability] = useState(0)
  const [activeProblem, setActiveProblem] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [activeStage, setActiveStage] = useState(1)
  const [activeLab, setActiveLab] = useState(1)
  const [capabilityPaused, setCapabilityPaused] = useState(false)
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname.replace(/\/$/, '') || '/')

  useEffect(() => {
    if (capabilityPaused) return undefined
    const timer = window.setInterval(() => setActiveCapability((index) => (index + 1) % capabilities.length), 4500)
    return () => window.clearInterval(timer)
  }, [capabilityPaused])

  useEffect(() => {
    const handleLocationChange = () => {
      const nextPath = window.location.pathname.replace(/\/$/, '') || '/'
      setCurrentPath(nextPath)
    }

    window.addEventListener('popstate', handleLocationChange)
    return () => window.removeEventListener('popstate', handleLocationChange)
  }, [])

  const navigateTo = (path) => {
    const nextPath = path.startsWith('/') ? path : `/${path}`
    window.history.pushState({}, '', nextPath)
    setCurrentPath(nextPath)
    setActiveMenu(null)
    setSearchOpen(false)
    setMenuOpen(false)
  }

  if (currentPath === '/careers' || currentPath.startsWith('/careers/')) return <CareersPage path={currentPath} />
  if (currentPath === '/admin' || currentPath.startsWith('/admin/')) return <AdminPage path={currentPath} />
  if (currentPath === '/ai-research' || currentPath.startsWith('/ai-research/')) return <AIResearchPage />
  if (currentPath === '/research' || currentPath.startsWith('/research/')) return <ResearchPage path={currentPath} />
  if (currentPath === '/technology' || currentPath.startsWith('/technology/')) return <TechnologyPage path={currentPath} />
  if (currentPath === '/case-studies' || currentPath.startsWith('/case-studies/')) return <CaseStudiesPage path={currentPath} />
  if (currentPath === '/real-estate' || currentPath.startsWith('/real-estate/')) return <RealEstatePage path={currentPath} />
  if (currentPath === '/healthcare' || currentPath.startsWith('/healthcare/')) return <HealthcarePage path={currentPath} />
  if (currentPath === '/finance' || currentPath.startsWith('/finance/')) return <FinancePage path={currentPath} />
  if (currentPath === '/saas' || currentPath.startsWith('/saas/')) return <SaaSPage path={currentPath} />
  if (currentPath === '/professional-services' || currentPath.startsWith('/professional-services/')) return <ProfessionalServicesPage path={currentPath} />
  if (currentPath === '/logistics' || currentPath.startsWith('/logistics/')) return <LogisticsPage path={currentPath} />
  if (currentPath === '/education' || currentPath.startsWith('/education/')) return <EducationPage path={currentPath} />
  if (currentPath === '/contact') return <ContactPage />
  if (currentPath === '/about' || currentPath.startsWith('/about/')) return <AboutPage path={currentPath} />
  if (currentPath === '/our-approach' || currentPath.startsWith('/our-approach/')) return <OurApproachPage path={currentPath} />
  if (currentPath === '/r-and-d' || currentPath.startsWith('/r-and-d/')) return <RDPage path={currentPath} />
  if (currentPath === '/insights' || currentPath.startsWith('/insights/')) return <InsightsPage path={currentPath} />
  if (currentPath === '/r-and-d-lab') return <RAndDLabPage />
  if (currentPath === '/emerging-technologies' || currentPath.startsWith('/emerging-technologies/')) return <EmergingTechnologiesPage />
  if (currentPath === '/ai-agents' || currentPath.startsWith('/ai-agents/')) return <AIAgentsPage path={currentPath} />
  if (currentPath === '/voice-ai' || currentPath.startsWith('/voice-ai/')) return <VoiceAIPage path={currentPath} />
  if (currentPath === '/intelligent-system' || currentPath.startsWith('/intelligent-system/')) return <IntelligentSystemPage />
  if (currentPath === '/llms' || currentPath.startsWith('/llms/')) return <LLMsPage />
  if (currentPath === '/rag-systems' || currentPath.startsWith('/rag-systems/')) return <RAGSystemsPage />
  if (currentPath === '/ai-automation' || currentPath.startsWith('/ai-automation/')) return <AIAutomationPage />
  if (currentPath === '/computer-vision' || currentPath.startsWith('/computer-vision/')) return <ComputerVisionPage />
  if (currentPath === '/data-intelligence' || currentPath.startsWith('/data-intelligence/')) return <DataIntelligencePage />
  if (currentPath === '/ai-infrastructure' || currentPath.startsWith('/ai-infrastructure/')) return <AIInfrastructurePage />
  if (currentPath === '/business-automation' || currentPath.startsWith('/business-automation/')) return <BusinessAutomationPage />
  if (currentPath === '/ai-customer-systems' || currentPath.startsWith('/ai-customer-systems/')) return <AICustomerSystemsPage />
  if (currentPath === '/ai-voice-solutions' || currentPath.startsWith('/ai-voice-solutions/')) return <AIVoiceSolutionsPage />
  if (currentPath === '/intelligent-data-systems' || currentPath.startsWith('/intelligent-data-systems/')) return <IntelligentDataSystemsPage />
  if (currentPath === '/custom-ai-systems' || currentPath.startsWith('/custom-ai-systems/')) return <CustomAISystemsPage />
  if (currentPath === '/enterprise-solutions' || currentPath.startsWith('/enterprise-solutions/')) return <EnterpriseSolutionsPage />
  if (currentPath === '/workflow-intelligence' || currentPath.startsWith('/workflow-intelligence/')) return <WorkflowIntelligencePage />
  if (currentPath === '/ai-integration' || currentPath.startsWith('/ai-integration/')) return <AIIntegrationPage />
  if (currentPath === '/software-systems' || currentPath.startsWith('/software-systems/')) return <SoftwareSystemsPage />
  if (currentPath === '/digital-transformation' || currentPath.startsWith('/digital-transformation/')) return <DigitalTransformationPage />
  if (currentPath === '/ai-systems' || currentPath.startsWith('/ai-systems/')) return <AISystemsPage />
  if (currentPath === '/software-development' || currentPath.startsWith('/software-development/')) return <SoftwareDevelopmentPage path={currentPath} />
  if (currentPath === '/platform-development' || currentPath.startsWith('/platform-development/')) return <PlatformDevelopmentPage path={currentPath} />
  if (currentPath === '/api-engineering' || currentPath.startsWith('/api-engineering/')) return <APIEngineeringPage path={currentPath} />
  if (currentPath === '/system-architecture' || currentPath.startsWith('/system-architecture/')) return <SystemArchitecturePage path={currentPath} />
  if (currentPath === '/cloud-infrastructure' || currentPath.startsWith('/cloud-infrastructure/')) return <CloudInfrastructurePage path={currentPath} />
  if (currentPath === '/knowledge-systems' || currentPath.startsWith('/knowledge-systems/')) return <KnowledgeSystemsPage path={currentPath} />
  if (currentPath === '/analytics' || currentPath.startsWith('/analytics/')) return <AnalyticsPage path={currentPath} />
  if (currentPath === '/automation' || currentPath.startsWith('/automation/')) return <AutomationPage path={currentPath} />
  if (currentPath !== '/') return <InternalPage path={currentPath} />

  return (
    <main>
      <header className={activeMenu || searchOpen ? 'site-header header-active' : 'site-header'}><a className="brand" href="#top"><span className="brand-mark">M</span><span>MENTNEO</span><small>AI R&D</small></a><nav className={menuOpen ? 'nav-open' : ''}>{Object.keys(menuData).map(item => {
        const label = item === 'Research' ? 'AI RESEARCH' : item
        const isResearchItem = item === 'Research'
        const isActive = isResearchItem && (currentPath === '/research' || currentPath === '/ai-research')
        return <button className={activeMenu === item || isActive ? 'nav-item active' : 'nav-item'} onClick={() => {
          if (isResearchItem) {
            navigateTo('/ai-research')
            return
          }
          setActiveMenu(activeMenu === item ? null : item)
          setSearchOpen(false)
        }} key={item}>{label}<span>⌄</span></button>
      })}</nav><div className="header-actions"><button className="search-button" onClick={() => { setSearchOpen(true); setActiveMenu(null) }} aria-label="Search Mentneo">⌕</button><a className="header-cta" href="#contact">Talk to R&D <span>↗</span></a></div><button className="menu-toggle" onClick={() => { setMenuOpen(!menuOpen); setActiveMenu(null) }} aria-label="Toggle menu" aria-expanded={menuOpen}><span /><span /></button></header>
      {activeMenu && <div className="mega-menu"><div className="mega-inner">{activeMenu === 'Capabilities' ? <div className="mega-columns">{menuData[activeMenu].columns.map(([heading, ...items]) => <div key={heading}><span className="mega-label">{heading}</span>{items.map(item => <a href="#capabilities" key={item}>{item}</a>)}</div>)}</div> : <><div className="mega-primary"><span className="mega-label">{menuData[activeMenu].label}</span>{menuData[activeMenu].primary.map(item => <a href={activeMenu === 'Company' ? companyRoutes[item] : activeMenu === 'Research' ? researchRoutes[item] || '#capabilities' : activeMenu === 'Solutions' ? solutionRoutes[item] || '#capabilities' : '#capabilities'} key={item}>{item}</a>)}</div><div className="mega-secondary"><span className="mega-label">{activeMenu === 'Industries' ? 'Technology & services' : activeMenu === 'Company' ? 'Resources' : activeMenu === 'Solutions' ? 'Enterprise' : 'Research areas'}</span>{menuData[activeMenu].secondary.map(item => <a href="#capabilities" key={item}>{item}</a>)}</div></>}<a className="mega-cta" href="#contact">{menuData[activeMenu].cta} <span>→</span></a></div></div>}
      {searchOpen && <div className="search-overlay"><button className="search-close" onClick={() => setSearchOpen(false)} aria-label="Close search">×</button><div><span className="mega-label">Mentneo / Search</span><h2>Search Mentneo</h2><input autoFocus placeholder="Search research, capabilities, solutions…" /><div className="suggestions"><span>Suggested</span>{['AI Research', 'AI Agents', 'Automation', 'Industries', 'Projects', 'Technology'].map(item => <button key={item}>{item}</button>)}</div></div></div>}
      <section className="hero" id="top"><div className="hero-copy"><p className="eyebrow"><span className="pulse" /> AI RESEARCH & DEVELOPMENT</p><h1>We research.<br /><em>We build.</em><br />We deploy.</h1><p className="hero-intro">Mentneo helps businesses turn complex problems into intelligent, production-ready technology through AI research, custom development, implementation, and deployment.</p><div className="hero-actions"><a className="button button-primary" href="#contact">Talk to our R&D team <span>↗</span></a><a className="button button-ghost" href="#capabilities">Explore capabilities <span>↓</span></a></div></div><div className="hero-visual" aria-label="Research to deployment system diagram"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="core"><span>MN</span><small>R&D / 001</small></div><div className="node node-a">RESEARCH</div><div className="node node-b">INTELLIGENCE</div><div className="node node-c">SYSTEMS</div><div className="node node-d">DEPLOYMENT</div><div className="crosshair" /></div><div className="hero-meta"><span>01 — 04</span><span>Applied intelligence for<br />real-world systems</span></div></section>
      <section className="trust-strip"><strong>Research-led. Engineering-driven. Business-focused. Production-ready.</strong><div>{['AI Research', 'Custom AI Systems', 'Automation', 'AI Agents', 'Software Engineering', 'Data Intelligence', 'Integration', 'Deployment'].map(item => <span key={item}>{item}</span>)}</div></section>
      <section className="statement section-pad" id="about"><div className="section-label">02 / THE PROBLEM</div><div className="statement-content"><h2>Your business has a problem.<br /><span>Technology should solve it.</span></h2><div><p>Most businesses don’t need another AI tool. They need technology designed around the way their business actually works.</p><p className="accent-copy">We don’t start with a product.<br /><strong>We start with the problem.</strong></p></div></div><div className="challenge-grid">{challenges.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="approach section-pad" id="approach"><div className="section-label">03 / THE MENTNEO APPROACH</div><div className="section-heading"><h2>We don’t start with a product.<br /><span>We start with the problem.</span></h2><p>A considered path from first principles to a system that works inside the real world.</p></div><div className="steps">{steps.map(([number, title, text]) => <article className="step" key={number}><span className="step-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="capabilities capability-index section-pad" id="capabilities" onMouseLeave={() => setCapabilityPaused(false)}><div className="section-label">04 / CAPABILITIES</div><div className="capability-layout"><div className="capability-directory"><h2>Technology<br /><span>with a reason.</span></h2><p className="section-lede">Deep technical capability is only useful when it changes something meaningful for the business.</p><div className="capability-list">{capabilities.map(([number, title, description], index) => <div className={activeCapability === index ? 'capability-row active' : 'capability-row'} onMouseEnter={() => { setActiveCapability(index); setCapabilityPaused(true) }} onClick={() => { setActiveCapability(index); setCapabilityPaused(true) }} key={number}><span className="capability-number">{number}</span><strong>{title}</strong><p>{description}</p><i>↗</i></div>)}</div><div className="capability-footer"><span>09 CAPABILITIES</span><span>RESEARCH → ENGINEERING → IMPLEMENTATION</span><span>EXPLORE ALL ↗</span></div></div><div className="capability-visual"><div className="visual-meta"><span>SYSTEM / 001</span><span>R&D / ACTIVE</span><span>MODE / RESEARCH</span></div><div className="visual-orbit orbit-a" /><div className="visual-orbit orbit-b" /><div className="visual-core"><b>MN</b><small>MENTNEO / R&D</small></div>{capabilityVisuals[activeCapability].map((label, index) => <span className={`visual-label visual-label-${index}`} key={`${label}-${index}`}>{label}</span>)}<div className="visual-crosshair" /><div className="visual-status">STATUS / <strong>{capabilities[activeCapability][1].split(' ')[0].toUpperCase()}</strong></div></div></div></section>
      <section className="problem-solver section-pad"><div className="section-label">05 / PROBLEM TO SOLUTION</div><div className="section-heading"><h2>Tell us the problem.<br /><span>We’ll research the solution.</span></h2></div><div className="problem-layout"><div className="problem-list">{problems.map(([problem, solution], index) => <button className={activeProblem === index ? 'problem-item active' : 'problem-item'} onClick={() => setActiveProblem(index)} key={problem}><span>{problem}</span><b>→</b><strong>{solution}</strong></button>)}</div><div className="solution-map"><span>01 / PROBLEM</span><strong>{problems[activeProblem][0]}</strong><span>02 / RESEARCH</span><strong>Mentneo R&D</strong><span>03 / SOLUTION</span><strong>{problems[activeProblem][1]}</strong><span>04 / DEPLOYMENT</span><strong>Production system</strong></div></div></section>
      <section className="build section-pad"><div className="section-label">06 / WHAT WE BUILD</div><div className="section-heading"><h2>Technology built<br /><span>around your business.</span></h2><p>We don’t sell one-size-fits-all AI. We research and build systems around the problem that needs to be solved.</p></div><div className="build-grid">{buildItems.map(([title, text], index) => <article key={title}><span className="build-icon">0{index + 1}</span><h3>{title}</h3><p>{text}</p><b>↗</b></article>)}</div></section>
      <section className="architecture section-pad"><div className="section-label">/ SYSTEM ARCHITECTURE</div><div className="architecture-head"><h2>Complete systems.<br /><span>Not isolated tools.</span></h2><span className="architecture-status">SYSTEM / ACTIVE<br />R&D / 001</span></div><div className="architecture-canvas"><div className="architecture-flow">{['Business', 'Application', 'AI Layer', 'Data', 'Integrations', 'Infrastructure'].map((layer, index) => <div className="architecture-layer" key={layer}><span>0{index + 1}</span><strong>{layer}</strong><i>{['API', 'WORKFLOW', 'LLM', 'RAG', 'AGENT', 'MONITORING'][index]}</i></div>)}</div><div className="architecture-pulse" /></div></section>
      <section className="transformation section-pad"><div className="transformation-side"><span className="section-label">/ SYSTEMS</span><h2>You bring<br /><span>the problem.</span></h2></div><div className="transformation-side right"><span className="section-label">/ MENTNEO</span><h2>We build<br /><span>the system.</span></h2></div><div className="transformation-list">{[['Manual calls', 'Voice AI'], ['Scattered data', 'Knowledge system'], ['Repetitive workflow', 'Automation'], ['Legacy software', 'Intelligent platform'], ['Complex operations', 'AI workflow']].map(([from, to]) => <div key={from}><strong>{from}</strong><span>→</span><b>{to}</b></div>)}</div></section>
      <section className="industries section-pad" id="industries"><div className="section-label">09 / INDUSTRIES</div><div className="section-heading"><h2>Built for real<br /><span>business problems.</span></h2><p>We research the operational reality of each environment before we design what belongs inside it.</p></div><div className="industry-grid">{['Real Estate', 'Healthcare', 'Education', 'Finance', 'Retail', 'Manufacturing', 'Logistics', 'Technology', 'SaaS', 'Professional Services', 'Enterprise'].map((industry, index) => <article key={industry}><span>0{index + 1}</span><h3>{industry}</h3><p>Research-led systems for the specific challenges of {industry.toLowerCase()}.</p></article>)}</div></section>
      <section className="lab section-pad" id="lab"><div className="lab-header"><div className="section-label">07 / R&D LAB</div><h2>Where research<br /><span>becomes technology.</span></h2><p>Mentneo continuously researches emerging technologies and turns valuable research into practical systems for real-world businesses.</p></div><div className="lab-board"><div className="board-top"><span>MENTNEO / RESEARCH INDEX</span><span>STATUS: ACTIVE <i className="pulse" /></span></div><div className="lab-grid">{['Generative AI', 'AI Agents', 'Voice AI', 'LLMs', 'RAG', 'AI Automation', 'Computer Vision', 'Intelligent Data', 'Model Evaluation', 'AI Infrastructure', 'Prototype', 'Production System'].map((item, i) => <div className="lab-cell" key={item}><span>0{i + 1}</span><strong>{item}</strong><i>↗</i></div>)}</div></div></section>
      <section className="research-map section-pad"><div className="section-label">MENTNEO R&D LAB / ACTIVE</div><div className="research-intro"><h2>Researching<br /><span>what comes next.</span></h2><p>{labTopics[activeLab][1]}</p></div><div className="research-orbit"><div className="research-core">MENTNEO<br /><small>R&D</small></div>{labTopics.map(([topic], index) => <button className={activeLab === index ? 'research-node active' : 'research-node'} onMouseEnter={() => setActiveLab(index)} onClick={() => setActiveLab(index)} key={topic} style={{ '--i': index }}>{topic}</button>)}</div></section>
      <section className="projects section-pad" id="projects"><div className="section-label">10 / PROJECTS</div><div className="section-heading"><h2>Research that becomes<br /><span>real systems.</span></h2><p>We measure our work by what gets implemented and deployed, not just what gets demonstrated.</p></div><div className="project-placeholder"><span>VERIFIED PROJECT ARCHIVE</span><strong>Selected systems are available for a focused R&D conversation.</strong><p>Project details, outcomes, and metrics are shared only when verified and appropriate to the work.</p><a className="button button-primary" href="#contact">Discuss a project <span>↗</span></a></div></section>
      <section className="why section-pad"><div className="section-label">11 / WHY MENTNEO</div><div className="section-heading"><h2>Built to stay<br /><span>useful.</span></h2></div><div className="why-grid">{reasons.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="technology section-pad" id="technology"><div className="section-label">14 / TECHNOLOGY</div><div className="section-heading"><h2>A considered<br /><span>technology ecosystem.</span></h2><p>The tools change. The principles stay: useful systems, clear architecture, and production-minded engineering.</p></div><div className="tech-grid">{[['AI & ML', 'LLMs, AI agents, RAG, model evaluation, computer vision, NLP'], ['Application Engineering', 'Web applications, APIs, dashboards, and enterprise platforms'], ['Data', 'Databases, data pipelines, analytics, and knowledge systems'], ['Infrastructure', 'Cloud, deployment, APIs, monitoring, and scalability'], ['Integrations', 'CRM, ERP, communication systems, business software, and APIs']].map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div></section>
      <section className="engagement section-pad"><div className="section-label">12 / ENGAGEMENT MODEL</div><div className="section-heading"><h2>How we can<br /><span>work together.</span></h2></div><div className="engagement-grid">{engagements.map(([title, text, cta], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><a href="#contact">{cta} <b>↗</b></a></article>)}</div></section>
      <section className="proof section-pad"><div className="section-label">13 / TRUST</div><div className="proof-content"><h2>Technology built<br /><span>for the real world.</span></h2><p>From research and experimentation to implementation and deployment, Mentneo focuses on building technology that solves measurable business problems.</p></div><div className="timeline">{['Research', 'Prototype', 'Engineering', 'Integration', 'Deployment', 'Optimization'].map((item, i) => <div key={item}><span>0{i + 1}</span><strong>{item}</strong></div>)}</div></section>
      <section className="contact section-pad" id="contact"><div className="section-label">LET’S WORK ON THE RIGHT THING</div><h2>Have a problem<br /><em>worth solving?</em></h2><p>Tell us what your business is trying to solve. Our R&D team will evaluate the problem, identify the right technology approach, and help turn it into a production-ready solution.</p><a className="button button-primary" href="mailto:hello@mentneo.com">Start a conversation <span>↗</span></a></section>
      <footer><a className="brand" href="#top"><span className="brand-mark">M</span><span>MENTNEO</span></a><span>AI RESEARCH & DEVELOPMENT</span><nav><a href="#approach">Approach</a><a href="#capabilities">Capabilities</a><a href="#lab">R&D Lab</a><a href="#contact">Contact</a></nav><small>© 2026 Mentneo. Researching what’s next.</small></footer>
    </main>
  )
}

export default App
