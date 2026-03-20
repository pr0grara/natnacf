const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
// const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')

const apiRoutes = require('./routes/api')

const app = express()

// 🔒 TRAIL OF BITS SECURITY HARDENING - Localhost Development Mode
// Security headers with localhost-friendly CSP
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      scriptSrc: ["'self'", "'unsafe-eval'", "'unsafe-inline'", "https://js.stripe.com"],
      imgSrc: ["'self'", "data:", "https:", "blob:"],
      connectSrc: ["'self'", "ws:", "wss:", "https://api.stripe.com"],
      frameSrc: ["'self'", "https://js.stripe.com"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
      upgradeInsecureRequests: null, // Disable for local dev
    },
  },
  hsts: false,
  crossOriginOpenerPolicy: false,
  originAgentCluster: false
}))

// CORS restricted to authorized origins only
const allowedOrigins = [
  'https://natnacf.org',
  'https://www.natnacf.org',
  'https://testing.natnacf.org',
  'http://localhost:3002', // Local development
  'http://localhost:3001', // Alternative local port
  'http://localhost:3003', // Alternative local port
  'http://localhost:3004', // Alternative local port
  'http://localhost:3005', // Alternative local port
  'http://localhost:3006', // Alternative local port
  'http://localhost:4000', // Alternative local port
  'http://localhost:8888', // Alternative local port
  'http://localhost:8080', // Default port
  'http://127.0.0.1:3002', // Localhost alternative
  'http://127.0.0.1:3001', // Localhost alternative
  'http://127.0.0.1:3004', // Localhost alternative
  'http://127.0.0.1:3005', // Localhost alternative
  'http://127.0.0.1:3006', // Localhost alternative
  'http://127.0.0.1:4000', // Localhost alternative
  'http://127.0.0.1:8888', // Localhost alternative
  'http://192.168.88.2:3003', // Mac mini on local network
  'http://192.168.88.3:3003', // Outstanding on local network
  'http://192.168.88.127:3003', // JJ's Mac on local network
  'http://192.168.88.7:3004', // JJ's Mac actual IP
  'http://192.168.88.7:3005', // JJ's Mac alternate port
  'http://192.168.88.7:3003'  // JJ's Mac alternate port
]

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true)
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS policy'))
    }
  },
  credentials: true
}))

// Rate limiting to prevent abuse
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
})

app.use('/api', limiter)
app.use(express.json({ limit: '10mb' })) // Limit payload size

// const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/natna'
// mongoose.connect(MONGO_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err))

app.use('/api', apiRoutes)

// Serve built client static files from server/dist (after API routes)
const clientDist = path.join(__dirname, 'dist')
app.use(express.static(clientDist))

// Return client index.html for any non-API route (SPA fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'))
})

// 🔒 SECURE ERROR HANDLING
// Global error handler that doesn't leak sensitive information
app.use((err, req, res, next) => {
  // Log error details for debugging (server-side only)
  console.error(`[${new Date().toISOString()}] Error:`, {
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    url: req.url,
    method: req.method,
    ip: req.ip
  })

  // Send generic error response (no sensitive details)
  if (err.message === 'Not allowed by CORS policy') {
    res.status(403).json({ error: 'Access forbidden' })
  } else {
    res.status(500).json({ 
      error: 'Internal server error',
      timestamp: new Date().toISOString()
    })
  }
})

const PORT = process.env.PORT || 8080
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🔒 Secure server running on port ${PORT}`)
  console.log(`🌐 Local URL: http://localhost:${PORT}`)
  console.log(`🔗 Local URL Alt: http://127.0.0.1:${PORT}`)
  console.log(`🛡️  Security: Helmet (localhost mode), CORS, Rate Limiting enabled`)
  console.log(`🎯 Environment: ${process.env.NODE_ENV || 'development'}`)
})