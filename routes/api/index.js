const express = require('express')
const expense_router = require('./expense')

const router = express.Router()

// registering child routers
router.use('/expense', expense_router)

module.exports = router
