const express = require('express')
const { body, query, validationResult } = require('express-validator')
const router = express.Router()
// const User = require('../models/User')

// 🔒 TRAIL OF BITS SECURITY: Input validation middleware
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      error: 'Invalid input data',
      timestamp: new Date().toISOString()
      // Note: Not exposing detailed validation errors to prevent information leakage
    })
  }
  next()
}

// Secure API home endpoint
router.get('/', (req, res) => {
  res.json({
    status: 'operational',
    service: 'natna-api',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  })
})

// 🔒 SECURE USER ENDPOINTS (when MongoDB is enabled)
// Input validation for user queries
router.get('/users', [
  query('limit').optional().isInt({ min: 1, max: 50 }).withMessage('Limit must be between 1 and 50'),
  query('page').optional().isInt({ min: 0 }).withMessage('Page must be a non-negative integer'),
  handleValidationErrors
], async (req, res) => {
  try {
    // Note: MongoDB connection currently disabled for security
    res.status(503).json({ 
      error: 'Service temporarily unavailable',
      message: 'Database operations are disabled pending security review',
      timestamp: new Date().toISOString()
    })
    
    // When enabled, use validated and sanitized parameters:
    // const limit = Math.min(parseInt(req.query.limit) || 20, 50)
    // const page = parseInt(req.query.page) || 0
    // const users = await User.find().skip(page * limit).limit(limit).select('-__v')
    // res.json({ users, pagination: { page, limit } })
  } catch (err) {
    // Secure error handling - no stack traces
    console.error('User fetch error:', err.message)
    res.status(500).json({ 
      error: 'Internal server error',
      timestamp: new Date().toISOString()
    })
  }
})

// Input validation for user creation
router.post('/users', [
  body('name')
    .trim()
    .isLength({ min: 1, max: 100 })
    .withMessage('Name must be between 1 and 100 characters')
    .matches(/^[a-zA-Z\s\-']+$/)
    .withMessage('Name contains invalid characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Must be a valid email address')
    .isLength({ max: 320 })
    .withMessage('Email too long'),
  handleValidationErrors
], async (req, res) => {
  try {
    // Note: MongoDB connection currently disabled for security
    res.status(503).json({ 
      error: 'Service temporarily unavailable',
      message: 'Database operations are disabled pending security review',
      timestamp: new Date().toISOString()
    })
    
    // When enabled, use validated and sanitized data:
    // const { name, email } = req.body
    // const user = new User({ name, email })
    // await user.save()
    // res.status(201).json({ 
    //   user: user.toObject(),
    //   message: 'User created successfully'
    // })
  } catch (err) {
    // Secure error handling
    console.error('User creation error:', err.message)
    if (err.code === 11000) {
      // Duplicate key error
      res.status(409).json({ 
        error: 'Resource conflict',
        timestamp: new Date().toISOString()
      })
    } else {
      res.status(500).json({ 
        error: 'Internal server error',
        timestamp: new Date().toISOString()
      })
    }
  }
})

module.exports = router
