const express = require('express');

const router = express.Router();
const expense_controller = require('../../../controllers/api/expense');

// Define API routes
router.get('/', (req, res)=>{
    expense_controller.getAll(req, res);
});

module.exports = router;