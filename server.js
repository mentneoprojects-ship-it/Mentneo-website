import { createServer } from 'node:http'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'
import { randomBytes } from 'node:crypto'

const root = dirname(fileURLToPath(import.meta.url))
const dataFile = join(root, 'data', 'jobs.json')
const sessions = new Map()
const sessionCookie = 'mentneo_admin_session'
mkdirSync(dirname(dataFile), { recursive: true })
if (!existsSync(dataFile)) writeFileSync(dataFile, '[]\n')

const readJobs = () => JSON.parse(readFileSync(dataFile, 'utf8'))
const writeJobs = (jobs) => writeFileSync(dataFile, `${JSON.stringify(jobs, null, 2)}\n`)
const send = (response, status, body) => {
  response.writeHead(status, { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
  response.end(JSON.stringify(body))
}
const requestBody = async (request) => {
  let body = ''
  for await (const chunk of request) body += chunk
  return body ? JSON.parse(body) : {}
}
const cookies = (request) => Object.fromEntries((request.headers.cookie || '').split(';').filter(Boolean).map((cookie) => cookie.trim().split('=')))
const isAuthenticated = (request) => {
  const token = cookies(request)[sessionCookie]
  return token && sessions.has(token)
}
const authRequired = (response) => send(response, 401, { error: 'Authentication required' })
const jsonRequest = (request) => request.headers['content-type']?.includes('application/json')

const api = createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    response.writeHead(204, { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET,POST,PATCH,DELETE,OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type' })
    return response.end()
  }
  const url = new URL(request.url, 'http://localhost:8787')
  if (url.pathname === '/api/auth/login' && request.method === 'POST') {
    if (!jsonRequest(request)) return send(response, 415, { error: 'Unsupported request' })
    const input = await requestBody(request)
    const identity = String(input.identity || '').trim().toLowerCase()
    const password = String(input.password || '')
    const configuredIdentity = String(process.env.ADMIN_EMAIL || '').trim().toLowerCase()
    const configuredPassword = process.env.ADMIN_PASSWORD || ''
    if (!configuredIdentity || !configuredPassword || identity !== configuredIdentity || password !== configuredPassword) return send(response, 401, { error: 'Invalid credentials' })
    const token = randomBytes(32).toString('hex')
    sessions.set(token, { identity: configuredIdentity, role: 'SUPER ADMIN', createdAt: Date.now() })
    response.writeHead(200, { 'Content-Type': 'application/json', 'Set-Cookie': `${sessionCookie}=${token}; HttpOnly; SameSite=Strict; Path=/; Max-Age=28800` })
    return response.end(JSON.stringify({ user: { identity: configuredIdentity, role: 'SUPER ADMIN' } }))
  }
  if (url.pathname === '/api/auth/logout' && request.method === 'POST') {
    const token = cookies(request)[sessionCookie]
    if (token) sessions.delete(token)
    response.writeHead(204, { 'Set-Cookie': `${sessionCookie}=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0` })
    return response.end()
  }
  if (url.pathname === '/api/auth/me' && request.method === 'GET') {
    const token = cookies(request)[sessionCookie]
    const user = token ? sessions.get(token) : null
    if (!user) return authRequired(response)
    return send(response, 200, { user })
  }
  if (!url.pathname.startsWith('/api/jobs')) return send(response, 404, { error: 'Not found' })
  try {
    const jobs = readJobs()
    if (request.method === 'GET') {
      const status = url.searchParams.get('status')
      const visibleJobs = status === 'published' ? jobs.filter((job) => job.status === 'published' && job.closed !== true) : jobs
      return send(response, 200, { jobs: visibleJobs })
    }
    if (!isAuthenticated(request)) return authRequired(response)
    if (request.method === 'POST' && url.pathname === '/api/jobs') {
      const input = await requestBody(request)
      const job = { ...input, id: `job_${Date.now()}`, slug: input.slug || input.title.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-'), status: 'draft', closed: false, createdAt: new Date().toISOString() }
      writeJobs([job, ...jobs])
      return send(response, 201, { job })
    }
    const id = url.pathname.split('/').pop()
    const index = jobs.findIndex((job) => job.id === id)
    if (index === -1) return send(response, 404, { error: 'Job not found' })
    if (request.method === 'PATCH') {
      const changes = await requestBody(request)
      jobs[index] = { ...jobs[index], ...changes }
      writeJobs(jobs)
      return send(response, 200, { job: jobs[index] })
    }
    if (request.method === 'DELETE') {
      writeJobs(jobs.filter((job) => job.id !== id))
      return send(response, 204, {})
    }
    return send(response, 405, { error: 'Method not allowed' })
  } catch (error) {
    return send(response, 400, { error: error.message })
  }
})

api.listen(8787, () => {
  const vite = spawn('npm.cmd', ['run', 'dev:client'], { cwd: root, stdio: 'inherit', shell: true })
  vite.on('exit', (code) => process.exit(code || 0))
  console.log('Jobs API: http://localhost:8787')
  console.log('Mentneo: http://localhost:5173')
})
