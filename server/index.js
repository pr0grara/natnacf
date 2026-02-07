const express = require('express')
const cors = require('cors')
// const mongoose = require('mongoose')
require('dotenv').config()
const path = require('path')

const apiRoutes = require('./routes/api')

const app = express()
app.use(cors())
app.use(express.json())

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

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
