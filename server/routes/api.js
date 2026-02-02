const express = require('express')
const router = express.Router()
const User = require('../models/User')

router.get('/', async (req, res) => {
    res.send('api home').status(200).end();
});

router.get('/users', async (req, res) => {
  try {
    const users = await User.find().limit(20)
    res.json(users)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
})

router.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body
    const user = new User({ name, email })
    await user.save()
    res.status(201).json(user)
  } catch (err) {
    res.status(400).json({ error: err.message })
  }
})

module.exports = router
