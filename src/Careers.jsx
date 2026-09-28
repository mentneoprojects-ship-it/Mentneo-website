import { useEffect, useMemo, useState } from "react";
import { InternalNavigation } from "./App.jsx";
import "./Careers.css";

const jobs = [
  {
    slug: "software-developer",
    title: "Software Developer",
    department: "Engineering",
    location: "Bengaluru / Hybrid",
    type: "Full-time",
    experience: "2-5 years",
    skills: "React, JavaScript, APIs, Git",
    posted: "Aug 12, 2026",
    deadline: "Sep 30, 2026",
    description:
      "Build dependable product experiences and the services behind them for ambitious business systems.",
  },
  {
    slug: "data-analyst",
    title: "Data Analyst",
    department: "Data Intelligence",
    location: "Remote / India",
    type: "Full-time",
    experience: "1-3 years",
    skills: "SQL, Python, dashboards, analytics",
    posted: "Aug 10, 2026",
    deadline: "Sep 25, 2026",
    description:
      "Turn complex operational data into clear insight, better decisions, and measurable outcomes.",
  },
  {
    slug: "sales-executive",
    title: "Sales Executive",
    department: "Growth",
    location: "Bengaluru / Hybrid",
    type: "Full-time",
    experience: "2-4 years",
    skills: "B2B sales, CRM, communication",
    posted: "Aug 08, 2026",
    deadline: "Sep 20, 2026",
    description:
      "Help organizations discover the right technology approach for meaningful business problems.",
  },
  {
    slug: "marketing-executive",
    title: "Marketing Executive",
    department: "Marketing",
    location: "Remote / India",
    type: "Full-time",
    experience: "1-3 years",
    skills: "Content, campaigns, research, SEO",
    posted: "Aug 06, 2026",
    deadline: "Sep 20, 2026",
    description:
      "Shape how research-led technology is understood by the people and businesses it serves.",
  },
  {
    slug: "hr-executive",
    title: "HR Executive",
    department: "People",
    location: "Bengaluru / Hybrid",
    type: "Full-time",
    experience: "1-3 years",
    skills: "Recruitment, people operations, HRIS",
    posted: "Aug 04, 2026",
    deadline: "Sep 15, 2026",
    description:
      "Build thoughtful people operations for a growing research and engineering culture.",
  },
  {
    slug: "business-development-executive",
    title: "Business Development Executive",
    department: "Growth",
    location: "Mumbai / Hybrid",
    type: "Full-time",
    experience: "2-5 years",
    skills: "Prospecting, partnerships, CRM",
    posted: "Aug 02, 2026",
    deadline: "Sep 15, 2026",
    description:
      "Create strong partnerships and turn early conversations into useful, lasting work.",
  },
  {
    slug: "customer-relationship-executive",
    title: "Customer Relationship Executive",
    department: "Customer Success",
    location: "Bengaluru / Hybrid",
    type: "Full-time",
    experience: "1-3 years",
    skills: "Client success, communication, CRM",
    posted: "Jul 30, 2026",
    deadline: "Sep 10, 2026",
    description:
      "Help customers get sustained value from the systems we research, build, and deploy.",
  },
  {
    slug: "internships",
    title: "Internships",
    department: "All teams",
    location: "India",
    type: "Internship",
    experience: "Students / recent graduates",
    skills: "Curiosity, communication, fundamentals",
    posted: "Jul 28, 2026",
    deadline: "Oct 01, 2026",
    description:
      "Learn by contributing to real research, engineering, design, and business challenges.",
  },
];
const benefits = [
  [
    "01",
    "Career Growth",
    "Own meaningful work with a clear path to more responsibility.",
  ],
  [
    "02",
    "Learning & Development",
    "Time and support to deepen your craft and broaden your thinking.",
  ],
  [
    "03",
    "Innovation",
    "Research, experiment, and build ideas that deserve to exist.",
  ],
  [
    "04",
    "Collaborative Culture",
    "Work with generous people across research, engineering, and business.",
  ],
  [
    "05",
    "Professional Environment",
    "High standards, thoughtful communication, and room to do focused work.",
  ],
  [
    "06",
    "Recognition & Rewards",
    "Good work is visible, valued, and connected to real impact.",
  ],
];
const stages = [
  "Application Received",
  "Under Review",
  "Shortlisted",
  "Interview",
  "Selected / Rejected",
];

function go(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}
function usePublishedJobs() {
  const [publishedJobs, setPublishedJobs] = useState([]);
  useEffect(() => {
    fetch("/api/jobs?status=published")
      .then((response) => response.json())
      .then((data) => setPublishedJobs(data.jobs || []))
      .catch(() => setPublishedJobs([]));
  }, []);
  return publishedJobs;
}
function Footer() {
  return (
    <footer className="careers-footer">
      <a className="brand" href="/">
        <span className="brand-mark" />
        <span>MENTNEO</span>
      </a>
      <span>AI RESEARCH & DEVELOPMENT</span>
      <nav>
        <a href="/research">Research</a>
        <a href="/capabilities">Capabilities</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
      <small>© 2026 MENTNEO</small>
    </footer>
  );
}
function Shell({ children }) {
  return (
    <main className="careers-page">
      <InternalNavigation />
      {children}
      <Footer />
    </main>
  );
}
function JobCard({ job }) {
  return (
    <article className="job-card">
      <div className="job-card-top">
        <span>{job.department}</span>
        <span>{job.type}</span>
      </div>
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <div className="job-meta">
        <span>
          <b>Location</b>
          {job.location}
        </span>
        <span>
          <b>Experience</b>
          {job.experience}
        </span>
        <span>
          <b>Deadline</b>
          {job.deadline}
        </span>
      </div>
      <small className="job-skills">Skills: {job.skills}</small>
      <div className="job-actions">
        <a className="button button-primary" href={`/careers/${job.slug}`}>
          View Details <span>↗</span>
        </a>
        <a className="button button-ghost" href={`/careers/apply/${job.slug}`}>
          Apply Now <span>↗</span>
        </a>
      </div>
    </article>
  );
}
function CareersHome() {
  const [publishedJobs, setPublishedJobs] = useState([]);
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState("All departments");
  const [jobsLoading, setJobsLoading] = useState(true);
  const [jobsError, setJobsError] = useState("");
  useEffect(() => {
    fetch("/api/jobs?status=published")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load jobs");
        return response.json();
      })
      .then((data) => setPublishedJobs(data.jobs || []))
      .catch(() => setJobsError("Open positions are temporarily unavailable."))
      .finally(() => setJobsLoading(false));
  }, []);
  const filtered = useMemo(
    () =>
      publishedJobs.filter(
        (job) =>
          `${job.title} ${job.department} ${job.location}`
            .toLowerCase()
            .includes(query.toLowerCase()) &&
          (department === "All departments" || job.department === department),
      ),
    [publishedJobs, query, department],
  );
  const departments = [...new Set(publishedJobs.map((job) => job.department))];
  return (
    <Shell>
      <section className="careers-hero">
        <span className="section-label">10 / CAREERS</span>
        <div>
          <h1>
            Build Your
            <br />
            <em>Future With Us.</em>
          </h1>
          <p>
            Join our team and help build innovative solutions that create
            meaningful impact.
          </p>
          <div className="careers-actions">
            <a className="button button-primary" href="#open-positions">
              View Open Positions <span>↓</span>
            </a>
            <a
              className="button button-ghost"
              href="/careers/apply/internships"
            >
              Submit Your Resume <span>↗</span>
            </a>
          </div>
        </div>
        <div className="careers-hero-mark">
          MN
          <br />
          <small>PEOPLE / 001</small>
        </div>
      </section>
      <section className="careers-section why-join">
        <span className="section-label">WHY JOIN US</span>
        <div className="careers-heading">
          <h2>
            Do work
            <br />
            <span>that matters.</span>
          </h2>
          <p>
            We bring research, engineering, and business thinking together to
            solve problems worth solving.
          </p>
        </div>
        <div className="benefit-grid">
          {benefits.map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="careers-section positions" id="open-positions">
        <span className="section-label">
          OPEN POSITIONS / {filtered.length.toString().padStart(2, "0")}
        </span>
        <div className="positions-head">
          <div>
            <h2>
              Find your
              <br />
              <span>next challenge.</span>
            </h2>
          </div>
          <div className="filters">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search roles"
              aria-label="Search roles"
            />
            <select
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
              aria-label="Filter by department"
            >
              <option>All departments</option>
              {departments.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="jobs-grid">
          {jobsLoading ? (
            <p className="empty-state">Loading positions...</p>
          ) : jobsError ? (
            <p className="empty-state">{jobsError}</p>
          ) : filtered.length ? (
            filtered.map((job) => <JobCard job={job} key={job.slug} />)
          ) : (
            <p className="empty-state">No positions match your search.</p>
          )}
        </div>
      </section>
      <section className="careers-section status-callout">
        <div>
          <span className="section-label">APPLICATION STATUS</span>
          <h2>
            Already applied?
            <br />
            <span>Track your progress.</span>
          </h2>
        </div>
        <a className="button button-primary" href="/careers/status">
          Track application <span>↗</span>
        </a>
      </section>
    </Shell>
  );
}
function JobDetails({ job }) {
  const applicationPath = `/careers/apply/${job.slug}`;
  const openApplication = () => {
    sessionStorage.setItem("mentneoReturnJob", `/careers/${job.slug}`);
  };
  return (
    <Shell>
      <section className="job-hero">
        <span className="section-label">
          CAREERS / {job.department.toUpperCase()}
        </span>
        <h1>{job.title}</h1>
        <p>{job.description}</p>
        <div className="job-hero-meta">
          <span>{job.location}</span>
          <span>{job.type}</span>
          <span>{job.experience}</span>
        </div>
        <a
          className="button button-primary"
          href={applicationPath}
          onClick={openApplication}
        >
          Apply Now <span>↗</span>
        </a>
      </section>
      <section className="job-detail">
        <div>
          <span className="section-label">THE ROLE</span>
          <h2>
            Build with
            <br />
            <span>purpose.</span>
          </h2>
        </div>
        <div className="detail-copy">
          <h3>Job Description</h3>
          <p>
            {job.description} You will work closely with a multidisciplinary
            team to turn thoughtful ideas into useful, production-ready systems.
          </p>
          <h3>Responsibilities</h3>
          <ul>
            <li>Own high-quality work from discovery through delivery.</li>
            <li>Collaborate with research, engineering, and business teams.</li>
            <li>Document decisions and improve how the team works.</li>
            <li>
              Learn continuously and contribute to a high-trust environment.
            </li>
          </ul>
          <h3>Requirements & Skills</h3>
          <p>
            {job.skills}. Strong communication, practical judgment, and a
            genuine interest in solving real problems.
          </p>
          <h3>Benefits</h3>
          <p>
            Professional growth, learning support, meaningful ownership,
            flexible work, and a collaborative environment.
          </p>
          <div className="detail-facts">
            <span>
              <b>Location</b>
              {job.location}
            </span>
            <span>
              <b>Employment</b>
              {job.type}
            </span>
            <span>
              <b>Experience</b>
              {job.experience}
            </span>
            <span>
              <b>Deadline</b>
              {job.deadline}
            </span>
          </div>
          <a
            className="button button-primary"
            href={applicationPath}
            onClick={openApplication}
          >
            Apply Now <span>↗</span>
          </a>
        </div>
      </section>
    </Shell>
  );
}
function Application({ job }) {
  const [submitted, setSubmitted] = useState(null);
  const [error, setError] = useState("");
  const [dirty, setDirty] = useState(false);
  const [confirmLeave, setConfirmLeave] = useState(false);
  const detailPath = `/careers/${job.slug}`;
  function leaveApplication() {
    const returnPath = sessionStorage.getItem("mentneoReturnJob");
    const cameFromDetails = document.referrer
      ? new URL(document.referrer).pathname === detailPath
      : false;
    if (cameFromDetails && window.history.length > 1) {
      window.history.back();
    } else {
      go(returnPath === detailPath ? returnPath : detailPath);
    }
  }
  function requestLeave() {
    if (dirty) {
      setConfirmLeave(true);
      return;
    }
    leaveApplication();
  }
  function submit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const id = `MN-${Date.now().toString(36).toUpperCase()}`;
    const application = {
      id,
      position: job.title,
      email: form.get("email"),
      name: form.get("name"),
      status: stages[0],
      submitted: new Date().toLocaleDateString(),
    };
    const saved = JSON.parse(
      localStorage.getItem("mentneoApplications") || "[]",
    );
    localStorage.setItem(
      "mentneoApplications",
      JSON.stringify([application, ...saved]),
    );
    setSubmitted(id);
  }
  if (submitted)
    return (
      <Shell>
        <section className="success-panel">
          <span className="section-label">APPLICATION RECEIVED</span>
          <h1>
            Thank you,
            <br />
            <em>{submitted}</em>
          </h1>
          <p>
            Your application for {job.title} has been received. Save your
            Application ID to track its progress.
          </p>
          <a className="button button-primary" href="/careers/status">
            Track application <span>↗</span>
          </a>
        </section>
      </Shell>
    );
  return (
    <Shell>
      <section className="application-page">
        <button className="application-back" type="button" onClick={requestLeave}>
          ← Back to Job Details
        </button>
        <span className="section-label">APPLY / {job.title.toUpperCase()}</span>
        <h1>
          Start your
          <br />
          <em>next chapter.</em>
        </h1>
        <p>Tell us about your experience and the work you want to do.</p>
        {error && <p className="form-error">{error}</p>}
        <form
          onChange={() => setDirty(true)}
          onSubmit={(event) => {
            if (!event.currentTarget.checkValidity()) {
              setError("Please complete all required fields.");
              return;
            }
            submit(event);
          }}
        >
          <div className="form-grid">
            <input required name="name" placeholder="Full Name" />
            <input required type="email" name="email" placeholder="Email" />
            <input required name="phone" placeholder="Phone" />
            <input name="location" placeholder="Location" />
            <input required name="qualification" placeholder="Qualification" />
            <input name="experience" placeholder="Experience" />
            <input required name="skills" placeholder="Skills" />
            <input name="linkedin" placeholder="LinkedIn" />
            <input name="portfolio" placeholder="Portfolio / GitHub" />
            <label className="upload">
              Resume Upload
              <input
                required
                type="file"
                name="resume"
                accept=".pdf,.doc,.docx"
              />
            </label>
            <textarea
              required
              name="cover"
              placeholder="Cover Letter"
              rows="7"
            />
            <label className="consent">
              <input required type="checkbox" /> I consent to Mentneo storing
              and reviewing this application.
            </label>
          </div>
          <button className="button button-primary" type="submit">
            Submit application <span>↗</span>
          </button>
        </form>
        <button className="application-back application-back-bottom" type="button" onClick={requestLeave}>
          ← Back to Job Details
        </button>
        {confirmLeave && (
          <div className="leave-dialog" role="dialog" aria-modal="true" aria-labelledby="leave-title">
            <div className="leave-dialog-panel">
              <span className="section-label">UNSAVED APPLICATION</span>
              <h2 id="leave-title">Are you sure you want to leave?</h2>
              <p>Your entered information may be lost.</p>
              <div className="leave-dialog-actions">
                <button className="button button-ghost" type="button" onClick={() => setConfirmLeave(false)}>
                  Stay on Application
                </button>
                <button className="button button-primary" type="button" onClick={leaveApplication}>
                  Leave Application
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </Shell>
  );
}
function Status() {
  const [result, setResult] = useState(null);
  function search(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const application = JSON.parse(
      localStorage.getItem("mentneoApplications") || "[]",
    ).find(
      (item) =>
        item.id === data.get("id") &&
        item.email.toLowerCase() === data.get("email").toLowerCase(),
    );
    setResult(application || "missing");
  }
  return (
    <Shell>
      <section className="status-page">
        <span className="section-label">APPLICATION STATUS</span>
        <h1>
          Know where
          <br />
          <em>you stand.</em>
        </h1>
        <form onSubmit={search}>
          <input required name="id" placeholder="Application ID" />
          <input
            required
            type="email"
            name="email"
            placeholder="Email address"
          />
          <button className="button button-primary">
            Check status <span>↗</span>
          </button>
        </form>
        {result &&
          (result === "missing" ? (
            <p className="form-error">
              We could not find an application with those details.
            </p>
          ) : (
            <div className="status-result">
              <strong>{result.id}</strong>
              <p>
                {result.position} · {result.email}
              </p>
              <div className="status-steps">
                {stages.map((stage, index) => (
                  <span className={index === 0 ? "current" : ""} key={stage}>
                    <i>{index + 1}</i>
                    {stage}
                  </span>
                ))}
              </div>
            </div>
          ))}
      </section>
    </Shell>
  );
}
function Admin() {
  const [tab, setTab] = useState("applications");
  const [managedJobs, setManagedJobs] = useState(() => {
    const saved = localStorage.getItem("mentneoJobs");
    return saved ? JSON.parse(saved) : jobs.map((job) => ({ ...job, published: true, closed: false }));
  });
  const [applications, setApplications] = useState(() =>
    JSON.parse(localStorage.getItem("mentneoApplications") || "[]"),
  );
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("All statuses");
  const [editingJob, setEditingJob] = useState(null);
  const [jobForm, setJobForm] = useState({ title: "", department: "Engineering", location: "", type: "Full-time", experience: "", deadline: "", description: "", skills: "" });
  const saveJobs = (nextJobs) => {
    setManagedJobs(nextJobs);
    localStorage.setItem("mentneoJobs", JSON.stringify(nextJobs));
  };
  const filteredApplications = applications.filter((item) =>
    `${item.name} ${item.email} ${item.position}`.toLowerCase().includes(query.toLowerCase()) &&
    (status === "All statuses" || item.status === status),
  );
  const updateApplication = (id, changes) => {
    const nextApplications = applications.map((item) => item.id === id ? { ...item, ...changes } : item);
    setApplications(nextApplications);
    localStorage.setItem("mentneoApplications", JSON.stringify(nextApplications));
  };
  const startJobEdit = (job) => {
    setEditingJob(job.slug);
    setJobForm(job);
  };
  const saveJob = (event) => {
    event.preventDefault();
    const slug = editingJob || jobForm.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-");
    const nextJob = { ...jobForm, slug, published: editingJob ? Boolean(jobForm.published) : false, closed: Boolean(jobForm.closed) };
    saveJobs(editingJob ? managedJobs.map((job) => job.slug === editingJob ? nextJob : job) : [nextJob, ...managedJobs]);
    setEditingJob(null);
    setJobForm({ title: "", department: "Engineering", location: "", type: "Full-time", experience: "", deadline: "", description: "", skills: "" });
  };
  return (
    <Shell>
      <section className="admin-page">
        <span className="section-label">ADMIN / CAREERS</span>
        <h1>
          People who
          <br />
          <em>build the future.</em>
        </h1>
        <div className="admin-toolbar">
          <div className="admin-tabs">
            <button className={tab === "applications" ? "admin-tab active" : "admin-tab"} onClick={() => setTab("applications")}>Applications ({applications.length})</button>
            <button className={tab === "jobs" ? "admin-tab active" : "admin-tab"} onClick={() => setTab("jobs")}>Jobs ({managedJobs.length})</button>
          </div>
          <button
            className="button button-ghost"
            onClick={() =>
              setApplications(
                JSON.parse(localStorage.getItem("mentneoApplications") || "[]"),
              )
            }
          >
            Refresh <span>↻</span>
          </button>
        </div>
        {tab === "applications" ? <>
          <div className="admin-filters"><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search candidates" /><select value={status} onChange={(event) => setStatus(event.target.value)}><option>All statuses</option>{stages.map((stage) => <option key={stage}>{stage}</option>)}</select></div>
          <div className="admin-list">
            {filteredApplications.length ? filteredApplications.map((item) => <article className="admin-application" key={item.id}>
              <div><strong>{item.name}</strong><span>{item.position}</span><small>{item.email} · {item.id}</small></div>
              <select value={item.status} onChange={(event) => updateApplication(item.id, { status: event.target.value })}>{stages.map((stage) => <option key={stage}>{stage}</option>)}</select>
              <input value={item.notes || ""} onChange={(event) => updateApplication(item.id, { notes: event.target.value })} placeholder="Recruiter notes" />
              <input type="datetime-local" value={item.interview || ""} onChange={(event) => updateApplication(item.id, { interview: event.target.value })} aria-label="Interview schedule" />
            </article>) : <p className="empty-state">Applications will appear here after candidates submit the form.</p>}
          </div>
        </> : <>
          <form className="admin-job-form" onSubmit={saveJob}><strong>{editingJob ? "Edit job" : "Add a job"}</strong><div><input required value={jobForm.title} onChange={(event) => setJobForm({ ...jobForm, title: event.target.value })} placeholder="Job title" /><input required value={jobForm.department} onChange={(event) => setJobForm({ ...jobForm, department: event.target.value })} placeholder="Department" /><input required value={jobForm.location} onChange={(event) => setJobForm({ ...jobForm, location: event.target.value })} placeholder="Location" /><input required value={jobForm.experience} onChange={(event) => setJobForm({ ...jobForm, experience: event.target.value })} placeholder="Experience" /><input required type="date" value={jobForm.deadline} onChange={(event) => setJobForm({ ...jobForm, deadline: event.target.value })} /><input required value={jobForm.skills} onChange={(event) => setJobForm({ ...jobForm, skills: event.target.value })} placeholder="Required skills" /></div><textarea required value={jobForm.description} onChange={(event) => setJobForm({ ...jobForm, description: event.target.value })} placeholder="Short description" /><div><button className="button button-primary" type="submit">{editingJob ? "Save changes" : "Add job"} <span>↗</span></button>{editingJob && <button className="button button-ghost" type="button" onClick={() => setEditingJob(null)}>Cancel</button>}</div></form>
          <div className="admin-list admin-jobs">{managedJobs.map((job) => <article key={job.slug}><div><strong>{job.title}</strong><span>{job.department} · {job.location}</span><small>Deadline: {job.deadline}</small></div><b className={job.published && !job.closed ? "job-live" : "job-draft"}>{job.closed ? "Closed" : job.published ? "Published" : "Draft"}</b><button className="button button-ghost" onClick={() => saveJobs(managedJobs.map((item) => item.slug === job.slug ? { ...item, published: !item.published } : item))}>{job.published ? "Unpublish" : "Publish"}</button><button className="button button-ghost" onClick={() => saveJobs(managedJobs.map((item) => item.slug === job.slug ? { ...item, closed: !item.closed } : item))}>{job.closed ? "Reopen" : "Close"}</button><button className="button button-ghost" onClick={() => startJobEdit(job)}>Edit</button><button className="button button-ghost" onClick={() => saveJobs(managedJobs.filter((item) => item.slug !== job.slug))}>Delete</button></article>)}</div>
        </>}
      </section>
    </Shell>
  );
}
export default function CareersPage({ path }) {
  const slug = path.split("/").pop();
  const publishedJobs = usePublishedJobs();
  const availableJobs = publishedJobs.length ? publishedJobs : jobs;
  if (path === "/careers/status") return <Status />;
  if (path === "/admin/careers") return <Admin />;
  if (path.startsWith("/careers/apply/"))
    return (
      <Application job={availableJobs.find((item) => item.slug === slug) || availableJobs[0]} />
    );
  if (path.startsWith("/careers/"))
    return (
      <JobDetails job={availableJobs.find((item) => item.slug === slug) || availableJobs[0]} />
    );
  return <CareersHome />;
}
