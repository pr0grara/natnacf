// Minimal app entrypoint for Elastic Beanstalk
// EB sometimes expects an app.js/server.js; require existing index.js
try {
  require('./index')
} catch (err) {
  console.error('Failed to start app from app.js:', err)
  process.exit(1)
}
